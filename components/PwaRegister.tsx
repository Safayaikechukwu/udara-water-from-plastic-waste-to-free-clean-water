"use client";

import { useEffect } from "react";

/** Registers the service worker so the site can be installed / added to Home Screen (incl. localhost). */
export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* ignore — iOS Add to Home Screen still works without SW */
    });
  }, []);

  return null;
}
