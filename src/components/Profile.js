import React, { PureComponent } from "react";
import AppModal from "./AppModal";
import { onPropertyChange } from "../core/common";

class Profile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            pet: this.props.user.pet
        };
    }

    onSubmit = () => {
        const data = { ...this.props.user, ...this.state };
        this.props.updateProfile(data);
    };

    render = () =>
        <AppModal onAccept={this.onSubmit}>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80 w-80">
                    <img
                        src="http://tachyons.io/img/logo.jpg"
                        className="br-100 ba h3 w3 dib" alt="avatar" />
                    <h1>{this.state.name}</h1>
                    <h4>Images Submitted: {this.props.user.entries}</h4>
                    <p>Member since: {this.props.user.joined}</p>
                    <hr />
                    <label className="mt2 fw6" htmlFor="name">Name:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="John"
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={onPropertyChange(this)}
                    />
                    <label className="mt2 fw6" htmlFor="age">Age:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="56"
                        type="text"
                        name="age"
                        id="age"
                        value={this.state.age}
                        onChange={onPropertyChange(this)}
                    />
                    <label className="mt2 fw6" htmlFor="pet">Pet:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="Dragon"
                        type="text"
                        name="pet"
                        id="pet"
                        value={this.state.pet}
                        onChange={onPropertyChange(this)}
                    />
                </main>
            </article>
        </AppModal>;
}

export default Profile;