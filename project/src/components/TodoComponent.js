import PropTypes from "prop-types";

function TodoComponent({ id, todo }) {
  return <li key={id}> {todo} </li>;
}

TodoComponent.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
};

export default TodoComponent;
