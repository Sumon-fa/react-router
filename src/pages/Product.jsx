import React from "react";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";
function Product() {
  return (
    <section>
      <h1>Products page</h1>
      <ul className={classes.list}>
        <li>
          <Link to="/product/p1"> A book</Link>
        </li>
        <li>
          <Link to="/product/p2"> A carpet</Link>
        </li>
        <li>
          <Link to="/product/p3"> An online course</Link>
        </li>
        <li>
          <Link to="/product/p4/comments"> Comment box</Link>
        </li>
      </ul>
    </section>
  );
}
export default Product;
