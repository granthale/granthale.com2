import { writing } from "../data/writing";
import { getSortedData } from "./usePosts";
import { Musing } from "../pages/writing/[id]";

const musing = getSortedData<Musing>("musings");

export const getSortedPosts = () => {
  return (
    [...musing, ...writing]
      // Sort posts by date
      .sort((a: any, b: any) => {
        if ((a as { date: string }).date < (b as { date: string }).date) {
          return 1;
        } else {
          return -1;
        }
      })
  );
};
