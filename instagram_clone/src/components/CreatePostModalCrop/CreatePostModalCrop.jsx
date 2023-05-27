import React, { useState } from "react";
import FullWideModal from "../FullWideModal/FullWideModal";
import { BsArrowLeft } from "react-icons/bs";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import "./CreatePostModalCrop.scss";

const CreatePostModalCrop = ({ photos, close, closePrev }) => {
  const [showCropMoreButton, setShowCropMoreButton] = useState(false);
  const [showZoomBar, setShowZoomBar] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(photos[0]);
  const [photoId, setPhotoId] = useState(0);

  // photos.map((item) => setPhotoIndex(item));
  const handleNextPhoto = () => {
    // for (let i = 0; i < photos.length; i++) {
    //   setPhotoIndex(photos[i]);
    // }
    setPhotoIndex(photos[0]);
  };
  console.log(photos);
  console.log(photoIndex);

  const handleAllClose = () => {
    close();
    closePrev();
  };
  return (
    <div>
      <FullWideModal close={close}>
        <div className="create-post-modal-crop">
          <div className="box">
            <div className="header">
              <div className="icon" onClick={handleAllClose}>
                <BsArrowLeft />
              </div>
              <h1>Crop</h1>
              <span>Next</span>
            </div>
            <div className="body">
              <>
                <div className="prev icon">
                  <VscChevronLeft />
                </div>
                <div className="next icon" onClick={handleNextPhoto}>
                  <VscChevronRight />
                </div>
                {/* Images */}
                <img src={URL.createObjectURL(photoIndex)} alt="" />
                {/* Crop Buttons */}
                <div
                  className={`select-crop icon ${
                    showCropMoreButton && "active"
                  }`}
                  onClick={() => {
                    setShowCropMoreButton(!showCropMoreButton);
                    setShowZoomBar(false);
                  }}
                >
                  <svg
                    aria-label="Select crop"
                    className="_ab6-"
                    color="rgb(255, 255, 255)"
                    fill="rgb(255, 255, 255)"
                    height="16"
                    role="img"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path>
                  </svg>
                </div>
                {showCropMoreButton && (
                  <div className="select-crop-more">
                    <ul>
                      <li>
                        <span>Original</span>
                        <svg
                          aria-label="Photo outline icon"
                          className="_ab6-"
                          fill="rgb(255, 255, 255)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z"
                            fillRule="evenodd"
                          ></path>
                          <path
                            d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905"
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </li>
                      <li className="active">
                        <span>1:1</span>
                        <svg
                          aria-label="Crop square icon"
                          className="_ab6-"
                          color="rgb(255, 255, 255)"
                          fill="rgb(255, 255, 255)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M19 23H5a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM5 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z"></path>
                        </svg>
                      </li>
                      <li>
                        <span>4:5</span>
                        <svg
                          aria-label="Crop portrait icon"
                          className="_ab6-"
                          color="rgb(255, 255, 255)"
                          fill="rgb(255, 255, 255)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M16 23H8a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM8 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z"></path>
                        </svg>
                      </li>
                      <li>
                        <span>16:9</span>
                        <svg
                          aria-label="Crop landscape icon"
                          className="_ab6-"
                          color="rgb(255, 255, 255)"
                          fill="rgb(255, 255, 255)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M19 20H5a4.004 4.004 0 0 1-4-4V8a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v8a4.004 4.004 0 0 1-4 4ZM5 6a2.002 2.002 0 0 0-2 2v8a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2Z"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                )}
                {/* Zoom Button */}
                <div
                  className={`zoom icon ${showZoomBar && "active"}`}
                  onClick={() => {
                    setShowZoomBar(!showZoomBar);
                    setShowCropMoreButton(false);
                  }}
                >
                  <svg
                    aria-label="Select zoom"
                    className="_ab6-"
                    color="rgb(255, 255, 255)"
                    fill="rgb(255, 255, 255)"
                    height="16"
                    role="img"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="m22.707 21.293-4.825-4.825a9.519 9.519 0 1 0-1.414 1.414l4.825 4.825a1 1 0 0 0 1.414-1.414ZM10.5 18.001a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Zm3.5-8.5h-2.5v-2.5a1 1 0 1 0-2 0v2.5H7a1 1 0 1 0 0 2h2.5v2.5a1 1 0 0 0 2 0v-2.5H14a1 1 0 0 0 0-2Z"></path>
                  </svg>
                </div>
                {showZoomBar && (
                  <div className="zoom-bar">
                    <input type="range" value={3} min={0} max={10} />
                  </div>
                )}

                <div className="multiple icon">
                  <svg
                    aria-label="Open media gallery"
                    className="_ab6-"
                    color="rgb(255, 255, 255)"
                    fill="rgb(255, 255, 255)"
                    height="16"
                    role="img"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path
                      d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </>
            </div>
          </div>
        </div>
      </FullWideModal>
    </div>
  );
};

export default CreatePostModalCrop;
