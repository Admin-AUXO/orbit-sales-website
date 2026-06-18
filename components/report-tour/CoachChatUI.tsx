"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CoachMessage } from "@/lib/report-tour-data";
import { useIsClient } from "@/lib/use-is-client";

interface CoachChatUIProps {
  messages: CoachMessage[];
}

const coachBubbleClass =
  "rounded-[18px] rounded-bl-[4px] bg-[#333333] text-white";
const userBubbleClass =
  "rounded-[18px] rounded-br-[4px] bg-[#0a84ff] text-white";

function MessageBubble({ msg }: { msg: CoachMessage }) {
  return (
    <li
      className={`flex ${msg.role === "coach" ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[82%] px-3.5 py-2.5 text-[15px] leading-snug ${
          msg.role === "coach" ? coachBubbleClass : userBubbleClass
        }`}
        aria-label={`${msg.role === "coach" ? "Coach" : "You"}: ${msg.text}`}
      >
        {msg.text}
      </div>
    </li>
  );
}

function ChatShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-[#333333] bg-[#121212] shadow-xl">
      <div className="border-b border-[#333333] bg-[#232323] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333333]">
            <svg
              className="text-[#c9d1d9]"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Neurostellar Performance Coach
            </p>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#34c759]" />
              <span className="text-xs text-[#34c759]">Online</span>
            </div>
          </div>
        </div>
      </div>

      {children}

      <div className="border-t border-[#333333] bg-[#232323] px-3 py-2.5">
        <div className="flex items-center gap-2 rounded-full border border-[#333333] bg-[#121212] px-4 py-2">
          <span className="text-sm text-[#b0b3b8]">Message</span>
        </div>
      </div>
    </div>
  );
}

export function CoachChatUI({ messages }: CoachChatUIProps) {
  const isClient = useIsClient();
  const reduceMotion = useReducedMotion() ?? false;

  if (!isClient) {
    return (
      <ChatShell>
        <ul
          className="flex max-h-[420px] flex-col gap-2 overflow-y-auto bg-[#121212] px-3 py-4 sm:max-h-[480px] sm:px-4"
          aria-label="Chat with Neurostellar Performance Coach"
        >
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
        </ul>
      </ChatShell>
    );
  }

  return (
    <ChatShell>
      <ul
        className="flex max-h-[420px] flex-col gap-2 overflow-y-auto bg-[#121212] px-3 py-4 sm:max-h-[480px] sm:px-4"
        aria-label="Chat with Neurostellar Performance Coach"
      >
        {messages.map((msg, i) => (
          <motion.li
            key={i}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 10,
              scale: reduceMotion ? 1 : 0.97,
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              delay: reduceMotion ? 0 : i * 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`flex ${msg.role === "coach" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[82%] px-3.5 py-2.5 text-[15px] leading-snug ${
                msg.role === "coach" ? coachBubbleClass : userBubbleClass
              }`}
              aria-label={`${msg.role === "coach" ? "Coach" : "You"}: ${msg.text}`}
            >
              {msg.text}
            </div>
          </motion.li>
        ))}
      </ul>
    </ChatShell>
  );
}
