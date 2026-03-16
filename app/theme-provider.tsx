"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Theme } from "@radix-ui/themes";
import { Box, IconButton } from "@radix-ui/themes";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

type ThemePresetKey = "iris" | "plumDark" | "mint";

const THEME_PRESETS: Record<
  ThemePresetKey,
  {
    accentColor: "iris" | "plum" | "mint";
    grayColor: "sand" | "slate" | "mauve";
    appearance?: "light" | "dark" | "inherit";
    radius: "small" | "medium" | "large" | "full";
    scaling: "90%" | "95%" | "100%";
  }
> = {
  iris: {
    accentColor: "iris",
    grayColor: "sand",
    appearance: "light",
    radius: "large",
    scaling: "95%"
  },
  plumDark: {
    accentColor: "plum",
    grayColor: "slate",
    appearance: "dark",
    radius: "large",
    scaling: "95%"
  },
  mint: {
    accentColor: "mint",
    grayColor: "mauve",
    appearance: "light",
    radius: "large",
    scaling: "95%"
  }
};

const STORAGE_KEY = "themePresetKey";

function isThemePresetKey(v: unknown): v is ThemePresetKey {
  return v === "iris" || v === "plumDark" || v === "mint";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [presetKey, setPresetKey] = useState<ThemePresetKey>("iris");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isThemePresetKey(stored)) setPresetKey(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, presetKey);
  }, [presetKey]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const preset = THEME_PRESETS[presetKey];
  const mainIcon = useMemo(() => {
    switch (presetKey) {
      case "plumDark":
        return <MoonIcon />;
      case "mint":
        return <Half2Icon />;
      case "iris":
      default:
        return <SunIcon />;
    }
  }, [presetKey]);

  const options: Array<{
    key: ThemePresetKey;
    label: string;
    icon: ReactNode;
  }> = [
    { key: "iris", label: "Iris (light)", icon: <SunIcon /> },
    { key: "plumDark", label: "Plum (dark)", icon: <MoonIcon /> },
    { key: "mint", label: "Mint (light)", icon: <Half2Icon /> }
  ];

  const selectPreset = (key: ThemePresetKey) => {
    setPresetKey(key);
    setOpen(false);
  };

  return (
    <Theme
      accentColor={preset.accentColor}
      grayColor={preset.grayColor}
      appearance={preset.appearance}
      radius={preset.radius}
      scaling={preset.scaling}
    >
      <div className="app-shell" data-theme-preset={presetKey} ref={rootRef}>
        <div className="turbulent-background" aria-hidden="true" />
        <div className="app-content">
          <div className="theme-fab" data-open={open ? "true" : "false"}>
            {open ? (
              <button
                type="button"
                className="theme-fabOverlay"
                aria-label="Close theme menu"
                onClick={() => setOpen(false)}
              />
            ) : null}

            <div className="theme-fabMenu" aria-label="Theme menu">
              {options.map((opt, idx) => (
                <IconButton
                  key={opt.key}
                  type="button"
                  size="3"
                  variant="soft"
                  className="theme-fabOption"
                  data-index={idx}
                  data-active={opt.key === presetKey ? "true" : "false"}
                  aria-label={opt.label}
                  onClick={() => selectPreset(opt.key)}
                >
                  {opt.icon}
                </IconButton>
              ))}
            </div>

            <IconButton
              type="button"
              size="3"
              variant="soft"
              className="theme-fabMain"
              aria-label="Theme"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {mainIcon}
            </IconButton>
          </div>
          {children}
        </div>
      </div>
    </Theme>
  );
}

