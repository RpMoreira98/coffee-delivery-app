import { ReactNode } from "react";
import "./index.css";
type Props = {
  icon: ReactNode;
  text: string;
  text1?: string;
  color: string;
};

export const List = ({ icon, text, color, text1 }: Props) => {
  return (
    <div className="container-list">
      <div className="icon-list" style={{ background: color }}>
        {icon}
      </div>
      <div>
        <p>{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
};
