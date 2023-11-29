import '../listNotificationMentoring/List.css'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ListPayDenied = ({judul,waktu,status,gambar}) => {

    return ( 
        <ListGroup className="mb-2">
            <ListGroupItem className='em'>
                <div className='flex gap-2'>
                    <div >
                        <img className='pic' src={gambar} alt="picture" />
                    </div>
                    <div className='kontent'>
                        <h6 className='judulPayDenied'>{judul}</h6>
                        <h6>{status}</h6>
                        <small>{waktu}</small>
                    </div>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
}

export default ListPayDenied;