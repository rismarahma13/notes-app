import React, { useState } from "react";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";

function NotesPage() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Belajar React",
      body: "Mulai dari dasar React",
      archived: false,
    },
    {
      id: 2,
      title: "Beli Groceries",
      body: "Telur, susu, roti",
      archived: false,
    },
  ]);

  return (
    <div>
      <h2>Daftar Catatan</h2>
      <Link to="/add" className="btn">
        + Tambah Catatan
      </Link>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NotesPage;
