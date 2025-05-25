const navData = [
  {
    title: "HOME",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "" },
      { title: "SUB MENU 2", path: "" },
      { title: "SUB MENU 3", path: "" },
    ],
  },
  {
    title: "PAGES",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "" },
      { title: "SUB MENU 2", path: "" },
      { title: "SUB MENU 3", path: "" },
    ],
  },
  { title: "TRACKING", type: "link", path: "" },
  {
    title: "SERVICES",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "" },
      { title: "SUB MENU 2", path: "" },
      { title: "SUB MENU 3", path: "" },
    ],
  },
  {
    title: "BLOG",
    type: "dropdown",
    children: [
      { title: "SUB MENU 1", path: "" },
      { title: "SUB MENU 2", path: "" },
      { title: "SUB MENU 3", path: "" },
    ],
  },
  {
    title: "GET A QUOTE",
    type: "button",
    path: "",
    variant: "primary",
    onClick: () => alert("Contact clicked!"),
  },
  {
    title: "SIGN IN",
    type: "button",
    path: "",
    variant: "secondary",
    onClick: () => alert("Contact clicked!"),
  },
  //   { title: "Disabled", path: "#", type: "disabled" },
];

export default navData;
