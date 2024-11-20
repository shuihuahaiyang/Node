import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "java",
        icon: "pen-to-square",
        prefix: "java/",
        children: [
          { text: "java1", icon: "pen-to-square", link: "1" },
          "3",
        ],
      },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
    ],
  },
  {
    text: "其他技术文章",
    icon: "book",
    link: "https://#",
  },
]);
