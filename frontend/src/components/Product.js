import React, { useState } from "react"; // N'oubliez pas d'importer useState depuis 'react'
import { Link } from "react-router-dom";

function Product({
  location: {
    props: { product },
  },
}) {
  const [details, setDetails] = useState({ quantity: 1, size: "small" });
  
  const handleOnChange = (e) => {
    console.log(e.target, e.target.value);
  };

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="product-image d-block mt-3">
              <img className="img-fluid" src={`images/${product.id}.png`} alt={product.name} /> {/* Corrigé 'prodcut' en 'product' */}
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-2 text-center text-md-left">
            <h2 className="mb-3 mt-0">{product.name}</h2>
            <p className="lead mt-2 mb-3 primary-color">€{product.price}</p>
            <h5 className="mt-4">Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              venenatis velit vestibulum massa sollicitudin auctor. Cras ac
              venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi
              sem ornare quam, sed ultricies mi nisl sit amet purus.
            </p>
            <p>
              Suspendisse potenti. Nunc in libero luctus, sagittis leo sit
              amet, volutpat lacus. Quisque a porta risus. Integer aliquet nibh
              vitae vestibulum accumsan.
            </p>
            <h5 className="mt-5">Care Instructions</h5>
            <p>
              Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem
              malesuada magna mollis euismod.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <label htmlFor="size">Size</label> {/* Utilisez htmlFor au lieu de for */}
                <select
                  value={details.size} // Assurez-vous d'utiliser la valeur de l'état ici
                  name="size"
                  id="size"
                  className="custom-select form-control  mb-4"
                  onChange={handleOnChange}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="quantity">Quantity:</label> {/* Utilisez htmlFor au lieu de for */}
                <input
                  value={details.quantity} // Assurez-vous d'utiliser la valeur de l'état ici
                  id="quantity"
                  name="quantity"
                  type="number"
                  className="form-control quantity mb-4"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <button className="btn btn-full-width btn-lg btn-outline-orange">
              Add to cart
            </button>
          </div>
          <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <Link to="/">
              <i className="fas fa-arrow-left mr-2"></i> Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
