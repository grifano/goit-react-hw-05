import clsx from "clsx";
import css from "./BackButton.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function BackButton() {
  const backButtonClass = clsx("button", css.isBackButton);
  return (
    <button className={backButtonClass}>{<RiArrowGoBackFill />}Go back</button>
  );
}
