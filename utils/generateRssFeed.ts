import RSS from "rss";
import fs from "fs";
import path from "path";
import { writing } from "../data/writing";
import { getSortedData } from "./usePosts";
import { Musing } from "../pages/writing/[id]";

const musing = getSortedData<Musing>("musings");

export const getSortedPosts = () => {
  return (
    [...musing, ...writing]
      // Sort posts by date
      .sort((a, b) => {
        if ("date" in a && "date" in b) {
          if (a.date < b.date) {
            return 1;
          } else {
            return -1;
          }
        }
        return 0;
      })
  );
};


export default async function generateRssFeed() {
  try {

  const site_url = "https://granthale.com";
  const allPosts = getSortedPosts();

  const feedOptions = {
    title: "grant hale",
    description: "Writing and musing by Grant Hale",
    feed_url: `${site_url}/rss.xml`,
    site_url: site_url,
    copyright: `(c) ${new Date().getFullYear()} grant hale`,
  };
  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
  if ('date' in post) {
    feed.item({
      title: post.title,
      // TODO: add description
        // if post.link, add to description
        // if post.description, add to description
        // if neither, add content to description
      description: "",
      author: "Grant Hale",
      date: new Date(post.date),
      URL: post.link,
    });
  }}
  );

  const fullFilePath = path.join(process.cwd(), "public", "rss.xml");

  await fs.promises.writeFile(fullFilePath, feed.xml());
  } catch (e) {
    console.error("RSS feed generation failed:", e);
    throw e;
  }
}