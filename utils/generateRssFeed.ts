import RSS from "rss";
import fs from "fs";
import path from "path";
import { getSortedPosts } from "./getSortedPosts";

export default async function generateRssFeed() {
  const site_url = "https://granthale.com";
  const allPosts = await getSortedPosts();

  const feedOptions = {
    title: "grant hale",
    description: "Writing and musing by Grant Hale",
    feed_url: `${site_url}/rss.xml`,
    site_url: site_url,
    copyright: `(c) ${new Date().getFullYear()} grant hale`,
  };
  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      author: "Grant Hale",
      date: new Date(post.date),
      URL: post.link,
    });
  });

  const fullFilePath = path.join(process.cwd(), "public", "rss.xml");
  // remove the old file
  if (fs.existsSync(fullFilePath)) {
    await fs.promises.unlink(fullFilePath);
  }

  fs.writeFile(fullFilePath, feed.xml(), (err) => {
    if (err) {
      console.log("Error: ", err);
    }
    console.log("RSS feed generation: all good");
  });
}