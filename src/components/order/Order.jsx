import CardPesanan from "../card/CardPesanan";

const Order = () => {
  const orderData = [
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "",
      tombol_1: "Diterima",
      tombol_2: "Ditolak",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Ditolak",
      tombol_1: "",
      tombol_2: "",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Menunggu Mentee Membayar",
      tombol_1: "",
      tombol_2: "",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Kadaluarsa",
      tombol_1: "",
      tombol_2: "",
    },
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Mentee Telah Membayar",
      tombol_1: "",
      tombol_2: "",
    },
  ];
  return (
    <div className="d-flex flex-column gap-3">
      {orderData.map((order, index) => (
        <CardPesanan
          key={index}
          nama={order.nama}
          durasi={order.durasi}
          tanggal={order.tanggal}
          harga={order.harga}
          detail_materi={order.detail_materi}
          status_pesanan={order.status_pesanan}
          tombol_1={order.tombol_1}
          tombol_2={order.tombol_2}
        />
      ))}
    </div>
  );
};

export default Order;
