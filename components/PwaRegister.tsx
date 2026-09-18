"use client";

import { useEffect } from "react";

/** Drop stale service workers so old hide-on-scroll JS/CSS cannot keep running. */
export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => {
        void reg.unregister();
      });
    });

    if ("caches" in window) {
      void caches.keys().then((keys) =>
        Promise.all(keys.map((key) => caches.delete(key))),
      );
    }
  }, []);

  return null;
}
