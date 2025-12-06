# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NestJS backend application using TypeORM with PostgreSQL. The project appears to be an Inflearn clone based on the database configuration.

## Development Commands

### Setup
```bash
pnpm install
```

### Running the Application
```bash
# Development with hot reload
pnpm start:dev

# Production build and run
pnpm build
pnpm start:prod

# Debug mode
pnpm start:debug
```

### Database
```bash
# Start PostgreSQL via Docker
docker-compose up -d

# Stop database
docker-compose down
```

Database runs on port 5434 (mapped from container port 5432).

### Testing
```bash
# Run all unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run e2e tests
pnpm test:e2e

# Generate coverage report
pnpm test:cov

# Debug tests
pnpm test:debug
```

### Code Quality
```bash
# Format code
pnpm format

# Lint and auto-fix
pnpm lint
```

## Architecture

### Database Configuration
- **ORM**: TypeORM with PostgreSQL driver
- **Config location**: `src/config/typeorm.config.ts`
- **Connection**: Configured via environment variables in `.env`
- **Auto-sync**: Enabled in development mode (`synchronize: true`)
- **Entities**: Auto-loaded from `src/**/*.entity.ts`

### Module Structure
- **App Module**: `src/app.module.ts` - Root module that:
  - Imports `ConfigModule` globally for environment variable access
  - Configures `TypeOrmModule` asynchronously using the factory pattern
  - Uses `getDatabaseConfig()` helper for database configuration

### Entity Pattern
Entities are stored in `src/entities/` directory. Example entity structure:
- Use TypeORM decorators (`@Entity`, `@Column`, etc.)
- Include timestamp fields (`@CreateDateColumn`, `@UpdateDateColumn`)
- Follow the naming pattern: `*.entity.ts`

### Environment Configuration
- Environment variables are managed via `@nestjs/config`
- ConfigModule is global (no need to import in feature modules)
- Required variables in `.env`:
  - `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`
  - `PORT`, `NODE_ENV`

## Docker Setup

PostgreSQL container configuration:
- Container name: `inflearn-clone-db`
- Host port: `5434`
- Database: `inflearn_clone`
- Credentials: See `.env.example`
- Volume: `inflearn_clone_db` for data persistence

## Important Notes

- The project uses `pnpm` as the package manager
- Database synchronize is enabled in development - schema changes auto-apply
- TypeORM entities use the pattern `src/**/*.entity.{ts,js}` for auto-discovery

[Rules prompt]
you are an expert AI programming assistant in VSCode that primarily focuses on producing clear, readable code.  
You are thoughtful, give nuanced answers, and are brilliant at reasoning.  
You carefully provide accurate, factual, and thoughtful answers, and you are a genius at reasoning.

1. Follow the user's requirements carefully and precisely.
2. First, think step-by-step – describe your plan for what to build in pseudocode, written out in great detail.
3. Confirm, then write the code!
4. Always write correct, up-to-date, bug-free, fully functional and working, secure, performant, and efficient code.
5. Focus on **readability** over performance.
6. Fully implement all requested functionality.
7. Leave **NO** to-dos, placeholders, or missing pieces.
8. Ensure the code is complete! Thoroughly verify the final version.
9. Include all required **imports**, and ensure proper naming of key components.
10. Be concise. Minimize any unnecessary explanations.
11. If you think there might not be a correct answer, say so. If you do not know the answer, admit it instead of guessing.
12. Always provide concise answers.
13. Please answer in Korean
