import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { pipe } from "../core/common"

class AppModal extends PureComponent {
    close = () => {
        const root = document.getElementById('modal-root');
        ReactDOM.unmountComponentAtNode(root);
    };

    accept = pipe(this.props.onAccept, this.close);

    render = () =>
        <div>
            <Modal isOpen={true} toggle={this.close} backdrop="static">
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