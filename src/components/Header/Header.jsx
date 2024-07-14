import { useRef, useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import Container from "../Container/Container";

export default function Header() {
  const [headerOffsetWidth, setHeaderOffsetWidth] = useState();
  const headerRef = useRef();

  useEffect(() => {
    setHeaderOffsetWidth(headerRef.current.offsetWidth);
  }, [headerOffsetWidth]);
  return (
    <header>
      <Container>
        <div ref={headerRef} className={css.header__wrap}>
          <h1 className={css.mainTitle}>
            {headerOffsetWidth > 600 ? "Movies App" : "Movies"}
          </h1>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
