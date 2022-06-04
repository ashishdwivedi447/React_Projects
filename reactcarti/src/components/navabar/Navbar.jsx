import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingBag } from "react-icons/fa";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.main}>
      <Link to="/" className={styles.links}>Home</Link>
      <Link to="/about" className={styles.links}>About Us</Link>
      <Link to="/men" className={styles.links}>Men</Link>
      <Link to="/women" className={styles.links}>Women</Link>
      <Link to="/kids" className={styles.links}>Kids</Link>
      <Link to="/faq" className={styles.links}>FAQ</Link>
      <Link to="/contact" className={styles.links}>Contact Us</Link>
      <div className={styles.icon}><FaShoppingBag size="2em"/></div>

    </div>
  )
}

export default Navbar
