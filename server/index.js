import  Express  from "express";
import  Cors  from "cors";

const app = Express()
app.use(Cors());
app.use(Express.json());

import Chance from "chance";
const chance = new Chance();

const animals = [...Array(250).keys()].map(id =>{
    return{
        id ,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
});

app.get('',(req , res)=>{
    const q = req.query.q?.toLocaleLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));

    res.send(results);
});

app.listen(8080 , ()=> console.log('Listening on port http://localhost:8080'));