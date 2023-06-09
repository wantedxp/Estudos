import PropTypes from "prop-types";

Games.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func,
};

export default function Games({ title, cover, onRemove }) {
  return (
    <div>
      {cover && <img src={cover} alt="" />}
      <div>
        <h3>{title}</h3>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
}
