import Burger from "../../../../public/Burger";
import Roasted_meat from "../../../../public/Roasted_meat";
import Model from "../gltf_models/Model";

export const images = [
  {
    id: 1,
    src: <Model Model={<Burger />} />,
    title: "Black Coffee",
    desc: "Black coffee is a beverage made from roasted coffee beans. The beans are ground and soaked in water, which releases their flavor, color, caffeine content, and nutrients. ",
  },
  {
    id: 2,
    src: <Model Model={<Roasted_meat />} />,
    title: "Cappuccino",
    desc: "A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam). Cappuccino. Type, Hot.",
  },
  {
    id: 3,
    src: <Model Model={<Burger />} />,
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 4,
    src: <Model Model={<Roasted_meat />} />,
    title: "Latte",
    desc: "A latte or caffè latte is a milk coffee that boasts a silky layer of foam as a real highlight to the drink. A true latte will be made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top",
  },
  {
    id: 5,
    src: <Model Model={<Burger />} />,
    title: "Macchiato",
    desc: "Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed. ",
  },
];
