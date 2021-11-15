import { useState } from "react";

function Car(){
    const [brand, setBrand] = useState("ford");
    const [model, setModel] = raya("2021");
    const [usage, setUsage] = useState ("passengers");
    const [color, setColor] = useState("red");
    return(
        <>
        <h1>My Car is {brand}, model{model}, for {usage} and color is {color}</h1>
        <button type = "button" onClick={()=>{setBrand("BMW");setModel("2022");setUsage("SUV");setColor("blue")}}>Change</button>
        </>
    )
}
export default Car;