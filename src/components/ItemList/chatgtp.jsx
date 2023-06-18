
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ItemList.css";
import ProductCard from "../ProductCard/ProductCard";

const API_URL = "https://dummyjson.com/products";

const ItemList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        setProducts(json.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filtered = products.filter(product => product.categoryId === categoryId);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId, products]);

  return (
    <div className="cards-list margin05rem">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} item={product} className="heigt40rem" />
      ))}
    </div>
  );
};

export default ItemList;

