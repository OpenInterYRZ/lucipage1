"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "./ChatMessage";
import { DownloadCTA } from "./DownloadCTA";

const DOWNLOAD_CTA_AFTER_TURNS = 3;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat-demo" }),
  });

  const isLoading = status === "streaming";

  // Count completed assistant turns (for download CTA timing)
  const assistantTurnCount = messages.filter(
    (m) => m.role === "assistant"
  ).length;
  const showDownloadCTA = assistantTurnCount >= DOWNLOAD_CTA_AFTER_TURNS;

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || status !== "ready") return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <>
      {/* Floating bubble */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Open chat"
        >
          <MessageCircle className="size-6" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed right-6 bottom-6 z-50 flex h-[min(600px,80vh)] w-[min(400px,90vw)] flex-col overflow-hidden rounded-2xl border border-border/50 bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 bg-primary px-4 py-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="size-5 text-primary-foreground" />
              <span className="text-sm font-semibold text-primary-foreground">
                LUCI Assistant
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-sm text-muted-foreground">
                  Hi! Ask me anything about LUCI.
                </p>
              </div>
            )}

            {messages.map((message, i) => (
              <div key={message.id}>
                <ChatMessage message={message} />
                {/* Show download CTA after the Nth assistant response */}
                {showDownloadCTA &&
                  message.role === "assistant" &&
                  i === messages.length - 1 && <DownloadCTA />}
              </div>
            ))}

            {isLoading &&
              messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-muted px-4 py-2.5">
                    <div className="flex gap-1">
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0ms]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:150ms]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border/50 px-4 py-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={status !== "ready"}
              className={cn(
                "flex-1 rounded-lg border border-border/50 bg-muted/50 px-3 py-2 text-sm outline-none transition-colors",
                "placeholder:text-muted-foreground/50",
                "focus:border-primary/50 focus:ring-1 focus:ring-primary/20",
                "disabled:opacity-50"
              )}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || status !== "ready"}
              className="shrink-0"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
