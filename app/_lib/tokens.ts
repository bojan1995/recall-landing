export const tokens = {
  bg: "#1C1E26",
  bg2: "#22252F",
  bg3: "#2E3140",
  border: "#2E3140",
  borderM: "#3A3D4F",
  text: "#E2E4EE",
  dim: "#9CA3BA",
  faint: "#5A5F75",
  accent: "#E8FF47",
  blue: "#5BA4FF",
  red: "#FF6B6B",
  green: "#5BFFA0",
} as const;

export type TokenKey = keyof typeof tokens;
