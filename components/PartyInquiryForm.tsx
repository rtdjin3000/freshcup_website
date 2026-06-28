"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const inputClass =
  "w-full rounded-xl border border-brand-green/20 bg-white px-4 py-3 text-brand-greenDark placeholder:text-brand-greenDark/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20";

const labelClass = "mb-1.5 block text-sm font-semibold text-brand-greenDark";

type Status = "idle" | "submitting" | "success" | "error";

export default function PartyInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/party-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="card flex flex-col items-center p-8 text-center md:p-10">
          <CheckCircle2 className="h-12 w-12 text-brand-green" />
          <h3 className="mt-4 font-display text-2xl font-bold text-brand-greenDark">
            Request sent!
          </h3>
          <p className="mt-2 max-w-md text-brand-greenDark/70">
            Thanks for reaching out. We&apos;ll check the date and get back to you
            shortly. For anything urgent, give us a call.
          </p>
          <a
            href={`tel:${restaurant.phone}`}
            className="btn-outline mt-6"
          >
            <Phone className="h-5 w-5" />
            {restaurant.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm font-semibold text-brand-green underline-offset-4 hover:underline"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card mx-auto max-w-2xl p-6 md:p-8">
      {/* Honeypot field, hidden from real users */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-brand-pink">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jamie Lee"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-brand-pink">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(647) 000-0000"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred date <span className="text-brand-pink">*</span>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="guests" className={labelClass}>
            Number of guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            inputMode="numeric"
            placeholder="e.g. 15"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="package" className={labelClass}>
            Package
          </label>
          <select id="package" name="package" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Choose a package
            </option>
            <option>The Boba Bash ($21.99/guest)</option>
            <option>The Ultimate Sip &amp; Celebrate ($34.99/guest)</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>
          Anything else?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about the birthday: the age, a theme, any add-ons you'd like."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-brand-pinkSoft px-4 py-3 text-sm font-medium text-brand-greenDark">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            <Send className="h-5 w-5" />
            Request my date
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-brand-greenDark/55">
        No deposit due yet. We&apos;ll confirm availability first, usually within a
        day.
      </p>
    </form>
  );
}
