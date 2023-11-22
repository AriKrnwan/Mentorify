import Postingan from "../../components/postingan/Postingan";
import profile from "../../assets/image/Mentor.png";
import profile1 from "../../assets/image/mentor4.png";

const PostDijawab = () => {
  const isiPostingan = [
    {
      foto: profile,
      nama: "Salsabila Fourgatri",
      waktu: "5 menit",
      isi: "Kenapa aku rela codingin aplikasi untuk kamu, tetapi kamu kodingin sama aku??",
    },
    {
      foto: profile1,
      nama: "Mang Asep",
      waktu: "1 jam",
      isi: "Bahasa pemprograman apa yang bisa digunain untuk membuat kamu jatuh cinta??",
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
}

export default PostDijawab