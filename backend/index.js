import Express from "express";
import Mysql from   "mysql";

const app = Express();

const db = Mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"massive_database"
});

app.use(Express.json())

app.get("/", (req, res)=> {
    res.json("hello world and hello");
});

app.get("/getdata", (req,res)=> {
    const q = "SELECT * FROM data";
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })arn 
});

app.post("/senddata", (req,res)=> {
    const q = "INSERT INTO data (`name`, `class`, `password`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.class,
        req.body.password
    ]
    db.query(q, [values], (err) => {
        if(err) return res.json(err)
        return res.json("data sended")
    })
});

app.listen (3000, () => {
    console.log("Server is running cuyyy");
});