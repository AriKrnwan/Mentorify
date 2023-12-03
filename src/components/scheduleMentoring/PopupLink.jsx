// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";

function PopupLink({ show, onClose }) {
  const handleClose = () => onClose(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Masukan Link</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Link Zoom</Form.Label>
            <Form.Control
              type="text"
              placeholder="https:zoom.wjikksiiw.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Meeting ID</Form.Label>
            <Form.Control type="number"
              placeholder="19282992010283921"
              autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="number"
              placeholder="12345"
              autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Kirim
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

PopupLink.propTypes = {
    show: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    
  };

export default PopupLink;
