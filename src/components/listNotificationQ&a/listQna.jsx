import '../listNotificationQ&a/listQna.css'
import picture from '../../../src/assets/image/mentor4.png'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ListQna = () => {
    return ( 
        <ListGroup>
            <ListGroupItem>
                <div className='flex gap-2 align-items-center'>
                    <div >
                        <img className='tur' src={picture} alt="picture" />
                    </div>
                    <div className='kontent'>
                        <h6><strong>Sambas Geming</strong> <small>menyukai anda</small></h6>
                        <small>18-11-2023 18:57</small>
                    </div>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
}

export default ListQna ;