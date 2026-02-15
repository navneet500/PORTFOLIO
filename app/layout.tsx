import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Grain } from '@/components/Grain';
import { CursorGlow } from '@/components/CursorGlow';
import { Nav } from '@/components/Nav';
import { PageContentTransition } from '@/components/PageContentTransition';
import { PageLoadBar } from '@/components/PageLoadBar';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Navneet Sharma | Cloud Data & AI Engineer',
  description:
    'Cloud Data & AI Engineer at Barclays. 3x AWS Certified. Building data pipelines and analytics with DBT, Airflow & Databricks. Banking risk and analytics.',
  openGraph: {
    title: 'Navneet Sharma | Cloud Data & AI Engineer',
    description:
      'Cloud Data & AI Engineer. 3x AWS Certified. DBT, Airflow, Databricks. Banking risk & analytics.',
  },
};

const themeScript = `
(function() {
  var stored = localStorage.getItem('portfolio-theme');
  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  var theme = stored === 'light' || stored === 'dark' ? stored : (prefersLight ? 'light' : 'dark');
  if (theme === 'light') document.documentElement.classList.add('light');
  else document.documentElement.classList.remove('light');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <GoogleAnalytics />
        <ThemeProvider>
          <PageLoadBar />
          <AnimatedBackground />
          <Grain />
          <CursorGlow />
          <Nav />
          <PageContentTransition delay={0.4} duration={0.5}>
            <main className="relative">{children}</main>
          </PageContentTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
