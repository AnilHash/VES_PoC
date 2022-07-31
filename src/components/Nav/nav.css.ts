import { style } from "@vanilla-extract/css";
export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  padding: "19px 100px",
  background: "black",
  width: "100vw",
  color: "white",
  fontWeight: 200,
  justifyContent: "space-between"
});
export const navLeftStyle = style({
  fontSize: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

export const navRightStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  gap: 20
});

export const logoStyle = style({
  fontWeight: 900,
  marginRight: "12px"
});
export const titleStyle = style({
  borderLeft: "2px solid white",
  padding: "10px"
});
