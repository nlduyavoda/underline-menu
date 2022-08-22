import { useEffect, useRef, useState } from "react";
import onSlideUnderline from "./SlideUnderlineController";
import "./menu.scss";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const underLineRef = useRef(null);
  const activeRef = useRef(null);
  const mockArr = [1, 2, 3];

  useEffect(() => {
    onSlideUnderline(underLineRef, activeRef, selectedItem);
  }, [selectedItem]);

  return (
    <div className="menu">
      {mockArr.map((_, idx) => {
        return (
          <div
            key={idx}
            ref={idx === selectedItem ? activeRef : null}
            className={`item ${idx === selectedItem ? "active" : ""}`}
            onClick={() => setSelectedItem(idx)}
          >
            item
          </div>
        );
      })}
      <div className="underline" ref={underLineRef}></div>
    </div>
  );
};

export default Menu;
