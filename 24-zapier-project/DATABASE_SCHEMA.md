# Database Schema Design - Workflow Automation Platform

This document outlines the complete database schema for the Workflow Automation Platform.

## Database Technologies

- **PostgreSQL**: Primary relational database
- **Redis**: Caching, job queues, distributed locks
- **MongoDB**: Execution logs and analytics

---

## PostgreSQL Schema (Prisma)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================
// USER MANAGEMENT
// ============================================

model User {
  id                String    @id @default(uuid())
  email             String    @unique
  passwordHash      String
  firstName         String
  lastName          String
  
  // Status
  emailVerified     Boolean   @default(false)
  isActive          Boolean   @default(true)
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  lastLoginAt       DateTime?
  
  // Relations
  workspaceMemberships WorkspaceMember[]
  connections       Connection[]
  workflows         Workflow[]
  apiKeys           ApiKey[]
  
  @@index([email])
  @@map("users")
}

model Workspace {
  id                String    @id @default(uuid())
  name              String
  slug              String    @unique
  
  // Plan
  plan              Plan      @default(FREE)
  
  // Limits
  maxWorkflows      Int       @default(5)
  maxExecutions     Int       @default(1000)
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  // Relations
  members           WorkspaceMember[]
  workflows         Workflow[]
  connections       Connection[]
  
  @@index([slug])
  @@map("workspaces")
}

enum Plan {
  FREE
  STARTER
  PROFESSIONAL
  ENTERPRISE
}

model WorkspaceMember {
  id                String    @id @default(uuid())
  
  workspaceId       String
  workspace         Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)
  
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  role              WorkspaceRole @default(MEMBER)
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@unique([workspaceId, userId])
  @@index([workspaceId])
  @@index([userId])
  @@map("workspace_members")
}

enum WorkspaceRole {
  OWNER
  ADMIN
  MEMBER
  VIEWER
}

model ApiKey {
  id                String    @id @default(uuid())
  
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  name              String
  key               String    @unique
  
  // Permissions
  scopes            String[]  // ['workflows:read', 'workflows:write', 'executions:read']
  
  // Status
  isActive          Boolean   @default(true)
  
  // Usage
  lastUsedAt        DateTime?
  
  // Expiration
  expiresAt         DateTime?
  
  createdAt         DateTime  @default(now())
  
  @@index([userId])
  @@index([key])
  @@map("api_keys")
}

// ============================================
// INTEGRATIONS
// ============================================

model Integration {
  id                String    @id // e.g., 'gmail', 'slack'
  name              String
  description       String
  icon              String    // URL to icon
  category          String    // 'communication', 'storage', etc.
  
  // Auth
  authType          AuthType
  
  // Status
  isActive          Boolean   @default(true)
  isPopular         Boolean   @default(false)
  
  // Metadata
  docsUrl           String?
  websiteUrl        String?
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  // Relations
  connections       Connection[]
  triggers          Trigger[]
  actions           Action[]
  
  @@map("integrations")
}

enum AuthType {
  OAUTH2
  API_KEY
  BASIC
  NONE
}

model Connection {
  id                String    @id @default(uuid())
  
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  workspaceId       String
  workspace         Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)
  
  integrationId     String
  integration       Integration @relation(fields: [integrationId], references: [id])
  
  name              String    // User-friendly name
  
  // Credentials (encrypted)
  credentials       Json      // Encrypted OAuth tokens or API keys
  
  // OAuth specific
  accessToken       String?
  refreshToken      String?
  expiresAt         DateTime?
  
  // Status
  isActive          Boolean   @default(true)
  lastTestedAt      DateTime?
  testStatus        TestStatus @default(PENDING)
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  // Relations
  workflows         Workflow[]
  
  @@index([userId])
  @@index([workspaceId])
  @@index([integrationId])
  @@map("connections")
}

enum TestStatus {
  PENDING
  SUCCESS
  FAILED
}

model Trigger {
  id                String    @id // e.g., 'gmail.new_email'
  
  integrationId     String
  integration       Integration @relation(fields: [integrationId], references: [id])
  
  name              String
  description       String
  type              TriggerType
  
  // Configuration schema
  configSchema      Json      // JSON Schema for configuration
  
  // Polling specific
  pollingInterval   Int?      // in seconds
  
  isActive          Boolean   @default(true)
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@index([integrationId])
  @@map("triggers")
}

enum TriggerType {
  WEBHOOK
  POLLING
  SCHEDULE
  MANUAL
}

model Action {
  id                String    @id // e.g., 'gmail.send_email'
  
  integrationId     String
  integration       Integration @relation(fields: [integrationId], references: [id])
  
  name              String
  description       String
  
  // Input/Output schemas
  inputSchema       Json      // JSON Schema for input
  outputSchema      Json      // JSON Schema for output
  
  isActive          Boolean   @default(true)
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@index([integrationId])
  @@map("actions")
}

// ============================================
// WORKFLOWS
// ============================================

model Workflow {
  id                String    @id @default(uuid())
  
  workspaceId       String
  workspace         Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)
  
  userId            String    // Creator
  user              User      @relation(fields: [userId], references: [id])
  
  name              String
  description       String?
  
  // Trigger
  triggerType       TriggerType
  triggerConfig     Json      // Trigger configuration
  
  connectionId      String?   // For integrations requiring connection
  connection        Connection? @relation(fields: [connectionId], references: [id])
  
  // Workflow definition
  steps             Json      // Array of workflow steps
  
  // Status
  isActive          Boolean   @default(false)
  isDraft           Boolean   @default(true)
  
  // Version
  version           Int       @default(1)
  
  // Metadata
  tags              String[]
  folder            String?
  
  // Stats
  totalExecutions   Int       @default(0)
  successfulExecutions Int    @default(0)
  failedExecutions  Int       @default(0)
  lastExecutedAt    DateTime?
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  publishedAt       DateTime?
  
  // Relations
  executions        WorkflowExecution[]
  versions          WorkflowVersion[]
  
  @@index([workspaceId])
  @@index([userId])
  @@index([isActive])
  @@map("workflows")
}

model WorkflowVersion {
  id                String    @id @default(uuid())
  
  workflowId        String
  workflow          Workflow  @relation(fields: [workflowId], references: [id], onDelete: Cascade)
  
  version           Int
  
  // Snapshot of workflow at this version
  name              String
  description       String?
  triggerType       TriggerType
  triggerConfig     Json
  steps             Json
  
  // Metadata
  changeDescription String?
  
  createdAt         DateTime  @default(now())
  createdBy         String    // User ID
  
  @@unique([workflowId, version])
  @@index([workflowId])
  @@map("workflow_versions")
}

model WorkflowExecution {
  id                String    @id @default(uuid())
  
  workflowId        String
  workflow          Workflow  @relation(fields: [workflowId], references: [id], onDelete: Cascade)
  
  // Execution details
  status            ExecutionStatus @default(PENDING)
  
  // Trigger data
  triggerData       Json
  
  // Execution context
  context           Json      @default("{}")
  
  // Results
  result            Json?
  error             String?
  
  // Timing
  startedAt         DateTime?
  completedAt       DateTime?
  duration          Int?      // in milliseconds
  
  // Retry
  retryCount        Int       @default(0)
  maxRetries        Int       @default(3)
  
  createdAt         DateTime  @default(now())
  
  // Relations
  stepExecutions    StepExecution[]
  
  @@index([workflowId])
  @@index([status])
  @@index([createdAt])
  @@map("workflow_executions")
}

enum ExecutionStatus {
  PENDING
  RUNNING
  SUCCESS
  FAILED
  CANCELLED
  TIMEOUT
}

model StepExecution {
  id                String    @id @default(uuid())
  
  executionId       String
  execution         WorkflowExecution @relation(fields: [executionId], references: [id], onDelete: Cascade)
  
  stepId            String    // Step ID from workflow definition
  stepType          String    // 'action', 'condition', 'loop', etc.
  
  // Execution details
  status            ExecutionStatus @default(PENDING)
  
  // Input/Output
  input             Json
  output            Json?
  error             String?
  
  // Timing
  startedAt         DateTime?
  completedAt       DateTime?
  duration          Int?      // in milliseconds
  
  // Retry
  retryCount        Int       @default(0)
  
  createdAt         DateTime  @default(now())
  
  @@index([executionId])
  @@map("step_executions")
}

// ============================================
// WEBHOOKS
// ============================================

model Webhook {
  id                String    @id @default(uuid())
  
  workflowId        String
  
  // Webhook details
  url               String    @unique
  token             String    @unique
  
  // Security
  secret            String?   // For signature verification
  
  // Status
  isActive          Boolean   @default(true)
  
  // Stats
  totalCalls        Int       @default(0)
  lastCalledAt      DateTime?
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@index([workflowId])
  @@index([token])
  @@map("webhooks")
}

// ============================================
// TEMPLATES
// ============================================

model WorkflowTemplate {
  id                String    @id @default(uuid())
  
  name              String
  description       String
  category          String
  
  // Template definition
  triggerType       TriggerType
  triggerConfig     Json
  steps             Json
  
  // Metadata
  icon              String?
  tags              String[]
  isPopular         Boolean   @default(false)
  usageCount        Int       @default(0)
  
  // Required integrations
  requiredIntegrations String[]
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@map("workflow_templates")
}

// ============================================
// AUDIT LOG
// ============================================

model AuditLog {
  id                String    @id @default(uuid())
  
  userId            String?
  workspaceId       String?
  
  action            String    // 'workflow.created', 'workflow.executed', etc.
  entityType        String    // 'workflow', 'connection', etc.
  entityId          String?
  
  // Details
  changes           Json?
  metadata          Json?
  
  // Request info
  ipAddress         String?
  userAgent         String?
  
  createdAt         DateTime  @default(now())
  
  @@index([userId])
  @@index([workspaceId])
  @@index([entityType, entityId])
  @@index([createdAt])
  @@map("audit_logs")
}
```

---

## Redis Data Structures

### 1. Job Queue (Bull)

```
# Workflow execution queue
bull:workflow-execution:waiting
bull:workflow-execution:active
bull:workflow-execution:completed
bull:workflow-execution:failed

# Delayed jobs (scheduled workflows)
bull:workflow-execution:delayed
```

### 2. Distributed Locks

```
# Prevent duplicate cron executions
SET lock:workflow:{workflowId}:schedule "1" EX 60 NX
```

### 3. Rate Limiting

```
# Per-integration rate limiting
INCR ratelimit:{integrationId}:{connectionId}
EXPIRE ratelimit:{integrationId}:{connectionId} 60
```

### 4. Caching

```
# Cache integration metadata
HSET integration:{integrationId} name "Gmail"
HSET integration:{integrationId} authType "OAUTH2"
EXPIRE integration:{integrationId} 3600

# Cache workflow definitions
SET workflow:{workflowId} <json_data>
EXPIRE workflow:{workflowId} 300
```

### 5. Real-time Updates (Pub/Sub)

```
# Publish execution updates
PUBLISH execution:{executionId} <status_update>

# Subscribe to execution updates
SUBSCRIBE execution:{executionId}
```

---

## MongoDB Collections (Execution Logs)

### 1. Execution Logs

```javascript
{
  _id: ObjectId,
  executionId: "uuid",
  workflowId: "uuid",
  timestamp: ISODate,
  level: "info" | "warn" | "error",
  message: "Step 'Send Email' completed successfully",
  stepId: "step-123",
  metadata: {
    duration: 1234,
    input: {...},
    output: {...}
  }
}

// Indexes
db.execution_logs.createIndex({ executionId: 1, timestamp: 1 });
db.execution_logs.createIndex({ workflowId: 1, timestamp: -1 });
```

### 2. Analytics Events

```javascript
{
  _id: ObjectId,
  timestamp: ISODate,
  event: "workflow_executed",
  workspaceId: "uuid",
  workflowId: "uuid",
  properties: {
    status: "success",
    duration: 5000,
    stepCount: 3,
    integrations: ["gmail", "slack"]
  }
}

// Indexes
db.analytics_events.createIndex({ workspaceId: 1, timestamp: -1 });
db.analytics_events.createIndex({ event: 1, timestamp: -1 });
```

### 3. Integration Usage

```javascript
{
  _id: ObjectId,
  timestamp: ISODate,
  integrationId: "gmail",
  connectionId: "uuid",
  action: "send_email",
  workspaceId: "uuid",
  success: true,
  duration: 1234,
  rateLimit: {
    remaining: 99,
    limit: 100,
    reset: ISODate
  }
}

// Indexes
db.integration_usage.createIndex({ integrationId: 1, timestamp: -1 });
db.integration_usage.createIndex({ workspaceId: 1, timestamp: -1 });
```

---

## Database Indexes Strategy

### High Priority Indexes

```sql
-- Workflows (most queried)
CREATE INDEX idx_workflows_workspace_active ON workflows(workspace_id, is_active);
CREATE INDEX idx_workflows_user ON workflows(user_id);
CREATE INDEX idx_workflows_last_executed ON workflows(last_executed_at DESC);

-- Executions
CREATE INDEX idx_executions_workflow_created ON workflow_executions(workflow_id, created_at DESC);
CREATE INDEX idx_executions_status ON workflow_executions(status);
CREATE INDEX idx_executions_created ON workflow_executions(created_at DESC);

-- Connections
CREATE INDEX idx_connections_workspace ON connections(workspace_id);
CREATE INDEX idx_connections_user_integration ON connections(user_id, integration_id);

-- Audit logs
CREATE INDEX idx_audit_workspace_created ON audit_logs(workspace_id, created_at DESC);
CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
```

---

## Data Migration Scripts

```bash
# Initial migration
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Seed database
npx prisma db seed
```

### Seed Data

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create integrations
  await prisma.integration.createMany({
    data: [
      {
        id: 'gmail',
        name: 'Gmail',
        description: 'Send and receive emails',
        icon: 'https://...',
        category: 'communication',
        authType: 'OAUTH2',
        isActive: true,
        isPopular: true
      },
      {
        id: 'slack',
        name: 'Slack',
        description: 'Send messages to Slack',
        icon: 'https://...',
        category: 'communication',
        authType: 'OAUTH2',
        isActive: true,
        isPopular: true
      },
      // ... more integrations
    ]
  });
  
  // Create triggers
  await prisma.trigger.createMany({
    data: [
      {
        id: 'gmail.new_email',
        integrationId: 'gmail',
        name: 'New Email',
        description: 'Triggers when a new email is received',
        type: 'POLLING',
        pollingInterval: 300,
        configSchema: {
          type: 'object',
          properties: {
            label: { type: 'string' },
            from: { type: 'string' }
          }
        }
      }
    ]
  });
  
  // Create actions
  await prisma.action.createMany({
    data: [
      {
        id: 'gmail.send_email',
        integrationId: 'gmail',
        name: 'Send Email',
        description: 'Send an email via Gmail',
        inputSchema: {
          type: 'object',
          required: ['to', 'subject', 'body'],
          properties: {
            to: { type: 'string', format: 'email' },
            subject: { type: 'string' },
            body: { type: 'string' }
          }
        },
        outputSchema: {
          type: 'object',
          properties: {
            messageId: { type: 'string' }
          }
        }
      }
    ]
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

---

## Backup Strategy

1. **PostgreSQL**: Daily automated backups using AWS RDS automated backups
2. **Redis**: RDB snapshots every 6 hours + AOF for durability
3. **MongoDB**: Daily backups to S3

---

## Data Retention Policy

- **Workflow Executions**: 90 days (configurable per plan)
- **Execution Logs**: 30 days
- **Audit Logs**: 1 year
- **Analytics Events**: 1 year (aggregated)

---

This schema is designed for:
- ✅ High performance (proper indexing)
- ✅ Data integrity (foreign keys, constraints)
- ✅ Scalability (partitioning ready)
- ✅ Audit trail (comprehensive logging)
- ✅ Multi-tenancy (workspace isolation)
