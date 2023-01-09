function Button({ handleFunction, name }) {
  return (
    <button type="button" onClick={handleFunction}>
      {name}
    </button>
  );
}

export default Button;
