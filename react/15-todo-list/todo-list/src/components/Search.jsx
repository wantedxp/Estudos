import PropTypes from "prop-types";

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default function Search({ search, setSearch }) {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar por tarefa"
      />
    </div>
  );
}
