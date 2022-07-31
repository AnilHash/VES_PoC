import { globalStyle } from "@vanilla-extract/css";

globalStyle("*,*::before,*::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily: ["sans-serif"]
});

globalStyle("body", {
  lineHeight: 1
});
