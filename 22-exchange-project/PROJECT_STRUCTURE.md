# Project Structure

This is the recommended monorepo structure for the Exchange Platform project.

```
exchange-platform/
│
├── apps/
│   ├── web/                          # Next.js Frontend Application
│   │   ├── src/
│   │   │   ├── app/                  # Next.js App Router
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/
│   │   │   │   │   └── signup/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── trade/
│   │   │   │   ├── portfolio/
│   │   │   │   ├── funds/
│   │   │   │   └── layout.tsx
│   │   │   ├── components/
│   │   │   │   ├── auth/
│   │   │   │   ├── trading/
│   │   │   │   ├── portfolio/
│   │   │   │   ├── charts/
│   │   │   │   └── common/
│   │   │   ├── lib/
│   │   │   │   ├── api-client.ts
│   │   │   │   ├── websocket.ts
│   │   │   │   └── utils.ts
│   │   │   ├── hooks/
│   │   │   ├── store/               # Recoil atoms/selectors
│   │   │   └── types/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   └── tsconfig.json
│   │
│   ├── api-gateway/                  # Main API Gateway
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── user.routes.ts
│   │   │   │   ├── order.routes.ts
│   │   │   │   ├── portfolio.routes.ts
│   │   │   │   ├── market.routes.ts
│   │   │   │   └── payment.routes.ts
│   │   │   ├── middleware/
│   │   │   │   ├── auth.middleware.ts
│   │   │   │   ├── ratelimit.middleware.ts
│   │   │   │   ├── validation.middleware.ts
│   │   │   │   └── error.middleware.ts
│   │   │   ├── services/            # Service clients
│   │   │   ├── config/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── user-service/                 # User Management Service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── user.controller.ts
│   │   │   │   └── kyc.controller.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   ├── kyc.service.ts
│   │   │   │   └── jwt.service.ts
│   │   │   ├── routes/
│   │   │   ├── middleware/
│   │   │   ├── models/              # Prisma client
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── order-engine/                 # Order Matching Engine
│   │   ├── src/
│   │   │   ├── engine/
│   │   │   │   ├── orderbook.ts
│   │   │   │   ├── matcher.ts
│   │   │   │   └── validator.ts
│   │   │   ├── controllers/
│   │   │   │   └── order.controller.ts
│   │   │   ├── services/
│   │   │   │   ├── order.service.ts
│   │   │   │   ├── trade.service.ts
│   │   │   │   ├── redis.service.ts
│   │   │   │   └── kafka.service.ts
│   │   │   ├── grpc/                # gRPC server
│   │   │   │   ├── proto/
│   │   │   │   └── server.ts
│   │   │   ├── websocket/
│   │   │   │   └── server.ts
│   │   │   ├── models/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── market-data/                  # Market Data Service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   │   └── market.controller.ts
│   │   │   ├── services/
│   │   │   │   ├── market-data.service.ts
│   │   │   │   ├── price-stream.service.ts
│   │   │   │   ├── redis-pubsub.service.ts
│   │   │   │   └── timescale.service.ts
│   │   │   ├── websocket/
│   │   │   │   └── server.ts
│   │   │   ├── integrations/        # External market data APIs
│   │   │   │   ├── nse.integration.ts
│   │   │   │   └── mock.integration.ts
│   │   │   ├── models/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── portfolio-service/            # Portfolio Management
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   │   ├── portfolio.controller.ts
│   │   │   │   ├── holdings.controller.ts
│   │   │   │   └── funds.controller.ts
│   │   │   ├── services/
│   │   │   │   ├── portfolio.service.ts
│   │   │   │   ├── pnl.service.ts
│   │   │   │   ├── holdings.service.ts
│   │   │   │   └── analytics.service.ts
│   │   │   ├── kafka/               # Kafka consumers
│   │   │   │   ├── trade.consumer.ts
│   │   │   │   └── payment.consumer.ts
│   │   │   ├── models/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── payment-service/              # Payment Processing
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   │   ├── payment.controller.ts
│   │   │   │   └── webhook.controller.ts
│   │   │   ├── services/
│   │   │   │   ├── payment.service.ts
│   │   │   │   ├── razorpay.service.ts
│   │   │   │   ├── verification.service.ts
│   │   │   │   └── kafka.service.ts
│   │   │   ├── models/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── notification-service/         # Notification Service
│       ├── src/
│       │   ├── services/
│       │   │   ├── email.service.ts
│       │   │   ├── sms.service.ts
│       │   │   ├── push.service.ts
│       │   │   └── template.service.ts
│       │   ├── kafka/               # Kafka consumers
│       │   │   ├── order.consumer.ts
│       │   │   ├── payment.consumer.ts
│       │   │   └── alert.consumer.ts
│       │   ├── integrations/
│       │   │   ├── sendgrid.ts
│       │   │   ├── twilio.ts
│       │   │   └── fcm.ts
│       │   ├── templates/
│       │   ├── utils/
│       │   └── index.ts
│       ├── Dockerfile
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── ui/                           # Shared React Components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   ├── Card/
│   │   │   │   ├── Modal/
│   │   │   │   ├── Table/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── database/                     # Prisma Schema & Migrations
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   ├── migrations/
│   │   │   └── seed.ts
│   │   ├── src/
│   │   │   └── client.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── types/                        # Shared TypeScript Types
│   │   ├── src/
│   │   │   ├── user.types.ts
│   │   │   ├── order.types.ts
│   │   │   ├── trade.types.ts
│   │   │   ├── portfolio.types.ts
│   │   │   ├── market.types.ts
│   │   │   ├── payment.types.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── config/                       # Shared Configurations
│   │   ├── eslint-config/
│   │   ├── typescript-config/
│   │   └── tailwind-config/
│   │
│   └── utils/                        # Shared Utilities
│       ├── src/
│       │   ├── validation/
│       │   ├── formatting/
│       │   ├── constants/
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── docker/
│   ├── docker-compose.dev.yml        # Development environment
│   ├── docker-compose.prod.yml       # Production environment
│   ├── nginx/
│   │   ├── nginx.conf
│   │   └── Dockerfile
│   ├── postgres/
│   │   └── init.sql
│   └── redis/
│       └── redis.conf
│
├── k8s/                              # Kubernetes Manifests
│   ├── namespaces/
│   │   └── exchange.yaml
│   ├── configmaps/
│   │   ├── api-gateway.yaml
│   │   ├── user-service.yaml
│   │   └── ...
│   ├── secrets/
│   │   └── secrets.yaml
│   ├── deployments/
│   │   ├── api-gateway.yaml
│   │   ├── user-service.yaml
│   │   ├── order-engine.yaml
│   │   ├── market-data.yaml
│   │   ├── portfolio-service.yaml
│   │   ├── payment-service.yaml
│   │   └── notification-service.yaml
│   ├── services/
│   │   ├── api-gateway.yaml
│   │   ├── user-service.yaml
│   │   └── ...
│   ├── ingress/
│   │   └── ingress.yaml
│   ├── hpa/                          # Horizontal Pod Autoscalers
│   │   ├── api-gateway-hpa.yaml
│   │   └── ...
│   ├── pvc/                          # Persistent Volume Claims
│   │   ├── postgres-pvc.yaml
│   │   └── redis-pvc.yaml
│   └── statefulsets/
│       ├── kafka.yaml
│       ├── postgres.yaml
│       └── redis.yaml
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Continuous Integration
│       ├── cd-staging.yml            # Deploy to Staging
│       ├── cd-production.yml         # Deploy to Production
│       └── tests.yml                 # Run Tests
│
├── scripts/
│   ├── setup.sh                      # Initial setup script
│   ├── seed-db.sh                    # Seed database
│   ├── deploy.sh                     # Deployment script
│   └── test.sh                       # Run all tests
│
├── docs/
│   ├── API.md                        # API Documentation
│   ├── ARCHITECTURE.md               # Architecture Overview
│   ├── DEPLOYMENT.md                 # Deployment Guide
│   ├── DEVELOPMENT.md                # Development Guide
│   └── SECURITY.md                   # Security Guidelines
│
├── monitoring/
│   ├── prometheus/
│   │   ├── prometheus.yml
│   │   └── alerts.yml
│   ├── grafana/
│   │   ├── dashboards/
│   │   │   ├── api-gateway.json
│   │   │   ├── order-engine.json
│   │   │   └── system-overview.json
│   │   └── datasources.yml
│   └── newrelic/
│       └── newrelic.js
│
├── tests/
│   ├── e2e/                          # End-to-End Tests
│   │   ├── auth.test.ts
│   │   ├── trading.test.ts
│   │   └── portfolio.test.ts
│   ├── integration/                  # Integration Tests
│   │   ├── order-flow.test.ts
│   │   └── payment-flow.test.ts
│   └── load/                         # Load Tests
│       ├── k6/
│       │   ├── order-load.js
│       │   └── websocket-load.js
│       └── artillery/
│           └── scenarios.yml
│
├── .env.example                      # Environment variables template
├── .gitignore
├── package.json                      # Root package.json
├── turbo.json                        # Turborepo configuration
├── tsconfig.json                     # Root TypeScript config
├── README.md
└── LICENSE

```

## Key Directories Explained

### `/apps`
Contains all standalone applications (microservices and frontend). Each app is independently deployable.

### `/packages`
Shared code that can be imported by multiple apps. This promotes code reuse and consistency.

### `/docker`
Docker-related files for containerization and local development environment.

### `/k8s`
Kubernetes manifests for deploying to production. Organized by resource type.

### `/.github/workflows`
CI/CD pipelines using GitHub Actions.

### `/monitoring`
Configuration for monitoring tools (Prometheus, Grafana, New Relic).

### `/tests`
All testing-related code, organized by test type.

## Package Dependencies

Each service will have dependencies like:

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "typescript": "^5.3.3",
    "@prisma/client": "^5.7.1",
    "zod": "^3.22.4",
    "jsonwebtoken": "^9.0.2",
    "redis": "^4.6.11",
    "kafkajs": "^2.2.4"
  }
}
```

## Getting Started

1. Clone the repository
2. Run `npm install` in the root directory
3. Copy `.env.example` to `.env` and fill in values
4. Run `docker-compose -f docker/docker-compose.dev.yml up -d`
5. Run `npm run dev` to start all services

## Development Workflow

1. Create a new branch for your feature
2. Make changes in the appropriate app/package
3. Run tests: `npm run test`
4. Commit and push
5. Create a pull request
6. CI/CD pipeline runs automatically
7. After approval, merge to main
8. Automatic deployment to staging
9. Manual approval for production deployment

---

This structure follows microservices best practices and makes it easy to:
- Scale individual services
- Deploy independently
- Share common code
- Maintain clear boundaries
- Test effectively
