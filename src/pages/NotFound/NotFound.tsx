import s from "./NotFound.module.scss";

export const NotFound: React.FC = () => {
  return (
    <div className={s.NotFound}>
      <div className={s.Wrapper}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </div>
  );
};
