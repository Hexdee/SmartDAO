import { ReactNode } from "react";
import { Loader } from "../../../assets/svgs";

interface buttonProps {
  children: ReactNode;
  bg: string;
  isLoading: boolean;
  disabled: boolean;
  width: string;
  href: string;
  color: string;
  handleClick: (arg0: any) => void;
}

const defaultProps: buttonProps = {
  children: "",
  bg: "bg-primary",
  isLoading: false,
  disabled: false,
  width: "w-fit-content",
  href: "",
  color: "white",
  handleClick: (e) => {}
};

const CustomButton = ({ children, bg, isLoading, disabled, width, href, color, handleClick }: buttonProps) => (
  <a href={href}>
    <button
      type="button"
      className={`${bg} px-4 py-3 rounded-lg hover:opacity-80 flex items-center trans disabled:opacity-50 ${width} justify-center text-${color}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {isLoading && Loader}
      {children}
    </button>
  </a>
);

CustomButton.defaultProps = defaultProps;

export default CustomButton;
