import css from "./SectionWrap.module.css";

export default function SectionWrap({ children }) {
  return <div className={css.sectionWrap}>{children}</div>;
}
