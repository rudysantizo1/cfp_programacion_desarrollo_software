function diaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Lunes';

        case 2:
            return 'Martes';

        case 3:
            return 'Miercoles';

        case 4:
            return 'Jueves';

        case 5:
            return 'Viernes';
            
        case 6:
            return 'Sabado';

        case 7:
            return 'Domingo';

        default:
            return 'Ingreso mal el numero';
    }
}


console.log(`El dia de la semana es ${diaSemana(1)}`);