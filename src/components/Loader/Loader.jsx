import { RotatingLines } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.load}>
      <RotatingLines
        visible={true}
        height="88"
        width="88"
        color="blue"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};
