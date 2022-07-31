import { globalStyle, style } from "@vanilla-extract/css";

export const mainStyle = style({
  display: "grid",
  placeItems: "center",
  padding: "80px 30px 115px",
  backgroundColor: "#dadbf1"
});
export const heroTitleStyle = style({
  fontSize: "80px",
  fontWeight: "400",
  marginBottom: "16px",
  position: "relative"
});
export const searchInputStyle = style({
  width: "720px",
  height: "66px",
  fontSize: "20px",
  padding: 16
});

globalStyle(`${searchInputStyle}::placeholder`, {
  fontSize: "20px"
});
export const inputWrapperStyle = style({
  position: "relative"
});
export const searchBtnStyle = style({
  width: 80,
  height: 64,
  background: "transparent",
  position: "absolute",
  right: 0
});
