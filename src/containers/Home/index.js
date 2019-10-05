import React from 'react';
import logo from '../../logo.svg';
import Heading from '../../components/atoms/Heading'
import './_home.scss';


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <div id="cursor"> </div>
        <Heading heading="Welcome to Mind Gallery" tag="h1" className="home-title" />
        <a
          className="home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start!
        </a>
      </header>
    </div>
  );
}

export default Home;
