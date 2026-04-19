"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Linkedin, Github, Mail } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_j4isi7i";
const EMAILJS_TEMPLATE_ID = "template_oe75h15";
const EMAILJS_PUBLIC_KEY = "CX73TEtKRadPlhTtA";

const CONTACT_EMAIL = "pranavi@immanni.com";

const inputClass =
  "w-full rounded-2xl border border-[var(--ui-border)] bg-white/75 px-4 py-3 font-exp-display text-sm text-[#2c2b30] placeholder:text-[#2c2b30]/45 placeholder:italic focus:outline-none focus:ring-2 focus:ring-[var(--accent-peach)]/40 focus:border-[var(--accent-peach)]/45 transition shadow-sm tracking-[0.01em]";

const socialClass =
  "inline-flex items-center gap-2 font-exp-display text-[11px] font-medium uppercase tracking-[0.16em] text-[#2c2b30]/85 underline underline-offset-[6px] decoration-[var(--accent-pink)]/70 hover:text-[var(--accent-coral)] hover:decoration-[var(--accent-coral)] transition-colors";

export default function GetInTouch() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

  const canSend =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    if (!canSend) {
      setError("Please fill in all fields.");
      return;
    }

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fullName,
          from_email: email.trim(),
          message: message.trim(),
          reply_to: email.trim(),
        },
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS send failed", err);
      setError("Message failed to send. Please try again.");
      setSent(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative z-[2] overflow-hidden px-5 py-14 pb-12 sm:px-6 md:py-16 md:pb-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/get-in-touch-bg.png)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--accent-pink)]/14 via-white/[0.08] to-[var(--accent-coral)]/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--canvas-deep)]/[0.04]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-5xl font-exp-display tracking-[0.02em]">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col gap-7 text-left sm:gap-8"
          initial={{ y: 18 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span
                className="h-px w-10 shrink-0 bg-gradient-to-r from-[var(--accent-coral)] to-[var(--accent-pink)] sm:w-12"
                aria-hidden
              />
              <p className="font-exp-display text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2c2b30]/55">
                Contact
              </p>
            </div>
            <h2 className="font-exp-display text-3xl font-semibold leading-tight text-[#2c2b30] sm:text-4xl md:text-[2.65rem]">
              Let&apos;s Get in Touch
            </h2>
            <p className="mt-8 font-exp-display text-sm font-medium uppercase tracking-[0.14em] text-[#2c2b30]/60 sm:mt-9">
              Find me Here
            </p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="https://www.linkedin.com/in/pranavi-immanni-jrt/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <Linkedin className="h-4 w-4 shrink-0 text-[var(--accent-coral)]" strokeWidth={1.75} aria-hidden />
                LinkedIn
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={socialClass}
                title={CONTACT_EMAIL}
                aria-label={`Email ${CONTACT_EMAIL}`}
              >
                <Mail className="h-4 w-4 shrink-0 text-[var(--accent-coral)]" strokeWidth={1.75} aria-hidden />
                <span className="normal-case">Email</span>
              </a>
              <a
                href="https://github.com/PranaviImmanni/PranaviImmanni"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <Github className="h-4 w-4 shrink-0 text-[var(--accent-coral)]" strokeWidth={1.75} aria-hidden />
                GitHub
              </a>
            </div>
          </div>

          <div>
            <p className="font-exp-display text-sm font-medium uppercase tracking-[0.14em] text-[#2c2b30]/60">Say Hello!</p>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                <div>
                  <label htmlFor="contact-first" className="sr-only">
                    First name
                  </label>
                  <input
                    id="contact-first"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setSent(false);
                    }}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-last" className="sr-only">
                    Last name
                  </label>
                  <input
                    id="contact-last"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setSent(false);
                    }}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSent(false);
                    }}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setSent(false);
                  }}
                  rows={5}
                  className={`${inputClass} min-h-[130px] resize-y`}
                />
              </div>
              <div className="mt-5 flex flex-col items-end gap-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-full px-10 py-3 font-exp-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2c2b30] shadow-soft transition hover:brightness-[1.03] disabled:cursor-not-allowed disabled:opacity-55"
                  style={{
                    background: sent
                      ? "linear-gradient(118deg, #8a8a8e 0%, #6f6e74 100%)"
                      : "linear-gradient(118deg, #f58f7c 0%, #f2a090 42%, #f2c4ce 100%)",
                  }}
                >
                  {sending ? "Sending…" : sent ? "Sent" : "Send"}
                </button>
                {error && <p className="text-right font-exp-display text-sm text-[#b42318]">{error}</p>}
              </div>
            </form>
          </div>
        </motion.div>

        <address className="mt-6 border-t border-[var(--ui-border)] pt-6 text-center not-italic sm:mt-7 sm:pt-7">
          <a
            href="tel:+18586834339"
            className="block text-base font-medium text-[#2c2b30] hover:text-[var(--accent-coral)] transition-colors"
          >
            (858) 683-4339
          </a>
          <p className="mt-2 text-base font-semibold text-[#2c2b30]">Pranavi Immanni</p>
          <p className="mt-1 text-sm font-medium text-[#2c2b30]/70">San Diego, CA</p>
        </address>
      </div>
    </section>
  );
}
