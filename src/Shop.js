import React, { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(process.env.REACT_APP_SHOP_DATA_URL).then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Book Shop</h1>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "row dense",
          justifyItems: "center",
        }}
      >
        {items.map((item) => (
          <div
            style={{
              padding: "8px 16px",
              border: "1px solid black",
              borderRadius: "12px",
              width: "300px",
            }}
            key={item.id}
          >
            <h3>{item.name}</h3>

            <img
              style={{ maxWidth: "100%" }}
              src={item.imageUrl}
              alt={item.name}
            />
            <div>${Number(item.price).toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
