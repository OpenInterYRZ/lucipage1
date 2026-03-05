"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_CONFIG = {
  iosUrl: "#",
  androidUrl: "#",
};

export function DownloadCTA() {
  return (
    <div className="mx-auto my-2 w-[90%] rounded-xl border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 p-4">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
          <Download className="size-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">
            Get the LUCI App
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Download for the full experience with all features.
          </p>
          <div className="mt-3 flex gap-2">
            <Button
              size="xs"
              variant="default"
              onClick={() => window.open(APP_CONFIG.iosUrl, "_blank")}
            >
              iOS
            </Button>
            <Button
              size="xs"
              variant="outline"
              onClick={() => window.open(APP_CONFIG.androidUrl, "_blank")}
            >
              Android
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
