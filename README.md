# Portfolio — Software & Data Engineer

A design-led, production-ready personal portfolio. Built for **AWS Amplify** static hosting.

## Stack

- **Next.js 14** (App Router, static export)
- **React 18** + **TypeScript**
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (entrance and scroll animations)
- **Lucide Icons**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is in the `out/` directory. This is what you deploy.

## Deploy with Zip (drag and drop to Amplify)

To deploy **without Git** by uploading a zip:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Create the zip** (zip the **contents** of `out/`, not the `out` folder itself)
   ```bash
   cd out && zip -r ../portfolio-deploy.zip . && cd ..
   ```
   Or use the script: `npm run zip` (creates `portfolio-deploy.zip` in the project root).

3. **Upload in Amplify**
   - Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/) → **Hosting** → **Get started**.
   - Choose **Deploy without Git provider** (or **Hosting** for an existing app).
   - Drag and drop `portfolio-deploy.zip` or click to upload it.
   - Amplify will deploy the static site. Your contact form will use the endpoint from when you built (set `NEXT_PUBLIC_CONTACT_ENDPOINT` in `.env.local` before `npm run build` so it’s baked into the zip).

**Important:** The zip must have `index.html` at the **root** of the archive (so zip from inside `out/` with `zip -r ../portfolio-deploy.zip .`). Do not zip the `out` folder itself, or paths will be wrong.

## Deploy on AWS Amplify (with Git)

1. **Connect repository**  
   Connect this repo to Amplify (GitHub, GitLab, etc.).

2. **Build settings**  
   Use the default Next.js detection or set:
   - **Build command:** `npm run build`
   - **Output directory:** `out`
   - **Base directory:** (leave empty unless monorepo)

3. **Framework**  
   Set framework to **Next.js - SSR** but since we use `output: 'export'`, Amplify will serve the static files from `out/`.

   If Amplify has a “Static site” option, you can use that and point to `out`.

4. **Node version**  
   In Amplify console → Build settings → Build image settings, set Node to **18** or **20**.

5. **Environment variables** — In App settings → Environment variables, add `NEXT_PUBLIC_CONTACT_ENDPOINT` = `https://formspree.io/f/YOUR_FORM_ID` (your Formspree form ID) so the contact form works in production.

6. **Redeploy** — Push to your main branch to trigger a new build. Future pushes to the same branch will auto-build.

## See visitor count (Google Analytics) — step-by-step

Follow these steps from scratch (no account needed to start). Google Analytics is free.

---

### Step 1: Sign in with Google

1. Open **[analytics.google.com](https://analytics.google.com/)** in your browser.
2. Click **Sign in to Analytics** (or **Start measuring** if you see that).
3. Sign in with your **Google account** (Gmail). If you don’t have one, create a free account at [accounts.google.com](https://accounts.google.com/).

---

### Step 2: Create an account (if asked)

1. You may see **“Let’s create your Google Analytics account”**.
2. **Account name:** e.g. `My Portfolio` or your name.
3. Leave the data-sharing options as you prefer (optional).
4. Click **Next**.

---

### Step 3: Create a property

1. **Property name:** e.g. `Portfolio` or `Navneet Sharma Portfolio`.
2. **Reporting time zone:** choose your time zone (e.g. India).
3. **Currency:** choose your currency (e.g. Indian Rupee).
4. Click **Next**.
5. **Industry** and **Business size:** choose whatever fits (e.g. “Personal” / “Small”). Click **Next**.
6. **Business objectives:** you can select **Get baseline reports** or skip. Click **Create**.
7. Accept the **Terms of Service** if shown.

---

### Step 4: Set up a web data stream

1. You’ll see **“Choose a platform”**. Click **Web**.
2. **Website URL:**  
   - If your site is already live on Amplify, paste your site URL (e.g. `https://main.xxxxx.amplifyapp.com`).  
   - If not live yet, use a placeholder like `https://myportfolio.com`; you can change it later.
3. **Stream name:** e.g. `Portfolio website`.
4. Click **Create stream**.

---

### Step 5: Copy your Measurement ID

1. On the next screen you’ll see **Web stream details**.
2. Find **Measurement ID**. It looks like: **`G-XXXXXXXXXX`** (starts with `G-`).
3. **Copy this ID** (e.g. `G-ABC123XYZ`). You’ll use it in the next step.

---

### Step 6: Add the ID to your project

**On your computer (for local build and for zip deploy):**

1. In your portfolio project folder, open (or create) the file **`.env.local`**.
2. Add this line (replace with your real ID):

   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. Save the file.

**If you deploy with Amplify (zip or Git):**

1. In **AWS Amplify Console** → your app → **App settings** → **Environment variables**.
2. Click **Manage variables** (or **Edit**).
3. Add a variable:
   - **Key:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your Measurement ID from Step 5).
4. Save. Then **redeploy** (upload a new zip or push a new commit) so the new variable is used in the build.

---

### Step 7: Rebuild and deploy

1. In your project folder, run:

   ```bash
   npm run build
   ```

2. Deploy the new build (e.g. run `npm run zip` and upload the new zip to Amplify, or push to Git if you use Git deploy).

---

### Step 8: Where to see visitors

1. Go back to **[analytics.google.com](https://analytics.google.com/)** and open your property (left sidebar).
2. **Realtime:** **Reports** → **Realtime** — see people on the site right now (updates in a few minutes).
3. **Page views:** **Reports** → **Engagement** → **Pages and screens** — see which pages were viewed and how many times.
4. **Visitor count:** **Reports** → **User acquisition** or **Engagement** → **Overview** — see total users/sessions.

Data in non-Realtime reports can take **24–48 hours** to show. Realtime works soon after someone visits.

## Customize

- **Content:** Edit `data/experience.ts`, `data/projects.ts`, `data/skills.ts`, `data/certifications.ts`.
- **Copy:** Hero and About text are in `components/Hero.tsx` and `components/About.tsx`.
- **Contact:** Update email, LinkedIn, and GitHub in `components/Contact.tsx`. **Contact form:** This project uses static export (`output: 'export'`), so `/api/contact` does not run when you deploy the static `out/` folder. To make the “Send message” form work:
  1. **Option A (recommended for static):** Sign up at [Formspree](https://formspree.io), create a form, and set `NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID` in your environment (e.g. in Amplify build env or a `.env.local` for local testing). Rebuild and deploy.
  2. **Option B:** Deploy with a Node server (e.g. Vercel or Amplify SSR), remove `output: 'export'` from `next.config.mjs`, and set `RESEND_API_KEY` (see `.env.example`).
- **Portrait:** Add `public/portrait.jpg` and uncomment the `Image` block in `components/Hero.tsx` (and remove the gradient placeholder div).
- **CV:** Add `public/CV_Navneet_Sharma.pdf` so “Download CV” works.

## Design

See `DESIGN_SYSTEM.md` for colors, typography, spacing, and motion.

## License

Private. Use as a template for your own portfolio.
