// src/smooth-doc/theme.js
import { theme as baseTheme } from "smooth-doc/src/theme";
import NightOwlTheme from "prism-react-renderer/themes/nightOwl";

export const theme = {
  ...baseTheme,
  "prism-theme": () => ({
    styles: [
      // added
      {
        types: ["comment", "prolog", "cdata"],
        style: {
          color: "rgb(99, 119, 119)",
        },
      },
      // changed
      {
        types: ["variable", "important", "regex"],
        style: {
          color: "rgb(214, 222, 235)",
        },
      },
      // changed
      {
        types: ["punctuation"],
        style: {
          color: "rgb(199, 146, 234)",
        },
      },
      // added
      {
        types: ["deleted"],
        style: {
          color: "rgba(239, 83, 80, 0.56)",
        },
      },
      // added
      {
        types: ["boolean"],
        style: {
          color: "rgb(255, 88, 116)",
        },
      },
      // added
      {
        types: ["number"],
        style: {
          color: "rgb(247, 140, 108)",
        },
      },
      // added
      {
        types: ["symbol", "property"],
        style: {
          color: "rgb(128, 203, 196)",
        },
      },
      // changed
      {
        types: ["constant", "function", "builtin", "char"],
        style: {
          color: "rgb(130, 170, 255)",
        },
      },
      // changed
      {
        types: ["tag", "operator", "keyword"],
        style: {
          color: "rgb(127, 219, 202)",
        },
      },
      // added
      {
        types: ["selector", "doctype"],
        style: {
          color: "rgb(199, 146, 234)",
        },
      },
      // changed
      {
        types: ["attr-name", "inserted"],
        style: {
          color: "rgb(173, 219, 103)",
          fontStyle: "italic",
        },
      },
      // added
      {
        types: ["string", "url", "entity"],
        style: {
          color: "rgb(173, 219, 103)",
        },
      },
      // added
      {
        types: ["class-name", "atrule", "attr-value"],
        style: {
          color: "rgb(255, 203, 139)",
        },
      },
    ],
  }),
};
