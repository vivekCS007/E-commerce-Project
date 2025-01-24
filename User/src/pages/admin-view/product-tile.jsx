import React from "react";
import "./AdminProductTile.css";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <div className="card">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="card-img"
          />
        </div>
        <div className="card-content">
          <h2>{product?.title}</h2>
          <div className="price-wrapper">
            <span
              className={`price ${product?.salePrice > 0 ? "line-through" : ""}`}
            >
              ${product?.price}
            </span>

            {product?.salePrice > 0 && (
              <span className="sale-price">${product?.salePrice}</span>
            )}
          </div>
        </div>
        <div className="card-footer">
          <button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(product?._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default AdminProductTile;
