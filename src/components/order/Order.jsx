import CardPesanan from "../card/CardPesanan";
import MyDropdown from "../dropdown/Dropdown3";
import fotoramadhan from "../../assets/image/ramadhan.jpg";
import fotocintya from "../../assets/image/cintya.jpg";
import fotorizky from "../../assets/image/profile picture.jpg";
import fotoamanda from "../../assets/image/amanda.jpg";
import fotoserly from "../../assets/image/serly.jpg";

const Order = () => {
  const orderData = [
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "",
      tombol_1: "Diterima",
      tombol_2: "Ditolak",
      foto: fotorizky
    },
    {
      nama: "Ramadhan Muhammad",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Ditolak",
      tombol_1: "",
      tombol_2: "",
      foto: fotoramadhan
    },
    {
      nama: "Cintya sinta",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Menunggu Mentee Membayar",
      tombol_1: "",
      tombol_2: "",
      foto: fotocintya
    },
    {
      nama: "Serly Rizka",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Kadaluarsa",
      tombol_1: "",
      tombol_2: "",
      foto: fotoserly
    },
    {
      nama: "Amanda Putri",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "Mentee Telah Membayar",
      tombol_1: "",
      tombol_2: "",
      foto: fotoamanda
    },
  ];
  return (
    <div>
      <MyDropdown/>
    <div className="d-flex flex-column gap-3">
      {orderData.map((order, index) => (
        <CardPesanan
          key={index}
          nama={order.nama}
          durasi={order.durasi}
          tanggal={order.tanggal}
          topic={order.topic}
          harga={order.harga}
          detail_materi={order.detail_materi}
          status_pesanan={order.status_pesanan}
          tombol_1={order.tombol_1}
          tombol_2={order.tombol_2}
          foto={order.foto}
        />
      ))}
      </div>
    </div>
  );
};

export default Order;
