import type { Product } from '../types/Product';
import { calculateDiscountedPrice } from '../utils/cartUtils';

export const products: Product[] = [
  // Crackers (25 items)
  {
    id: 1,
    name: "7CM Electric Sparklers ",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 50,
    discountedPrice: calculateDiscountedPrice(50),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=1",
    category: "Crackers"
  },
  {
    id: 2,
    name: "7CM Colour Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 70,
    discountedPrice: calculateDiscountedPrice(70),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=2",
    category: "Crackers"
  },
  {
    id: 3,
    name: "7CM Green Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 80,
    discountedPrice: calculateDiscountedPrice(80),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=3",
    category: "Crackers"
  },
  {
    id: 4,
    name: "7CM Red Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 80,
    discountedPrice: calculateDiscountedPrice(80),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=4",
    category: "Crackers"
  },
  {
    id: 5,
    name: "10CM Electric Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 100,
    discountedPrice: calculateDiscountedPrice(100),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=5",
    category: "Crackers"
  },
  {
    id: 6,
    name: "10CM Colour Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 110,
    discountedPrice: calculateDiscountedPrice(110),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=6",
    category: "Crackers"
  },
  {
    id: 7,
    name: "10CM Green Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 150,
    discountedPrice: calculateDiscountedPrice(150),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=7",
    category: "Crackers"
  },
  {
    id: 8,
    name: "10CM Red Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 150,
    discountedPrice: calculateDiscountedPrice(150),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=8",
    category: "Crackers"
  },
  {
    id: 9,
    name: "12CM Electric Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 150,
    discountedPrice: calculateDiscountedPrice(150),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=9",
    category: "Crackers"
  },
  {
    id: 10,
    name: "12CM Colour Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 150,
    discountedPrice: calculateDiscountedPrice(150),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=10",
    category: "Crackers"
  },
  {
    id: 11,
    name: "12CM Green Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 200,
    discountedPrice: calculateDiscountedPrice(200),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=11",
    category: "Crackers"
  },
  {
    id: 12,
    name: "12CM Red Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 225,
    discountedPrice: calculateDiscountedPrice(225),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=12",
    category: "Crackers"
  },
  {
    id: 13,
    name: "15CM Electric Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 225,
    discountedPrice: calculateDiscountedPrice(225),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=13",
    category: "Crackers"
  },
  {
    id: 14,
    name: "15CM Colour Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 250,
    discountedPrice: calculateDiscountedPrice(250),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=14",
    category: "Crackers"
  },
  {
    id: 15,
    name: "15CM Green Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=15",
    category: "Crackers"
  },
  {
    id: 16,
    name: "15CM Red Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 350,
    discountedPrice: calculateDiscountedPrice(350),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=16",
    category: "Crackers"
  },
  {
    id: 17,
    name: "30CM Electric Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 225,
    discountedPrice: calculateDiscountedPrice(225),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=17",
    category: "Crackers"
  },
  {
    id: 18,
    name: "30CM Colour Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 250,
    discountedPrice: calculateDiscountedPrice(250),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=18",
    category: "Crackers"
  },
  {
    id: 19,
    name: "30CM Green Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=19",
    category: "Crackers"
  },
  {
    id: 20,
    name: "30CM Red Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 350,
    discountedPrice: calculateDiscountedPrice(350),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=20",
    category: "Crackers"
  },
  {
    id: 21,
    name: "50CM Electric Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 1000,
    discountedPrice: calculateDiscountedPrice(1000),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=21",
    category: "Crackers"
  },
  {
    id: 22,
    name: "50CM Colour Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 1100,
    discountedPrice: calculateDiscountedPrice(1100),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=22",
    category: "Crackers"
  },
  {
    id: 23,
    name: "5 In One Rolling Sparklers",
    description: "Light Up the Night, Sparkle with Delight!",
    price: 1000,
    discountedPrice: calculateDiscountedPrice(1100),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=22",
    category: "Crackers"
  },
  {
    id: 24,
    name: "10½″ Ground Chakkar Big (25 Pcs)",
    description: "Rockets with golden shower effect",
    price: 600,
    discountedPrice: calculateDiscountedPrice(600),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=23",
    category: "Crackers"
  },
  {
    id: 25,
    name: "10½″ Ground Chakkar Big (10 Pcs)",
    description: "Rockets with silver shower effect",
    price: 250,
    discountedPrice: calculateDiscountedPrice(250),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=24",
    category: "Crackers"
  },
  {
    id: 26,
    name: "Chakkar Ashoka (10 Pcs)",
    description: "Assorted pack of premium rockets",
    price: 400,
    discountedPrice: calculateDiscountedPrice(400),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=25",
    category: "Crackers"
  },

  // Fountains (25 items)
  {
    id: 27,
    name: "Chakkar Special (10 Pcs)",
    description: "Extra large fountain with long duration",
    price: 500,
    discountedPrice: calculateDiscountedPrice(500),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=26",
    category: "Fountains"
  },
  {
    id: 28,
    name: "Chakkar Deluxe (10 Pcs)",
    description: "Multi-color fountain display",
    price: 850,
    discountedPrice: calculateDiscountedPrice(850),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=27",
    category: "Fountains"
  },
  {
    id: 29,
    name: "Whizle Wheel (5 Pcs)",
    description: "Fountain with golden sparkles",
    price: 750,
    discountedPrice: calculateDiscountedPrice(750),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=28",
    category: "Fountains"
  },
  {
    id: 30,
    name: "Flower Pot Small (10 Pcs)",
    description: "Fountain with silver sparkles",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=29",
    category: "Fountains"
  },
  {
    id: 31,
    name: "Flower Pot Big (10 Pcs)",
    description: "Seven-color fountain display",
    price: 450,
    discountedPrice: calculateDiscountedPrice(450),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=30",
    category: "Fountains"
  },
  {
    id: 32,
    name: "Flower Pot Special (10 Pcs)",
    description: "Fountain with spreading effect",
    price: 600,
    discountedPrice: calculateDiscountedPrice(600),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=31",
    category: "Fountains"
  },
  {
    id: 33,
    name: "Flower Pot Ashoka (10 Pcs)",
    description: "Compact fountain with colorful display",
    price: 800,
    discountedPrice: calculateDiscountedPrice(800),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=32",
    category: "Fountains"
  },
  {
    id: 34,
    name: "Flower Pot Deluxe (5 Pcs)",
    description: "Medium-sized colorful fountain",
    price: 1000,
    discountedPrice: calculateDiscountedPrice(1000),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=33",
    category: "Fountains"
  },
  {
    id: 35,
    name: "Flower Pot Deluxe (2 Pcs)",
    description: "Large fountain with extended duration",
    price: 700,
    discountedPrice: calculateDiscountedPrice(700),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=34",
    category: "Fountains"
  },
  {
    id: 36,
    name: "Colour Koti (10 Pcs)",
    description: "Compact cone fountain",
    price: 1200,
    discountedPrice: calculateDiscountedPrice(1200),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=35",
    category: "Fountains"
  },
  {
    id: 37,
    name: "Shower (5 Pcs)",
    description: "Large cone fountain display",
    price: 550,
    discountedPrice: calculateDiscountedPrice(550),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=36",
    category: "Fountains"
  },
  {
    id: 38,
    name: "Chittu Puttu (10 Pcs)",
    description: "Fountain with butterfly effect",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=37",
    category: "Fountains"
  },
  {
    id: 39,
    name: "Stone (10 Pcs)",
    description: "Fountain with rhythmic display",
    price: 125,
    discountedPrice: calculateDiscountedPrice(125),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=38",
    category: "Fountains"
  },
  {
    id: 40,
    name: "Peacock (1 Pcs)",
    description: "Fountain with whistling effect",
    price: 900,
    discountedPrice: calculateDiscountedPrice(900),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=39",
    category: "Fountains"
  },
  {
    id: 41,
    name: "Water Falls-H2O (1 Pcs)",
    description: "Fountain with varying effects",
    price: 800,
    discountedPrice: calculateDiscountedPrice(800),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=40",
    category: "Fountains"
  },
  {
    id: 42,
    name: "Smoke (3 Pcs)",
    description: "Three-color fountain display",
    price: 1000,
    discountedPrice: calculateDiscountedPrice(1000),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=41",
    category: "Fountains"
  },
  {
    id: 43,
    name: "Bhambaram (5 Pcs)",
    description: "Red color fountain",
    price: 400,
    discountedPrice: calculateDiscountedPrice(400),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=42",
    category: "Fountains"
  },
  {
    id: 44,
    name: "Butterfly (10 Pcs)",
    description: "Green color fountain",
    price: 550,
    discountedPrice: calculateDiscountedPrice(550),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=43",
    category: "Fountains"
  },
  {
    id: 45,
    name: "Syren (3 Pcs)",
    description: "Blue color fountain",
    price: 900,
    discountedPrice: calculateDiscountedPrice(900),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=44",
    category: "Fountains"
  },
  {
    id: 46,
    name: "Photo Flash (5 Pcs)",
    description: "Purple color fountain",
    price: 400,
    discountedPrice: calculateDiscountedPrice(400),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=45",
    category: "Fountains"
  },
  {
    id: 47,
    name: "Helicoptor (5 Pcs)",
    description: "Pack of 5 small fountains",
    price: 600,
    discountedPrice: calculateDiscountedPrice(600),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=46",
    category: "Fountains"
  },
  {
    id: 48,
    name: "Popcorn Mega (2 Pcs)",
    description: "Pack of 5 medium fountains",
    price: 1000,
    discountedPrice: calculateDiscountedPrice(1000),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=47",
    category: "Fountains"
  },
  {
    id: 49,
    name: "Golden Globe (5 Pcs)",
    description: "Pack of 5 large fountains",
    price: 550,
    discountedPrice: calculateDiscountedPrice(550),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=48",
    category: "Fountains"
  },
  {
    id: 50,
    name: "Tik Tok (3 Pcs)",
    description: "Pack of 10 assorted fountains",
    price: 550,
    discountedPrice: calculateDiscountedPrice(550),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=49",
    category: "Fountains"
  },
  {
    id: 51,
    name: "Vennila Tin (1 Pcs)",
    description: "Pack of 15 premium fountains",
    price: 500,
    discountedPrice: calculateDiscountedPrice(500),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=50",
    category: "Fountains"
  },

  // Aerial Fireworks (25 items)
  {
    id: 52,
    name: "Star Wars (1 Pcs)",
    description: "7 shots of aerial display",
    price: 700,
    discountedPrice: calculateDiscountedPrice(700),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=51",
    category: "Aerial"
  },
  {
    id: 53,
    name: "Fox Star (1 Pcs)",
    description: "12 shots of aerial display",
    price: 700,
    discountedPrice: calculateDiscountedPrice(700),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=52",
    category: "Aerial"
  },
  {
    id: 54,
    name: "Kelly Mega Colour (1 Pcs)",
    description: "25 shots of aerial display",
    price: 900,
    discountedPrice: calculateDiscountedPrice(900),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=53",
    category: "Aerial"
  },
  {
    id: 55,
    name: '1½" Twinkling Star (10 Pcs)',
    description: "50 shots of aerial display",
    price: 150,
    discountedPrice: calculateDiscountedPrice(150),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=54",
    category: "Aerial"
  },
  {
    id: 56,
    name: '4" Twinkling Star (10 Pcs)',
    description: "100 shots of aerial display",
    price: 400,
    discountedPrice: calculateDiscountedPrice(400),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=55",
    category: "Aerial"
  },
  {
    id: 57,
    name: "Dora (10 Pcs)",
    description: "200 shots of aerial display",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=56",
    category: "Aerial"
  },
  {
    id: 58,
    name: '7" Pencil (10 Pcs)',
    description: "Pearl effect aerial shots",
    price: 200,
    discountedPrice: calculateDiscountedPrice(200),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=57",
    category: "Aerial"
  },
  {
    id: 59,
    name: '10" Pencil (10 Pcs)',
    description: "Golden pearl effect shots",
    price: 400,
    discountedPrice: calculateDiscountedPrice(400),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=58",
    category: "Aerial"
  },
  {
    id: 60,
    name: "The Lorex (3 Pcs)",
    description: "Silver pearl effect shots",
    price: 700,
    discountedPrice: calculateDiscountedPrice(700),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=59",
    category: "Aerial"
  },
  {
    id: 61,
    name: "Nayagra Falls (3 Pcs)",
    description: "Multi-color pearl effect shots",
    price: 700,
    discountedPrice: calculateDiscountedPrice(700),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=60",
    category: "Aerial"
  },
  {
    id: 62,
    name: "Colour Rocket (10 Pcs)",
    description: "Loud aerial shots",
    price: 450,
    discountedPrice: calculateDiscountedPrice(450),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=62",
    category: "Aerial"
  },
  {
    id: 63,
    name: "Rocket Bomb (10 Pcs)",
    description: "Flower pattern aerial display",
    price: 450,
    discountedPrice: calculateDiscountedPrice(450),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=63",
    category: "Aerial"
  },
  {
    id: 64,
    name: "Two Sound Rocket (10 Pcs)",
    description: "Star pattern aerial display",
    price: 750,
    discountedPrice: calculateDiscountedPrice(750),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=64",
    category: "Aerial"
  },
  {
    id: 65,
    name: "Bullet Bomb (10 Pcs)",
    description: "Heart pattern aerial display",
    price: 200,
    discountedPrice: calculateDiscountedPrice(200),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=65",
    category: "Aerial"
  },
  {
    id: 66,
    name: "Hydro Bomb (10 Pcs)",
    description: "Ring pattern aerial display",
    price: 400,
    discountedPrice: calculateDiscountedPrice(400),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=66",
    category: "Aerial"
  },
  {
    id: 67,
    name: "King Bomb (10 Pcs)",
    description: "Palm tree pattern display",
    price: 500,
    discountedPrice: calculateDiscountedPrice(500),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=67",
    category: "Aerial"
  },
  {
    id: 68,
    name: "Classic Bomb (10 Pcs)",
    description: "Crossing pattern display",
    price: 650,
    discountedPrice: calculateDiscountedPrice(650),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=68",
    category: "Aerial"
  },
  {
    id: 69,
    name: "Agni Bomb Mega (10 Pcs)",
    description: "Willow pattern display",
    price: 950,
    discountedPrice: calculateDiscountedPrice(950),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=69",
    category: "Aerial"
  },
  {
    id: 70,
    name: '2¾" Kuruvi (5 Pcs)',
    description: "Flower pattern display",
    price: 60,
    discountedPrice: calculateDiscountedPrice(60),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=70",
    category: "Aerial"
  },
  {
    id: 71,
    name: '3½" Laxmi (5 Pcs)',
    description: "Round pattern display",
    price: 100,
    discountedPrice: calculateDiscountedPrice(100),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=71",
    category: "Aerial"
  },
  {
    id: 72,
    name: '4" Laxmi (5 Pcs)',
    description: "Large round pattern display",
    price: 125,
    discountedPrice: calculateDiscountedPrice(125),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=72",
    category: "Aerial"
  },
  {
    id: 73,
    name: "DLX Laxmi (5 Pcs)",
    description: "Gold trailing stars display",
    price: 200,
    discountedPrice: calculateDiscountedPrice(200),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=73",
    category: "Aerial"
  },
  {
    id: 74,
    name: '3½" Two Sound (5 Pcs)',
    description: "Delayed falling stars display",
    price: 250,
    discountedPrice: calculateDiscountedPrice(250),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=74",
    category: "Aerial"
  },
  {
    id: 75,
    name: "Jallikattu Mega (5 Pcs)",
    description: "Assorted premium aerial fireworks",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?fireworks&sig=75",
    category: "Aerial"
  },

  // Sparklers (25 items)
  {
    id: 76,
    name: "Red Bijili (100 Pcs)",
    description: "Small sparklers for kids",
    price: 175,
    discountedPrice: calculateDiscountedPrice(175),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=76",
    category: "Sparklers"
  },
  {
    id: 77,
    name: "Gold Bijili (100 Pcs)",
    description: "Medium sparklers",
    price: 200,
    discountedPrice: calculateDiscountedPrice(200),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=77",
    category: "Sparklers"
  },
  {
    id: 78,
    name: "1000 Wala",
    description: "Long sparklers",
    price: 1500,
    discountedPrice: calculateDiscountedPrice(1500),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=78",
    category: "Sparklers"
  },
  {
    id: 79,
    name: "2000 Wala",
    description: "Extra long sparklers",
    price: 3000,
    discountedPrice: calculateDiscountedPrice(3000),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=79",
    category: "Sparklers"
  },
  {
    id: 80,
    name: "5000 Wala",
    description: "Colored small sparklers",
    price: 7500,
    discountedPrice: calculateDiscountedPrice(7500),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=80",
    category: "Sparklers"
  },
  {
    id: 81,
    name: "7Shot (5 Pcs)",
    description: "Colored medium sparklers",
    price: 750,
    discountedPrice: calculateDiscountedPrice(750),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=81",
    category: "Sparklers"
  },
  {
    id: 82,
    name: "12 shots",
    description: "Colored large sparklers",
    price: 1000,
    discountedPrice: calculateDiscountedPrice(1000),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=82",
    category: "Sparklers"
  },
  {
    id: 83,
    name: "12 Shot-Lasershow",
    description: "Small morning glory sparklers",
    price: 1200,
    discountedPrice: calculateDiscountedPrice(1200),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=83",
    category: "Sparklers"
  },
  {
    id: 84,
    name: "30 Shots",
    description: "Medium morning glory sparklers",
    price: 2250,
    discountedPrice: calculateDiscountedPrice(2250),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=84",
    category: "Sparklers"
  },
  {
    id: 85,
    name: "Magic Shots(30 Shots)",
    description: "Large morning glory sparklers",
    price: 2500,
    discountedPrice: calculateDiscountedPrice(2500),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=85",
    category: "Sparklers"
  },
  {
    id: 86,
    name: "60 Shots",
    description: "Red colored sparklers",
    price: 4500,
    discountedPrice: calculateDiscountedPrice(4500),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=86",
    category: "Sparklers"
  },
  {
    id: 87,
    name: "Wonder Shots(60 Shots)",
    description: "Green colored sparklers",
    price: 5000,
    discountedPrice: calculateDiscountedPrice(5000),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=87",
    category: "Sparklers"
   },
  {
    id: 88,
    name: "120 Shots (PAJRO)",
    description: "Blue colored sparklers",
    price: 8500,
    discountedPrice: calculateDiscountedPrice(8500),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=88",
    category: "Sparklers"
  },
  {
    id: 89,
    name: "240 Shots",
    description: "Golden colored sparklers",
    price: 16000,
    discountedPrice: calculateDiscountedPrice(16000),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=89",
    category: "Sparklers"
  },
  {
    id: 90,
    name: "Fanda Magic(5 Pcs)",
    description: "Silver colored sparklers",
    price: 1000,
    discountedPrice: calculateDiscountedPrice(1000),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=90",
    category: "Sparklers"
  },
  {
    id: 91,
    name: '2½" Fancy',
    description: "Multi-colored sparklers",
    price: 700,
    discountedPrice: calculateDiscountedPrice(700),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=91",
    category: "Sparklers"
  },
  {
    id: 92,
    name: '3½" Fancy',
    description: "Bright neon colored sparklers",
    price: 1400,
    discountedPrice: calculateDiscountedPrice(1400),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=92",
    category: "Sparklers"
  },
  {
    id: 93,
    name: '3½" Nayagara Falls Fancy',
    description: "Thin pencil-shaped sparklers",
    price: 1800,
    discountedPrice: calculateDiscountedPrice(1800),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=93",
    category: "Sparklers"
  },
  {
    id: 94,
    name: "Paper Bomb ¼Kg",
    description: "Traditional stick sparklers",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=94",
    category: "Sparklers"
  },
  {
    id: 95,
    name: "Paper Bomb ½Kg",
    description: "Wire-based sparklers",
    price: 600,
    discountedPrice: calculateDiscountedPrice(600),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=95",
    category: "Sparklers"
  },
  {
    id: 96,
    name: "Roll Cap",
    description: "Assorted party pack sparklers",
    price: 375,
    discountedPrice: calculateDiscountedPrice(375),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=96",
    category: "Sparklers"
  },
];
/* {
    id: 97,
    name: "Kids Pack Sparklers",
    description: "Safe sparklers for kids",
    price: 150,
    discountedPrice: calculateDiscountedPrice(150),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=97",
    category: "Sparklers"
  },
  {
    id: 98,
    name: "Family Pack Sparklers",
    description: "Large family pack of sparklers",
    price: 300,
    discountedPrice: calculateDiscountedPrice(300),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=98",
    category: "Sparklers"
  },
  {
    id: 99,
    name: "Deluxe Sparkler Pack",
    description: "Premium assorted sparklers",
    price: 400,
    discountedPrice: calculateDiscountedPrice(400),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=99",
    category: "Sparklers"
  },
  {
    id: 100,
    name: "Ultimate Sparkler Collection",
    description: "Complete collection of all sparkler types",
    price: 500,
    discountedPrice: calculateDiscountedPrice(500),
    image: "https://source.unsplash.com/800x600/?sparklers&sig=100",
    category: "Sparklers"
  }
];
*/
