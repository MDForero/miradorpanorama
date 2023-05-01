import nachos from "./nachos.jpg"
import patacones from "./patacones.jpg"
import chunchulla from "./chunchullo.jpg"
import papas from "./criollas.jpg"
import hamburguesitas from "./miniHamburguesas.jpg"
import gourmet from "./sandiwchTurkey.jpg"
import carne from "./sandiwchCarne.jpg"
import ropaVieja from "./ropaVieja.jpg"
import cerdo from "./sandiwchCarne.jpg"
import turkey from "./sandiwchTurkey.jpg"
import crispy from "./polloCrispy.jpg"
import big from "./sausageSandiwch.jpg"
import pataconesCamarones from "./pataconesCamarones.jpg"
import pataconesMaiz from "./pataconesMaiz.jpg"
import pataconesPollo from "./pataconesPollo.jpg"
import pierna from "./piernaPernil.jpg"
import picada from "./picada.jpg"
import alitas from "./alitasBBq.jpg"
import salchipapa from "./salchipapa.jpg"
import perro from "./perroCaliente.jpg"
import costillas from "./costillasBBQ.jpg"
import coco from "./limonadaCoco.jpg"
import frappe from "./frappeCafe.jpg"
import malteadas from "./malteadas.jpg"
import vinoblanco from "./vinoBlanco.jpg"
import brownie from "./browneyHelado.jpg"
import Banano from "./bananoQueso.jpg"
import fresas from "./fresasConleche.jpg"
import waffle from "./waffleHelado.jpg"
import sangria from "./sangria.jpg"



export default [
    {
        img: nachos,
        id: 1,
        nombre: "Nachos con carne",
        categoria: "entradas",
        descripcion: "Nachos con carne molida, pollo y queso",
        valor: [
            {
                descripcion: "para 2.",
                value: 14000
            },
            {
                descripcion: "para 4.",
                value: 24000
            },
        ],
    },
    {
        img: patacones,
        categoria: "entradas",
        id: 2,
        nombre: "Patacones sencillos",
        descripcion: "patacones, guacamole y hogao.",
        valor: 8000
    },
    {
        img: chunchulla,
        categoria: "entradas",
        destacados:true,
        id: 3,
        nombre: "Chunchullo crocante",
        descripcion: "Chunchullo, papa criolla o patacones.",
        valor: 15000
    },
    {
        img: papas,
        categoria: "entradas",
        id: 4,
        nombre: "Papas criollas",
        descripcion: "Papas queso y tocineta.",
        valor: 12000
    },
    {
        img: gourmet,
        categoria: "sandiwch",
        id: 5,
        nombre: "Sandwich Carne Asada",
        descripcion: "200g de carne asada, queso, salsa de la casa, tocineta y vegetales.",
        valor: 22000
    },
    {
        img: cerdo,
        destacados:true,
        categoria: "sandiwch",
        id: 6,
        nombre: "Bondiola de cerdo",
        descripcion: "Cerdo BBQ, maíz, queso, hogao, tocineta y vegetales.",
        valor: 19000
    },
    {
        img: turkey,
        categoria: "sandiwch",
        id: 7,
        nombre: "Pollo champiñones",
        descripcion: "Pollo, maíz tierno, queso, tocineta y vegetales.",
        valor: 19000
    },
    {
        img: crispy,
        categoria: "sandiwch",
        id: 8,
        nombre: "Pollo crispy",
        descripcion: "Pollo apanado, queso, miel mostaza, tocineta y vegetales.",
        valor: 20000
    },
    {
        img: big,
        categoria: "sandiwch",
        id: 9,
        nombre: "Argentino",
        descripcion: "Chorizo, chimichurri, tocineta y vegetales",
        valor: 19000
    },
    {
        img: carne,
        categoria: "sandiwch",
        id: 10,
        nombre: "Big",
        descripcion: "Pollo, carne, cerdo, chorizo, maíz tierno, queso, tocineta y vegetales",
        valor: 24000
    },
    {
        img: ropaVieja,
        categoria: "sandiwch",
        id: 11,
        nombre: "Ropa vieja",
        descripcion: "Carne desmechada, hogao, queso, tocineta y vegetales",
        valor: 19000
    },
    {
        img: pataconesMaiz,
        id: 12,
        nombre: "Patacón mixto",
        categoria: "encocados",
        descripcion: "Carne, pollo, cerdo, hogao, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        img: pataconesPollo,
        id: 13,
        nombre: "Patacón de carne",
        categoria: "encocados",
        descripcion: "Carne desmechada, hogao y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        img: pataconesCamarones,
        id: 14,
        nombre: "Patacón del huerto ",
        categoria: "encocados",
        descripcion: "Pollo, tocineta, champiñón, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 15,
        nombre: "Patacón ranchero",
        categoria: "encocados",
        descripcion: "Chorizo, salsa BBQ, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 16,
        nombre: "Patacón pollo BBQ",
        categoria: "encocados",
        descripcion: "pollo, salsa BBQ maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 17,
        nombre: "Patacón pollo champiñón",
        categoria: "encocados",
        descripcion: "Pollo, champiñones, salsa de la casa, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 18,
        nombre: "Patacón pollo miel",
        categoria: "encocados",
        descripcion: "Pollo, miel mostaza, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 19,
        nombre: "Patacón california",
        categoria: "encocados",
        descripcion: "Chorizo, carne molida, pimentón, cebolla y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 20,
        nombre: "Patacón del campo",
        categoria: "encocados",
        descripcion: "Carne molida, tocineta, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 21,
        nombre: "Patacón cerdo BBQ",
        categoria: "encocados",
        descripcion: "Cerdo desmechado, salsa BBQ, hogao y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 22,
        nombre: "Patacón Mexicano",
        categoria: "encocados",
        descripcion: "Carne molida, salsa picante, hogao, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 23,
        nombre: "Patacón cerdo agridulce",
        categoria: "encocados",
        descripcion: "Cerdo, hogao, salsa miel mostaza y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        id: 24,
        nombre: "Patacón de camarones",
        categoria: "encocados",
        descripcion: "Ceviche de camarón",
        valor: [
            {
                descripcion: "X2",
                value: 16000
            },
            {
                descripcion: "X3",
                value: 22000
            },
        ],
    },

    {
        id: 25,
        nombre: "Patacón vegetariano",
        categoria: "encocados",
        descripcion: "Pimentón, cebolla, champiñones, maíz y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        img: alitas,
        id: 26,
        nombre: "Alitas BBQ-MIELMOSTAZA-HOT",
        categoria: "especiales",
        descripcion: "Alitas, salsa BBQ, mielmostaza",
        valor: [
            {
                descripcion: "X6",
                value: 17000
            },
            {
                descripcion: "X12",
                value: 30000
            },
            {
                descripcion: "X18",
                value: 43000
            }
        ],
    },
    {
        img: salchipapa,
        id: 27,
        nombre: "Salchipapa ",
        destacados:true,
        categoria: "especiales",
        descripcion: "Pollo, tocineta, queso y maíz",
        valor: [
            {
                descripcion: "Kid",
                value: 7000
            },
            {
                descripcion: "x1",
                value: 14000
            },
            {
                descripcion: "X2",
                value: 24000
            }
        ],
    },
    {
        img: costillas,
        id: 28,
        nombre: "Costillas BBQ",
        categoria: "especiales",
        descripcion: "Costillas, papas a la francesa y ensalada de la casa",
        valor: [
            {
                descripcion: "250g",
                value: 18000
            },
            {
                descripcion: "500g",
                value: 35000
            },
            {
                descripcion: "700g",
                value: 50000
            }
        ],
    },
    {
        img: pierna,
        id: 29,
        nombre: "Pierna pernil",
        categoria: "especiales",
        descripcion: "Pollo, papas a la francesa o criolla, ensalada de la casa",
        valor: 16000
    },
    {
        img: perro,
        id: 30,
        nombre: "Choriperro",
        categoria: "especiales",
        descripcion: "Pan artesanal, chorizo 125g, tocineta, queso fundido, salsa de la casa y papas a la francesa",
        valor: 16000
    },
    {
        img: picada,
        id: 31,
        nombre: "Picada panorama",
        categoria: "especiales",
        descripcion: "Carne asada, morcilla, chorizo ahumado, chunchullo crunch, pollo crispy, papa criolla, patacones, guacamole y hogao ",
        valor: [
            {
                descripcion: "2 personas",
                value: 35000
            },
            {
                descripcion: "4 personas",
                value: 65000
            },
            {
                descripcion: "8 personas",
                value: 120000
            }
        ],
    },
    {
        img: hamburguesitas,
        categoria: "entradas",
        id: 32,
        nombre: "Mini hamburguesas",
        descripcion: "Mini hamburguesas x2 queso y tocineta.",
        valor: 15000
    },
    {
        id: 33,
        nombre: "Patacón tocineta y maíz",
        categoria: "encocados",
        descripcion: "Tocineta, maíz, salsa de la casa y queso",
        valor: [
            {
                descripcion: "X2",
                value: 12000
            },
            {
                descripcion: "X3",
                value: 16000
            },
        ],
    },
    {
        img: malteadas,
        id: 34,
        nombre: "Malteadas",
        categoria: "bebidas",
        descripcion: "Malteada de oreo, vainilla y fresa",
        valor: [
            {
                descripcion: "Oreo",
                value: 9000
            },
            {
                descripcion: "Vainilla",
                value: 9000
            },
            {
                descripcion: "Fresa",
                value: 9000
            }
        ],
    },
    {
        id:35,
        img: brownie,
        categoria:"postres",
        nombre:"Brownie con helado",
        valor:8000
    },
    {
        id:36,
        img:waffle,
        categoria:"postres",
        nombre:"Waffle con helado",
        valor:8000
    },
    {
        id:37,
        img:Banano,
        categoria:"postres",
        nombre:"Banano asado con queso",
        valor:8000
    },
    {
        id:38,
        img:fresas,
        categoria:"postres",
        nombre:"Fresas con helado",
        valor:7000
    },
    {
        id:39,
        img:vinoblanco,
        categoria:"bebidas",
        nombre:"Vino blanco",
        valor:8000
    },
    {
        id:40,
        img:sangria,
        categoria:"bebidas",
        nombre:"Sangría",
        valor:8000
    },
    {
        id:41,
        img:coco,
        categoria:"bebidas",
        nombre:"Limonada de coco",
        valor:7000
    },
    {
        id:42,
        img:frappe,
        categoria:"bebidas",
        nombre:"Limonada de coco",
        valor:8000
    },
    {
        
        id: 43,
        nombre: "Micheladas",
        categoria: "bebidas",
        descripcion: "Bebida refrescante a base de soda con trozos de frutas o llévala con una de nuestra cervezas",
        valor: [
            {
                descripcion: "Soda",
                value: 8000
            },
            {
                descripcion: "Budweiser",
                value: 5000
            },
            {
                descripcion: "BBC",
                value: 6000
            },
            {
                descripcion: "Corona",
                value: 6000
            },
            {
                descripcion: "Club Colombia",
                value: 5000
            },

        ],
    },
    {
        
        id: 44,
        nombre: "Jugos naturales",
        categoria: "bebidas",
        descripcion: "Guanabana, mora, fresa, piña, hierbabuena, maracuya, mango, cítrica cerezada y lulo",
        valor: [
            {
                descripcion: "Leche",
                value: 6000
            },
            {
                descripcion: "Agua",
                value: 5000
            },
            {
                descripcion: "Frappe",
                value: 7000
            },
            {
                descripcion: "Soda",
                value: 6000
            },
            {
                descripcion: "Botella agua",
                value: 10000
            },
            {
                descripcion: "Botella soda/leche",
                value: 12000
            },

        ],
    },
]