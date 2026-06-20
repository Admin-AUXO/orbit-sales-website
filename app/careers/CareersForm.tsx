"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { trackCareersApply, trackFormError } from "@/lib/analytics";
import { buttonBase, buttonVariants } from "@/lib/button-variants";
import { openRoles } from "@/lib/open-roles";

type CareersFields = {
  fullName: string;
  email: string;
  role: string;
  link: string;
  message: string;
  company: string;
};

const GENERAL_ROLE = "General / future roles";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

function jobIdForRole(title: string) {
  return openRoles.find((role) => role.title === title)?.id ?? "general";
}

const roleOptions = [...openRoles.map((role) => role.title), GENERAL_ROLE];

const fieldClass =
  "w-full rounded-lg border border-ns-border bg-ns-bg-elevated px-4 py-3 text-ns-text placeholder:text-ns-text-muted/60 focus:border-ns-accent focus:outline-none focus:ring-2 focus:ring-ns-accent/40";
const labelClass = "block text-sm font-medium text-ns-text";
const errorClass = "mt-1.5 text-sm text-ns-text-muted";

export function CareersSection() {
  const [selectedRole, setSelectedRole] = useState(GENERAL_ROLE);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("role");
    if (!requested || !roleOptions.includes(requested)) return;
    const id = requestAnimationFrame(() => setSelectedRole(requested));
    return () => cancelAnimationFrame(id);
  }, []);

  const applyFor = (title: string) => {
    setSelectedRole(title);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {openRoles.map((role, i) => (
          <FadeIn key={role.id} className="h-full" delay={i * 0.08}>
            <Card className="flex h-full flex-col">
              <span className="inline-flex w-fit items-center rounded-full border border-ns-border bg-ns-accent-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ns-silver">
                {role.team}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-ns-text">
                {role.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-ns-text-muted">
                {role.type}
              </p>
              <p className="text-sm text-ns-text-muted">{role.location}</p>
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ns-text-muted">
                {role.summary}
              </p>
              <Link
                href={`/careers/${role.slug}`}
                className="mt-2 inline-block text-sm font-semibold text-ns-text underline-offset-4 transition-colors hover:text-ns-accent hover:underline"
              >
                Read more →
              </Link>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ns-border/70 px-2.5 py-1 text-xs text-ns-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => applyFor(role.title)}
                  className={`${buttonBase} ${buttonVariants.primary} mt-5 w-full`}
                >
                  Apply
                </button>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div ref={formRef} id="apply" className="mx-auto mt-20 max-w-2xl">
        <h2 className="font-display text-2xl text-ns-text">Apply</h2>
        <p className="mt-4 mb-8 leading-relaxed text-ns-text-muted">
          Share a little about yourself and what you&apos;d want to build.
          Required fields are marked.
        </p>
        <CareersForm role={selectedRole} onRoleChange={setSelectedRole} />
      </div>
    </>
  );
}

export function CareersForm({
  role,
  onRoleChange,
}: {
  role: string;
  onRoleChange: (role: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CareersFields>({
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      link: "",
      message: "",
      company: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);

  const onResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setResumeError(null);

    if (!file) {
      setResume(null);
      return;
    }

    if (file.type !== "application/pdf") {
      setResume(null);
      setResumeError("Please upload your resume as a PDF.");
      return;
    }

    if (file.size > MAX_RESUME_BYTES) {
      setResume(null);
      setResumeError("Your resume must be 5 MB or smaller.");
      return;
    }

    setResume(file);
  };

  const onSubmit = async (values: CareersFields) => {
    setSubmitError(null);

    if (!resume) {
      setResumeError("Please attach your resume as a PDF.");
      return;
    }

    const data = new FormData();
    data.set("fullName", values.fullName);
    data.set("email", values.email);
    data.set("role", role);
    data.set("link", values.link);
    data.set("message", values.message);
    data.set("company", values.company);
    data.set("resume", resume);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      trackCareersApply(jobIdForRole(role), role);
      setSubmitted(true);
    } catch {
      trackFormError("careers", "submit_failed");
      setSubmitError(
        "Something went wrong sending your application. Please try again or email careers@neuro-stellar.com.",
      );
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ns-border bg-ns-bg-card p-8 text-center md:p-10">
        <h3 className="font-display text-xl text-ns-text">
          Thanks — we have your application.
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ns-text-muted">
          Your application goes straight to our team. If there&apos;s a fit,
          we&apos;ll be in touch at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            data-clarity-mask="true"
            className={`${fieldClass} mt-2`}
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Please enter your full name.",
            })}
          />
          {errors.fullName && (
            <p className={errorClass}>{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            data-clarity-mask="true"
            className={`${fieldClass} mt-2`}
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Please enter your email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClass}>
            Role you&apos;re applying for
          </label>
          <select
            id="role"
            className={`${fieldClass} mt-2`}
            value={role}
            onChange={(event) => onRoleChange(event.target.value)}
          >
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="link" className={labelClass}>
            LinkedIn or portfolio URL{" "}
            <span className="text-ns-text-muted">(optional)</span>
          </label>
          <input
            id="link"
            type="url"
            autoComplete="url"
            placeholder="https://"
            className={`${fieldClass} mt-2`}
            {...register("link")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="resume" className={labelClass}>
          Resume <span className="text-ns-text-muted">(PDF, up to 5 MB)</span>
        </label>
        <input
          id="resume"
          type="file"
          accept="application/pdf"
          onChange={onResumeChange}
          aria-invalid={resumeError ? "true" : "false"}
          className={`${fieldClass} mt-2 file:mr-4 file:rounded-full file:border-0 file:bg-ns-bg-card file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ns-text hover:file:bg-ns-border`}
        />
        {resume && (
          <p className="mt-1.5 text-sm text-ns-text-muted">{resume.name}</p>
        )}
        {resumeError && <p className={errorClass}>{resumeError}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Cover note
        </label>
        <textarea
          id="message"
          rows={5}
          data-clarity-mask="true"
          className={`${fieldClass} mt-2 resize-y`}
          aria-invalid={errors.message ? "true" : "false"}
          placeholder="Tell us what you'd want to work on and why."
          {...register("message", {
            required: "Please add a short cover note.",
          })}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <p className="text-sm text-ns-text" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${buttonBase} ${buttonVariants.primary} disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {isSubmitting ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}
