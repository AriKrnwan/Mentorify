import Navbar from '../../components/navbar/Navbar';
import { Row } from 'react-bootstrap';
import Detail from '../../components/detailPostingan/Detail';


function DetailPostingan() {
    

    return(
        <>
            <Navbar />
            <div className="container-xxl mx-auto">
                <Row>
                    <div className="col-10 mx-auto">
                        <Detail />
                    </div>
                </Row>
            </div>
        </>
    )
}

export default DetailPostingan