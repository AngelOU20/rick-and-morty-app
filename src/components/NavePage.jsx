import PropTypes from "prop-types";

export const NavePage = ({ counter, increment, reduce }) => {
  return (
    <div className="container-button-pages">
      <button onClick={() => reduce(1, 1)} disabled={counter == 1}>
        Previus character
      </button>

      <span>{counter}</span>

      <button onClick={() => increment()} disabled={counter >= 42}>
        Next character
      </button>
    </div>
  );
};

NavePage.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  reduce: PropTypes.func,
};
