"use client";

import { useEffect } from "react";

/** Registers the service worker so the site can be installed / added to Home Screen. */
export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production" && !process.env.NEXT_PUBLIC_ENABLE_SW) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* ignore — install still works on iOS via Add to Home Screen */
    });
  }, []);

  return null;
}
