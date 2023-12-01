import Carousel from 'react-bootstrap/Carousel';
import foto from "../../assets/image/ilsLogin1.svg"
import foto1 from "../../assets/image/ilsLogin2.svg"
import foto2 from "../../assets/image/ilsLogin3.svg"
import "../carousels/carousels.css"

function UncontrolledExample() {
    return (
        <Carousel className='slider' interval={5000} style={{ width: '100%' }}>
            <Carousel.Item>
                <img src={foto} style={{ width: '50%' }} className='d-block mx-auto' />
                <Carousel.Caption>
                <p>Selamat datang di website kami, tempat di mana pembelajaran menjadi sebuah perjalanan yang penuh inspirasi.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={foto1} style={{ width: '50%' }} className='d-block mx-auto' />
                <Carousel.Caption>
                <p>Anda terhubung langsung dengan mentor profesional untuk membimbing langkah-langkah sukses akademis Anda</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={foto2} style={{ width: '50%' }} className='d-block mx-auto' />
                <Carousel.Caption>
                <p>
                    kami memberikan ruang untuk berbagi pengalaman, bertanya, dan mendapatkan dukungan dari komunitas mahasiswa
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;