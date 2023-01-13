import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Imagen = (props) => {
 

  return (
     
      <Modal
      {...props}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
            <img src={props.img} width="100%"/>
        </Modal.Body>
      </Modal>
  );
}
