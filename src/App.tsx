import s from "@/assets/styles/App.module.scss";
import { Outlet } from "react-router";
import "@/assets/styles/index.scss";

export const App = () => {
  return (
    <div className={s.App}>
      <Outlet />
    </div>
  );
};

export default App;
