import Picture from "../../assets/image/profile picture.jpg";
import "./RieviewMentor.css";
import {FaStar} from "react-icons/fa";

const RieviewMentor = () => {
  return (
    <div>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 justify-content-between w-100">
              <span className="mb-1 tgl-review">November 11, 2023</span>
              <div className="d-flex align-items-center gap-1">
                <FaStar fill="#E2B93B" size={14} />
                <p style={{ fontSize: "14px" }} className="mb-0">
                  4.5/5
                </p>
              </div>
            </div>
          </div>
          <p>Mentornya asik dan cara dia menyampaikan materi sangat mudah dipahami. Makasi kak Akbar.</p>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div>
            <img src={Picture} alt="gambar" width={60} height={60} style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <div className="d-flex flex-column">
            <span className="nama-mentor-review">Ucup Silalahi</span>
            <span className="wrapper-mentor-review">Mahasiswa di Universitas Negeri Surabaya</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex flex-column gap-2 py-2">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 justify-content-between w-100">
              <span className="mb-1 tgl-review">November 11, 2023</span>
              <div className="d-flex align-items-center gap-1">
                <FaStar fill="#E2B93B" size={14} />
                <p style={{ fontSize: "14px" }} className="mb-0">
                  4.5/5
                </p>
              </div>
            </div>
          </div>
          <span>Mentornya asik dan cara dia menyampaikan materi sangat mudah dipahami. Makasi kak Akbar.</span>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div>
            <img src={Picture} alt="gambar" width={60} height={60} style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <div className="d-flex flex-column">
            <span className="nama-mentor-review">Ucup Silalahi</span>
            <span className="wrapper-mentor-review">Mahasiswa di Universitas Negeri Surabaya</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex flex-column gap-2 py-2">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 justify-content-between w-100">
              <span className="mb-1 tgl-review">November 11, 2023</span>
              <div className="d-flex align-items-center gap-1">
                <FaStar fill="#E2B93B" size={14} />
                <p style={{ fontSize: "14px" }} className="mb-0">
                  4.5/5
                </p>
              </div>
            </div>
          </div>
          <span>Mentornya asik dan cara dia menyampaikan materi sangat mudah dipahami. Makasi kak Akbar.</span>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div>
            <img src={Picture} alt="gambar" width={60} height={60} style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <div className="d-flex flex-column">
            <span className="nama-mentor-review">Ucup Silalahi</span>
            <span className="wrapper-mentor-review">Mahasiswa di Universitas Negeri Surabaya</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RieviewMentor;
