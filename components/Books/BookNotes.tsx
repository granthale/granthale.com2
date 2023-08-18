function BookNotes({ contentHTML }) {
  return (
    <article
      className="prose prose-lg lg:prose-xl max-w-none"
      dangerouslySetInnerHTML={{ __html: contentHTML }}
    ></article>
  );
}

export default BookNotes;
