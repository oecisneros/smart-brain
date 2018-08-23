import React from "react";

const ImageForm = ({ textChanged, click }) =>
    <div className="container">
        <p className="f3">Give it a try!</p>
        <div className="row justify-content-sm-center">
            <input
                type="text"
                className="form-control col-sm-4"
                placeholder="Image"
                onChange={textChanged}
            />
            <button
                type="submit"
                className="btn btn-dark mb-2"
                onClick={click}>
                Detect
            </button>
        </div>
    </div>;

export default ImageForm;