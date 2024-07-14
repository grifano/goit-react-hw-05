import css from "./CustomErrorMessage.jsx.module.css";

export default function CustomErrorMessage({ message }) {
  return <p className={css.errorMessage__text}>{message}</p>;
}
