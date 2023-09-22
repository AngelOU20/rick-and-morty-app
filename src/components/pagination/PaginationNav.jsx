import PropTypes from "prop-types";

export const PaginationNav = ({ counter, increment, reduce }) => {
  return (
    <div className="container-button-pages">
      <button
        className="btn-page"
        onClick={() => reduce(1, 1)}
        disabled={counter == 1}
      >
        Previus character
      </button>

      <span className="number-page">{counter}</span>

      <button
        className="btn-page"
        onClick={() => increment()}
        disabled={counter >= 42}
      >
        Next character
      </button>
    </div>
  );
};

PaginationNav.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  reduce: PropTypes.func,
};
