import React from "react";

const Box = ({ box }) =>
    <div
        className="bounding-box"
        style={{ top: box.top, bottom: box.bottom, right: box.right, left: box.left }}
    />;

const FaceRecognition = ({ source, boxes }) => (
    <div className="row justify-content-sm-center">
        <div className="absolute mt2">
            <img
                id="inputImage"
                alt=""
                src={source}
                width="500px"
                height="auto"
            />
            {boxes.map((x, i) => <Box key={i} box={x} />)}
        </div>
    </div>
);

export default FaceRecognition;