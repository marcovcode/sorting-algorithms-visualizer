import { create } from "zustand";

type Theme = "dark" | "light" | "system";

type ThemeState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
    theme: "system",
    setTheme: (theme: Theme) => {
        localStorage.setItem("vite-ui-theme", theme);
        set({ theme });
    },
}));
