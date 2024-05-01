import React from "react";
import ModalPopUp from "../components/ModalPopUp";
export default function Card({ item }: any) {
  console.log('item',item)
  return (
    <div className="card">
      <img className="item-img" src={item.image} alt={item.itemName} />
      <div className="item-details-div">
        <h3 className="item-name">{item.itemName}</h3>
        <p className="item-description">
          {item.description.length > 45
            ? item.description.slice(0, 45) + "..."
            : item.description}
        </p>

        <div className="yield-packaging-div">
            <p>Weight: {item.yield}</p>
            <p>Packaging: {item.packaging}</p>
        </div>

        {/* Allergies and price */}
        <div className="allergies-price-div">
          Allergies
          {/* {item.allergies[0] ? (
            <div className="allergies-div">
              {item.allergies.map((icon: any) => {
                return (
                  <img key={icon.allergyName} src={icon.allergySrc} alt={icon.allergyName} />
                );
              })}
            </div>
          ) : (
            ""
          )} */}
          <div className="price-readmore">
            <h3 className="item-price">
              <span className="aed">AED</span>
              {item.price}
            </h3>
          </div>
        </div>
      </div>
      <ModalPopUp itemDetails={item} />
    </div>
  );
}
