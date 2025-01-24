import React, { useEffect, useRef } from "react";
import { FileIcon, UploadCloud, X } from "lucide-react";
import axios from "axios";
import "./productimageupload.css";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  imageLoadingState,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
}) {
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);

    try {
      const response = await axios.post(
        "https://localhost:5000/api/admin/products/upload-image",
        data
      );
      if (response?.data?.success) {
        setUploadedImageUrl(response.data.result.url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className="image-upload-container">
      <label htmlFor="image-upload">Upload Image</label>
      <div
        className={`upload-area ${isEditMode ? "disabled" : ""}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          id="image-upload"
          type="file"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <label
            htmlFor="image-upload"
            className={`placeholder ${isEditMode ? "disabled" : ""}`}
          >
            <UploadCloud size={40} />
            <span>Drag & drop or click to upload Image</span>
          </label>
        ) : imageLoadingState ? (
          <div className="skeleton" />
        ) : (
          <div className="file-preview">
            <div className="file-info">
              <FileIcon className="file-icon" />
              <p className="file-name">{imageFile.name}</p>
            </div>
            <button
              type="button"
              className="remove-btn"
              onClick={handleRemoveImage}
            >
              <X size={16} />
              <span className="sr-only">Remove File</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
