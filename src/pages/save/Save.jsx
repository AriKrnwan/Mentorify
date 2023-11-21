import Navbar from'../../components/navbar/Navbar'

const Save = () => {
    return ( 
        <div>
            <Navbar/>   
            <CardMentor/>  
            <CardMentor/> 
            <CardMentor/> 
            <CardMentor/>   
          
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