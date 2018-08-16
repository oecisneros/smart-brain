import React from "react";
import ProfileIcon from "./ProfileIcon"

const Navigation = (props) => {
    if (props.isSigned) {
        return <ProfileIcon {...props} />;
    } else {
        return (
            <nav className="nav">
                <p
                    onClick={props.onRouteChange.close("signin")}
                    className="f3 link dim black underline pa3 pointer">
                    Sign In
                </p>
                <p
                    onClick={props.onRouteChange.close("register")}
                    className="f3 link dim black underline pa3 pointer">
                    Register
                </p>
            </nav>
        );
    }
};

export default Navigation;