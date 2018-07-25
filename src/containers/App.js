import React, { Component } from "react";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Rank from "../components/Rank";
import ImageForm from "../components/ImageForm";
import FaceRecognition from "../components/FaceRecognition";
import { onPropertyChange } from "../core/common";
import * as api from "../core/smart-brain-api";
//import Particles from "react-particles-js";

const initialState = {
  imageSource: "",
  box: {},
  route: "signin",
  isSigned: false,
  user: {
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = user => this.setState({ user });

  onPredict = () => {
    const calculateRegions = box => {
      const image = document.getElementById("inputImage");
      const [width, height] = [Number(image.width), Number(image.height)];

      return {
        left: box.left * width,
        right: width - box.right * width,
        top: box.top * height,
        bottom: height - box.bottom * height
      };
    };

    const displayBox = box => this.setState({ box });

    const updateState = entries => {
      if (entries) {
        this.setState({
          user: Object.assign(this.state.user, { entries })
        });
      }
    };

    api.predict(this.state.imageSource)
      .then(calculateRegions)
      .then(displayBox)
      .then(api.updateProfile.bind(null, this.state.user.id))
      .then(updateState)
      .catch(alert);
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSigned: true, route });
    } else {
      this.setState({ route });
    }
  };

  render = () => (
    <div className="app">
      {
        //<Particles
        //   className="particles"
        //   params={{
        //     particles: {
        //       line_linked: {
        //         shadow: {
        //           enable: true,
        //           color: "#3CA9D1",
        //           blur: 5
        //         }
        //       }
        //     }
        //   }}
        // />
      }
      <Navigation
        isSigned={this.state.isSigned}
        onRouteChange={this.onRouteChange}
      />
      {
        {
          home: (
            <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageForm click={this.onPredict} textChanged={onPropertyChange(this, "imageSource")} />
              <FaceRecognition
                box={this.state.box}
                source={this.state.imageSource}
              />
            </div>
          ),
          signin: (
            <SignIn
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          ),
          register: (
            <Register
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          )
        }[this.state.route]
      }
    </div>
  );
}

export default App;