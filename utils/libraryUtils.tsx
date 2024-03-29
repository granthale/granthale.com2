import BookCard from "../components/cards/BookCard";
const gridSettings = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

export const sortBooks = (sortedBooks, setSortedBooks, criteria) => {
  const sorted = [...sortedBooks].sort((a, b) => {
    if (criteria === "rating") {
      return b.rating - a.rating;
    } else if (criteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (criteria === "recency") {
      return sortByRecency(a, b);
    } else {
      return 0;
    }
  });
  setSortedBooks(sorted);
};

export function sortByRecency(a, b) {
  const isWIP = (date) => date === "WIP";

  if (isWIP(a.dateFinished) && isWIP(b.dateFinished)) {
    return 0; // Both are WIP, so order doesn't matter between them
  } else if (isWIP(a.dateFinished)) {
    return -1; // a is WIP, so it should be sorted after b
  } else if (isWIP(b.dateFinished)) {
    return 1; // b is WIP, so it should be sorted after a
  } else {
    // Your existing logic for comparing dates
    return +new Date(b.dateFinished) - +new Date(a.dateFinished);
  }
}

export const returnRatedBooksGrid = (sortedBooks, r) => {
  if (r === -1) {
    return (
      <>
        <div className={`${gridSettings}`}>
          {sortedBooks
            .filter(
              ({ rating }) => rating !== 10 && rating !== 9 && rating !== 8
            )
            .sort((a, b) => b.dateFinished - a.dateFinished)
            .map(({ id, title, dateFinished }) => (
              <div className="p-4" key={id}>
                <BookCard
                  key={id}
                  title={title}
                  id={id}
                  dateFinished={dateFinished}
                ></BookCard>
              </div>
            ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className={`${gridSettings}`}>
        {sortedBooks
          .filter(({ rating }) => rating === r)
          .sort(
            (a, b) =>
              new Date(b.dateFinished).getTime() -
              new Date(a.dateFinished).getTime()
          )
          .map(({ id, title, dateFinished }) => (
            <div className="p-4" key={id}>
              <BookCard
                key={id}
                title={title}
                id={id}
                dateFinished={dateFinished}
              ></BookCard>
            </div>
          ))}
      </div>
    </>
  );
};

export const returnBooksWFormatting = (sortedBooks, criteria) => {
  // Would this be better off in an API file?
  if (criteria === "rating") {
    return (
      <>
        <h1 className="font-bold text-2xl mt-4">Rating: 10</h1>
        <div className="border mb-4" />
        {returnRatedBooksGrid(sortedBooks, 10)}

        <h1 className="font-bold text-2xl mt-8">Rating: 9</h1>
        <div className="border mb-4" />
        {returnRatedBooksGrid(sortedBooks, 9)}

        <h1 className="font-bold text-2xl mt-8">Rating: 8</h1>
        <div className="border mb-4" />
        {returnRatedBooksGrid(sortedBooks, 8)}

        <h1 className="font-bold text-2xl mt-8">Everything Else</h1>
        <div className="border mb-4" />
        {returnRatedBooksGrid(sortedBooks, -1)}
      </>
    );
  }
  if (criteria === "recency") {
    return (
      <>
        <h1 className="font-bold text-2xl mt-4">Current</h1>
        <div className="border mb-4"></div>
        <div className={`${gridSettings}`}>
          {sortedBooks
            .filter(({ dateFinished }) => dateFinished === "WIP")
            .map(({ id, title, dateFinished }) => (
              <div className="p-4" key={id}>
                <BookCard
                  key={id}
                  title={title}
                  id={id}
                  dateFinished={dateFinished}
                ></BookCard>
              </div>
            ))}
        </div>
        <br />
        <h1 className="font-bold text-2xl mb-4">Everything Else</h1>
        <div className="border mb-4" />
        <div className={`${gridSettings}`}>
          {sortedBooks
            .filter(({ dateFinished }) => dateFinished !== "WIP")
            .sort(
              (a, b) =>
                new Date(b.dateFinished).getTime() -
                new Date(a.dateFinished).getTime()
            )
            .map(({ id, title, dateFinished }) => (
              <div className="p-4" key={id}>
                <BookCard
                  key={id}
                  title={title}
                  id={id}
                  dateFinished={dateFinished}
                ></BookCard>
              </div>
            ))}
        </div>
      </>
    );
  }
  return (
    // else
    <>
      <div className={`${gridSettings}`}>
        {sortedBooks.map(({ id, title, dateFinished }) => (
          <div className="p-4" key={id}>
            <BookCard
              key={id}
              title={title}
              id={id}
              dateFinished={dateFinished}
            ></BookCard>
          </div>
        ))}
      </div>
    </>
  );
};
