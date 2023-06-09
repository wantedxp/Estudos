import { useRef, useState } from "react";
import PropTypes from "prop-types";

GameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function GameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const fileInputRef = useRef(null);

  function handleSubmit(ev) {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
    fileInputRef.current.value = "";
  }

  function handleCoverChange(ev) {
    const file = ev.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCover(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cover">Capa: </label>
        <input
          type="file"
          accept="image/*"
          id="cover"
          name="cover"
          onChange={handleCoverChange}
          ref={fileInputRef}
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}
