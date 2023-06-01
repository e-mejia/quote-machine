import React from "react";

export default function Quote(props) {
  const { setColor, quote, author } = props;
  return (
    <div>
      <h1 className="text" value={quote} style={{ color: `${setColor}` }}>
        {quote}
      </h1>
      <p className="author" value={author} style={{ color: `${setColor}` }}>
        - {author}
      </p>
    </div>
  );
}
