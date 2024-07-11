import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.searchBar__header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.searchBar__Form}>
          <Field
            className={css.searchBar__Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search by word..."
            name="query"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
