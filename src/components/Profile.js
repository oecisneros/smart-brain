import React, { PureComponent } from "react";
import AppModal from "./AppModal";

class Profile extends PureComponent {
    register = () => alert("Modal");

    render = () =>
        <AppModal onAccept={this.register}>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80 w-80">
                    <img
                        src="http://tachyons.io/img/logo.jpg"
                        className="br-100 ba h3 w3 dib" alt="avatar" />
                    <h1>John Doe</h1>
                    <h4>Image Submitted: 5</h4>
                    <p>Member since: January</p>
                    <hr />
                    <label className="mt2 fw6" htmlFor="username">Name:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="John"
                        type="text"
                        name="username"
                        id="username"
                    />
                    <label className="mt2 fw6" htmlFor="age">Age:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="56"
                        type="text"
                        name="age"
                        id="age"
                    />
                    <label className="mt2 fw6" htmlFor="username">Pet:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="Dragon"
                        type="text"
                        name="pet"
                        id="pet"
                    />
                </main>
            </article>
        </AppModal>;
}

export default Profile;