import BookCard from "../components/cards/BookCard";

export const sortBooks = (sortedBooks, setSortedBooks, criteria) => {
  const sorted = [...sortedBooks].sort((a, b) => {
    if (criteria === "rating") {
      return b.rating - a.rating;
    } else if (criteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (criteria === "recency") {
      return compareBooks(a, b);
    } else {
      return 0;
    }
  });
  setSortedBooks(sorted);
};

export function compareBooks(a, b) {
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


export const returnBooksWRatings = (sortedBooks, r) => {
  if (r === -1) {
    return (
      <>
        {sortedBooks
          .filter(({ rating }) => rating !== 10 && rating !== 9 && rating !== 8)
          .map(({ id, title, dateFinished }) => (
            <div className="p-4">
              <p className="italic">{dateFinished}</p>
              <BookCard key={id} title={title} id={id}></BookCard>
            </div>
          ))}
      </>
    );
  }
  return (
    <>
      {sortedBooks
        .filter(({ rating }) => rating === r)
        .map(({ id, title, dateFinished }) => (
          <div className="p-4 italic">
            <p>{dateFinished}</p>
            <BookCard key={id} title={title} id={id}></BookCard>
          </div>
        ))}
    </>
  );
};

export const returnBooks = (sortedBooks, criteria) => {
  // Would this be better off in an API file? Yes...
  if (criteria === "rating") {
    return (
      <>
        <br />
        <h1 className="font-bold text-2xl">Rating: 10</h1>
        <div className="border"></div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {returnBooksWRatings(sortedBooks, 10)}
        </div>

        <br />
        <br />
        <h1 className="font-bold text-2xl">Rating: 9</h1>
        <div className="border"></div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {returnBooksWRatings(sortedBooks, 9)}
        </div>

        <br />
        <br />
        <h1 className="font-bold text-2xl">Rating: 8</h1>
        <div className="border"></div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {returnBooksWRatings(sortedBooks, 8)}
        </div>

        <br />
        <br />
        <h1 className="font-bold text-2xl">Everything Else</h1>
        <div className="border"></div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {returnBooksWRatings(sortedBooks, -1)}
        </div>
      </>
    );
  }
  if (criteria === "recency") {
    return (
      <>
        <br />
        <h1 className="font-bold text-2xl">Current</h1>
        <div className="border"></div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedBooks
            .filter(({ dateFinished }) => dateFinished === "WIP")
            .map(({ id, title, dateFinished }) => (
              <div className="p-4 italic">
                <p>{dateFinished}</p>
                <BookCard key={id} title={title} id={id}></BookCard>
              </div>
            ))}
        </div>

        <br />
        <br />
        <h1 className="font-bold text-2xl">Everything Else</h1>
        <div className="border"></div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedBooks
            .filter(({ dateFinished }) => dateFinished !== "WIP")
            .map(({ id, title, dateFinished }) => (
              <div className="p-4 italic">
                <p>{dateFinished}</p>
                <BookCard key={id} title={title} id={id}></BookCard>
              </div>
            ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedBooks.map(({ id, title, dateFinished }) => (
          <div className="p-4 italic">
            <p>{dateFinished}</p>
            <BookCard key={id} title={title} id={id}></BookCard>
          </div>
        ))}
      </div>
    </>
  );
};