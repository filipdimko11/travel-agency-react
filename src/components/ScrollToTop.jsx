import React, {useState} from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"

const toTop = () => {
  window.scrollTo({top: 0});
}

const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false)
  })
  return (
    <ToTop scrollState={scrollState} onClick={toTop}> 
      <img src={logo} alt="" />
    </ToTop>
  )
}

const ToTop = styled.div`
  display: ${({
    scrollState
  }) => 
  (scrollState ? "block" : "none")};
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;
  background-color: #1900ff39;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  padding: 1rem;
  /* background */
`;

export default ScrollToTop