"use client";

import { cn } from "@/lib/utils";
import type { UIMessage } from "ai";

interface ChatMessageProps {
  message: UIMessage;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-muted text-foreground rounded-bl-md"
        )}
      >
        {message.parts.map((part, index) => {
          if (part.type === "text") {
            return (
              <span key={index} className="whitespace-pre-wrap">
                {part.text}
              </span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
