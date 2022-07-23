import React from 'react'
import styled from 'styled-components'
import {BsLinkedin, BsFacebook, BsInstagram} from "react-icons/bs";
// import {AiFillInstagram} from "react-icons"

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        Copyright &copy; {new Date().getFullYear()} Fildim IO
        
      </span>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#places">Places</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <ul className="social-links">
        <li><BsFacebook/></li>
        <li><BsLinkedin/></li> 
        <li><BsInstagram/></li>
      </ul>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  padding: 2.5rem;
  border-radius: 0.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        /* gap: 2rem; */
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
        svg {
          font-size: 1.3rem;
          transition: 0.3s ease-in-out;
          &:hover {
            color:#302ce9
          }
        }
      }
    }
  }
`;

export default Footer