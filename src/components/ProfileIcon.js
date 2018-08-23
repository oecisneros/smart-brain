import React, { PureComponent } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { clearSession } from "../core/common";
import * as api from "../core/smart-brain-api";
import * as modal from "../core/modal";

class ProfileIcon extends PureComponent {
    constructor() {
        super();
        this.state = {
            dropdownOpen: false
        };
    }

    updateProfile = user =>
        api.updateProfile(user)
            .then(this.props.loadUser.close(user))
            .catch(modal.alert);

    showProfile = () => {
        const loadProfile = import("./Profile");
        modal.createModal(loadProfile, {
            user: this.props.user,
            updateProfile: this.updateProfile
        });
    };

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