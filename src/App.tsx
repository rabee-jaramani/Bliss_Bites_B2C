import React, { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import BottomNav from "./components/BottomNav";
import Footer from "./footer/Footer";


import { items_1,items_2,items_3,items_4,items_5,items_6 } from "./data/items";
import { menu_collections } from "./data2";
import { food_categories } from "./data2";

import TopMenu from "./top_menu/TopMenu";
import FB_MENU from "./fb_menu/FB_MENU";
import AboutUsButton from "./components/Buttons";
import Buttons from "./components/Buttons";
function App() {
  const [selectedItems, setSelectedItems] = useState(items_1)
  const scrollTo = (where: string, tabName: string) => {
    if (where === "collection") {
      const element = document.getElementById(
        tabName.replace(/[\s-']/g, "").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 190,
          behavior: "smooth",
        });
      }
    }
    if (where === "category") {
      const element = document.getElementById(
        tabName.replace(/[\s-']/g, "").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 180,
          behavior: "smooth",
        });
      }
    }
    if (where === "top") {
      const scrollStep = -window.scrollY / (500 / 10); // Adjust the speed as needed
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
      setSelectedCollection("BOULANGERIE");
    }
  };
  const menu_categories = [
    "BREADS",
    "PIZZA BASES",
    "WRAPS",
    "BETWEEN THE BUNS",
    "LOCAL AMORE",
  ];

  // state to handle fb_type change food drinks dessrts
  const [selectedFB_type, setSelectedFB_type] = useState("Food");

  // selected Collection
  const [selectedCollection, setSelectedCollection] = useState("BOULANGERIE");

  // selected Category
  const [selectedCategory, setSelectedCategory] = useState("BREADS");

  // collections to render in tabs
  const [selectedCollectionsTabs, setSelectedCollectionsTabs] =
    useState(menu_collections);
  // collections to render in tabs
  const [selectedCategoriesTabs, setSelectedCategoriesTabs] =
    useState(menu_categories);

  const handleFB_Change = () => {
    if (selectedFB_type === "Food") {
      setSelectedFB_type("Food");
    }
    if (selectedFB_type === "Drinks") {
      setSelectedFB_type("Drinks");
    }
    if (selectedFB_type === "Desserts") {
      setSelectedFB_type("Desserts");
    }
    // if (selectedFB_type === "Cloud Kitchen") {
    //   setSelectedFB_type("Cloud Kitchen");
    //   setFB_List_To_Render(cloud_kitchen_full_menu);
    // }
  };
  

useEffect(() => {
  if(selectedCollection==='BOULANGERIE'){
    setSelectedCategoriesTabs([ "BREADS","PIZZA BASES","WRAPS","BETWEEN THE BUNS", "LOCAL AMORE",])
    setSelectedItems(items_1)
  }
    if(selectedCollection==='PATTISSERIE'){
      setSelectedCategoriesTabs(["TARTS","CAKES","TEA CAKES","MUFFINS","BREAKFAST ESSENTIALS","TRUFFLES",])
      setSelectedItems(items_2)

    }
    if(selectedCollection==='VIENNOISERIE'){
      setSelectedCategoriesTabs([ "CROISSANTS & DANISH",])
      setSelectedItems(items_3)

    }
    if(selectedCollection==='FROMAGERIE'){
      setSelectedCategoriesTabs(["CHEESE","CHEESE PLATTER","CRACKERS","JAMS & SAUCES"])
      setSelectedItems(items_4)

    }
    if(selectedCollection==='CRACKERS'){
      setSelectedCategoriesTabs([ "CRACKERS",])
      setSelectedItems(items_5)

    }
    if(selectedCollection==='CONDIMENTS'){
      setSelectedCategoriesTabs([ "JAMS & SAUCES"])
      setSelectedItems(items_6)

    }
}, [selectedCollection])

  return (
    <div className="App">
      <div className="app-container">
        <Banner />
        <TopMenu
          selectedCollectionsTabs={selectedCollectionsTabs}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          selectedCategoriesTabs={selectedCategoriesTabs}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          scrollTo={scrollTo}
        />
        {/* <FB_MENU
          selectedFB_type={selectedFB_type}
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={food}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        /> */}
        <FB_MENU
          selectedFB_type={selectedFB_type}
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={selectedItems}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        
        {/* <FB_MENU
          selectedFB_type="Drinks"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={drinks}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <FB_MENU
          selectedFB_type="Desserts"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={desserts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />

        <FB_MENU
          selectedFB_type="Vegan / Plant Based"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={vegan_plant_based}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        /> */}
        {/* <BottomNav
          selectedFB_type={selectedFB_type}
          setSelectedFB_type={setSelectedFB_type}
          handleFB_Change={handleFB_Change}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          scrollTo={scrollTo}
        /> */}
        <Buttons/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
