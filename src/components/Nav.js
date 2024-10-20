import React from "react";
import styled from "styled-components";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <NavWrapper>
      <Header>
        <div className="logo">
          <h1 onClick={() => (window.location.href = "/")}>여가거가</h1>
        </div>

        <MenuContainer>
          <ul className="main-menu">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "action" : ""}
              >
                메인
              </Link>
            </li>
            <li>
              <Link
                to="/sightseeing"
                className={location.pathname === "/sightseeing" ? "action" : ""}
              >
                관광명소
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className={location.pathname === "/event" ? "action" : ""}
              >
                행사/축제
              </Link>
            </li>
          </ul>
        </MenuContainer>
      </Header>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
`;

const Header = styled.header`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuContainer = styled.div`
  ul {
    display: flex;
  }

  li {
    margin: 0 14px;
  }

  a {
    text-decoration: none;
    color: inherit;

    &.action {
      color: #007bff;
      font-weight: bold;
    }
  }
`;
