import style from "./Loading.module.css";


export const Loading = () => {
    return (
      <div className={style.loadingSpinner}>
        <div className={style.spinner}></div>
      </div>
    );
};
  