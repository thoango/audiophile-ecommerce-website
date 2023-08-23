import classes from "./AmountInput.module.css";

const AmountInput = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <button type="button" onClick={props.onRemoveOne}>
        -
      </button>
      <input
        type="number"
        min={1}
        value={props.amount}
        onChange={props.onChangeInput}
        onBlur={props.onBlur}
      />
      <button type="button" onClick={props.onAddOne}>
        +
      </button>
    </div>
  );
};
export default AmountInput;
