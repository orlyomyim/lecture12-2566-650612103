import { themeContext } from "@/contexts/ThemeContext" ;
import { useContext } from "react" ;


export const Header = () => {
  return (
    <p className="display-3 text-center fst-italic">
      A simple useContext example
      <p
      className="display-3 text*center fst-italic"
      style={{color: theme.fgColor}}
      >
        A simple useContext example
    </p>
  );
};
