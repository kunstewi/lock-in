# API Specification - Exchange Platform

This document provides a comprehensive overview of all REST APIs and WebSocket endpoints.

## Base URL

- **Development**: `http://localhost:3000/api/v1`
- **Staging**: `https://staging-api.exchange.com/api/v1`
- **Production**: `https://api.exchange.com/api/v1`

---

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

---

## 🔐 Authentication APIs

### 1. Register User

**Endpoint**: `POST /auth/register`

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+919876543210"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "data": {
    "userId": "uuid-123",
    "email": "user@example.com",
    "emailVerificationSent": true
  }
}
```

---

### 2. Login

**Endpoint**: `POST /auth/login`

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid-123",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "status": "ACTIVE",
      "kycStatus": "APPROVED"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 3600
    }
  }
}
```

---

### 3. Refresh Token

**Endpoint**: `POST /auth/refresh`

**Request Body**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}
```

---

### 4. Logout

**Endpoint**: `POST /auth/logout`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 👤 User APIs

### 1. Get User Profile

**Endpoint**: `GET /users/profile`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid-123",
    "email": "user@example.com",
    "phone": "+919876543210",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-01-01",
    "status": "ACTIVE",
    "kycStatus": "APPROVED",
    "createdAt": "2024-01-01T00:00:00Z",
    "lastLoginAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 2. Update Profile

**Endpoint**: `PUT /users/profile`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+919876543210",
  "dateOfBirth": "1990-01-01"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "uuid-123",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+919876543210"
  }
}
```

---

### 3. Submit KYC

**Endpoint**: `POST /users/kyc`

**Headers**: `Authorization: Bearer <token>`

**Request Body** (multipart/form-data):
```
panNumber: ABCDE1234F
aadharNumber: 123456789012
address: 123 Main St
city: Mumbai
state: Maharashtra
pincode: 400001
country: India
panCard: <file>
aadharCard: <file>
photo: <file>
signature: <file>
```

**Response** (201 Created):
```json
{
  "success": true,
  "message": "KYC submitted successfully",
  "data": {
    "kycId": "uuid-456",
    "status": "SUBMITTED",
    "submittedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 4. Get KYC Status

**Endpoint**: `GET /users/kyc`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid-456",
    "status": "APPROVED",
    "panNumber": "ABCDE1234F",
    "address": "123 Main St, Mumbai",
    "submittedAt": "2024-01-15T10:30:00Z",
    "verifiedAt": "2024-01-16T14:20:00Z"
  }
}
```

---

## 📊 Market Data APIs

### 1. Get Stock List

**Endpoint**: `GET /market/stocks`

**Query Parameters**:
- `exchange` (optional): NSE, BSE
- `sector` (optional): Technology, Banking, etc.
- `search` (optional): Search by symbol or name
- `page` (default: 1)
- `limit` (default: 50)

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "stocks": [
      {
        "id": "uuid-789",
        "symbol": "RELIANCE",
        "name": "Reliance Industries Ltd",
        "exchange": "NSE",
        "sector": "Energy",
        "lastPrice": 2450.50,
        "change": 12.30,
        "changePercent": 0.50,
        "volume": 1234567,
        "isActive": true
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 2000,
      "totalPages": 40
    }
  }
}
```

---

### 2. Get Stock Details

**Endpoint**: `GET /market/stocks/:symbol`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid-789",
    "symbol": "RELIANCE",
    "name": "Reliance Industries Ltd",
    "exchange": "NSE",
    "isin": "INE002A01018",
    "sector": "Energy",
    "industry": "Oil & Gas",
    "lastPrice": 2450.50,
    "open": 2438.20,
    "high": 2455.80,
    "low": 2435.00,
    "close": 2438.20,
    "change": 12.30,
    "changePercent": 0.50,
    "volume": 1234567,
    "upperCircuit": 2682.00,
    "lowerCircuit": 2194.40,
    "marketCap": 16500000000000,
    "pe": 28.5,
    "eps": 86.0,
    "isActive": true
  }
}
```

---

### 3. Get Historical Data (OHLCV)

**Endpoint**: `GET /market/stocks/:symbol/history`

**Query Parameters**:
- `interval`: 1m, 5m, 15m, 1h, 1d (required)
- `from`: Start timestamp (required)
- `to`: End timestamp (required)

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "symbol": "RELIANCE",
    "interval": "1d",
    "candles": [
      {
        "time": "2024-01-15T00:00:00Z",
        "open": 2438.20,
        "high": 2455.80,
        "low": 2435.00,
        "close": 2450.50,
        "volume": 1234567
      }
    ]
  }
}
```

---

### 4. Get Market Depth

**Endpoint**: `GET /market/stocks/:symbol/depth`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "symbol": "RELIANCE",
    "timestamp": "2024-01-15T10:30:00Z",
    "bids": [
      { "price": 2450.00, "quantity": 100, "orders": 5 },
      { "price": 2449.50, "quantity": 250, "orders": 8 },
      { "price": 2449.00, "quantity": 150, "orders": 3 }
    ],
    "asks": [
      { "price": 2450.50, "quantity": 120, "orders": 6 },
      { "price": 2451.00, "quantity": 200, "orders": 7 },
      { "price": 2451.50, "quantity": 180, "orders": 4 }
    ]
  }
}
```

---

## 📈 Order APIs

### 1. Place Order

**Endpoint**: `POST /orders`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "symbol": "RELIANCE",
  "orderType": "LIMIT",
  "side": "BUY",
  "quantity": 10,
  "price": 2450.00,
  "productType": "DELIVERY",
  "validity": "DAY"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "message": "Order placed successfully",
  "data": {
    "id": "uuid-order-123",
    "orderNumber": "ORD20240115001",
    "symbol": "RELIANCE",
    "orderType": "LIMIT",
    "side": "BUY",
    "quantity": 10,
    "price": 2450.00,
    "status": "OPEN",
    "productType": "DELIVERY",
    "validity": "DAY",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 2. Get All Orders

**Endpoint**: `GET /orders`

**Headers**: `Authorization: Bearer <token>`

**Query Parameters**:
- `status` (optional): OPEN, FILLED, CANCELLED
- `symbol` (optional): Filter by symbol
- `from` (optional): Start date
- `to` (optional): End date
- `page` (default: 1)
- `limit` (default: 50)

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "uuid-order-123",
        "orderNumber": "ORD20240115001",
        "symbol": "RELIANCE",
        "orderType": "LIMIT",
        "side": "BUY",
        "quantity": 10,
        "filledQuantity": 10,
        "price": 2450.00,
        "averagePrice": 2449.80,
        "status": "FILLED",
        "createdAt": "2024-01-15T10:30:00Z",
        "executedAt": "2024-01-15T10:30:15Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 150,
      "totalPages": 3
    }
  }
}
```

---

### 3. Get Order Details

**Endpoint**: `GET /orders/:orderId`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid-order-123",
    "orderNumber": "ORD20240115001",
    "symbol": "RELIANCE",
    "orderType": "LIMIT",
    "side": "BUY",
    "quantity": 10,
    "filledQuantity": 10,
    "price": 2450.00,
    "averagePrice": 2449.80,
    "status": "FILLED",
    "productType": "DELIVERY",
    "validity": "DAY",
    "createdAt": "2024-01-15T10:30:00Z",
    "executedAt": "2024-01-15T10:30:15Z",
    "trades": [
      {
        "id": "uuid-trade-456",
        "tradeNumber": "TRD20240115001",
        "quantity": 10,
        "price": 2449.80,
        "executedAt": "2024-01-15T10:30:15Z"
      }
    ]
  }
}
```

---

### 4. Cancel Order

**Endpoint**: `DELETE /orders/:orderId`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Order cancelled successfully",
  "data": {
    "id": "uuid-order-123",
    "orderNumber": "ORD20240115001",
    "status": "CANCELLED",
    "cancelledAt": "2024-01-15T10:35:00Z"
  }
}
```

---

### 5. Modify Order

**Endpoint**: `PUT /orders/:orderId`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "quantity": 15,
  "price": 2445.00
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Order modified successfully",
  "data": {
    "id": "uuid-order-123",
    "orderNumber": "ORD20240115001",
    "quantity": 15,
    "price": 2445.00,
    "status": "OPEN",
    "updatedAt": "2024-01-15T10:32:00Z"
  }
}
```

---

## 💼 Portfolio APIs

### 1. Get Holdings

**Endpoint**: `GET /portfolio/holdings`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "holdings": [
      {
        "id": "uuid-holding-789",
        "symbol": "RELIANCE",
        "name": "Reliance Industries Ltd",
        "quantity": 50,
        "availableQuantity": 50,
        "blockedQuantity": 0,
        "averagePrice": 2400.00,
        "investedAmount": 120000.00,
        "currentPrice": 2450.50,
        "currentValue": 122525.00,
        "pnl": 2525.00,
        "pnlPercentage": 2.10,
        "dayChange": 12.30,
        "dayChangePercent": 0.50
      }
    ],
    "summary": {
      "totalInvested": 500000.00,
      "currentValue": 525000.00,
      "totalPnl": 25000.00,
      "totalPnlPercentage": 5.00,
      "dayPnl": 1500.00,
      "dayPnlPercentage": 0.29
    }
  }
}
```

---

### 2. Get Portfolio Summary

**Endpoint**: `GET /portfolio/summary`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "availableBalance": 50000.00,
    "blockedBalance": 5000.00,
    "totalBalance": 55000.00,
    "investedAmount": 500000.00,
    "currentValue": 525000.00,
    "totalPnl": 25000.00,
    "totalPnlPercentage": 5.00,
    "dayPnl": 1500.00,
    "dayPnlPercentage": 0.29,
    "totalAssets": 580000.00
  }
}
```

---

### 3. Get Positions (Intraday)

**Endpoint**: `GET /portfolio/positions`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "positions": [
      {
        "symbol": "TCS",
        "name": "Tata Consultancy Services",
        "quantity": 10,
        "buyPrice": 3500.00,
        "currentPrice": 3520.00,
        "pnl": 200.00,
        "pnlPercentage": 0.57
      }
    ]
  }
}
```

---

### 4. Get P&L Report

**Endpoint**: `GET /portfolio/pnl`

**Headers**: `Authorization: Bearer <token>`

**Query Parameters**:
- `from`: Start date (required)
- `to`: End date (required)
- `type`: realized, unrealized, all (default: all)

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "realizedPnl": 15000.00,
    "unrealizedPnl": 10000.00,
    "totalPnl": 25000.00,
    "trades": [
      {
        "symbol": "INFY",
        "buyDate": "2024-01-10",
        "sellDate": "2024-01-15",
        "quantity": 20,
        "buyPrice": 1450.00,
        "sellPrice": 1480.00,
        "pnl": 600.00,
        "pnlPercentage": 2.07
      }
    ]
  }
}
```

---

## 💳 Payment APIs

### 1. Initiate Deposit

**Endpoint**: `POST /payments/deposit`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "amount": 10000.00,
  "method": "UPI"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "transactionId": "uuid-txn-123",
    "paymentId": "pay_razorpay_123",
    "amount": 10000.00,
    "currency": "INR",
    "status": "PENDING",
    "paymentUrl": "https://razorpay.com/checkout/pay_razorpay_123"
  }
}
```

---

### 2. Verify Payment

**Endpoint**: `POST /payments/verify`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "paymentId": "pay_razorpay_123",
  "signature": "signature_string"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "data": {
    "transactionId": "uuid-txn-123",
    "amount": 10000.00,
    "status": "COMPLETED",
    "completedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 3. Initiate Withdrawal

**Endpoint**: `POST /payments/withdraw`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "amount": 5000.00,
  "bankAccountId": "uuid-bank-456"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Withdrawal request submitted",
  "data": {
    "transactionId": "uuid-txn-456",
    "amount": 5000.00,
    "status": "PROCESSING",
    "estimatedTime": "2-3 business days"
  }
}
```

---

### 4. Get Transaction History

**Endpoint**: `GET /payments/transactions`

**Headers**: `Authorization: Bearer <token>`

**Query Parameters**:
- `type` (optional): DEPOSIT, WITHDRAWAL
- `status` (optional): PENDING, COMPLETED, FAILED
- `from` (optional): Start date
- `to` (optional): End date
- `page` (default: 1)
- `limit` (default: 50)

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "id": "uuid-txn-123",
        "type": "DEPOSIT",
        "amount": 10000.00,
        "status": "COMPLETED",
        "paymentMethod": "UPI",
        "createdAt": "2024-01-15T10:30:00Z",
        "completedAt": "2024-01-15T10:30:30Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 25,
      "totalPages": 1
    }
  }
}
```

---

## 🔔 Notification APIs

### 1. Get Notifications

**Endpoint**: `GET /notifications`

**Headers**: `Authorization: Bearer <token>`

**Query Parameters**:
- `isRead` (optional): true, false
- `type` (optional): ORDER_EXECUTED, PAYMENT_RECEIVED, etc.
- `page` (default: 1)
- `limit` (default: 20)

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "uuid-notif-123",
        "type": "ORDER_EXECUTED",
        "title": "Order Executed",
        "message": "Your order for 10 shares of RELIANCE has been executed at ₹2449.80",
        "isRead": false,
        "createdAt": "2024-01-15T10:30:15Z"
      }
    ],
    "unreadCount": 5,
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "totalPages": 3
    }
  }
}
```

---

### 2. Mark as Read

**Endpoint**: `PUT /notifications/:notificationId/read`

**Headers**: `Authorization: Bearer <token>`

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Notification marked as read"
}
```

---

## 🌐 WebSocket APIs

### Connection

**URL**: `wss://api.exchange.com/ws`

**Authentication**: Send token in first message
```json
{
  "type": "auth",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Subscribe to Market Data

**Client → Server**:
```json
{
  "type": "subscribe",
  "channel": "market",
  "symbols": ["RELIANCE", "TCS", "INFY"]
}
```

**Server → Client** (Price Updates):
```json
{
  "type": "price_update",
  "symbol": "RELIANCE",
  "data": {
    "lastPrice": 2450.50,
    "change": 12.30,
    "changePercent": 0.50,
    "volume": 1234567,
    "timestamp": 1705315815000
  }
}
```

---

### Subscribe to Order Updates

**Client → Server**:
```json
{
  "type": "subscribe",
  "channel": "orders"
}
```

**Server → Client** (Order Updates):
```json
{
  "type": "order_update",
  "data": {
    "orderId": "uuid-order-123",
    "orderNumber": "ORD20240115001",
    "status": "FILLED",
    "filledQuantity": 10,
    "averagePrice": 2449.80,
    "executedAt": "2024-01-15T10:30:15Z"
  }
}
```

---

### Unsubscribe

**Client → Server**:
```json
{
  "type": "unsubscribe",
  "channel": "market",
  "symbols": ["RELIANCE"]
}
```

---

## ❌ Error Responses

### Standard Error Format

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "quantity",
        "message": "Quantity must be greater than 0"
      }
    ]
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Invalid request data |
| `UNAUTHORIZED` | 401 | Missing or invalid token |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `CONFLICT` | 409 | Resource already exists |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable |

---

## 📝 Rate Limits

| Endpoint Category | Limit | Window |
|------------------|-------|--------|
| Authentication | 5 requests | 1 minute |
| Market Data | 100 requests | 1 minute |
| Order Placement | 10 requests | 1 second |
| Portfolio | 60 requests | 1 minute |
| Payments | 10 requests | 1 minute |
| General | 100 requests | 1 minute |

---

## 🔐 Security Headers

All responses include:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
```

---

This API specification follows RESTful principles and industry best practices for trading platforms.
