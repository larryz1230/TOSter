import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './res.css'


const privrating = "7";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <label for="customRange3" class="form-label"><a variant="primary" style={{ color: 'blue' }} onClick={handleShow}>Privacy Rating:</a> {privrating}/10</label>
      <br></br>
      <label for="customRange3" class="form-label">Safety Level: Moderate</label>
      <input disabled="true" type="range" class="form-range" min="0" max="10" step="1" id="customRange3" value={privrating}></input>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is privacy rating? </Modal.Title>
        </Modal.Header>
        <Modal.Body>This privacy rating takes into account the details of the contract as well as historical information about the company to rate how secure user's information will be. </Modal.Body>

      </Modal>
    </>
  );
}

export default Example;