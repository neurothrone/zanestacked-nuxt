export default eventHandler(() => {
  return getProjects();
});

const getProjects = () => [
  {
    name: "Project Excuses",
    tech: ".NET, Node, Express",
  },
  {
    name: "Byte Me Truck",
    tech: "React, TypeScript",
  }
];
