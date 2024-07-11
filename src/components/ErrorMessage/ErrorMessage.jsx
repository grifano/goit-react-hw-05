import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <p className={css.errorMessage__text}>{message}</p>;
}
