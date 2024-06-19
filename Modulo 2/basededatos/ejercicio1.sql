CREATE TABLE productos(
    id INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR2(200),
    precio NUMBER,
    stock INTEGER,
    categoria_id INTEGER,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE categorias(
    id INTEGER PRIMARY KEY,
    nombre VARCHAR2(200)
);

CREATE TABLE clientes(
    id INTEGER  PRIMARY KEY,
    nombre VARCHAR2(100)
);

CREATE TABLE pedidos(
    id INTEGER PRIMARY KEY,
    cliente_id INTEGER,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE detalle_pedido(
    pedido_id INTEGER NOT NULL,
    producto_id INTEGER NOT NULL,
    cantidad INTEGER,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
)



INSERT INTO categorias VALUES(1,'limpieza');
INSERT INTO categorias VALUES(2,'tecnologia');
INSERT INTO categorias VALUES(3,'belleza');
INSERT INTO categorias VALUES(4,'escuela');
INSERT INTO categorias VALUES(5,'muebles');

INSERT INTO productos VALUES(1,'Teclado',300.50,300,2);
INSERT INTO productos VALUES(2,'Zapatero',105.50,1000,5);
INSERT INTO productos VALUES(3,'Polvo de maquillaje',70.00,400,3);
INSERT INTO productos VALUES(4,'Lapiz',2.50,100,4);
INSERT INTO productos VALUES(5,'Borradores',10.50,500,4);

INSERT INTO productos VALUES(6,'Planchador',25.50,500,3);
INSERT INTO productos VALUES(7,'Celular',5000.00,700,2);
INSERT INTO productos VALUES(8,'Trapo',5.00,200,1);
INSERT INTO productos VALUES(9,'Pala',10.00,500,1);
INSERT INTO productos VALUES(10,'Cama',1000.50,400,5);

INSERT INTO productos VALUES(11,'Crayones',30.50,400,4);
INSERT INTO productos VALUES(12,'Mouse',250.50,500,2);
INSERT INTO productos VALUES(13,'Asistin',40.50,100,1);
INSERT INTO productos VALUES(14,'Maquillaje',100.00,900,3);
INSERT INTO productos VALUES(15,'Pestanias',25.50,600,3);

INSERT INTO productos VALUES(16,'Sofa',2500.50,200,5);
INSERT INTO productos VALUES(17,'Lampara',60.50,600,5);
INSERT INTO productos VALUES(18,'Pantalla',2500.70,1000,2);
INSERT INTO productos VALUES(19,'Ipad',8000.10,700,2);
INSERT INTO productos VALUES(20,'Marcadores',25.50,300,4);

INSERT INTO productos VALUES(21,'Ropero',30.50,800,5);
INSERT INTO productos VALUES(22,'Lapicero',3.50,200,4);
INSERT INTO productos VALUES(23,'Escoba',25.50,800,1);
INSERT INTO productos VALUES(24,'Trapeador',30.10,700,1);
INSERT INTO productos VALUES(25,'Labial',20.10,700,3);



INSERT INTO clientes VALUES(1,'Rudy');
INSERT INTO clientes VALUES(2,'Carlos');
INSERT INTO clientes VALUES(3,'Yuli');
INSERT INTO clientes VALUES(4,'Gladis');
INSERT INTO clientes VALUES(5,'Giancarlos');

INSERT INTO pedidos VALUES(1,4);
INSERT INTO pedidos VALUES(2,3);
INSERT INTO pedidos VALUES(3,2);
INSERT INTO pedidos VALUES(4,2);
INSERT INTO pedidos VALUES(5,1);
INSERT INTO pedidos VALUES(6,5);


INSERT INTO detalle_pedido VALUES(1,5,20);
INSERT INTO detalle_pedido VALUES(2,25,10);
INSERT INTO detalle_pedido VALUES(3,10,30);
INSERT INTO detalle_pedido VALUES(4,11,2);
INSERT INTO detalle_pedido VALUES(5,2,5);
INSERT INTO detalle_pedido VALUES(6,7,60);

--La lista de los productos junto con las categorias
SELECT productos.id,productos.nombre, categorias.nombre FROM 
    productos JOIN categorias ON categoria_id = categorias.id
ORDER BY categorias.id;

--Total gastado por cada cliente
SELECT clientes.nombre, SUM(productos.precio * detalle_pedido.cantidad) FROM
detalle_pedido JOIN pedidos ON detalle_pedido.pedido_id = pedidos.id
JOIN clientes ON pedidos.cliente_id = clientes.id 
JOIN productos ON detalle_pedido.producto_id = productos.id
GROUP BY clientes.nombre;

--Producto mas vendido
SELECT productos.nombre, detalle_pedido.cantidad FROM detalle_pedido 
JOIN productos ON detalle_pedido.producto_id = productos.id
WHERE detalle_pedido.cantidad = (SELECT MAX(cantidad) FROM detalle_pedido);


--RESUMEN DE PEDIDOS
SELECT pedidos.id, clientes.nombre, productos.nombre as producto, productos.precio, 
    detalle_pedido.cantidad, (productos.precio * detalle_pedido.cantidad) as total
FROM detalle_pedido JOIN pedidos ON detalle_pedido.pedido_id = pedidos.id
JOIN clientes ON pedidos.cliente_id = clientes.id 
JOIN productos ON detalle_pedido.producto_id = productos.id
ORDER BY pedidos.id; 

--INSERTAR COSAS
INSERT INTO pedidos VALUES(7, 4);
INSERT INTO detalle_pedido VALUES(7,19,20);

UPDATE productos
SET stock = stock - 20
WHERE id = 19;
