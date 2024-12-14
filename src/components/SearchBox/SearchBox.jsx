import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";

import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const id = useId();
  const value = useSelector(selectNameFilter);

  return (
    <div className={styles.searchBox}>
      <label className={styles.labelForm}>
        <span>Find contacts by name</span>
        <input
          className={styles.inputSearchboxForm}
          name="username"
          id={id}
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Enter  your presumptive name"
        />
      </label>
    </div>
  );
};

export default SearchBox;
