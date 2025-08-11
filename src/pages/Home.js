import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setBody("");
  };

  const handleArchive = (id) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, archived: true } : note))
    );
  };

  return (
    <div className="page-container">
      <h2>Catatan Aktif</h2>

      <form onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="Judul catatan..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="btn" type="submit">
          Tambah Catatan
        </button>
      </form>

      <div className="notes-grid">
        {notes.filter((note) => !note.archived).length === 0 && (
          <p>Belum ada catatan aktif.</p>
        )}
        {notes
          .filter((note) => !note.archived)
          .map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <small>{new Date(note.createdAt).toLocaleString()}</small>
              <br />
              <Link className="btn" to={`/detail/${note.id}`}>
                Detail
              </Link>
              <button
                className="btn"
                style={{ background: "#f39c12", marginLeft: "5px" }}
                onClick={() => handleArchive(note.id)}
              >
                Arsipkan
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
