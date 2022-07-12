import media from "./media";

const theme = {
  media,
  shadow: "0 0 2rem 0 rgba(136, 152, 170, 0.15)",
  shadowHover: "0 0 4rem 0 rgba(136, 152, 170, 0.3)",
  radius: ".3rem",
  color: {
    primary: "#5B97F2",
    secondary: "#8265FC",
    info: "#30CEE7",
    default: "#1f262d",
    success: "#00E18D",
    warning: "#ffab00",
    danger: "#ff4f64",
    gradient: "linear-gradient(135deg, #30cee7, #8265fc);",
    gradientSecondary:
      "linear-gradient(120deg, #1f262d 7%, #514695 38%, #30cee7 97%);"
  },
  grey: {
    dark: "#151a1f",
    semiDark: "#474b4f",
    lightDark: "#6f737a",
    lightGrey: "#aaaeb3",
    veryLightGrey: "#ecedef",
    light: "#f2f2f2"
  }
};

export default theme;
