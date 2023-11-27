import '../listNotificationMentoring/List.css'
import picture from '../../../src/assets/image/mentor4.png'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const List = () => {

    // function title() {
    //     return <h4>Notifikasi Mentoring</h4>;
    // }

    // const title = "Notifikasi Mentoring";

    return ( 
        <ListGroup className="mb-2">
            <ListGroupItem className='em'>
                <div className='flex gap-2'>
                    <div >
                        <img className='pic' src={picture} alt="picture" />
                    </div>
                    <div className='kontent'>
                        <h6 className='judul'>permintaan mentor diterima</h6>
                        <h6>permintaan mentor diterima</h6>
                        <small>18-11-2023 18:57</small>
                    </div>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
}

export default List;