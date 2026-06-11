const travel =[];
//registro del destino
const addDestiny = (destiny,transport,date) =>{
    travel.push({
        destiny,
        transport,        
        date
    });
};
export{
    addDestiny,
    travel
}