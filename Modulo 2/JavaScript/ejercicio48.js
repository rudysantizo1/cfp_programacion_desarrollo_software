let categorias = ["A", "B", "C" ];
let descuentos = [10, 5, 0]

productos = [200, 500, 300];

for (let i = 0; i < 3; i++) {
    console.log(`Producto${i+1}
    \nesta en la categoria ${categorias[i]}
    \nsu precio original es ${productos[i]}
    \nprecio final con el descuento ${productos[i] - (productos[i] * descuentos[i]/100)}`);
}


