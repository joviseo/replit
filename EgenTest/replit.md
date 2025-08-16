# Overview

This is a personality testing application called "TETO-EGEN" that analyzes users' personalities based on testosterone and estrogen-related traits. The app is a full-stack web application built with React frontend and Express backend, featuring a cyberpunk aesthetic and Korean language support. Users take a 20-question personality test to determine their type among four categories (테토남, 에겐남, 테토녀, 에겐녀) and receive detailed results about their personality traits, dating style, and compatibility.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the main UI framework
- **Vite** as the build tool and development server with hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and API data fetching
- **shadcn/ui** component library built on Radix UI primitives for consistent UI components
- **Tailwind CSS** with custom cyberpunk color scheme and Korean typography support
- **Custom hooks** for test state management and mobile responsiveness

## Backend Architecture
- **Express.js** server with TypeScript support
- **Modular route structure** with separation of concerns between routes and storage layers
- **Memory-based storage** with an interface-driven design allowing for easy database migration
- **Middleware** for request logging, JSON parsing, and error handling
- **Development-only Vite integration** for serving the frontend in development mode

## Data Storage Solutions
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- **Neon Database** serverless PostgreSQL for production deployment
- **In-memory storage** as the current implementation with a clean interface for future database integration
- **Database schemas** defined for users and test results with proper relationships and validation

## Authentication and Authorization
- **Session-based authentication** setup (currently using memory storage but ready for PostgreSQL sessions)
- **User registration and login** infrastructure in place
- **Session management** configured for production deployment

## External Dependencies
- **Neon Database** - Serverless PostgreSQL database hosting
- **Google Fonts** - Korean (Noto Sans KR) and English typography
- **Replit** - Development and deployment platform with integrated tools
- **shadcn/ui** - Component library ecosystem
- **Radix UI** - Headless component primitives for accessibility
- **Tailwind CSS** - Utility-first CSS framework
- **Drizzle Kit** - Database migration and introspection tools