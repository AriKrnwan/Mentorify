import CardJadwalMentor from "../card/CardJadwalMentor";


const MentoringAkanDatang = () => {
  const jadwalData = [
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Mentoring Sekarang",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Belum Waktunya",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Masukan Link",
    },
    
  ];
  return (
    <div className="d-flex flex-column gap-3">
      {jadwalData.map((jadwal, index) => (
        <CardJadwalMentor
          key={index}
          nama={jadwal.nama}
          durasi={jadwal.durasi}
          tanggal={jadwal.tanggal}
          harga={jadwal.harga}
          detail_materi={jadwal.detail_materi}
          status_mentoring={jadwal.status_mentoring}
        />
      ))}
    </div>
  );
};

export default MentoringAkanDatang;
