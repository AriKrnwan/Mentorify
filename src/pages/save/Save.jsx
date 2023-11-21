import Navbar from'../../components/navbar/Navbar'
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
            <Navbar/>   
            <Container fluid="xxl">
                <Row className=' gap-3  justify-content-center  '>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Row>
            </Container>   
        </div>
    );
}


export default Save;