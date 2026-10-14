import { extendTheme } from "@chakra-ui/react";

const stylesTheme = {
  colors: {
    egypt: "#1134A6",
    azure: "#0080FE",
    olympic: "#008ECC",
    prim: "#3B6434",
    prim2: "#EDC434",
    prim3: "#F4F0F8",
    textPrim: "#232536",
    text: "#676767",
    footer: "#21212D",
  },
  fonts: {
    heading: "var(--font-open)",
  },
  styles: {
    global: (props) => ({
      "html, body": {
        position: "relative",
        fontSize: "16px",
        overflowX: "hidden",
        color: "textPrim",
        padding: "0",
        margin: "0",
      },
      html: {
        scrollBehavior: "smooth",
      },
      textarea: {
        resize: "none",
      },
      ".swiper-pagination-bullet-active": {
        backgroundColor: "white",
      },
      ".swiper-button-prev": {
        color: "white",
      },
      ".swiper-button-next": {
        color: "white",
      },
      "@media all and (min-width:768px)": {
        "::-webkit-scrollbar-track": {
          background: "prim3",
        },
        "::-webkit-scrollbar": {
          width: "5px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "prim",
          borderRadius: "full",
        },
        ".yt-lite": {
          rounded: "1rem",
        },
      },
    }),
  },
};

const theme = extendTheme(stylesTheme);

export default theme;
