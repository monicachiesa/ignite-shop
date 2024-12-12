import { createStitches } from "@stitches/react";

export const {
  //aqui desestrutura e exporta o componente
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      rocketseat: "#8257e6",
      white: "#FFF",
      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: '#e1e1ec',

      green500: '#00875f',
      green300: '#00B37e'
    },
  },
});
