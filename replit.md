# Replit.md - getBadger Web Application

## Overview

This is a full-stack web application for getBadger, a platform that provides tools for affiliate marketers and online shoppers. The application features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data storage and Drizzle ORM for database management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with Radix UI components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Authentication**: Passport.js with local strategy and session management
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based session store

### Database Architecture
- **ORM**: Drizzle ORM with TypeScript
- **Driver**: Neon Database serverless driver
- **Schema**: Located in `shared/schema.ts` for type sharing between frontend and backend
- **Migration**: Drizzle-kit for schema migrations

## Key Components

### Database Schema
- **Users**: Authentication and user management
- **Contacts**: Contact form submissions
- **Newsletters**: Newsletter subscriptions
- **Sessions**: User session management

### Authentication System
- Session-based authentication using Passport.js
- Password hashing with Node.js crypto module
- Secure session management with PostgreSQL store
- Protected routes for authenticated users

### API Routes
- **POST /api/contacts**: Handle contact form submissions
- **POST /api/newsletters**: Handle newsletter subscriptions
- **GET /api/user**: Get current user information
- **GET /api/dashboard**: Dashboard data for authenticated users

### UI Components
- Shared component library using Radix UI primitives
- Form components with validation
- Feature cards, testimonials, and tool showcases
- Responsive design with mobile-first approach

## Data Flow

1. **Frontend Request**: React components make API calls using TanStack Query
2. **Backend Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM performs database operations
4. **Response**: Data flows back through the same chain with proper error handling

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router)
- TailwindCSS for styling
- Radix UI for accessible components
- TanStack Query for data fetching
- React Hook Form + Zod for form validation
- Lucide React for icons

### Backend Dependencies
- Express.js for server framework
- Passport.js for authentication
- Drizzle ORM for database operations
- Neon Database for PostgreSQL connection
- Session management with connect-pg-simple

### Development Dependencies
- Vite for frontend tooling
- TypeScript for type safety
- ESBuild for backend bundling
- Drizzle-kit for database migrations

## Deployment Strategy

### Build Process
- Frontend: Vite builds optimized production bundle
- Backend: ESBuild bundles server code for production
- Database: Drizzle-kit manages schema migrations

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Session secret configuration
- Development vs production environment handling

### File Structure
- `/client`: Frontend React application
- `/server`: Backend Express application
- `/shared`: Shared TypeScript types and schemas
- `/migrations`: Database migration files
- `/dist`: Built production files

The application follows modern web development practices with strong type safety, proper authentication, and a clean separation of concerns between frontend and backend.