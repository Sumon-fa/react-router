import React from "react";
import { Route, useHistory } from "react-router-dom";
function ProductDetails() {
  const history = useHistory();
  function commentClickHandler() {
    history.push("/welcome");
  }
  return (
    <section>
      <h1>Product details</h1>
      <Route path="/product/:productId/comments">
        <p>comment here</p>
        <button onClick={commentClickHandler}>Click</button>
      </Route>
    </section>
  );
}
export default ProductDetails;
