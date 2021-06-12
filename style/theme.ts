const partialTheme = {
  breakpoints: [32, 48, 64, 80],
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  radii: [0, 2, 4],
};

export const lightTheme = {
  ...partialTheme,
  dark: false,
  colors: {
    black: '#000',
    white: '#fff',

    strongText: '#000000',
    weakText: '#A3ADC0',

    background: '#F7F9FC', //'#1A2138' : ,
    frontground: '#F9F9F9', // '#212A43'
  },
};

export const darkTheme = {
  ...partialTheme,
  dark: true,
  colors: {
    black: '#000',
    white: '#fff',

    strongText: '#ffffff',
    weakText: '#7C88A0',

    background: '#1A2138', //'#1A2138' : ,
    frontground: '#212A43', // '#212A43'
  },
};

export type Theme = typeof lightTheme;
