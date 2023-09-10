import { musing } from "../data/musing";
import { writing } from "../data/writing";

export const getSortedPosts = () => {
  return (
    [...musing, ...writing]
      // Sort posts by date
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      })
  );
};
