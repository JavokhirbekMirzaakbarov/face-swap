import React, { useState } from "react";
import upload from "../services/fileUpload.service.js";
import icon from "../arrow-repeat.svg";

const image = {
  objectFit: "cover",
  width: "300px",
  height: "400px",
};

const UploadImages = () => {
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [previewImage1, setPreviewImage1] = useState();
  const [previewImage2, setPreviewImage2] = useState();
  const [swappedImage1, setSwappedImage1] = useState();
  const [swappedImage2, setSwappedImage2] = useState();

  const handleFile1 = (event) => {
    const image1 = URL.createObjectURL(event.target.files[0]);

    setFile1(event.target.files[0]);
    setPreviewImage1(image1);
  };

  const handleFile2 = (event) => {
    const image1 = URL.createObjectURL(event.target.files[0]);

    setFile2(event.target.files[0]);
    setPreviewImage2(image1);
  };

  const uploadImages = async () => {
    const res = await upload(file1, file2);
    setSwappedImage1(res);
    const res2 = await upload(file2, file1);
    setSwappedImage2(res2);
  };

  return (
    <div>
      <div className="row mt-5">
        <div className="col-4">
          <label
            htmlFor="image1"
            className="bg-light p-3"
            style={{ cursor: "pointer" }}
          >
            Choose first image
          </label>
          <input
            type="file"
            id="image1"
            style={{ visibility: "hidden" }}
            accept="image/*"
            onChange={handleFile1}
          />
        </div>
        <div className="col-4">
          <label
            htmlFor="image2"
            className="bg-light p-3"
            style={{ cursor: "pointer" }}
          >
            Choose second image
          </label>
          <input
            id="image2"
            type="file"
            style={{ visibility: "hidden" }}
            accept="image/*"
            onChange={handleFile2}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-success btn-lg"
            disabled={!file1 && !file2}
            onClick={uploadImages}
          >
            Swap Images
            <img className="m-2" src={icon} />
          </button>
        </div>
      </div>
      <div className="row">
        {file1 && (
          <div className="col-6">
            <img style={image} src={previewImage1} alt={"image-1"} />
          </div>
        )}
        {file2 && (
          <div className="col-6">
            {" "}
            <img style={image} src={previewImage2} alt={"image-2"} />
          </div>
        )}
      </div>
      <h3 className="text-center">Swapped Image</h3>
      <div className="row">
        {swappedImage1 && (
          <div className="col-6">
            <img
              style={image}
              className="preview"
              src={swappedImage1}
              alt={"image-swapped"}
            />
          </div>
        )}
        {swappedImage2 && (
          <div className="col-6">
            <img
              style={image}
              className="preview"
              src={swappedImage2}
              alt={"image-swapped"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImages;
