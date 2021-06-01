import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const Navigationbar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-wrapper navbar navbar-expand-lg navbar-dark fj-mw9 "
      >
        <Link href="/">
          <a className="navbar-brand mr-3 font-weight-bold">Anit</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-item mr-3" href="/portfolios">
              <a className="nav-link">Portfolio</a>
            </Link>
            <Link className="nav-item mr-3" href="/resume">
              <a className="nav-link">Resume</a>
            </Link>
            <Link className="nav-item mr-3" href="/forum/categories">
              <a className="nav-link">Ask Me</a>
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-item mr-3" href="/login">
              <a className="nav-link">Sign Up</a>
            </Link>
            <Link className="nav-item mr-3" href="/login">
              <a className="nav-link btn btn-success bg-green-2 bright">
                Sign In
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navigationbar;
