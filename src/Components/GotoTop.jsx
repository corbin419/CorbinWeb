import React, { useState, useEffect } from "react";
import "../CSS/GotoTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/useScrollPosition";
import { HashLink } from "react-router-hash-link";

export default function GotoTop() {
  const [Show, setShow] = useState("GotoTop");
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 20) {
      setShow("GotoTop");
    } else {
      setShow("GotoTop Show");
    }
  }, [scrollPosition]);
  return (
    <HashLink smooth to="/#Home">
      <button className={Show}>
        <AiOutlineArrowUp />
      </button>
    </HashLink>
  );
}
