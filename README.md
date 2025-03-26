# LinkedIn OAuth Demo with NextAuth.js

This is a simple demo of LinkedIn OAuth integration using NextAuth.js in a Next.js application.

## Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/yourusername/linkedin-oauth-demo.git
cd linkedin-oauth-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up LinkedIn OAuth credentials

1. Go to [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps)
2. Click on "Create App"
3. Fill in the required information:
   - App name
   - LinkedIn Page (company page) or profile URL
   - App logo
4. Under "Auth" tab:
   - Add "http://localhost:3000" to Authorized redirect URLs for OAuth 2.0
   - Add "http://localhost:3000/api/auth/callback/linkedin" to OAuth 2.0 redirect URLs
5. Note down your Client ID and Client Secret

### 4. Configure environment variables

Create a `.env.local` file in the root of your project and add your LinkedIn OAuth credentials:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key_here

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=your_linkedin_client_id_here
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret_here
```

For `NEXTAUTH_SECRET`, you can generate a random string using:

```bash
openssl rand -base64 32
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Simple "Sign in with LinkedIn" button
- Authentication using NextAuth.js
- Display of user information after authentication
- Sign out functionality

## Technologies Used

- Next.js
- NextAuth.js
- Tailwind CSS
- LinkedIn OAuth 2.0
