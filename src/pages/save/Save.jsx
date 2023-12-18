import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardSave from "../../components/card/CardSave";
import { useState } from "react";

const Save = () => {
  
  
  const savedMentorsFromStorage =
  JSON.parse(localStorage.getItem("savedMentors")) || [];
  
  const [savedMentors, setSavedMentors] = useState([]);

    const handleBookmarkClick = (mentor) => {
      // Lakukan logika penanganan bookmark sesuai kebutuhan
      const isMentorSaved = savedMentors.some((savedMentor) => savedMentor.id === mentor.id);
    
      if (isMentorSaved) {
        // Jika mentor sudah disimpan, hapus dari daftar savedMentors
        const updatedMentors = savedMentors.filter((savedMentor) => savedMentor.id !== mentor.id);
        setSavedMentors(updatedMentors);
        // Simpan data ke Local Storage
        localStorage.setItem("savedMentors", JSON.stringify(updatedMentors));
      } else {
        // Jika mentor belum disimpan, tambahkan ke daftar savedMentors
        const newMentors = [...savedMentors, mentor];
        setSavedMentors(newMentors);
        // Simpan data ke Local Storage
        localStorage.setItem("savedMentors", JSON.stringify(newMentors));
      }
    };
    

  return (
    <div>
      <Navbar />
      <div className="container-xxl mx-auto">
        <h3 className="mx-3 wrapper-save-mentor py-2">
          Mentor yang Disimpan
        </h3>
        <div className="d-flex justify-content-start row mx-auto mb-5">
          {savedMentorsFromStorage.map((mentor) => (
            <CardSave
              key={mentor.id}
              nama={mentor.full_name}
              jenisMentor={mentor.topic}
              ketTambah={"Mentor Baru"}
              harga={mentor.price}
              rating={mentor.rating}
              id={mentor.id}
              onClick={() => handleBookmarkClick(mentor)}
              foto={`http://localhost:4121/images/${mentor.image}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Save;