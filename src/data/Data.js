import { MdDinnerDining, MdFreeBreakfast, MdLunchDining } from "react-icons/md";
const menuimg=[
  // {
  //   id:1,
  //   name:"Rolls",
  //   img: "/Images/menu-items/rolls.png"
  //  },
  // { id:2,
  //   name:"Coffee",
  //   img: "/Images/menu-items/coffee.png"
  //  },
  // { id:3,
  //   name:"Pure Veg",
  //   img: "/Images/menu-items/veg.png"
  //  },
  // {
  //   id:4,
  //   name:"Non Veg",
  //   img: "/Images/menu-items/nonveg.png"
  //  },
  // {
  //   id:5,
  //   name:"Salad",
  //   img: "/Images/menu-items/salad.png"
  //  },
  // {
  //   id:6,
  //   name:"Cake",
  //   img: "/Images/menu-items/cake.png"
  //  },
  // {
  //   id:7,
  //   name:"Noodles",
  //   img: "/Images/menu-items/noodles.png" 
  //  },
  {
    id:1,
    name:"Breakfast",
    img: <MdFreeBreakfast />
  },
  {
    id:2,
    name:"Lunch",
    img: <MdLunchDining />
  },
  {
    id:3,
    name:"Dinner",
    img:<MdDinnerDining />

  }
]
const review = [
  {
    name:"John",
    image: "/Images/pic-1.png"

  },
  {
    name:"Lissa",
    image: "/Images/pic-2.png"

  },
  {
    name:"Martin",
    image: "/Images/pic-3.png"

  },
];
export {review,menuimg};
