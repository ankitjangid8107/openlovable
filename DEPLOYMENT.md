# Deployment Guide for Open Lovable

## Quick Setup Steps

### 1. Push to GitHub
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify

#### Option A: Connect GitHub Repository
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

#### Option B: Manual Deploy
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `npm run deploy:netlify`

### 3. Set Environment Variables

In Netlify dashboard:
- Go to Site settings > Environment variables
- Add these variables:

```
E2B_API_KEY=your_e2b_api_key
FIRECRAWL_API_KEY=your_firecrawl_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_APP_URL=https://your-site-name.netlify.app
```

### 4. Get API Keys

- **E2B API Key**: https://e2b.dev (for sandboxes)
- **Firecrawl API Key**: https://firecrawl.dev (for web scraping)
- **Anthropic API Key**: https://console.anthropic.com
- **OpenAI API Key**: https://platform.openai.com
- **Gemini API Key**: https://aistudio.google.com/app/apikey
- **Groq API Key**: https://console.groq.com

### 5. Test Your Deployment

1. Visit your Netlify URL
2. Try creating a simple React app
3. Check that all features work correctly

## Troubleshooting

- If build fails, check Node version is 18
- If API calls fail, verify environment variables are set
- Check Netlify function logs for errors
- Ensure all required API keys are provided

## Alternative: Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard
4. Deploy: `vercel --prod`
