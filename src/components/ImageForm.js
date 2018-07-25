import React from "react";

const ImageForm = ({ textChanged, click }) => (
    <div className="form shadow-5 pa3 center">
        <p className="f3">{"Give it a try!"}</p>
        <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={textChanged}
        />
        <button
            onClick={click}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-black">
            Detect
        </button>
    </div>
);

export default ImageForm;