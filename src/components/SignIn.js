import React, { Component } from "react";
import { onPropertyChange, getSession, saveSession } from "../core/common";
import * as api from "../core/smart-brain-api";
import * as modal from "../core/modal";

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    componentDidMount = () => this.loadUserFromSession();

    loadUserFromSession = () => {        
        const session = getSession();
        if (session.id) {
            api.getProfile(session.id)
                .then(user => {
                    if (user && user.id) {
                        this.props.loadUser(user);
                        this.props.onRouteChange("home");
                    }
                })
                .catch(modal.alert);
        }
    };

    signIn = () => {
        const credentials = {
            email: this.state.email,
            password: this.state.password
        };

        api.signIn(credentials)
            .then(session => {
                if (session && session.success === true) {
                    saveSession(session);
                    this.loadUserFromSession();
                }
            })
            .catch(modal.alert);
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
                            onClick={this.signIn}
                        />
                    </div>
                </div>
            </main>
        </article>
    );
}

export default SignIn;