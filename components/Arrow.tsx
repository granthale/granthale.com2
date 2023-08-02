const Arrow = () => {
  return (
    <span className="inline-flex">
      <svg
        fill="none"
        height="24"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
        style={{ color: "currentColor", width: "14px", height: "14px" }}
      >
        <path d="M7 17L17 7"></path>
        <path d="M7 7h10v10"></path>
      </svg>
    </span>
  );
}

export default Arrow