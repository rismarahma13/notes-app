import React from "react";
import { Link } from "react-router-dom";

function ArchivesPage() {
  const archivedNotes = [
    { id: 1, title: "Catatan Lama", body: "Ini adalah catatan lama" },
  ];

  return (
    <div>
      <h2>Arsip Catatan</h2>
      <Link to="/" className="btn">
        Kembali ke Beranda
      </Link>
      {archivedNotes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ArchivesPage;
