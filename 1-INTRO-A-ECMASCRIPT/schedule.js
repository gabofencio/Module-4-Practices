import {travel} from "./destiny.js";
import {calculateCost} from "./cost.js";

//mostrar el itinerario
const showSchedule = () =>{
    travel.forEach(trip =>{
        console.log ("destiny: ",trip.destiny);
        console.log ("date: ",trip.date);
        console.log ("transport: ",trip.transport);
        console.log ("Estimated cost: ", calculateCost(trip.destiny, trip.transport,trip.date));
    });
};

export{
    showSchedule
}