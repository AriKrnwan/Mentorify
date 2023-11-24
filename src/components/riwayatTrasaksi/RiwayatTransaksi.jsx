import CardTransaction from "../card-transaction/CardTransaction";

const RiwayatTransaksi = () => {
  const transactionData = [
    {
      nama: "Siti Aulia - Mentor Design",
      noTransaction: "20231113-000000001",
      tanggal: "14 November 2023 pukul 19:34",
      harga: "Rp 30.000",
      statusTransaction: "Diterima",
    },
    {
      nama: "Siti Aulia - Mentor Design",
      noTransaction: "20231113-000000001",
      tanggal: "14 November 2023 pukul 19:34",
      harga: "Rp 30.000",
      statusTransaction: "Ditolak",
    },
    {
      nama: "Siti Aulia - Mentor Design",
      noTransaction: "20231113-000000001",
      tanggal: "14 November 2023 pukul 19:34",
      harga: "Rp 30.000",
      statusTransaction: "Telah Dibayar",
    },
    {
      nama: "Siti Aulia - Mentor Design",
      noTransaction: "20231113-000000001",
      tanggal: "14 November 2023 pukul 19:34",
      harga: "Rp 30.000",
      statusTransaction: "Kadaluarsa",
    },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      {transactionData.map((information, index) => (
        <CardTransaction
          key={index}
          nama={information.nama}
          noTransaction={information.noTransaction}
          tanggal={information.tanggal}
          harga={information.harga}
          statusTransaction={information.statusTransaction}
        />
      ))}
    </div>
  );
};

export default RiwayatTransaksi;
