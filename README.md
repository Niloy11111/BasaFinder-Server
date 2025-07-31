# BasaFinder Server

[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.21+-black.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.9+-green.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A robust and scalable backend solution for **BasaFinder**, a single-vendor e-commerce platform specializing in rental services. Built with modern technologies and best practices, this server provides comprehensive APIs for user management, product rentals, order processing, payment integration, and more.

## 🚀 Features

### Core Functionality
- **🔐 User Authentication & Authorization**: JWT-based authentication with refresh tokens, OTP verification, and password reset
- **🏠 Rental Product Management**: Complete CRUD operations for rental products with categories and specifications
- **📦 Order Management**: Comprehensive order processing with status tracking and history
- **💳 Payment Integration**: Secure payment processing with SSLCommerz integration
- **🎫 Coupon System**: Dynamic coupon management with validation and discount calculations
- **⭐ Review & Rating System**: User reviews and ratings for products
- **📧 Email Notifications**: Automated email services for various user actions
- **☁️ Cloud Storage**: Cloudinary integration for efficient image storage and retrieval

### Technical Features
- **🛡️ Security**: Bcrypt password hashing, JWT tokens, CORS protection
- **📊 Database**: MongoDB with Mongoose ODM for robust data management
- **🔧 TypeScript**: Full TypeScript support with strict type checking
- **🚀 Performance**: Optimized queries and efficient middleware
- **📝 Validation**: Zod schema validation for request/response handling
- **🐳 Docker Support**: Containerized deployment ready
- **☁️ Vercel Deployment**: Serverless deployment configuration

## 🛠️ Tech Stack

### Backend Technologies
- **Runtime**: Node.js 20+
- **Framework**: Express.js 4.21+
- **Language**: TypeScript 5.7+
- **Database**: MongoDB 8.9+ with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: Bcrypt
- **Validation**: Zod
- **File Upload**: Multer with Cloudinary storage
- **Email**: Nodemailer with Handlebars templates
- **Payment**: SSLCommerz integration
- **PDF Generation**: PDFKit

### Development Tools
- **Package Manager**: Yarn/NPM
- **Development Server**: ts-node-dev
- **Type Checking**: TypeScript compiler
- **Environment**: dotenv for configuration

### Deployment & Infrastructure
- **Containerization**: Docker
- **Serverless**: Vercel deployment
- **Environment**: Alpine Linux (Docker)

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **MongoDB** (Local installation or MongoDB Atlas)
- **Yarn** or **npm**
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Niloy11111/BasaFinder-Server.git
cd BasaFinder-Server
```

### 2. Install Dependencies

```bash
# Using Yarn (recommended)
yarn install

# Or using npm
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Environment
NODE_ENV=development
PORT=3001

# Database
DB_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<db_name>?retryWrites=true&w=majority"

# Security
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET="your_access_secret_key"
JWT_ACCESS_EXPIRES_IN=7d
JWT_REFRESH_SECRET="your_refresh_secret_key"
JWT_REFRESH_EXPIRES_IN=1y
JWT_OTP_SECRET="your_otp_secret_key"
JWT_PASS_RESET_SECRET="your_pass_reset_secret_key"
JWT_PASS_RESET_EXPIRES_IN=15m

# Cloudinary (Image Storage)
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

# Email Configuration
SENDER_EMAIL="your_email@gmail.com"
SENDER_APP_PASS="your_app_password"

# SSLCommerz Payment
STORE_NAME="teststore"
PAYMENT_API="https://sandbox.sslcommerz.com/gwprocess/v3/api.php"
VALIDATION_API="https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php"
STORE_ID="your_store_id"
STORE_PASSWORD="your_store_password"
VALIDATION_URL="your_validation_url"
SUCCESS_URL="your_success_url"
FAILED_URL="your_failed_url"
CANCEL_URL="your_cancel_url"
```

### 4. Run the Development Server

```bash
# Development mode with hot reload
yarn dev

# Or using npm
npm run dev
```

The server will start on `http://localhost:3001`

### 5. Verify Installation

Visit `http://localhost:3001` to see the welcome message and server details.

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build the project for production |
| `yarn start` | Start production server |
| `yarn create-module` | Create a new module with boilerplate |
| `yarn deploy` | Build and deploy to Vercel |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── config/          # Configuration files
│   ├── DB/             # Database models and connections
│   ├── errors/          # Custom error classes
│   ├── interface/       # TypeScript interfaces
│   ├── middleware/      # Express middleware
│   ├── modules/         # Feature modules
│   │   ├── auth/        # Authentication module
│   │   ├── user/        # User management
│   │   ├── rental/      # Rental products
│   │   ├── order/       # Order management
│   │   ├── payment/     # Payment processing
│   │   ├── review/      # Reviews and ratings
│   │   ├── coupon/      # Coupon system
│   │   └── sslcommerz/  # Payment gateway
│   ├── routes/          # Route definitions
│   ├── utils/           # Utility functions
│   └── builder/         # Query builders
├── lib/                 # External library configurations
├── templates/           # Email templates
├── scripts/             # Utility scripts
├── app.ts              # Express application setup
└── server.ts           # Server entry point
```

## 🔌 API Endpoints

### Base URL: `http://localhost:3001/api/v1`

| Module | Endpoints | Description |
|--------|-----------|-------------|
| **Auth** | `/auth/*` | Authentication, registration, password reset |
| **Users** | `/user/*` | User profile management |
| **Products** | `/product/*` | Rental product CRUD operations |
| **Orders** | `/order/*` | Order management and tracking |
| **Reviews** | `/review/*` | Product reviews and ratings |
| **Coupons** | `/coupon/*` | Coupon management and validation |
| **Payments** | `/ssl/*` | Payment processing and validation |
| **Applications** | `/application/*` | Application management |
| **Meta** | `/meta/*` | Metadata and configuration |

### Example API Usage

```bash
# Get server status
curl http://localhost:3001/

# User registration
curl -X POST http://localhost:3001/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }'

# Get products
curl http://localhost:3001/api/v1/product
```

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t basafinder-server .

# Run the container
docker run -p 3001:3001 --env-file .env basafinder-server
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  basafinder-server:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
    env_file:
      - .env
    depends_on:
      - mongodb
  
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

## ☁️ Vercel Deployment

This project is configured for Vercel deployment:

1. **Connect to Vercel**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add all required environment variables in Vercel dashboard
3. **Deploy**: Push to main branch for automatic deployment

```bash
# Manual deployment
yarn deploy
```

## 🔧 Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | Yes | Environment (development/production) |
| `PORT` | Yes | Server port (default: 3001) |
| `DB_URL` | Yes | MongoDB connection string |
| `JWT_*` | Yes | JWT configuration secrets |
| `CLOUDINARY_*` | Yes | Cloudinary credentials |
| `SENDER_EMAIL` | Yes | Email sender configuration |
| `SSL_*` | Yes | SSLCommerz payment configuration |

### Database Configuration

The application uses MongoDB with Mongoose ODM. Ensure your MongoDB instance is running and accessible.

### Security Features

- **CORS**: Configured for production client
- **Rate Limiting**: Built-in protection against abuse
- **Input Validation**: Zod schema validation
- **Password Security**: Bcrypt hashing with configurable salt rounds
- **JWT Security**: Separate secrets for different token types

## 🧪 Testing

```bash
# Run tests (when implemented)
yarn test

# Run tests with coverage
yarn test:coverage
```

## 📊 Monitoring & Logging

The application includes:

- **Graceful Shutdown**: Proper signal handling
- **Error Logging**: Comprehensive error tracking
- **Performance Monitoring**: Built-in performance metrics
- **Health Checks**: Server status endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Niloy** - [GitHub Profile](https://github.com/Niloy11111)

- **Email**: fahimfiroz@gmail.com
- **Website**: https://rentPoint.com

## 🙏 Acknowledgments

- Express.js community for the excellent framework
- MongoDB team for the robust database
- Vercel for seamless deployment
- All contributors and maintainers

## 📞 Support

For support and questions:

- **Email**: fahimfiroz@gmail.com
- **Issues**: [GitHub Issues](https://github.com/Niloy11111/BasaFinder-Server/issues)
- **Documentation**: [API Documentation](https://documenter.getpostman.com/view/28371413/2sAYQXpCyd)

---

**Made with ❤️ for the BasaFinder community**
