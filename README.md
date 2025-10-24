# LEWK Landing Page - New Design

A clean, minimalist landing page with email signup functionality.

## Features

- **Clean Design**: Minimalist gradient background with modern UI
- **Email Signup**: Simple modal-based email collection
- **Database**: Neon database integration for storing emails
- **Responsive**: Works on all devices

## Setup

1. **Install dependencies:**
   ```bash
   cd apps/web
   npm install
   ```

2. **Set environment variables:**
   - `DATABASE_URL`: Your Neon database connection string

3. **Run development server:**
   ```bash
   npm run dev
   ```

## Database

Uses the existing `signups` table in your Neon database.

## Deployment

Ready for deployment to Vercel with the same database connection.
