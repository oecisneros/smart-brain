import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { pipe } from "../core/common"

class AppModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };
    }

    accept = () => pipe(this.props.onAccept, this.close)()

    close = () => {
        const root = document.getElementById('modal-root');
        ReactDOM.unmountComponentAtNode(root);
    };

    render = () =>
        <div>
            <Modal isOpen={this.state.modal} toggle={this.close} className={this.props.className} backdrop="static">
                <ModalHeader toggle={this.close}>Smart-Brain</ModalHeader>
                <ModalBody>
                    {this.props.children}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.accept}>Ok</Button>{' '}
                    <Button color="secondary" onClick={this.close}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>;
}

export default AppModal;