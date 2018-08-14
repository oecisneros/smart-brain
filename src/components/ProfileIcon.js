import React, { PureComponent } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { clearSession, createModal } from "../core/common";
import * as api from "../core/smart-brain-api";

class ProfileIcon extends PureComponent {
    constructor() {
        super();
        this.state = {
            dropdownOpen: false
        };
    }

    showProfile = () => {
        const loadProfile = import("./Profile");
        createModal(loadProfile, {
            user: this.props.user,
            updateProfile: this.updateProfile
        });
    };

    updateProfile = data =>
        api.updateProfile(data)
            .then(() => this.props.loadUser(data))
            .catch(alert);

    signOut = () => {
        clearSession();
        this.props.onRouteChange("signout");
    };

    toggle = () =>
        this.setState(state => ({
            dropdownOpen: !state.dropdownOpen
        }));

    render = () =>
        <Dropdown className="nav" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={this.state.dropdownOpen}>
                <img
                    src="http://tachyons.io/img/logo.jpg"
                    className="pointer br-100 ba h3 w3 dib" alt="avatar" />
            </DropdownToggle>
            <DropdownMenu
                right
                className="b--transparent shadow-5"
                style={{ marginTop: "20px", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                {/* <DropdownItem header>User Name</DropdownItem> */}
                <DropdownItem onClick={this.showProfile}>View Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.signOut}>Sign out</DropdownItem>
            </DropdownMenu>
        </Dropdown>;
}

export default ProfileIcon;