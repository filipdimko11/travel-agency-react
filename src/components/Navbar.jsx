import React from 'react'
import styled from 'styled-components'
// import "./Navbar.css"
import logo from "../assets/logo.png"
import {BsPerson} from "react-icons"

const Navbar = () => {
  return (
    <>
    <Nav>
      <div className="brand">
        <div className="container">
          <img src={logo} alt="" className="" />
          Travelo
        </div>
        <div className="toggle"></div>
      </div>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">About</a></li>
        <li><a href="#recommend">Places</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <button>Connect</button>
    </Nav>
    </>
  )
}

const Nav = styled.nav`
    display: flex;
    /* margin: 8px; */
    justify-content: space-between;
    align-items: center;
    .brand {
      .container {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        font-size: 1.2rem;
        font-weight: 900;
        text-transform: uppercase;
      }
      .toggle {
        display: none;
      }
    }
    ul {
      display: flex;
      list-style-type: none;
      gap: 1rem;
      li {
        a {
          text-decoration: none;
          color: #0077b6;
          font-size: 1.2rem;
          transition: 1s ease-in;
          &:hover {
            color: #023e8a;
          }
        }
        &:first-of-type {
          a {
            color: #023e8a;
            font-weight: 900;
          }
        }
      }
    }
    button {
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      cursor: pointer;
      border: none;
      color: white;
      background-color: #48cae4;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 1.1rem; 
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #023e8a;
      }
    }
  `;

export default Navbar