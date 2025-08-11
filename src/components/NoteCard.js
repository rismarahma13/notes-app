import React from "react";
import { Link } from "react-router-dom";

function NoteCard({ note }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <Link to={`/note/${note.id}`} className="btn">
        Detail
      </Link>
    </div>
  );
}

export default NoteCard;
