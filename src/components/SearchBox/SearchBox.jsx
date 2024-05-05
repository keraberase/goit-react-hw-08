import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilteredName } from "../../redux/filters/selectors";
import { useId } from "react";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const nameFilterSelector = useSelector(selectFilteredName);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        placeholder="Search"
        className={css.field}
        id={id}
        type="text"
        name="searchName"
        value={nameFilterSelector}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
