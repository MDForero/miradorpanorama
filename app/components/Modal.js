import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';

export const Imagen = (props) => {

  return (
      <Modal
      {...props}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
            <Image loading='lazy' src={props.img} alt=''  width="100%"/>
        </Modal.Body>
      </Modal>
  );
}
