import React from "react";

const Addtocartdata = [
  {
    id: 1,
    title: "NFL® Los Angeles Rams - Super Bowl LVI Championship",
    subtitle: "Stainless Steel With Slider Lid",
    itemno: "Item No. 1410739",
    offer: "Buy Any 4, Get $10 Off Free Shipping on $50+",
    price: "Rs. 1,500",
    img: "https://www.tumbler.com/images/shop-classic-010322.webp",
    img2: "https://www.tumbler.com/images/shop-classic-010322.webp",
    img3: "https://www.tumbler.com/images/shop-classic-010322.webp",
    disCription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, minima provident? Aliquid officia possimus consequuntur placeat vitae facilis adipisci officiis temporibus minima laudantium, pariatur itaque. Aliquid accusantium nobis blanditiis mollitia dicta, quidem facere sit quibusdam.",
  },
];

const Addtocart = () => {
  return (
    <div>
      {Addtocartdata.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <h2>{item.subtitle}</h2>
            <h3>{item.itemno}</h3>
            <h4>{item.offer}</h4>
            <h5>{item.price}</h5>
            <img src={item.img} alt="" />
            <img src={item.img2} alt="" />
            <img src={item.img3} alt="" />
            <p>{item.disCription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Addtocart;
