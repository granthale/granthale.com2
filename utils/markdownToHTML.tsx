import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
// import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

async function markdownToHTML(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // .use(rehypeSanitize) // if markdown source not trusted
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

export default markdownToHTML;
