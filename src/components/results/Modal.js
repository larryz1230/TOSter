import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row } from "react-bootstrap";
import "./res.css";

const privrating = "7";

function Example() {
  const [show, setShow] = useState(false);
  const [safety, setSafety] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSafety({ privrating }) {
    if (privrating == "0" || privrating === "1" || privrating === "2") {
      setSafety("Very Unsafe");
    } else if (privrating == "3" || privrating == "4") {
      setSafety("Unsafe");
    } else if (privrating == "5" || privrating == "6" || privrating == "7") {
      setSafety("Moderate");
    } else {
      setSafety("Safe");
    }
  }

  useEffect(() => {
    handleSafety({ privrating });
  }, [privrating]);

  return (
    <>
      <label
        className="res-privacy-rating"
        for="customRange3">
        <u
          variant="primary"
          style={{ color: "blue" }}
          onClick={handleShow}>
          Privacy Rating:
        </u>{" "}
        {privrating}/10
      </label>{" "}
      {/*class="form-label"*/}
      <br></br>
      <br></br>
      <label
        className="res-safety-score"
        for="customRange3">
        Safety Level:{" "}
      </label>{" "}
      {/* creates a space between Safety Level and safety */}
      <label
        className="res-safety-score"
        style={{
          color:
            safety === "Very Unsafe"
              ? "red"
              : safety === "Unsafe"
              ? "orange"
              : safety === "Moderate"
              ? "#FDDA0D"
              : "green",
        }}>
        {" "}
        {safety}
      </label>
      <input
        disabled="true"
        type="range"
        min="0"
        max="10"
        step="1"
        id="customRange3"
        className="custom-slider"
        value={privrating}></input>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-container">
        <Modal.Header closeButton>
          <Modal.Title>What is privacy rating? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This privacy rating takes into account the details of the contract as
          well as historical information about the company to rate how secure
          user's information will be.{" "}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
