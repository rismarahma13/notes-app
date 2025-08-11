import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Module Bundler",
      date: "14 April 2022",
      body: "Dalam konteks pemrograman JavaScript, module bundler adalah tools yang digunakan ...",
      archived: false,
    },
    {
      id: 2,
      title: "Lifecycle",
      date: "14 April 2022",
      body: "Dalam konteks komponen React, lifecycle adalah serangkaian method yang menjadi siklus hidup ...",
      archived: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  const addNote = () => {
    if (newTitle && newBody) {
      const newNote = {
        id: Date.now(),
        title: newTitle,
        date: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        body: newBody,
        archived: false,
      };
      setNotes([newNote, ...notes]);
      setNewTitle("");
      setNewBody("");
      setShowForm(false);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) => note.archived === showArchived);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>📒 My Notes</h1>
        <nav>
          <button
            className={!showArchived ? "active" : ""}
            onClick={() => setShowArchived(false)}
          >
            Catatan Aktif
          </button>
          <button
            className={showArchived ? "active" : ""}
            onClick={() => setShowArchived(true)}
          >
            Arsip
          </button>
        </nav>
      </header>

      {/* Halaman List Notes */}
      {!showForm ? (
        <>
          <h2>{showArchived ? "Catatan Arsip" : "Catatan Aktif"}</h2>
          <div className="notes-list">
            {filteredNotes.length === 0 ? (
              <p className="empty-msg">Tidak ada catatan</p>
            ) : (
              filteredNotes.map((note) => (
                <div className="note-card" key={note.id}>
                  <h3>{note.title}</h3>
                  <small>{note.date}</small>
                  <p>{note.body}</p>
                  <div className="note-actions">
                    <button
                      className="delete-btn"
                      onClick={() => deleteNote(note.id)}
                    >
                      Hapus
                    </button>
                    <button
                      className="archive-btn"
                      onClick={() => toggleArchive(note.id)}
                    >
                      {note.archived ? "Kembalikan" : "Arsipkan"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <button className="fab" onClick={() => setShowForm(true)}>
            ＋
          </button>
        </>
      ) : (
        /* Form Tambah Catatan */
        <div className="note-form">
          <h2>Tambah Catatan</h2>
          <input
            type="text"
            placeholder="Judul catatan..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder="Isi catatan..."
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          ></textarea>
          <div className="form-buttons">
            <button className="save-btn" onClick={addNote}>
              ✔ Simpan
            </button>
            <button className="cancel-btn" onClick={() => setShowForm(false)}>
              ✖ Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
