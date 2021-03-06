import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const theme =
  {
    brandColor: "#00205B",
    pageHeadingBackground: "#000000",
    sidebarColorActive: "#505DCD",
    sidebarColorText: "#00205B",
    sidebarColorTextActive: "#505DCD",
    sidebarColorHeading: "#00205B",
    codeColor: "#00205B",
    linkColor: "#505DCD",
    textMedium: "#00205B",
    bgDark: "#000000",
    bgLight: "#FFFFFF"
  };

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./pages/intro.md"))
  },
  {
    title: "Style",
    pages: [
      {
        path: 'colors',
        title: "Colors",
        component: require('./pages/style/colors.md'),
      },
      {
        path: 'principles',
        title: "Principles",
        component: require('./pages/style/principles.md'),
      },
      {
        path: 'typography',
        title: "Typography",
        component: require('./pages/style/typography.md'),
      },
    ]
  },
];

ReactDOM.render(
  <Catalog
  title="Storytelling Styleguide"
  logoSrc="nzz-storytelling_logo.svg"
  pages={pages}
  theme={theme}
  styles={["/theme.css"]}
  />,
  document.getElementById("catalog")
);
