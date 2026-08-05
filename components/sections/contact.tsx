'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiUser,
  FiMessageSquare,
  FiLoader,
} from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL, SOCIALS } from '@/lib/data';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: FiMapPin, label: 'Location', value: PERSONAL.location, href: null },
];

const socials = [
  { icon: FaGithub, href: SOCIALS.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: SOCIALS.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: SOCIALS.leetcode, label: 'LeetCode' },
  { icon: FaWhatsapp, href: SOCIALS.whatsapp, label: 'WhatsApp' },
];

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address';

  if (!data.subject.trim()) errors.subject = 'Subject is required';
  else if (data.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters';

  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters';

  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form.');
      return;
    }

    setLoading(true);
    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: PERSONAL.email,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      toast.success('Message sent successfully! I will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm font-medium text-brand-500">09. Contact</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Have a project in mind or an opportunity to discuss? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl">
              <div>
                <h3 className="mb-6 text-lg font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                        <info.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium transition-colors hover:text-brand-500"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold text-muted-foreground">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-500"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl"
          >
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <FiUser className="h-4 w-4 text-brand-500" />
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-xl border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand-500 ${
                    errors.name ? 'border-red-500/60' : 'border-border'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <FiMail className="h-4 w-4 text-brand-500" />
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand-500 ${
                    errors.email ? 'border-red-500/60' : 'border-border'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 flex items-center gap-2 text-sm font-medium">
                <FiMessageSquare className="h-4 w-4 text-brand-500" />
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={`w-full rounded-xl border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand-500 ${
                  errors.subject ? 'border-red-500/60' : 'border-border'
                }`}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-medium">
                <FiMessageSquare className="h-4 w-4 text-brand-500" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={`w-full resize-none rounded-xl border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand-500 ${
                  errors.message ? 'border-red-500/60' : 'border-border'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-brand-500/40 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <FiLoader className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
