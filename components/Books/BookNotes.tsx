function BookNotes({ contentHTML }) {
  return (
    <div className="markdown-content">
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </div>
  );
}

export default BookNotes;
