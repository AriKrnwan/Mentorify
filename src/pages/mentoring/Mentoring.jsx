import Navbar from "../../components/navbar/Navbar";
import SearchBar from '../../components/searchBar/SearchBar'
import CardMentor from "../../components/card/Card";
import mentor1 from "../../assets/image/mentor1.png";
import mentor2 from "../../assets/image/mentor2.png";
import mentor3 from "../../assets/image/mentor3.png";
import mentor4 from "../../assets/image/mentor4.png";
import mentor5 from "../../assets/image/mentor 5.png";
import mentor6 from "../../assets/image/mentor 6.png";
import mentor7 from "../../assets/image/mentor 7.png";
import mentor8 from "../../assets/image/mentor 8.png";
import mentor10 from "../../assets/image/mentor 10.png";
import mentor11 from "../../assets/image/mentor 11.png";
import mentor12 from "../../assets/image/mentor 12.png";
import mentor13 from "../../assets/image/mentor 13.png";
import FilterDropdown from '../../components/dropdown/Dropdown';
// import { FaStar } from "react-icons/fa6";
// import ButtonWithIcon from "../../components/button/button";
import "../mentoring/mentoring.css";
// import ButtonIconLeft from "../../components/button/button2";
import fotoBG from '../../assets/image/profile picture.jpg'
import DropdownComponent from "../../components/dropdown/Dropdown";


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
      foto: mentor5,
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
          
          <DropdownComponent/>
          
          {/* <FilterDropdown 
                    judul="Topik" 
                    items={"Teknik Industri, Psikologi, Manajemen, Teknik Informatika, Sistem Informasi"} 
                />
          
          <FilterDropdown 
                    judul="Gender" 
                    items={"Perempuan, Laki-laki"} 
                /> */}
          
          {/* <FilterDropdown 
                    judul="Rating" 
                    items= {"Bintang 1, Bintang 2, Bintang 3, Bintang 4, Bintang 5"}
                    
                /> */}
          {/* cara masukin icon ? */}
          {/* <FilterDropdown 
                    judul="Harga" 
                    items={"Rp. 30000, Rp. 50000"} 
                />
          <FilterDropdown 
                    judul="Jam" 
                    items={"08.00, 09.00, 10.00, 11.00, 13.00, 14.00, 15.00, 16.00, 17.00 , 19.00, 20.00, 21.00, 22.00"} 
                /> */}
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
        {/* <div className="d-flex mb-2 justify-content-center ">
        <ButtonIconLeft
        text="Lihat lebih banyak" 
        />
        </div> */}
      </div>
    </div>
  );
};

export default Mentoring;

