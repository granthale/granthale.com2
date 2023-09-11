function Text({ contentHTML }) {
  return (
    <article
      className="prose dark:text-green-500 prose-lg lg:prose-xl max-w-none"
      dangerouslySetInnerHTML={{ __html: contentHTML }}
    ></article>
  );
}

export default Text;
