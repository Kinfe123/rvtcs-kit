---
title: RVTCS - x2 Your Dev Experience
description: All you need to get started it just following the docs here.
---




✅ Get all of your .env varibale key value pair and follow the steps



##  Native Deployment

Native Deployment ❓

Sure, here's an example of how to deploy a full-stack application that uses React, Vite, Supabase, Clerk, and Tailwind CSS - RVTCS:

- **Build your application for production**:


First, you need to build your React application for production using Vite. In the root directory of your project, run the command:

```bash

    npm run build
```

This command will generate an optimized production build of your application in the build directory.

- **Configure your Supabase database**:

Before deploying your application, you need to configure your Supabase database to allow connections from your production environment. To do this, log in to your Supabase account and navigate to the "Settings" page for your project. Under the "Allowed Origins" section, add the URL of your production environment.

- **Deploy your backend**:


Next, deploy your Supabase backend by using Supabase's hosting features or by deploying it to a cloud provider like AWS or Heroku. Make sure to configure your Supabase URL and API key in your application's code to connect to the backend.

- **Configure your Clerk application**:

If you're using Clerk for authentication, you need to configure your Clerk application to allow connections from your production environment. To do this, log in to your Clerk account and navigate to the "Domains" page. Add the URL of your production environment under the "Allowed Domains" section.

- **Deploy your frontend**:

Finally, deploy your frontend toa hosting platform like Netlify, Vercel, or AWS Amplify. Here's an example of how to deploy your application to Netlify:

- **Create a new Netlify account or log in to your existing account.**
Connect your GitHub repository to Netlify by selecting your repository and configuring the build settings.
```bash
In the "Build Command" field, enter npm run build.
In the "Publish Directory" field, enter build.
```
Click on "Deploy Site" to deploy your application.
After your application is deployed, you should be able to access it using the URL provided by your hosting platform. Make sure to test your application thoroughly to ensure that everything is working as expected.

- **Overall**, deploying a full-stack application that uses React, Vite, Supabase, Clerk, and Tailwind CSS involves configuring your backend and authentication provider, building your frontend for production, and deploying your application to a hosting platform. By following these steps, you can deploy your application and make it accessible to users around the world.


## Vercel Deployment
 ✅ See how deployment is easy on vercel.

-> Sure, here are the instructions for deploying a full-stack application that uses React, Vite, Supabase, Clerk, and Tailwind CSS to Vercel:

- **Create a Vercel account**:


If you don't already have a Vercel account, you can create one for free at vercel.com/signup. Once you've signed up, you can create a new project.

- **Connect your GitHub repository to Vercel**:


In the `Create a new project` page, select your GitHub repository and configure the settings for your project. Vercel will automatically detect your Vite application and configure the settings accordingly.

- **Configure your environment variables**:
In the `Environment Variables` section of your Vercel project settings, configure the following environment variables:
```javasript
SUPABASE_URL: Set this to the URL of your Supabase backend.
SUPABASE_KEY: Set this to your Supabase API key.
CLERK_FRONTEND_API: Set this to your Clerk frontend API key.
CLERK_SIGN_IN: Set this to your Clerk sign-in URL.
```
- **Configure your build settings**:
In the "Build & Development Settings" section of your Vercel project settings, configure the following build settings:

```bash
Build Command: npm run build
```
Output Directory: build


- **Deploy your application** :
Once you've configured your project settings, click on "Deploy" to deploy your application to Vercel.
After your application is deployed, you can access it using the URL provided by Vercel. Make sure to test your application thoroughly to ensure that everything is working as expected.

**Overall**, deploying a full-stack application that uses React, Vite, Supabase, Clerk, and Tailwind CSS to Vercel involves connecting your GitHub repository to Vercel, configuring your environment variables and build settings, and deploying your application to Vercel. By following these steps, you can deploy your application and make it accessible to users around the world.