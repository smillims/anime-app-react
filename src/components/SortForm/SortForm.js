import PT from "prop-types";

import styles from "./SortForm.module.css";

const SortForm = ({ onSubmit, value }) => (
  <div className={styles.sectionForm}>
    <form
      className={styles.sortForm}
      id="sortForm"
      name="sortForm"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event.target.firstChild.value);
      }}
    >
      {SearchInputSortForm(value)}
      {ApplyButtonSortForm()}
    </form>
  </div>
);

SortForm.propTypes = {
  onSubmit: PT.func,
  value: PT.string,
};

const SearchInputSortForm = (value) => (
  <input
    className={styles.search}
    id="search"
    type="text"
    name="search"
    defaultValue={value}
    autoFocus
  />
);

SearchInputSortForm.propTypes = {
  value: PT.string,
};

const ApplyButtonSortForm = () => (
  <button className={styles.formButton} id="formButton" type="submit" name="searchButton">
    Click me!
  </button>
);

export default SortForm;
