import { useState } from "react";
import CardJadwalMentor from "../card/CardJadwalMentor";
import PopupLink from "./PopupLink";
import MyDropdown from "../dropdown/Dropdown3";

const MentoringAkanDatang = () => {
  const [showPopup, setShowPopup] = useState(false);

  const jadwalData = [
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Mentoring Sekarang",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Belum Waktunya",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Belum Waktunya",
    },
  ];

  return (
    <div>
      <MyDropdown/>
    <div className="d-flex flex-column gap-3">
      {jadwalData.map((jadwal, index) => (
        <CardJadwalMentor
          key={index}
          nama={jadwal.nama}
          durasi={jadwal.durasi}
          tanggal={jadwal.tanggal}
          topic={jadwal.topic}
          harga={jadwal.harga}
          detail_materi={jadwal.detail_materi}
          status_mentoring={jadwal.status_mentoring}
          onLinkClick={() => setShowPopup(true)}
        />
      ))}
      {/* Tampilkan popup jika showPopup bernilai true */}
      {showPopup && (
        <PopupLink show={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </div>
    </div>
  );
};

export default MentoringAkanDatang;
