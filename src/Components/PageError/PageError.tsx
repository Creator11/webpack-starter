import s from './PageError.module.scss';

const PageError = () => {
  return (
    <div className={s.page__error}>
      <p>Произошла непредвиденная ошибка</p>
    </div>
  );
};

export default PageError;
