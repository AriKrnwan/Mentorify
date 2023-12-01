import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import googleplay from '../../assets/image/gogleplay.svg'
import hp from '../../assets/image/hp.svg'

function ModalComponent() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button className='w-100' onClick={() => setLgShow(true)}>Unduh di Sini</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className='border-0' style={{background: '#00A9B8'}}>
            
        </Modal.Header>
        <Modal.Body style={{background: '#00A9B8'}}>
            <div className='d-flex p-3' style={{background: '#00A9B8'}}>
                <div>
                    <img src={hp} alt="" style={{width: '370px'}}/>
                </div>
                <div >
                    <h1  style={{color : '#fff', fontSize: '64px'}}>
                        Mentorify
                    </h1>
                    <p style={{color : '#fff', fontSize: '20px'}}>
                    Dapatkan bimbingan dari mentor berpengalaman untuk membantu anda dengan harga yang terjangkau   
                    </p>
                    <div className='d-flex flex-column align-items-center'>
                        <h3 style={{color : '#fff', fontSize: '32px'}}>
                        Tersedia di :
                        </h3>
                        <img src={googleplay} alt="" style={{width: '170px'}}/>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;