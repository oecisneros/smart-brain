import React, { Component } from "react";
import { onPropertyChange } from "../core/common";
import * as api from "../core/smart-brain-api";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    onSignIn = () => {
        const credentials = {
            email: this.state.email,
            password: this.state.password
        };

        api.signIn(credentials)
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange("home");
                }
            })
            .catch(alert);
    };

    render = () => (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset
                        id="sign_up"
                        className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email"
                                id="email"                                
                                onChange={onPropertyChange(this)}
                            />
                        </div>
                        <div className="mv3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={onPropertyChange(this)}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in"
                            onClick={this.onSignIn}
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p
                            onClick={() => this.props.onRouteChange("register")}
                            className="f6 link dim black db pointer">
                            Register
                        </p>
                    </div>
                </div>
            </main>
        </article>
    );
}

export default SignIn;