import CardMentoringSelesai from "../card/CardMentoringSelesai";
import MyDropdown from "../dropdown/Dropdown3";

const MentoringSelesai = () => {
  const riwayatData = [
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Mentoring Sekarang",
      ulasan : 'Mantap, sangat memuaskan!!!'
    },
    {
      nama: "Asep Ganteng",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Mentoring Sekarang",
      ulasan : 'Mantap, sangat memuaskan!!!'
    },
  ];
  return (
    <div>
      <MyDropdown/>
    <div className="d-flex flex-column gap-3">
      {riwayatData.map((riwayat, index) => (
        <CardMentoringSelesai
          key={index}
          nama={riwayat.nama}
          durasi={riwayat.durasi}
          tanggal={riwayat.tanggal}
          topic={riwayat.topic}
          harga={riwayat.harga}
          detail_materi={riwayat.detail_materi}
          status_mentoring={riwayat.status_mentoring}
          ulasan={riwayat.ulasan}
        />
      ))}
    </div>
    </div>
  );
};

export default MentoringSelesai;
