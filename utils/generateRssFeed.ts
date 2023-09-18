import RSS from "rss";
import fs from "fs";
import path from "path";
import { writing } from "../data/writing";
import { getData, getSortedData } from "./usePosts";
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
  const sortedPosts = getSortedPosts();

  const feedOptions = {
    title: "grant hale",
    description: "Writing and musing by Grant Hale",
    feed_url: `${site_url}/rss.xml`,
    site_url: site_url,
    copyright: `(c) ${new Date().getFullYear()} grant hale`,
  };
  const feed = new RSS(feedOptions);

  for (const post of sortedPosts) {
    console.log("Current Post:", post);  // <-- Add this line
    let description = post.title;
    if ('link' in post) {
      description += post.description + "\n\n" + post.link;
    } 
    else if ('id' in post) { // Add the content of the post to the RSS feed
        const postContent = await getData((post.id as string), "musings");
        description += "\n\n" + postContent.contentHTML;
    }
    // If link is present, use it; otherwise, use "writing/{id}"
    const url = ("link" in post) ? post.link : `writing/${post.id}`;

    feed.item({
      title: post.title,
      description: description,
      author: "Grant Hale",
      date: new Date((post as any).date),
      url: url,
    });
    }

  const fullFilePath = path.join(process.cwd(), "public", "rss.xml");

  await fs.promises.writeFile(fullFilePath, feed.xml());
  } catch (e) {
    console.error("RSS feed generation failed:", e);
    throw e;
  }
}