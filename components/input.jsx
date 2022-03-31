import css from "./input.module.css";


export default function Input(props) {
  return (
    <div className={css.corpoComponente}>
      <label>{props.label}</label>      
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.touched && <div>{props.erro}</div>}</span>
    </div>
  );
}
