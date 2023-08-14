const visit = require("unist-util-visit");

function rehypeCustomClasses() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "p") {
        node.properties.className = (node.properties.className || "").concat(
          " text-xl"
        );
      }
      if (node.tagName === "ul") {
        node.properties.className = (node.properties.className || "").concat(
          " list-disc pl-5 text-xl"
        );
      }
    });
  };
}

export default rehypeCustomClasses;
