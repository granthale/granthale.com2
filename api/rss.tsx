import generateRssFeed from "../utils/generateRssFeed";

export default (req, res) => {
  const feed = generateRssFeed(); // Your function to generate the feed
  res.setHeader("Content-Type", "application/rss+xml");
  res.end(feed);
};
