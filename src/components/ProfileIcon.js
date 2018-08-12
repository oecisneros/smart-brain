import React, { PureComponent } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { createModal } from "../core/common";

class ProfileIcon extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    loadProfile = () =>
        createModal(import("./Profile"));

    toggle = () =>
        this.setState(state => ({
            dropdownOpen: !state.dropdownOpen
        }));

    render = () =>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
                <DropdownItem onClick={this.loadProfile}>View Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.props.onRouteChange("signin")}>Sign out</DropdownItem>
            </DropdownMenu>
        </Dropdown>;
}

export default ProfileIcon;