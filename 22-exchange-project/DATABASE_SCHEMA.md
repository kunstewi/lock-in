# Database Schema Design

This document outlines the complete database schema for the Exchange Platform.

## Database Technologies

- **PostgreSQL**: Primary relational database for transactional data
- **TimescaleDB**: Extension of PostgreSQL for time-series market data
- **Redis**: In-memory cache and real-time data store
- **MongoDB**: Document store for logs and analytics

---

## PostgreSQL Schema (Prisma)

### 1. User Management

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
  phone             String?   @unique
  passwordHash      String
  firstName         String
  lastName          String
  dateOfBirth       DateTime?
  
  // Authentication
  emailVerified     Boolean   @default(false)
  phoneVerified     Boolean   @default(false)
  twoFactorEnabled  Boolean   @default(false)
  twoFactorSecret   String?
  
  // Status
  status            UserStatus @default(PENDING)
  role              UserRole   @default(USER)
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  lastLoginAt       DateTime?
  
  // Relations
  kyc               KYC?
  accounts          Account[]
  orders            Order[]
  trades            Trade[]
  watchlists        Watchlist[]
  notifications     Notification[]
  sessions          Session[]
  bankAccounts      BankAccount[]
  
  @@index([email])
  @@index([phone])
  @@map("users")
}

enum UserStatus {
  PENDING
  ACTIVE
  SUSPENDED
  CLOSED
}

enum UserRole {
  USER
  ADMIN
  SUPPORT
}

model KYC {
  id                String    @id @default(uuid())
  userId            String    @unique
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Personal Details
  panNumber         String    @unique
  aadharNumber      String?   @unique
  address           String
  city              String
  state             String
  pincode           String
  country           String    @default("India")
  
  // Documents
  panCardUrl        String?
  aadharCardUrl     String?
  photoUrl          String?
  signatureUrl      String?
  
  // Verification
  status            KYCStatus @default(PENDING)
  verifiedAt        DateTime?
  verifiedBy        String?
  rejectionReason   String?
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@index([userId])
  @@index([panNumber])
  @@map("kyc")
}

enum KYCStatus {
  PENDING
  SUBMITTED
  UNDER_REVIEW
  APPROVED
  REJECTED
}

model Session {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  token             String    @unique
  refreshToken      String?   @unique
  ipAddress         String?
  userAgent         String?
  
  expiresAt         DateTime
  createdAt         DateTime  @default(now())
  
  @@index([userId])
  @@index([token])
  @@map("sessions")
}

// ============================================
// ACCOUNT & FUNDS
// ============================================

model Account {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  accountNumber     String    @unique
  accountType       AccountType @default(TRADING)
  
  // Balances
  availableBalance  Decimal   @default(0) @db.Decimal(15, 2)
  blockedBalance    Decimal   @default(0) @db.Decimal(15, 2)
  totalBalance      Decimal   @default(0) @db.Decimal(15, 2)
  
  // Limits
  dailyWithdrawLimit Decimal  @default(100000) @db.Decimal(15, 2)
  
  // Status
  status            AccountStatus @default(ACTIVE)
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  // Relations
  transactions      Transaction[]
  holdings          Holding[]
  
  @@index([userId])
  @@index([accountNumber])
  @@map("accounts")
}

enum AccountType {
  TRADING
  DEMAT
}

enum AccountStatus {
  ACTIVE
  FROZEN
  CLOSED
}

model BankAccount {
  id                String    @id @default(uuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  accountNumber     String
  ifscCode          String
  accountHolderName String
  bankName          String
  branchName        String?
  
  isPrimary         Boolean   @default(false)
  isVerified        Boolean   @default(false)
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@index([userId])
  @@map("bank_accounts")
}

model Transaction {
  id                String    @id @default(uuid())
  accountId         String
  account           Account   @relation(fields: [accountId], references: [id], onDelete: Cascade)
  
  type              TransactionType
  amount            Decimal   @db.Decimal(15, 2)
  
  // Payment Gateway Details
  paymentId         String?   @unique
  paymentGateway    String?
  paymentMethod     String?
  
  // Status
  status            TransactionStatus @default(PENDING)
  
  // Metadata
  description       String?
  metadata          Json?
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  completedAt       DateTime?
  
  @@index([accountId])
  @@index([paymentId])
  @@index([createdAt])
  @@map("transactions")
}

enum TransactionType {
  DEPOSIT
  WITHDRAWAL
  TRADE_BUY
  TRADE_SELL
  DIVIDEND
  FEE
  REFUND
}

enum TransactionStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  CANCELLED
}

// ============================================
// TRADING
// ============================================

model Stock {
  id                String    @id @default(uuid())
  
  symbol            String    @unique
  name              String
  exchange          Exchange
  
  // Details
  isin              String?   @unique
  sector            String?
  industry          String?
  
  // Trading Info
  lotSize           Int       @default(1)
  tickSize          Decimal   @db.Decimal(10, 2)
  
  // Circuit Limits
  upperCircuit      Decimal?  @db.Decimal(10, 2)
  lowerCircuit      Decimal?  @db.Decimal(10, 2)
  
  // Status
  isActive          Boolean   @default(true)
  isTradeable       Boolean   @default(true)
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  // Relations
  orders            Order[]
  trades            Trade[]
  holdings          Holding[]
  watchlistItems    WatchlistItem[]
  
  @@index([symbol])
  @@index([exchange])
  @@map("stocks")
}

enum Exchange {
  NSE
  BSE
  NFO  // NSE Futures & Options
  MCX  // Multi Commodity Exchange
}

model Order {
  id                String    @id @default(uuid())
  
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  stockId           String
  stock             Stock     @relation(fields: [stockId], references: [id])
  
  // Order Details
  orderType         OrderType
  side              OrderSide
  quantity          Int
  price             Decimal?  @db.Decimal(10, 2)
  triggerPrice      Decimal?  @db.Decimal(10, 2)
  
  // Execution
  filledQuantity    Int       @default(0)
  averagePrice      Decimal?  @db.Decimal(10, 2)
  
  // Status
  status            OrderStatus @default(PENDING)
  validity          OrderValidity @default(DAY)
  
  // Product Type
  productType       ProductType @default(INTRADAY)
  
  // Metadata
  orderNumber       String    @unique
  exchangeOrderId   String?
  parentOrderId     String?
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  executedAt        DateTime?
  cancelledAt       DateTime?
  
  // Relations
  trades            Trade[]
  
  @@index([userId])
  @@index([stockId])
  @@index([orderNumber])
  @@index([status])
  @@index([createdAt])
  @@map("orders")
}

enum OrderType {
  MARKET
  LIMIT
  STOP_LOSS
  STOP_LOSS_MARKET
}

enum OrderSide {
  BUY
  SELL
}

enum OrderStatus {
  PENDING
  OPEN
  PARTIALLY_FILLED
  FILLED
  CANCELLED
  REJECTED
  EXPIRED
}

enum OrderValidity {
  DAY
  IOC  // Immediate or Cancel
  GTC  // Good Till Cancelled
}

enum ProductType {
  INTRADAY
  DELIVERY
  MARGIN
}

model Trade {
  id                String    @id @default(uuid())
  
  orderId           String
  order             Order     @relation(fields: [orderId], references: [id], onDelete: Cascade)
  
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  stockId           String
  stock             Stock     @relation(fields: [stockId], references: [id])
  
  // Trade Details
  side              OrderSide
  quantity          Int
  price             Decimal   @db.Decimal(10, 2)
  
  // Charges
  brokerage         Decimal   @default(0) @db.Decimal(10, 2)
  stt               Decimal   @default(0) @db.Decimal(10, 2)
  exchangeFee       Decimal   @default(0) @db.Decimal(10, 2)
  gst               Decimal   @default(0) @db.Decimal(10, 2)
  stampDuty         Decimal   @default(0) @db.Decimal(10, 2)
  totalCharges      Decimal   @default(0) @db.Decimal(10, 2)
  
  // Net Amount
  netAmount         Decimal   @db.Decimal(15, 2)
  
  // Metadata
  tradeNumber       String    @unique
  exchangeTradeId   String?
  
  // Timestamps
  executedAt        DateTime  @default(now())
  settledAt         DateTime?
  
  @@index([orderId])
  @@index([userId])
  @@index([stockId])
  @@index([tradeNumber])
  @@index([executedAt])
  @@map("trades")
}

// ============================================
// PORTFOLIO
// ============================================

model Holding {
  id                String    @id @default(uuid())
  
  accountId         String
  account           Account   @relation(fields: [accountId], references: [id], onDelete: Cascade)
  
  stockId           String
  stock             Stock     @relation(fields: [stockId], references: [id])
  
  // Quantity
  quantity          Int
  availableQuantity Int
  blockedQuantity   Int       @default(0)
  
  // Cost
  averagePrice      Decimal   @db.Decimal(10, 2)
  investedAmount    Decimal   @db.Decimal(15, 2)
  
  // P&L (calculated fields, updated periodically)
  currentPrice      Decimal?  @db.Decimal(10, 2)
  currentValue      Decimal?  @db.Decimal(15, 2)
  pnl               Decimal?  @db.Decimal(15, 2)
  pnlPercentage     Decimal?  @db.Decimal(10, 2)
  
  // Timestamps
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  @@unique([accountId, stockId])
  @@index([accountId])
  @@index([stockId])
  @@map("holdings")
}

// ============================================
// WATCHLIST
// ============================================

model Watchlist {
  id                String    @id @default(uuid())
  
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  name              String
  isDefault         Boolean   @default(false)
  
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  
  items             WatchlistItem[]
  
  @@index([userId])
  @@map("watchlists")
}

model WatchlistItem {
  id                String    @id @default(uuid())
  
  watchlistId       String
  watchlist         Watchlist @relation(fields: [watchlistId], references: [id], onDelete: Cascade)
  
  stockId           String
  stock             Stock     @relation(fields: [stockId], references: [id])
  
  position          Int       @default(0)
  
  createdAt         DateTime  @default(now())
  
  @@unique([watchlistId, stockId])
  @@index([watchlistId])
  @@map("watchlist_items")
}

// ============================================
// NOTIFICATIONS
// ============================================

model Notification {
  id                String    @id @default(uuid())
  
  userId            String
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  type              NotificationType
  title             String
  message           String
  
  // Metadata
  data              Json?
  
  // Status
  isRead            Boolean   @default(false)
  readAt            DateTime?
  
  createdAt         DateTime  @default(now())
  
  @@index([userId])
  @@index([createdAt])
  @@map("notifications")
}

enum NotificationType {
  ORDER_EXECUTED
  ORDER_CANCELLED
  PAYMENT_RECEIVED
  WITHDRAWAL_PROCESSED
  PRICE_ALERT
  MARGIN_CALL
  ACCOUNT_UPDATE
  SYSTEM_ALERT
}

// ============================================
// AUDIT LOG
// ============================================

model AuditLog {
  id                String    @id @default(uuid())
  
  userId            String?
  action            String
  entityType        String
  entityId          String?
  
  // Details
  changes           Json?
  ipAddress         String?
  userAgent         String?
  
  createdAt         DateTime  @default(now())
  
  @@index([userId])
  @@index([entityType, entityId])
  @@index([createdAt])
  @@map("audit_logs")
}
```

---

## TimescaleDB Schema (Market Data)

```sql
-- Create TimescaleDB extension
CREATE EXTENSION IF NOT EXISTS timescaledb;

-- OHLCV Data (Candlestick data)
CREATE TABLE market_ohlcv (
  time          TIMESTAMPTZ NOT NULL,
  symbol        VARCHAR(20) NOT NULL,
  exchange      VARCHAR(10) NOT NULL,
  
  open          DECIMAL(10, 2) NOT NULL,
  high          DECIMAL(10, 2) NOT NULL,
  low           DECIMAL(10, 2) NOT NULL,
  close         DECIMAL(10, 2) NOT NULL,
  volume        BIGINT NOT NULL,
  
  interval      VARCHAR(10) NOT NULL, -- 1m, 5m, 15m, 1h, 1d
  
  PRIMARY KEY (time, symbol, interval)
);

-- Convert to hypertable
SELECT create_hypertable('market_ohlcv', 'time');

-- Create indexes
CREATE INDEX idx_market_ohlcv_symbol ON market_ohlcv (symbol, time DESC);
CREATE INDEX idx_market_ohlcv_interval ON market_ohlcv (interval, time DESC);

-- Tick Data (Real-time price updates)
CREATE TABLE market_ticks (
  time          TIMESTAMPTZ NOT NULL,
  symbol        VARCHAR(20) NOT NULL,
  
  last_price    DECIMAL(10, 2) NOT NULL,
  volume        BIGINT NOT NULL,
  bid_price     DECIMAL(10, 2),
  ask_price     DECIMAL(10, 2),
  bid_quantity  INT,
  ask_quantity  INT,
  
  PRIMARY KEY (time, symbol)
);

-- Convert to hypertable
SELECT create_hypertable('market_ticks', 'time');

-- Create indexes
CREATE INDEX idx_market_ticks_symbol ON market_ticks (symbol, time DESC);

-- Market Depth (Order Book Snapshots)
CREATE TABLE market_depth (
  time          TIMESTAMPTZ NOT NULL,
  symbol        VARCHAR(20) NOT NULL,
  
  bids          JSONB NOT NULL, -- Array of [price, quantity]
  asks          JSONB NOT NULL, -- Array of [price, quantity]
  
  PRIMARY KEY (time, symbol)
);

-- Convert to hypertable
SELECT create_hypertable('market_depth', 'time');

-- Retention policy (keep data for 1 year)
SELECT add_retention_policy('market_ohlcv', INTERVAL '1 year');
SELECT add_retention_policy('market_ticks', INTERVAL '90 days');
SELECT add_retention_policy('market_depth', INTERVAL '30 days');

-- Continuous aggregates for performance
CREATE MATERIALIZED VIEW market_ohlcv_1h
WITH (timescaledb.continuous) AS
SELECT
  time_bucket('1 hour', time) AS time,
  symbol,
  exchange,
  first(open, time) AS open,
  max(high) AS high,
  min(low) AS low,
  last(close, time) AS close,
  sum(volume) AS volume
FROM market_ohlcv
WHERE interval = '1m'
GROUP BY time_bucket('1 hour', time), symbol, exchange;

-- Refresh policy
SELECT add_continuous_aggregate_policy('market_ohlcv_1h',
  start_offset => INTERVAL '3 hours',
  end_offset => INTERVAL '1 hour',
  schedule_interval => INTERVAL '1 hour');
```

---

## Redis Data Structures

### 1. Order Book (Sorted Sets)

```
# Buy orders (sorted by price DESC, then timestamp ASC)
ZADD orderbook:RELIANCE:buy <score> <order_json>

# Sell orders (sorted by price ASC, then timestamp ASC)
ZADD orderbook:RELIANCE:sell <score> <order_json>

# Score calculation:
# For buy: (MAX_PRICE - price) * 1e10 + timestamp
# For sell: price * 1e10 + timestamp
```

### 2. Real-time Prices (Hashes)

```
# Current price data
HSET price:RELIANCE last_price 2450.50
HSET price:RELIANCE change 12.30
HSET price:RELIANCE change_percent 0.50
HSET price:RELIANCE volume 1234567
HSET price:RELIANCE timestamp 1703673600000
```

### 3. User Sessions (Strings with TTL)

```
# Session token
SET session:<token> <user_id> EX 86400
```

### 4. Rate Limiting (Strings with TTL)

```
# API rate limit
INCR ratelimit:<user_id>:<endpoint>
EXPIRE ratelimit:<user_id>:<endpoint> 60
```

### 5. Market Data Pub/Sub

```
# Publish price updates
PUBLISH market:RELIANCE <price_data_json>

# Subscribe to updates
SUBSCRIBE market:RELIANCE
SUBSCRIBE market:TCS
```

---

## MongoDB Collections (Logs & Analytics)

### 1. Application Logs

```javascript
{
  _id: ObjectId,
  timestamp: ISODate,
  level: "info" | "warn" | "error",
  service: "api-gateway",
  message: "User login successful",
  userId: "uuid",
  metadata: {
    ipAddress: "192.168.1.1",
    userAgent: "Mozilla/5.0...",
    requestId: "req-123"
  }
}
```

### 2. Analytics Events

```javascript
{
  _id: ObjectId,
  timestamp: ISODate,
  event: "order_placed",
  userId: "uuid",
  properties: {
    symbol: "RELIANCE",
    orderType: "LIMIT",
    quantity: 10,
    price: 2450.50
  },
  sessionId: "session-123"
}
```

---

## Database Indexes Strategy

### High Priority Indexes

```sql
-- Users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);

-- Orders (most queried)
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
CREATE INDEX idx_orders_stock_status ON orders(stock_id, status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- Trades
CREATE INDEX idx_trades_user_executed ON trades(user_id, executed_at DESC);
CREATE INDEX idx_trades_stock_executed ON trades(stock_id, executed_at DESC);

-- Holdings
CREATE INDEX idx_holdings_account ON holdings(account_id);

-- Transactions
CREATE INDEX idx_transactions_account_created ON transactions(account_id, created_at DESC);
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

---

## Backup Strategy

1. **PostgreSQL**: Daily automated backups using AWS RDS automated backups
2. **TimescaleDB**: Continuous archival to S3
3. **Redis**: RDB snapshots every 6 hours + AOF for durability
4. **MongoDB**: Daily backups to S3

---

This schema is designed for:
- ✅ High performance (proper indexing)
- ✅ Data integrity (foreign keys, constraints)
- ✅ Scalability (partitioning ready)
- ✅ Audit trail (audit logs)
- ✅ Real-time capabilities (Redis integration)
