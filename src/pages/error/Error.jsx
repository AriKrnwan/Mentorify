import { useEffect, useState } from "react";
import Axios from "axios"

const Error = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await Axios.get("http://localhost:3000/getdata");
                // console.log(res)
                setData(res.data)
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[])
    return ( 
        <div>
            <h1 className=" text-center justify-content-center ">404 <br/> Error</h1>
            <h1>{data.map(data=> (
                <div key={data.id}>
                    <h2>{data.name}</h2>
                    <h5>{data.class}</h5>
                    <h6>{data.password}</h6>
                </div>
            ))}</h1>
        </div>
    );
}

export default Error;