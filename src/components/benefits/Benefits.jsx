import { FaClock, FaMoneyBillWave, FaUserFriends } from "react-icons/fa";
import "../benefits/benefit.css"

function Benefits() {
    return (
        <>
            <div className="col-lg-4 col-sm-12">
                <div className='isi-benefit d-flex flex-column gap-2 border rounded-3'>
                    <div className="icon-benefit d-flex justify-content-center align-items-center rounded-3 bg-primary">
                        <FaUserFriends size={24} fill='white' stroke='none' />
                    </div>
                    <h6>One-on-one Teaching</h6>
                    <p>memberikan keunggulan personalisasi yang memungkinkan mahasiswa mendapatkan bimbingan khusus untuk meningkatkan pemahaman materi secara optimal.</p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className='isi-benefit d-flex flex-column gap-2 border rounded-3'>
                    <div className="icon-benefit d-flex justify-content-center align-items-center rounded-3 bg-warning">
                        <FaClock size={24} fill='white' />
                    </div>
                    <h6>Respon Cepat</h6>
                    <p>memastikan mahasiswa mendapatkan bantuan segera, meningkatkan efisiensi belajar, dan menciptakan pengalaman pembelajaran yang responsif.</p>
                </div>
            </div>
            <div className="col-lg-4 col-ms-12">
                <div className='isi-benefit d-flex flex-column gap-2 border rounded-3'>
                    <div className="icon-benefit d-flex justify-content-center align-items-center rounded-3 bg-success">
                        <FaMoneyBillWave size={24} fill='white' stroke='none' />
                    </div>
                    <h6>Harga Terjangkau</h6>
                    <p>Memberikan akses terjangkau ke bimbingan berkualitas, memungkinkan lebih banyak mahasiswa untuk meraih potensi penuh mereka tanpa beban finansial yang berlebihan.</p>
                </div>
            </div>
        </>
    );
}

export default Benefits
