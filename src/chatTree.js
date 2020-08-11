export const chatTree = [
  { id: 1, type: "p", trigger: 2, content: "OLA" },
  {
    id: 2,
    type: "ul",
    content: "select one",
    elements: [
      { name: "option one" },
      { name: "option two" },
      { name: "option three" }
    ],
    trigger: 3
  },
  { id: 3, type: "p", content: "Thank you for choosing", trigger: 5 },

  { id: 5, type: "div", content: "Thank you", trigger: false }
];
