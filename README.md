## AI Prompts & Summarize 

Online Platform where users can log in to view, create, and share AI prompts and summarize online articles.

Uses OPEN AI API and Summarize API, with built-in next-auth integrated providing Google as a authentication method.

Built with [Next.js](https://nextjs.org/) and deployed with [Vercel](https://vercel.com)

## Routes and utilities

API routes are found in [/app/api](https://github.com/Dragosp33/promptopia/tree/main/app/api)
  - [/auth/[...nextauth]/route.js](https://github.com/Dragosp33/promptopia/tree/main/app/api/auth/%5B...nextauth%5D/route.js) for authentication
  - [/prompt](https://github.com/Dragosp33/promptopia/tree/main/app/api/prompt) for prompt handling - create, read
  - [/users/[id]/posts/route.js](https://github.com/Dragosp33/promptopia/tree/main/app/api/users/%5Bid%5D/posts/route.js) for receiving profile information


Utilities used for session and api handlers are found in [/utils](https://github.com/Dragosp33/promptopia/tree/main/utils)
  - [database connection](https://github.com/Dragosp33/promptopia/tree/main/utils/database.js)
  - [openai api](https://github.com/Dragosp33/promptopia/tree/main/utils/chatapi.js)
  - [summarizer api](https://github.com/Dragosp33/promptopia/tree/main/utils/summary.js)


## Installation guide:


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependecies:

```
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
