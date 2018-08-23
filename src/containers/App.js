import React, { Component } from "react";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Rank from "../components/Rank";
import ImageForm from "../components/ImageForm";
import FaceRecognition from "../components/FaceRecognition";
import * as api from "../core/smart-brain-api";
import * as modal from "../core/modal";
//import Particles from "react-particles-js";

const initialState = {
  imageSource: "",
  boxes: [],
  route: "signin",
  isSigned: false,
  user: {
    id: 0,
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

  changeSource = ({ target }) =>
    this.setState({ imageSource: target.value, boxes: [] });

  changeRoute = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSigned: true, route });
    } else {
      this.setState({ route });
    }
  };

  predict = () => {
    const calculateRegions = boxes => {
      const image = document.getElementById("inputImage");
      const [width, height] = [Number(image.width), Number(image.height)];

      return boxes.map(box => ({
        left: box.left * width,
        right: width - box.right * width,
        top: box.top * height,
        bottom: height - box.bottom * height
      }));
    };

    const displayFaces = boxes => this.setState({ boxes });

    const updateState = entries => {
      if (entries) {
        this.setState({
          user: Object.assign(this.state.user, { entries })
        });
      }
    };

    api.predict(this.state.imageSource)
      .then(calculateRegions)
      .then(displayFaces)
      .then(api.updateImage.close(this.state.user.id))
      .then(updateState)
      .catch(modal.alert);
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
        onRouteChange={this.changeRoute}
        user={this.state.user}
        loadUser={this.loadUser}
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
              <ImageForm click={this.predict} textChanged={this.changeSource} />
              <FaceRecognition
                boxes={this.state.boxes}
                source={this.state.imageSource}
              />
            </div>
          ),
          signin: (
            <SignIn
              loadUser={this.loadUser}
              onRouteChange={this.changeRoute}
            />
          ),
          register: (
            <Register
              loadUser={this.loadUser}
              onRouteChange={this.changeRoute}
            />
          )
        }[this.state.route]
      }
    </div>
  );
}

export default App;