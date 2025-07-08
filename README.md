# React Router + tRPC + Drizzle Boilerplate

This is a full-stack TypeScript monorepo boilerplate using React Router, tRPC, and Drizzle ORM. It provides a modern, type-safe development experience from frontend to backend.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: A [React Router](https://reactrouter.com/) app with server-side rendering capabilities
- `mobile`: An [Expo](https://expo.dev/) app for iOS and Android
- `@repo/api`: A [tRPC](https://trpc.io/) API package that provides type-safe API endpoints
- `@repo/database`: A [Drizzle ORM](https://orm.drizzle.team/) package for database operations with PostgreSQL
- `@repo/typescript-config`: Shared TypeScript configurations used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/) for end-to-end type safety.

### Utilities

This boilerplate has several tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for linting and formatting
- [Turborepo](https://turbo.build/repo) for monorepo management
- [tRPC](https://trpc.io/) for end-to-end typesafe APIs
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- [React Router](https://reactrouter.com/) for routing with server-side rendering
- [TanStack Query](https://tanstack.com/query) for data fetching and caching

### Getting Started

#### Prerequisites

- Node.js 18 or later
- PostgreSQL database

#### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
POSTGRES_URL=postgresql://username:password@localhost:5432/your_database
```

### Build

To build all apps and packages, run the following command:

```sh
# Install dependencies
npm install

# Build all packages
npm run build
```

You can build a specific package by using a filter:

```sh
npm run build -- --filter=web
```

### Develop

To develop all apps and packages, run the following command:

```sh
npm run dev
```

You can develop a specific app by using a filter:

```sh
# Run only the web app
npm run dev -- --filter=web

# Run only the mobile app
npm run dev -- --filter=mobile
```

### Type Checking

To run type checking across all packages:

```sh
npm run check-types
```

### Project Structure

```
├── apps/
│   ├── mobile/         # Expo mobile app
│   └── web/            # React Router web app
├── packages/
│   ├── api/            # tRPC API definitions
│   ├── database/       # Drizzle ORM and database schema
│   └── typescript-config/ # Shared TypeScript configurations
```

### How It Works

#### Web App (React Router)

The web app uses React Router for routing with server-side rendering capabilities. It communicates with the backend using tRPC for type-safe API calls.

- **Server Components**: Handle data fetching on the server using tRPC
- **Client Components**: Use tRPC client for data mutations and real-time updates

#### Mobile App (Expo)

The mobile app is built with Expo and uses the same tRPC API as the web app, providing a consistent development experience across platforms.

#### API Layer (tRPC)

The API layer is built with tRPC, which provides end-to-end type safety between the client and server. The API procedures are defined in the `packages/api` directory.

#### Database Layer (Drizzle ORM)

The database layer uses Drizzle ORM for type-safe database operations with PostgreSQL. The database schema is defined in `packages/database/src/schema.ts`.

### Remote Caching

This project supports Turborepo's Remote Caching feature, which can significantly speed up builds in CI/CD environments. See the [Turborepo documentation](https://turbo.build/repo/docs/core-features/remote-caching) for more information on setting up Remote Caching.

## Useful Links

### Core Technologies

- [React Router](https://reactrouter.com/en/main) - The official documentation for React Router
- [tRPC](https://trpc.io/docs) - End-to-end typesafe APIs made easy
- [Drizzle ORM](https://orm.drizzle.team/docs/overview) - TypeScript ORM for SQL databases
- [Turborepo](https://turbo.build/repo/docs) - High-performance build system for JavaScript/TypeScript monorepos
- [Expo](https://docs.expo.dev/) - Platform for making universal native apps for Android, iOS, and the web

### Additional Resources

- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript documentation
- [TanStack Query](https://tanstack.com/query/latest/docs/react/overview) - Powerful data fetching and caching library
- [Biome](https://biomejs.dev/guides/) - Fast linter and formatter for JavaScript and TypeScript
- [PostgreSQL](https://www.postgresql.org/docs/) - Advanced open source relational database
