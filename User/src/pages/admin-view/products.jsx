import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminProductTile from "./AdminProductTile";
import ProductImageUpload from "./image-upload";
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/component/config";
import { deleteProduct, fetchAllProducts } from "@/store/admin/products-slice";
import { useToast } from "@/components/ui/use-toast";
import "./AdminProducts.css";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { productList } = useSelector((state) => state.adminProducts);

  function onSubmit(event) {
    event.preventDefault();

    if (currentEditedId !== null) {
      dispatch(
        editProduct({
          id: currentEditedId,
          formData,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          resetForm();
        }
      });
    } else {
      dispatch(
        addNewProduct({
          ...formData,
          image: uploadedImageUrl,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          resetForm();
          toast({ title: "Product added successfully" });
        }
      });
    }
  }

  function handleDelete(productId) {
    dispatch(deleteProduct(productId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .filter((key) => key !== "averageReview")
      .map((key) => formData[key] !== "")
      .every(Boolean);
  }

  function resetForm() {
    setFormData(initialFormData);
    setOpenCreateProductsDialog(false);
    setCurrentEditedId(null);
    setImageFile(null);
    setUploadedImageUrl(null);
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="container">
        <button
          className="add-button"
          onClick={() => setOpenCreateProductsDialog(true)}
        >
          Add New Product
        </button>
      </div>

      <div className={`product-grid md-cols-3 lg-cols-4`}>
        {productList?.length > 0 &&
          productList.map((product) => (
            <AdminProductTile
              key={product.id}
              product={product}
              handleDelete={handleDelete}
              setCurrentEditedId={setCurrentEditedId}
              setOpenCreateProductsDialog={setOpenCreateProductsDialog}
              setFormData={setFormData}
            />
          ))}
      </div>

      {openCreateProductsDialog && (
        <div className="sheet">
          <div className="sheet-header">
            <h2 className="sheet-title">
              {currentEditedId ? "Edit Product" : "Add New Product"}
            </h2>
          </div>
          <div className="sheet-content">
            <div className="form-container">
              <CommonForm
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFormData}
                buttonText={currentEditedId ? "Edit" : "Add"}
                formControls={addProductFormElements}
                isBtnDisabled={!isFormValid()}
              />
            </div>
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoadingState={setImageLoadingState}
              imageLoadingState={imageLoadingState}
              isEditMode={!!currentEditedId}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default AdminProducts;
