import {addDestiny} from "./destiny.js";
//registro de costos
const calculateCost=(destiny, transport, date) =>{
    let destinyCost = 0;
    let transportCost = 0;
    let dateMultiplier=1;
    switch(destiny){
        case 'Mochis':
            destinyCost = 1000;
            break;
        case 'Hermosillo':
            destinyCost = 1200;
            break;
        case 'Chihuahua':
            destinyCost = 1500; 
            break; 
        default:
            destinyCost = 800;
        break;
    }
    switch(transport){
        case 'Airplane':
            transportCost = 500;
            break;
        case 'Bus':
            transportCost = 200;
            break;
        case 'Car':
            transportCost = 300;
            break;
        default:
            transportCost = 100;
        break;
    }
    switch (date){
        case 'Weekend':
            dateMultiplier = 1.5;
            break;
        case 'Holiday':
            dateMultiplier = 2;
            break;
        default:
            dateMultiplier = 1;
            break;
    }
    return (destinyCost + transportCost) * dateMultiplier;
};
export{
    calculateCost,
}