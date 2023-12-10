import Navbar from'../../components/navbar/Navbar'
import mentor1 from '../../assets/image/mentor1.png'
import mentor2 from '../../assets/image/mentor2.png'
import mentor3 from '../../assets/image/mentor3.png'
import mentor4 from '../../assets/image/mentor4.png'
import Footer from '../../components/footer/Footer';
import CardSave from '../../components/card/CardSave';
 
const Save = () => {
    const mentorsData = [
        {
            nama: "Salsabila Fourgatri",
            jenisMentor: "Mentor UX Design",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor1
        },
        {
            nama: "Akbar Budiana",
            jenisMentor: "Mentor Teknik Industri",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor2
        },
        {
            nama: "Siti Nurabaya",
            jenisMentor: "Mentor Informatika",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor3
        },
        {
            nama: "Budi Ashari",
            jenisMentor: "Mentor Design Thingking",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor4
        },
    ];

    return (
      <div>
        <Navbar />
        <div className="container-xxl mx-auto">
          <h3 className="mx-3 wrapper-save-mentor py-2">Mentor yang Disimpan</h3>
          <div className="d-flex justify-content-start row mx-auto mb-5">
            {mentorsData.map((mentor, index) => (
              <CardSave key={index} nama={mentor.nama} jenisMentor={mentor.jenisMentor} ketTambah={mentor.ketTambah} harga={mentor.harga} rating={mentor.rating} foto={mentor.foto} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Save;

