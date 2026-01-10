# Cloudflare Pages Deployment Guide for www.pgbp.io

This guide will walk you through deploying your React Vite site to Cloudflare Pages with the custom domain www.pgbp.io.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://www.cloudflare.com) if you don't have one
2. **GitHub Account**: Your code needs to be in a GitHub repository
3. **Domain**: You need to own pgbp.io and have it added to your Cloudflare account
4. **Resend API Key**: For the email functionality (functions/api/contact.ts, buy.ts, redeem.ts)

## Step-by-Step Deployment

### Step 1: Push Your Code to GitHub

1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub (e.g., `pgbp-site`)

3. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/pgbp-site.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select your repository (`pgbp-site`)

### Step 3: Configure Build Settings

Configure the following build settings:

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave as default)

### Step 4: Set Environment Variables

Click on **Environment variables** and add:

- **Variable name**: `RESEND_API_KEY`
- **Value**: Your Resend API key (get it from [resend.com](https://resend.com))

Make sure to set it for **Production**, **Preview**, and **Branch** environments if needed.

### Step 5: Deploy

1. Click **Save and Deploy**
2. Cloudflare will automatically:
   - Install dependencies (`npm install`)
   - Run the build (`npm run build`)
   - Deploy the `dist` folder
   - Deploy your Functions from the `functions` directory

### Step 6: Configure Custom Domain (www.pgbp.io)

1. After the first deployment completes, go to your project's **Custom domains** section
2. Click **Set up a custom domain**
3. Enter: `www.pgbp.io`
4. Cloudflare will provide DNS records to add:
   - A CNAME record pointing `www` to your Pages deployment
   - Or use Cloudflare's automatic DNS configuration if your domain is already on Cloudflare

### Step 7: DNS Configuration

If your domain (pgbp.io) is already on Cloudflare:

1. Go to **DNS** settings for your domain
2. Cloudflare Pages will automatically add the necessary CNAME record
3. If not automatic, add manually:
   - **Type**: CNAME
   - **Name**: `www`
   - **Target**: Your Pages deployment URL (e.g., `your-project.pages.dev`)
   - **Proxy status**: Proxied (orange cloud)

If your domain is NOT on Cloudflare:

1. Add your domain to Cloudflare (or transfer DNS management)
2. Follow Cloudflare's instructions to update your nameservers
3. Then follow the DNS configuration above

### Step 8: SSL/TLS Configuration

Cloudflare automatically provides SSL certificates for your custom domain. Ensure:

1. **SSL/TLS encryption mode** is set to **Full** or **Full (strict)** in your domain's SSL/TLS settings
2. Wait a few minutes for the certificate to provision

### Step 9: Verify Deployment

1. Visit `https://www.pgbp.io` in your browser
2. Test the following:
   - Homepage loads correctly
   - Navigation works (hash links: #facts, #buy, #redeem, #contact)
   - API endpoints work:
     - `/api/contact` (POST)
     - `/api/buy` (POST)
     - `/api/redeem` (POST)
   - Assets load correctly (images, fonts)

### Step 10: Set Up Automatic Deployments

Cloudflare Pages automatically deploys:
- **Production**: Every push to your `main` branch
- **Preview**: Every pull request

You can configure branch deployments in **Settings** → **Builds & deployments**.

## Troubleshooting

### Build Fails

- Check build logs in Cloudflare Pages dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Cloudflare uses Node 18+ by default)

### Functions Not Working

- Ensure Functions are in the `functions` directory
- Check function syntax matches Cloudflare Pages Functions format
- Verify environment variables are set correctly

### Domain Not Resolving

- Wait up to 24 hours for DNS propagation
- Verify DNS records are correct
- Check SSL/TLS settings in Cloudflare

### 404 Errors on Routes

- The `_redirects` file in `public/` should handle SPA routing
- Verify the file was included in the build output

## Additional Configuration

### Custom Headers (Optional)

You can add custom headers via `_headers` file in `public/`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### Analytics

Your site already includes Plausible analytics. Make sure to:
- Update the domain in the script tag if needed (currently set to `pgbp.io`)
- Verify Plausible is configured for `www.pgbp.io`

## Maintenance

- **Updates**: Push changes to GitHub, and Cloudflare will automatically rebuild and deploy
- **Environment Variables**: Update in Cloudflare Pages dashboard → Settings → Environment variables
- **Custom Domain**: Manage in Pages → Your project → Custom domains

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
- [Vite Documentation](https://vitejs.dev/)
