import css from "./Error.module.css";
const Error = () => {
  return (
    <div>
      <p className={css.errorMsg}>Something went wrong</p>
    </div>
  );
};

export default Error;
