import React from 'react'
import styled from "styled-components"
import homeImage from "../assets/hero.png"

const Hero = () => {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage}/>
      </div>
      <div className="content">
        <div className="title">
          <h1>
              Travel. Explore. Now.
            <p>
              Lorem ipsum
            </p>
          </h1>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where do you want to go?</label>
            <input type="text" placeholder="Search your location"/>
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date"/>
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date"/>
          </div>
          <button>
            Explore now
          </button>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 0.5rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
`;

export default Hero