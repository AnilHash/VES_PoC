import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  fontSize: "24px",
  fontWeight: 100,
  padding: "6px 25px",
  border: "2px solid white",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "0.2s all ease-in-out"
});

const backgrounds = {
  primary: { color: "#fff", backgroundColor: "#4C5FD5" },
  secondary: { color: "#fff", backgroundColor: "#607EAA" },
  dark: { color: "#fff", backgroundColor: "#3D3C42" },
  ghost: { color: "white", backgroundColor: "transparent" },
  light: { color: "#000", backgroundColor: "#fff" }
};

export const btnVariant = styleVariants(
  backgrounds,
  ({ backgroundColor, color }) => [
    base,
    {
      border: `${backgroundColor !== "transparent" && "none"}`,
      backgroundColor,
      color,
      ":hover": {
        filter: "contrast(500%)"
      }
    }
  ]
);
