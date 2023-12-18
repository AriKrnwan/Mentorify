import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import CardMentor from "../../components/card/Card";
import FilterDropdown from "../../components/dropdown/Dropdown2";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";


const Mentoring = () => {
  const [mentorsData, setMentorsData] = useState([]);
  const [savedMentors, setSavedMentors] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4121/mentor");
        setMentorsData(response.data.mentors);
      } catch (error) {
        console.error("Error fetching mentors data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleBookmarkClick = (mentor) => {
    // Lakukan logika penanganan bookmark sesuai kebutuhan
    const isMentorSaved =
      savedMentors?.some((savedMentor) => savedMentor.id === mentor.id) ??
      false;

    if (savedMentors) {
      setSavedMentors((prevMentors) => {
        if (isMentorSaved) {
          const updatedMentors = prevMentors.filter(
            (savedMentor) => savedMentor.id !== mentor.id
          );
          // Simpan data ke Local Storage
          localStorage.setItem("savedMentors", JSON.stringify(updatedMentors));
          return updatedMentors;
        } else {
          const newMentors = [...prevMentors, mentor];
          // Simpan data ke Local Storage
          localStorage.setItem("savedMentors", JSON.stringify(newMentors));
          return newMentors;
        }
      });
    }
  };




  return (
    <div>
      <Navbar />
      <div className="container-xxl mx-auto">
        <div>
          <SearchBar />
        </div>

        <div className="d-flex gap-3 py-4">
          <FilterDropdown />
        </div>
        <div className="gap-2 py-2">
          <h3>Rekomendasi Untukmu</h3>
        </div>

        <div className="d-flex justify-content-start row my-3 ">
          {mentorsData &&
            mentorsData.map((mentor) => (
              <CardMentor
                key={mentor.id}
                id={mentor.id}
                nama={mentor.full_name}
                jenisMentor={mentor.topic}
                ketTambah={"Mentor Baru"}
                harga={mentor.price}
                rating={mentor.rating}
                foto={`http://localhost:4121/images/${mentor.image}`}
                onClick={() => handleBookmarkClick(mentor)}
                isBookmarked={savedMentors.some(
                  (savedMentor) => savedMentor.id === mentor.id
                )}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentoring;
