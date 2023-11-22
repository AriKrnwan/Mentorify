import Picture from '../../assets/image/profile picture.jpg'

const RieviewMentor = () => {
  return (
    <div>

        <div className='d-flex flex-column gap-2'>
            <div className="d-flex flex-column">
                <span>November 11, 2023</span>
                <span>Mentornya asik dan cara dia menyampaikan materi sangat mudah dipahami. Makasi kak Akbar.</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <div>
                    <img src={Picture} alt="gambar" width={60} height={60} style={{borderRadius: '50%', objectFit: 'cover'}}/>
                </div>
                <div className='d-flex flex-column'>
                    <span>Ucup Silalahi</span>
                    <span>Mahasiswa di Universitas Negeri Surabaya</span>
                </div>
            </div>
        </div>

        <hr />

        <div className='d-flex flex-column gap-2'>
            <div className="d-flex flex-column">
                <span>November 11, 2023</span>
                <span>Mentornya asik dan cara dia menyampaikan materi sangat mudah dipahami. Makasi kak Akbar.</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <div>
                    <img src={Picture} alt="gambar" width={60} height={60} style={{borderRadius: '50%', objectFit: 'cover'}}/>
                </div>
                <div className='d-flex flex-column'>
                    <span>Ucup Silalahi</span>
                    <span>Mahasiswa di Universitas Negeri Surabaya</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RieviewMentor