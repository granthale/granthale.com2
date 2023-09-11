import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHTML from "./markdownToHTML";

const musingsDirectory = path.join(process.cwd(), "/data/musings");

export function getAllMusingIds() {
  const fileNames = fs.readdirSync(musingsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getMusingsData(id: string) {
  const fullPath = path.join(musingsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the musing metadata section
  const matterResult = matter(fileContents);

  // Use helper function to turn markdown into HTML
  const contentHTML = await markdownToHTML(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    ...(matterResult.data as {
      title: string;
      date: string;
    }),
    contentHTML,
    id
  };
}
