import { MdDinnerDining, MdFreeBreakfast, MdLunchDining } from "react-icons/md";
const menuType= [
  {
    id: 1,
    name: "Breakfast",
    img: <MdFreeBreakfast />
  },
  {
    id: 2,
    name: "Lunch",
    img: <MdLunchDining />
  },
  {
    id: 3,
    name: "Dinner",
    img: <MdDinnerDining />

  }
]

const menuCard = [{
  name: "Coffee",
 description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae et error minima ut? Provident, rerum?",
  image: "/Images/menu-card/lateCoffee.jpg"
},
{
  name: "Peri",
 description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae et error minima ut? Provident, rerum?",
  image: "/Images/menu-card/peri.jpg"
},
{
  name: "Chicken Roll",
 description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae et error minima ut? Provident, rerum?",
  image: "/Images/menu-card/ChickenRoll.jpg"
},
{
  name: "Salad",
 description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae et error minima ut? Provident, rerum?",
  image: "/Images/menu-card/vegsalad.jpg"
}
]


const review = [
  {
    name: "John",
    image: "/Images/pic-1.png"

  },
  {
    name: "Lissa",
    image: "/Images/pic-2.png"

  },
  {
    name: "Martin",
    image: "/Images/pic-3.png"

  },
];
export { review, menuType,menuCard };
