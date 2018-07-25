import React from "react";

const FaceRecognition = ({ source, box }) => (
    <div className="center ma">
        <div className="absolute mt2">
            <img
                id="inputImage"
                alt=""
                src={source}
                width="500px"
                height="auto"
            />
            <div
                className="bounding-box"
                style={{
                    top: box.top,
                    bottom: box.bottom,
                    right: box.right,
                    left: box.left
                }}
            />
        </div>
    </div>
);

export default FaceRecognition;