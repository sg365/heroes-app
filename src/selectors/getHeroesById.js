import { heroes } from "../data/heroes"

 export const getHeroesById = (id = '') =>{
    //console.log("se ejecuta la funcion");
    return heroes.find(hero => hero.id === id);
}