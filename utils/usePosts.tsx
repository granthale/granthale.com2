import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHTML from "./markdownToHTML";

// For index.tsx
export function getSortedData<T>(directory: string) {
  directory = path.join(process.cwd(), `/data/${directory}`);
  // Get file names under /books
  const fileNames = fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".md"));
  const allData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the book metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as T),
    };
  });
  // TODO: Sort books by rating, sort musing by dateFinished
  return allData;
}

// for [id].tsx
export function getAllIds(directory: string) {
  directory = path.join(process.cwd(), `/data/${directory}`);
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// for [id].tsx
export async function getData<T>(
  id: string,
  directory: string
): Promise<T & { contentHTML: string; id: string }> {
  const fullPath = path.join("data/", directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);

  // Use helper function to turn markdown into HTML
  const contentHTML = await markdownToHTML(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    ...(matterResult.data as T),
    contentHTML,
    id,
  };
}
