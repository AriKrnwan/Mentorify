import '../listNotificationQ&a/listQna.css'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ListQna = ({nama, waktu, keterangan, gambar}) => {

    return ( 
        <ListGroup className='mb-2'>
            <ListGroupItem className='em'>
                <div className='flex gap-2 align-items-center'>
                    <div >
                        <img className='tur' src={gambar} alt="picture" />
                    </div>
                    <div className='kontent'>
                        <h6><strong>{nama}</strong> <small>{keterangan}</small></h6>
                        <small>{waktu}</small>
                    </div>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
}

export default ListQna ;