import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Catatan ditambahkan:\n${title}\n${body}`);
    navigate("/");
  };

  return (
    <div>
      <h2>Tambah Catatan Baru</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default AddNotePage;
