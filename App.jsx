import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages.jsx/Home";
import Books from "./Pages.jsx/Books";
import { books } from "./data";
import BookInfo from "./Pages.jsx/BookInfo";
import Cart from "./Pages.jsx/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart({ ...cart, book });
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route path="/cart" element={<Cart books={books} />} />
        <Footer />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
