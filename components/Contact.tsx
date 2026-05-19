'use client';

import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

const inputClass =
  'w-full rounded-lg border border-border bg-surface-muted px-4 py-3 text-body text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors';

const contactLinks = [
  {
    href: 'mailto:navneetsharma3716@gmail.com',
    label: 'Email',
    value: 'navneetsharma3716@gmail.com',
    icon: Mail,
  },
  {
    href: 'tel:+918493023174',
    label: 'Phone',
    value: '+91 8493023174',
    icon: Phone,
  },
  {
    href: 'https://github.com/navneet500',
    label: 'GitHub',
    value: 'navneet500',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/navneet-sharma-87a193224/',
    label: 'LinkedIn',
    value: 'Navneet Sharma',
    icon: Linkedin,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 px-6 lg:px-12 xl:px-20 max-w-6xl mx-auto scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <ScrollReveal>
        <h2
          id="contact-heading"
          className="text-heading-2 font-bold text-text-primary text-center mb-16"
        >
          Get In Touch
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - Contact Information */}
        <ScrollReveal delay={0.1}>
          <div>
            <h3 className="text-heading-3 font-semibold text-text-primary mb-8">
              Contact Information
            </h3>
            <div className="space-y-5">
              {contactLinks.map(({ href, label, value, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-small font-medium text-text-primary">{label}</p>
                    <p className="text-small text-accent">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="/Navneet_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 rounded-lg bg-accent text-white px-5 py-2.5 text-small font-medium hover:bg-accent-muted transition-colors"
            >
              <Send size={14} />
              View Resume
            </a>
          </div>
        </ScrollReveal>

        {/* Right - Contact Form */}
        <ScrollReveal delay={0.2}>
          <div>
            <h3 className="text-heading-3 font-semibold text-text-primary mb-8">
              Send Me a Message
            </h3>
            {submitted ? (
              <div className="rounded-xl border border-accent/40 bg-accent/5 p-8 text-center">
                <p className="text-body text-text-primary font-medium">Thanks for reaching out!</p>
                <p className="text-small text-text-secondary mt-2">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
                  setSending(true);
                  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';
                  try {
                    const res = await fetch(endpoint, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                      body: JSON.stringify({ name, email, message }),
                    });
                    const data = await res.json().catch(() => ({}));
                    if (!res.ok) {
                      setError(data.error || 'Something went wrong. Please try again.');
                      return;
                    }
                    setSubmitted(true);
                  } catch {
                    setError('Something went wrong. Please try again.');
                  } finally {
                    setSending(false);
                  }
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-small font-medium text-text-primary mb-1.5">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-small font-medium text-text-primary mb-1.5">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-small font-medium text-text-primary mb-1.5">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {error && (
                  <p className="text-small text-red-500" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-lg bg-accent text-white py-3 text-body font-medium hover:bg-accent-muted transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
