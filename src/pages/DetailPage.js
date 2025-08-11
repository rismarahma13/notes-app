import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();

  // Data dummy, nanti bisa ambil dari state/global API
  const note = { id, title: "Belajar React", body: "Mulai dari dasar React" };

  if (!note) {
    return <p>Catatan tidak ditemukan.</p>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <Link to="/" className="btn">
        Kembali
      </Link>
    </div>
  );
}

export default DetailPage;
