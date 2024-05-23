let diaHabilFinSemana = num => num>= 1 && num<= 5 ? 'Dia Habil': num>5 && num<=7 ? 'Fin de semana': 'Numero invalido';


console.log(diaHabilFinSemana(7));