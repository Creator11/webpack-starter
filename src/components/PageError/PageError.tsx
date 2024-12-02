import s from "./PageError.module.scss";

const PageError = () => {
  return (
    <div className={s.page__error}>
      <p>An unexpected error has occurred.</p>
    </div>
  );
};

export default PageError;
