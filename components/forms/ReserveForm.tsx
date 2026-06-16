"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = { email: string; name?: string };

export function ReserveForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/reserve", {
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
        You&apos;re on the list. We&apos;ll be in touch with launch details.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-ns-text-muted">
          Name (optional)
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-xl border border-ns-border bg-ns-bg px-4 py-3 text-ns-text outline-none focus:border-ns-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-ns-text-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          {...register("email", { required: true })}
          className="w-full rounded-xl border border-ns-border bg-ns-bg px-4 py-3 text-ns-text outline-none focus:border-ns-accent"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-ns-accent px-6 py-3 text-sm font-semibold text-ns-on-accent transition-colors hover:bg-ns-accent-hover disabled:opacity-50"
      >
        {status === "loading" ? "Submitting…" : "Reserve Yours"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
