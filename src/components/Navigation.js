import React from "react";
import ProfileIcon from "./ProfileIcon"

const Navigation = ({ onRouteChange, isSigned }) => {
    if (isSigned) {
        return (
            <ProfileIcon onRouteChange={onRouteChange} />
        );
    } else {
        return (
            <nav>
                <p
                    onClick={() => onRouteChange("signin")}
                    className="f3 link dim black underline pa3 pointer">
                    Sign In
                </p>
                <p
                    onClick={() => onRouteChange("register")}
                    className="f3 link dim black underline pa3 pointer">
                    Register
                </p>
            </nav>
        );
    }
};

export default Navigation;