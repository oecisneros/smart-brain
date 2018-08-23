import React from "react";

const Rank = ({ name, entries }) => (
    <div>
        <div className="white f4 pa3">{`${name}, your current rank is...`}</div>
        <div className="white f2 ">{entries}</div>
    </div>
);

export default Rank;