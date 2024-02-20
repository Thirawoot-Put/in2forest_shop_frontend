import React from "react";

function DetailBox({ title, content }) {
  return (
    <div>
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="text-xl">{content}</div>
    </div>
  );
}

export default DetailBox;
