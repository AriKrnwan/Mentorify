import Postingan from "../../components/postingan/Postingan";
import profile from "../../assets/image/mentor 6.png";

const PostDibuat = () => {
  const isiPostingan = [
    {
      foto: profile,
      nama: "Putri Alifia Rizky",
      waktu: "5 menit",
      isi: "Saya akan melamar di perusahaan sebagai UI/UX Designer, tapi gak tau job desc nya. Mungkin teman - teman ada yang tau dan sudah pernah bekerja bisa sharing di sini.",
    },
    {
      foto: profile,
      nama: "Putri Alifia Rizky",
      waktu: "1 jam",
      isi: "Bahasa apa ya yang gampang dipelajari dalam waktu 1 jam?",
    },
  ];

  return (
    <div>
      {isiPostingan.map((isiPost, index) => (
        <Postingan
          key={index}
          foto={isiPost.foto}
          nama={isiPost.nama}
          waktu={isiPost.waktu}
          isi={isiPost.isi}
        />
      ))}
    </div>
  );
};

export default PostDibuat;
