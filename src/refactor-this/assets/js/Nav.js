import React from "react";
import { useAppContext } from "./App.context";

const Nav = () => {
  const {category, setCategory} = useAppContext();
  
  const handleClick = (cat) => {
    setCategory(cat);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Photo Sharing App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className={`nav-link ${category === 'nature' ? 'active' : ''}`} onClick={() => handleClick('nature')} >Nature <span className="sr-only">(current)</span></a>
          <a className={`nav-link ${category === 'architecture' ? 'active' : ''}`} onClick={() => handleClick('architecture')} >Architecture</a>
          <a className={`nav-link ${category === 'fashion' ? 'active' : ''}`} onClick={() => handleClick('fashion')} >Fashion</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
