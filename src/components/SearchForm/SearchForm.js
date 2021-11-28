import styles from "./SearchForm.module.css";

export default function SearchForm({ onSubmit, value }) {
  return (
    <div className={styles.sectionForm}>
      <form
        className={styles.searchForm}
        id="searchForm"
        name="searchForm"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event.target.firstChild.value);
        }}
      >
        <SearchInputSortForm value={value} />
        <ApplyButtonSortForm />
      </form>
    </div>
  );
}

function SearchInputSortForm({ value }) {
  return (
    <input
      className={styles.search}
      id="search"
      type="text"
      name="search"
      defaultValue={value}
      autoFocus
    />
  );
}

function ApplyButtonSortForm() {
  return (
    <button className={styles.formButton} id="formButton" type="submit" name="searchButton">
      Click me!
    </button>
  );
}
