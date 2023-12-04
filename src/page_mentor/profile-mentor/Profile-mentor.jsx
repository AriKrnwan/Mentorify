import FormMentor from "../../components/formMentor/FormMentor";
import NavbarMentor from "../../components/navbar/NavbarMentor";
import "../profile-mentor/profile-mentor.css"

const ProfileMentor = () => {
    return (
        <>
            <NavbarMentor />
            <div className="container-xxl mx-auto wrapper-profile-mentor">
                <div className="row border rounded">
                    <div className="text-center welcome-mentor">
                        <h5 className="mt-4">Selamat Datang Rizky Akbar Maulana</h5>
                        <p>Lengkapi Data Dirimu dan Mulai Mentoring</p>
                    </div>
                    <FormMentor />
                </div>
            </div>
        </>
    )
};

export default ProfileMentor