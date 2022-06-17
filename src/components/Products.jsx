import React, { useState, useEffect } from "react";
// import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import Skeleton from "react-loading-skeleton";
import "../App.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setfilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
    <>
    <div className="col-md-3">
      <Skeleton height={350}/>
</div>
    <div className="col-md-3">
      <Skeleton height={350}/>
</div>
    <div className="col-md-3">
      <Skeleton height={350}/>
</div>
    </>
    );
  };

const filterProduct = (cat) => {
  const updatedList = data.filter((x)=>x.category === cat);
  setfilter(updatedList);
}

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() =>setfilter(data)}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("jewelery")}>Jeweller</button>
          <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((Product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4 " key={Product.id}>
                  <img
                    src={Product.image}
                    className="card-img-top"
                    alt={Product.title} height='250px'
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{Product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">${Product.price}</p>
                    <NavLink to = {`/Product/${Product.id}`} className="btn btn-outline bg-primary text-white">
                Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="rows">
          <div className="col-12 mb-5">
            <h1
              className="display-6 fw-bolder 
            text-center"
            >
              LATEST PRODUCT
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
