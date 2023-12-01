import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import profile from "../../assets/image/profile picture.jpg"
import ButtonWithIcon from "../button/button";
import "../detailPostingan/detail.css"
import { FiChevronDown } from "react-icons/fi";

function Detail() {

    return (
      <div className="d-flex flex-column gap-2 border rounded mb-3 p-4">
        <div className="profile-qna d-flex align-items-center gap-3">
          <div className="img-profile overflow-hidden d-flex align-items-center">
            <img src={profile} alt="" />
          </div>
          <div className="nama-profile">
            <h6 className="fs-6 ">Hansen Pangestu</h6>
            <p className="mb-0">21 jam</p>
          </div>
        </div>
        <div className="isi-postingan">
          <p className="mb-0">Saya akan melamar di perusahaan sebagai UI/UX Designer, tapi gak tau job desc nya. Mungkin teman - teman ada yang tau dan sudah pernah bekerja bisa sharing di sini.</p>
        </div>
        <div className="action-group d-flex gap-3">
          <div className="action d-flex align-items-center gap-2 p-1">
            <FiHeart size={18} />
            <p className="mb-0">0 Like</p>
          </div>
          <div className="comment d-flex align-items-center gap-2 p-1">
            <FiMessageCircle size={18} />
            <p className="mb-0">0 Comment</p>
          </div>
          <div className="action d-flex align-items-center gap-2 p-1">
            <FiShare2 size={18} />
            <p className="mb-0">Share</p>
          </div>
        </div>
        <div className="add-komentar d-flex gap-3 py-3 border-top">
          <div className="img-profile overflow-hidden d-flex align-items-center">
            <img src={profile} alt="" />
          </div>
          <div className="input-bar d-flex align-items-center gap-2">
            <input type="text" className="form-control input-komen" />
            <div className="d-flex btn-tambah-komentar ">
              <ButtonWithIcon text="Tambah Komentar" />
            </div>
          </div>
        </div>
        <div className="komentar d-flex gap-2 py-3 border-top">
          <div className="img-profile overflow-hidden d-flex align-items-center">
            <img src={profile} alt="" />
          </div>
          <div className="data-komen d-flex flex-column gap-1">
            <div className="nama-profile d-flex gap-2">
              <h6 className="fs-6 ">Ucup</h6>
              <p className="mb-0">21 jam</p>
            </div>
            <div className="komen">
              <p className="mb-0">www.designerhandal.com</p>
            </div>
            <div className="balas">
              <p className="mb-0">balas</p>
            </div>
          </div>
        </div>
        <div className="more-komen">
          <div className="btn-more-komen d-flex align-items-center justify-content-center border rounded-5 py-3">
            <p className="mb-0">Lihat Komentar Lainnya</p>
            <FiChevronDown />
          </div>
        </div>
      </div>
    );
}

export default Detail