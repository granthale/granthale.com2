

function BookNotes({ contentHTML }) {
  return (
    <div className="text-xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </div>
  );
}

export default BookNotes;
