// import { useState } from "react";
// import PopupLink from "./PopupLink";
import CardJadwalMentor from "../card/CardJadwalMentor";
import MyDropdown from "../dropdown/Dropdown3";

const MentoringAkanDatang = () => {
  // const [showPopup, setShowPopup] = useState(false);

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
      link_zoom:
        "https://us05web.zoom.us/j/82951006716?pwd=uf0jtJToWATdlA76JKs7uvbFY7qbV8.1",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "16 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Belum Waktunya",
      link_zoom:
        "https://us05web.zoom.us/j/82951006716?pwd=uf0jtJToWATdlA76JKs7uvbFY7qbV8.1",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "18 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Belum Waktunya",
      link_zoom:
        "https://us05web.zoom.us/j/82951006716?pwd=uf0jtJToWATdlA76JKs7uvbFY7qbV8.1",
    },
  ];

  return (
    <div>
      <MyDropdown />
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
            link_zoom={jadwal.link_zoom}
            // onLinkClick={() => setShowPopup(true)}
          />
        ))}
        {/* Tampilkan popup jika showPopup bernilai true */}
        {/* {showPopup && (
        <PopupLink show={showPopup} onClose={() => setShowPopup(false)} />
      )} */}
      </div>
    </div>
  );
};

export default MentoringAkanDatang;
