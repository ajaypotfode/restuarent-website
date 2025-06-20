"use client"
import { menuCard} from "../../data/Data";
import Image from "next/image";


const Menu = () => {

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="box-container">
          {menuCard.map((item, index) => {
            const { name, image, description } = item
            return (
              <div className="box"
                key={index}
              >
                <div className="img">
                  <Image src={image} height={50} width={80} alt="alternate img" />
                </div>
                <h3>{name}</h3>
                {/* <h3>Biryani</h3> */}
                <h5 className="text-light">{description}</h5>
                <div className="price">
                  {/* {price} .Rs */}
                  {/* 200 Rs */}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
