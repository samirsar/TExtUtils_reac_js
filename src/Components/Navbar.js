// rfc-- shortcut

import PropTypes from 'prop-types';

import React,{useState} from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.them} bg-${props.them}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
             
            </ul>
            <form className="d-flex">
            <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.switch} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.them=='dark'?'white':'black'}} >{props.text_enable}</label>
</div>
            </form>
          </div>
        </div>
      </nav>
      
      
    )
}
Navbar.propTypes={
  title:PropTypes.string
};

Navbar.defaultProps={
  title:"set the title"
};