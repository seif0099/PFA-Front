import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserInfoModal = ({ showModal, closeModal, user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal centered show={show} onHide={handleClose} style={{ opacity: 1 }}>
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <ul>
              <li>{user.nom}</li>
              <li>{user.prenom}</li>
              <li>{user.email}</li>
              <li>
                <Link to={user.cv}>CV</Link>
              </li>
              <li>
                <Link to={user.lettreMotivation}>Cover</Link>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserInfoModal;
