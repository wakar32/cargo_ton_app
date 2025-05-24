const navData = [
  {
    title: "HOME",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "/action" },
      { title: "SUB MENU 2", path: "/another-action" },
      { title: "SUB MENU 3", path: "/something-else" },
    ],
  },
  {
    title: "PAGES",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "/action" },
      { title: "SUB MENU 2", path: "/another-action" },
      { title: "SUB MENU 3", path: "/something-else" },
    ],
  },
  { title: "TRACKING", type: "link", path: "/link" },
  {
    title: "SERVICES",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "/action" },
      { title: "SUB MENU 2", path: "/another-action" },
      { title: "SUB MENU 3", path: "/something-else" },
    ],
  },
  {
    title: "BLOG",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "/action" },
      { title: "SUB MENU 2", path: "/another-action" },
      { title: "SUB MENU 3", path: "/something-else" },
    ],
  },
  {
    title: "GET A QUOTE",
    type: "button",
    path: "/link",
    variant: "primary",
    onClick: () => alert("Contact clicked!"),
  },
  {
    title: "SIGN IN",
    type: "button",
    path: "/link",
    variant: "secondary",
    onClick: () => alert("Contact clicked!"),
  },
  //   { title: "Disabled", path: "#", type: "disabled" },
];

export default navData;
