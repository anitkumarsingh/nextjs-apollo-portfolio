/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-wrapper navbar navbar-expand-lg navbar-dark fj-mw9 "
      >
        <Link href="/">
          <a className="navbar-brand mr-3 font-weight-bold" href="/">
            Anit
          </a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-item mr-3" href="/portfolios">
              <a className="nav-link" href="/portfolios">
                Portfolio
              </a>
            </Link>
            <Link className="nav-item mr-3" href="/resume">
              <a className="nav-link" href="/resume">
                Resume
              </a>
            </Link>
            <Link className="nav-item mr-3" href="/forum/categories">
              <a className="nav-link" href="/forum/categories">
                Ask Me
              </a>
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-item mr-3" href="/login">
              <a className="nav-link" href="/login">
                Sign Up
              </a>
            </Link>
            <Link className="nav-item mr-3" href="/login">
              <a
                className="nav-link btn btn-success bg-green-2 bright"
                href="/login"
              >
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
