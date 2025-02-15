import React from "react";

export default function TodoItem({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>X</button>
    </li>
  );
}
