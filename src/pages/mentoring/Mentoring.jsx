import Navbar from "../../components/navbar/Navbar";
import SearchBar from '../../components/searchBar/SearchBar'
import CardMentor from "../../components/card/Card";
import mentor1 from "../../assets/image/mentor1.png";
import mentor2 from "../../assets/image/mentor2.png";
import mentor3 from "../../assets/image/mentor3.png";
import mentor4 from "../../assets/image/mentor4.png";
import mentor6 from "../../assets/image/mentor 6.png";
import mentor7 from "../../assets/image/mentor 7.png";
import mentor8 from "../../assets/image/mentor 8.png";
import mentor10 from "../../assets/image/mentor 10.png";
import mentor11 from "../../assets/image/mentor 11.png";
import mentor12 from "../../assets/image/mentor 12.png";
import mentor13 from "../../assets/image/mentor 13.png";
import FilterDropdown from '../../components/dropdown/Dropdown2';
import "../mentoring/mentoring.css";
import Footer from "../../components/footer/Footer";


const Mentoring = () => {
  const mentorsData = [
    {
      nama: "Salsabila Fourgatri",
      jenisMentor: "Mentor UX Design",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor1,
    },
    {
      nama: "Akbar Budiana",
      jenisMentor: "Mentor Teknik Industri",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor2,
    },
    {
      nama: "Siti Nurabaya",
      jenisMentor: "Mentor Informatika",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor3,
    },
    {
      nama: "Budi Ashari",
      jenisMentor: "Mentor Design Thingking",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor4,
    },
    {
      nama: "Salsabila Fourgatri",
      jenisMentor: "Mentor UX Design",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor1,
    },
    {
      nama: "Putri Alifia Rizky",
      jenisMentor: "Mentor Teknik Industri",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor6,
    },
    {
      nama: "Rehanah Yulianti",
      jenisMentor: "Mentor Informatika",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor7,
    },
    {
      nama: "Farhan Alamsyah",
      jenisMentor: "Mentor Design Thingking",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor8,
    },
    {
      nama: "Sambas Purnama Endang",
      jenisMentor: "Mentor UX Design",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor10,
    },
    {
      nama: "Faza",
      jenisMentor: "Mentor Teknik Industri",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor11,
    },
    {
      nama: "Al Ikhsan",
      jenisMentor: "Mentor Informatika",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor12,
    },
    {
      nama: "Irfan Wahendra",
      jenisMentor: "Mentor Design Thingking",
      ketTambah: "Mentor Baru",
      harga: "50.000",
      rating: "4/5",
      foto: mentor13,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container-xxl mx-auto">
        
        <div>
            <SearchBar/>
        </div>

        <div className="d-flex gap-3 py-4">
          <FilterDropdown />
        </div>
        <div className="gap-2 py-2">
          <h3>Rekomendasi Untukmu</h3>
        </div>

        <div className="d-flex justify-content-start row my-3 ">
          {mentorsData.map((mentor, index) => (
            <CardMentor
              key={index}
              nama={mentor.nama}
              jenisMentor={mentor.jenisMentor}
              ketTambah={mentor.ketTambah}
              harga={mentor.harga}
              rating={mentor.rating}
              foto={mentor.foto}
            />
          ))}      
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Mentoring;

