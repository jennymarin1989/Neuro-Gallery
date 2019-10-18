import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import Heading from '../../components/atoms/Heading'
import './_home.scss';


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <div id="cursor"> </div>
        <Heading heading="Welcome to Mind Gallery" tag="h1" className="home-title" />
        <Link
          className="home-link"
          to="/instructions"
        >
          Start!
        </Link>
      </header>
    </div >
  );
}

export default Home;
