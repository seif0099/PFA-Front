import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserInfoModal = ({ showModal, closeModal, user }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <h2>User Info</h2>
        {console.log(user)}
        <ul>
          <li>{user.nom}</li>
          <li>{user.prenom}</li>
          <li>{user.adresse}</li>
          <li>{user.email}</li>
          <li>
            <Link to={user.cv}>CV</Link>
          </li>
          <li>
            <Link to={user.lettreMotivation}>Cover</Link>
          </li>
        </ul>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default UserInfoModal;
