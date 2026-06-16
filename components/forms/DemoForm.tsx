"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  role: string;
  persona: "athlete" | "executive" | "other";
  company?: string;
};

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl border border-ns-accent/30 bg-ns-accent-muted px-6 py-4 text-ns-text">
        Request received. Our team will reach out to schedule your demo.
      </p>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-ns-border bg-ns-bg px-4 py-3 text-ns-text outline-none focus:border-ns-accent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-name" className="mb-2 block text-sm text-ns-text-muted">
            Name
          </label>
          <input id="demo-name" required {...register("name")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="demo-email" className="mb-2 block text-sm text-ns-text-muted">
            Email
          </label>
          <input
            id="demo-email"
            type="email"
            required
            {...register("email")}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="demo-role" className="mb-2 block text-sm text-ns-text-muted">
          Role
        </label>
        <input id="demo-role" required {...register("role")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="demo-persona" className="mb-2 block text-sm text-ns-text-muted">
          I am a…
        </label>
        <select
          id="demo-persona"
          required
          {...register("persona")}
          className={inputClass}
        >
          <option value="athlete">Athlete</option>
          <option value="executive">Executive</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="demo-company" className="mb-2 block text-sm text-ns-text-muted">
          Team / Company (optional)
        </label>
        <input id="demo-company" {...register("company")} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-ns-accent px-6 py-3 text-sm font-semibold text-ns-on-accent transition-colors hover:bg-ns-accent-hover disabled:opacity-50"
      >
        {status === "loading" ? "Submitting…" : "Request Demo"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
