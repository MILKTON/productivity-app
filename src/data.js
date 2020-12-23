import Chance from 'chance';
import { nanoid } from "nanoid";

export function DATA() {
  var chance = new Chance(Math.random);
  let DATA;
  let datos={};
  let aux=[];

  for (var i = 0; i < 50; i++) 
  {
    datos[i] = { id: "todo-" + nanoid(), name: chance.sentence({ words: 4 }), seconds:chance.integer({ min: 1, max: 120 }), completed: chance.bool() }
    aux.push(datos[i]);
  }

  DATA=aux;

  return DATA
}
