"use client";

import { useEffect } from "react";

const LIGHT_ICON = "/favicon-for-light-theme-browser.ico";
const DARK_ICON = "/favicon-for-dark-theme-browser.ico";

function setFavicon(href: string) {
  try {
    // Use a dedicated link element we control.
    let link = document.querySelector("link[rel*='icon'][data-theme-favicon]") as HTMLLinkElement | null;
    if (!link) {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.dataset.themeFavicon = "true";
      document.head.appendChild(newLink);
      link = newLink;
    }
    if (link.href !== href) link.href = href;
  } catch (e) {
    // Best-effort only; don't break the app if favicon change fails.
    // eslint-disable-next-line no-console
    console.warn("ThemeFaviconSwitch: failed to set favicon", e);
  }
}

export default function ThemeFaviconSwitch() {
  useEffect(() => {
    if (typeof globalThis === "undefined" || typeof globalThis.matchMedia !== "function") return;

    const mq = globalThis.matchMedia("(prefers-color-scheme: dark)");

    const update = (mql: MediaQueryList | MediaQueryListEvent) => {
      const prefersDark = "matches" in mql ? mql.matches : false;
      // Serve the opposite favicon to the current theme
      setFavicon(prefersDark ? DARK_ICON : LIGHT_ICON);
    };

    // initial
    update(mq);

    // Listen for changes (modern and legacy APIs)
    // Use a single handler so we can remove it from either API.
    const handler = (e: MediaQueryListEvent) => update(e);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler as (this: MediaQueryList, ev: MediaQueryListEvent) => void);
      return () => mq.removeEventListener("change", handler as (this: MediaQueryList, ev: MediaQueryListEvent) => void);
    }

    // Older browsers exposed addListener/removeListener on MediaQueryList.
    // Narrow to a legacy-compatible shape without using `any`.
    type LegacyMql = MediaQueryList & {
      addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
    };

    const legacy = mq as LegacyMql;
    if (typeof legacy.addListener === "function") {
      legacy.addListener(handler as (this: MediaQueryList, ev: MediaQueryListEvent) => void);
      return () => legacy.removeListener?.(handler as (this: MediaQueryList, ev: MediaQueryListEvent) => void);
    }
  }, []);

  return null;
}
