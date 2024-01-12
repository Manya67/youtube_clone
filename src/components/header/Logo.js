import React from "react";
import { HamburgerIcon } from "../../utils/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../slice/MenuSlice";

const Logo = () => {
  const dispatch = useDispatch();

  const toggleMenuFun = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-around items-center w-[10%] gap-2">
      <img
        onClick={() => toggleMenuFun()}
        className="h-[24px]"
        src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png?v=2023072222"
        alt="youtube icon"
      />
      <Link to="/">
        <img
          className="h-[24px]"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
          alt="youtube icon"
        />
      </Link>
    </div>
  );
};

export default Logo;
