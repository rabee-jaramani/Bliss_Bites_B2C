import placeholder from "../images/placeholder.webp";
import basil_chilli_cheese from "../images/items/basil_chilli_cheese.webp"
import beetroot_wrap from "../images/items/beetroot_wrap.webp"
import brioche_bread from "../images/items/brioche_bread.webp"
import burger_bun from "../images/items/burger_bun.webp"
import cauliflower_wrap from "../images/items/cauliflower_wrap.webp"
import cheese_platter from "../images/items/cheese_platter.webp"
import chilli_chives_cheese from "../images/items/chilli_chives_cheese.webp"
import chocolate_cake from "../images/items/chocolate_cake.webp"
import country_style_ciabatta from "../images/items/country_style_ciabatta.webp"
import country_style_slice_bread from "../images/items/country_style_slice_bread.webp"
import cranberry_chilli_ciabatta from "../images/items/cranberry_chilli_ciabatta.webp"
import dark_chocolate_truffle from "../images/items/dark_chocolate_truffle.webp"
import dark_chocolate_strawberry_cake from "../images/items/dark_chocolate_strawberry_cake.webp"
import granola_dark_chocolate_truffle from "../images/items/granola_dark_chocolate_truffle.webp"
import honey_cinnamon_fig_cheese from "../images/items/honey_cinnamon_fig_cheese.webp"
import jalapeno_cranberry_cheese from "../images/items/jalapeno_cranberry_cheese.webp"
import lemon_cheese_cake from "../images/items/lemon_cheese_cake.webp"
import mango_passion_fruit_and_chilli_jam from "../images/items/mango_passion_fruit_and_chilli_jam.webp"
import matcha_pistachio_truffle from "../images/items/matcha_pistachio_truffle.webp"
import pecan_carrot_tea_cake from "../images/items/pecan_carrot_tea_cake.webp"
import pecan_tart from "../images/items/pecan_tart.webp"
import pecan_tart_bite_size from "../images/items/pecan_tart_bite_size.webp"
import pistachio_tart from "../images/items/pistachio_tart.webp"
import pistachio_tart_bite_size from "../images/items/pistachio_tart_bite_size.webp"
import ragi_chia_seed_crakers from "../images/items/ragi_chia_seed_crakers.webp"
import raspberry_gooey_brownie from "../images/items/raspberry_gooey_brownie.webp"
import raspberry_truffle_jam from "../images/items/raspberry_truffle_jam.webp"
import rosemary_crackers from "../images/items/rosemary_crackers.webp"
import spinach_wrap from "../images/items/spinach_wrap.webp"
import sriracha_sauce from "../images/items/sriracha_sauce.webp"
import strawberry_chilli_jam from "../images/items/strawberry_chilli_jam.webp"
import strawberry_chives_cheese from "../images/items/strawberry_chives_cheese.webp"
import sumac_crackers from "../images/items/sumac_crackers.webp"
import sundried_tomato_cheese from "../images/items/sundried_tomato_cheese.webp"
import toffee_dates_tea_cake from "../images/items/toffee_dates_tea_cake.webp"
import truffle_almond_cheese from "../images/items/truffle_almond_cheese.webp"
import zaatar_crackers from "../images/items/zaatar_crackers.webp"

import free_from_wheat from "../images/icons/gluten_free.svg"
import refined_sugar from "../images/icons/refined_sugar_free.svg"
import eggs from "../images/icons/eggs.svg"
import dairy from "../images/icons/dairy.svg"
import plant_based from "../images/icons/vegan.svg"

import almond_flour_pizza_base from "../images/items/almond_flour_pizza_base.webp"
import almond_flour_pizza_base_2 from "../images/items/almond_flour_pizza_base_2.webp"
import kidney_bean_pizza_base from "../images/items/kidney_bean_pizza_base.webp"
import kidney_bean_pizza_base_2 from "../images/items/kidney_bean_pizza_base_2.webp"
import arabic_bread from "../images/items/arabic_bread.webp"

import almond_bread from "../images/items/almond_bread.webp"
import rosemary_olive_sourdough_ciabatta from "../images/items/rosemary_olive_sourdough_ciabatta.webp"
import beetroot_burger_bun from "../images/items/beetroot_burger_bun.webp"

import waffles from "../images/items/waffles.webp"
import pancake from "../images/items/pancake.webp"

import chocolate_muffin from "../images/items/chocolate_muffin.webp"
import pecan_carrot_muffin from "../images/items/pecan_carrot_muffin.webp"
import toffee_dates_muffin from "../images/items/toffee_dates_muffin.webp"

import hazelnut_tart from "../images/items/hazelnut_tart.webp"
import banana_pecan_tea_cake from "../images/items/banana_pecan_tea_cake.webp"

import almond_croissant from "../images/items/almond_croissant.webp"
import cheese_croissant from "../images/items/cheese_croissant.webp"
import pain_au_chocolat from "../images/items/pain_au_chocolat.webp"
import plain_croissant from "../images/items/plain_croissant.webp"
import raspberry_danish from "../images/items/raspberry_danish.webp"
import zaatar_puff from "../images/items/zaatar_puff.webp"



export const items_1 = [{
parentCatName: "BOULANGERIE",
parentCatCollection: [
  {
  categoryName: "BREADS",
  items: [
    {itemName:'Almond Bread',price:'60, 110',description:'Indian origin millet flour, Almond Powder, Pink Salt, Agave Syrup, Yeast, Water',image:almond_bread,packaging:'1pc',yield:'350g, 700g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based},
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy},
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs}
]},
    // {itemName:'Brioche Bread',price:'60, 110',description:'Indian origin millet flour, Butter, Milk, Eggs, Salt, Agave Syrup, Yeast',image:brioche_bread,packaging:'1pc',yield:'350g, 700g',allergies:[ { allergyName: 'Free From Wheat', allergySrc: free_from_wheat }]},
    {itemName:'Country Style Slice Bread',price:'48, 88',description:'Indian origin millet flour, Agave Syrup, Pink Salt, Yeast, Sunflower oil, Water',image:country_style_slice_bread,packaging:'1pc',yield:'350g, 700g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Country Style Sourdough Ciabatta',price:'48, 88',description:'Indian origin millet flour, Pink Salt, Yeast, Starter, Water',image:placeholder,packaging:'1pc',yield:'350g, 700g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Cranberry Chilli Sourdough Ciabatta',price:'49, 89',description:'Indian origin millet flour, Pink Salt, Yeast, Starter, Dry Cranberries, Green Chilli, Water',image:cranberry_chilli_ciabatta,packaging:'1pc',yield:'350g, 700g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Rosemary Olive Sourdough Ciabatta',price:'49, 89',description:'Indian origin millet flour, Pink Salt, Yeast, Starter, Dry Rosemary, Black Olive, Water',image:rosemary_olive_sourdough_ciabatta,packaging:'1pc',yield:'350g, 700g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]}, 
  ]
},
{
  categoryName: "PIZZA BASES",
  items: [
    {itemName:'Pizza Base 6inch',price:'40',description:'Indian origin millet flour, Salt, Agave Syrup, Yeast, Sunflower oil, Water',image:placeholder,packaging:'2pcs',yield:'120g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Pizza Base 10inches',price:'50',description:'Indian origin millet flour, Salt, Agave Syrup, Yeast, Sunflower oil, Water',image:placeholder,packaging:'2pcs',yield:'250g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Kidney Bean Pizza Base 6inch ',price:'40',description:'Indian origin millet flour, Salt, Agave Syrup, Yeast, Sunflower oil, Water, Kidney Bean Flour',image:kidney_bean_pizza_base,packaging:'2pcs',yield:'120g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Kidney Bean Pizza Base 10inches',price:'50',description:'Indian origin millet flour, Salt, Agave Syrup, Yeast, Sunflower oil, Water, Kidney Bean Flour',image:kidney_bean_pizza_base_2,packaging:'2pcs',yield:'250g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Almond Flour Pizza Base 6inch ',price:'40',description:'Indian origin millet flour, Salt, Agave Syrup, Yeast, Sunflower oil, Water, Almond Flour',image:almond_flour_pizza_base,packaging:'2pcs',yield:'120g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Almond Flour Pizza Base 10inches',price:'50',description:'Indian origin millet flour, Salt, Agave Syrup, Yeast, Sunflower oil, Water, Almond Flour',image:almond_flour_pizza_base_2,packaging:'2pcs',yield:'250g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
  ]
},
{
  categoryName: "WRAPS",
  items: [
    {itemName:'Cauliflower Wrap',price:'40',description:'Water, Indian origin millet flour, Cauliflower, Dry Yeast, Maple Syrup, Olive Oil, Pink Salt',image:cauliflower_wrap,packaging:'4pcs',yield:'400g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Beetroot Wrap',price:'40',description:'Water, Indian origin millet flour, Beetroot, Dry Yeast, Maple Syrup, Olive Oil, Pink Salt',image:beetroot_wrap,packaging:'4pcs',yield:'400g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Spinach Wrap',price:'40',description:'Water, Indian origin millet flour, Spinach, Dry Yeast, Maple Syrup, Olive Oil, Pink Salt',image:spinach_wrap,packaging:'4pcs',yield:'400g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},   
  ]
},
{
  categoryName: "BETWEEN THE BUNS",
  items: [
    {itemName:'Burger Bun',price:'35',description:'Indian origin millet flour, Agave Syrup, Pink Salt, Yeast, Sunflower oil, Water',image:burger_bun,packaging:'3pcs',yield:'270g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
     {itemName:'Sesame Burger Bun',price:'35',description:'Indian origin millet flour, Agave Syrup, Pink Salt, sesame seeds,  Yeast, Sunflower oil, Water',image:placeholder,packaging:'3pcs',yield:'270g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    {itemName:'Beetroot Burger Bun',price:'35',description:'Indian origin millet flour, Agave Syrup, Pink Salt, Yeast, Sunflower oil, Beetroot Juice',image:beetroot_burger_bun,packaging:'3pcs',yield:'270g',allergies:[ { allergyName: 'Free From Wheat', allergySrc: free_from_wheat }]},
  ]
},
{
  categoryName: "LOCAL AMORE",
  items: [
    {itemName:'Arabic Bread',price:'40',description:'Indian origin millet flour, Salt, Agave Syrup, Yeast, Sunflower oil, Water',image:arabic_bread,packaging:'4pcs',yield:'240g',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},   
  ]
},
]}]


export const items_2 = [{
  parentCatName: "PATTISSERIE",
  parentCatCollection: [
    {
    categoryName: "TARTS",
    items: [
      {itemName:'Hazelnut Tart',price:'100,190',description:'Tart Shell Small, hazelniut chocolate creme, hazelnuts',image:hazelnut_tart,packaging:'Box of 6, Box of 12',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
      {itemName:'Warm Pecan Tart',price:'100,190',description:'Tart Shell Small, Pie Mix Small, 24k Gold Leaf, Pecan Nut',image:pecan_tart,packaging:'Box of 6, Box of 12',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
      {itemName:'Pistachio Tart',price:'100,190',description:'Tart Shell Small, Pistachio Sponge, Pistachio Praline, Butter Cream, Pistachio Cream Cheese, 24K GOLD leaf',image:pistachio_tart,packaging:'Box of 6, Box of 12',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},  
    ]
  },
  {
    categoryName: "CAKES",
    items: [
      {itemName:'Vegan Lemon Cheese Cake',price:'375, 500',description:'Almond Nuts, Whole Dates, Rice Flour, Water, Cashew Nuts, Lemon Juice, Ginger Juice, Agave Syrup, Pink salt, Water, Coconut oil, Cocoa Butter',image:lemon_cheese_cake,packaging:'1pc',yield:'500g, 1000g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Dark Chocolate Strawberry Cake',price:'375, 500',description:'Indian origin millet flour, Agave Syrup, Cocoa Powder, Baking Powder, Baking Soda, Pink Salt, Laban Milk, Water, Vanilla Essence, Sunflower Oil, Pasteurized Egg, Dark Chocolate, Whipping Cream, Fresh Strawberry',image:dark_chocolate_strawberry_cake,packaging:'1pc',yield:'500g, 1000g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Vegan Chocolate Cake',price:'375, 500',description:'Indian origin millet flour, Agave Syrup, Cocoa Powder, Baking Soda, Baking Powder, Pink Salt, HM Almond Milk (Bulk), Sunflower Oil, Dark Chocolate',image:chocolate_cake,packaging:'1pc',yield:'500g, 1000g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]}, 
    ]
  },
  {
    categoryName: "TEA CAKES",
    items: [
      {itemName:'Banana Pecan Tea Cake',price:'330, 450',description:'Butter, Agave Syrup, Pasteurized Egg, Indian origin millet flour, Almond Powder, Baking Powder, Cinnamon Powder, Pecan nut, Banana, Cream Cheese, Cinnamon Powder',image:banana_pecan_tea_cake,packaging:'1pc',yield:'500g, 750g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Pecan Carrot Tea Cake',price:'330, 450',description:'Pasteurized Egg, Agave Syrup, Sunflower oil, Long Life Milk, Vanilla Esence, Indian origin millet flour, Cinnamon Powder, Baking Powder, Baking Soda, Chopped Peacan nut, Carrots, Whipped Cream, Cream Cheese, Icing Sugar, Mascopan Cream Cheese, Pecan nut',image:pecan_carrot_tea_cake,packaging:'1pc',yield:'500g, 750g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Toffee Dates Tea Cake',price:'330, 450',description:'Water, Whole Dates, Butter, Agave Syrup, Pasteurized Egg, Indian origin millet flour, Baking Soda, Cinnamon Powder, Cream Cheese, Toffee Cream, Whole Dates, Cocoa Powder',image:toffee_dates_tea_cake,packaging:'1pc',yield:'500g, 750g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]}, 
    ]
  },
  {
    categoryName: "MUFFINS",
    items: [
      {itemName:'Chocolate Muffin',price:'100,190',description:'Butter, Agave Syrup, Pasteurized Egg, Indian origin millet flour, Baking Soda, Baking Powder, Cocoa Powder , Dark Chocolate ',image:chocolate_muffin,packaging:'Box of 6, Box of 12',yield:'',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Pecan Carrot Muffin',price:'100,190',description:'Pasteurized Egg, Agave Syrup, Sunflower oil, Long Life Milk, Vanilla Esence, Indian origin millet flour, Cinnamon Powder, Baking Powder, Baking Soda, Chopped Pecan nut, Carrots',image:pecan_carrot_muffin,packaging:'Box of 6, Box of 12',yield:'',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Toffee Dates Muffin',price:'100,190',description:'Water, Whole Dates, Butter, Agave Syrup, Pasteurized Egg, Indian origin millet flour, Baking Soda, Cinnamon Powder',image:toffee_dates_muffin,packaging:'Box of 6, Box of 12',yield:'',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]}, 
    ]
  },
  {
    categoryName: "BREAKFAST ESSENTIALS",
    items: [
      {itemName:'Pancake',price:'75',description:'GF Flour, Vanilla Essence, Baking Powder, Baking Soda, HM Almond Milk (Bulk), Greek Yoghurt, Agave Syrup, Pink Salt',image:pancake,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
      {itemName:'Waffle ',price:'75',description:'GF Flour, Baking Powder, Baking Soda, Pink Salt, Agave Syrup, HM Almond Milk (Bulk), Orange Juice, Olive Oil',image:waffles,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
    ]
  },
  {
    categoryName: "TRUFFLES",
    items: [
      {itemName:'Matcha Pistachio Truffle',price:'80,150',description:'White Chocolate, Whipping Cream, Matcha Powder, Pistachio Slivered',image:matcha_pistachio_truffle,packaging:'Box of 6, Box of 12',yield:'',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Dark Chocolate Truffle',price:'80,150',description:'Whipping Cream, Dark Chocolate, Cocoa Powder ',image:dark_chocolate_truffle,packaging:'Box of 6, Box of 12',yield:'',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
      {itemName:'Granola Dark Chocolate Truffle',price:'80,150',description:'Granola (Bulk), Whipping Cream, Dark Chocolate',image:granola_dark_chocolate_truffle,packaging:'Box of 6, Box of 12',yield:'',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]}, 
    ]
  },
  ]}]

  export const items_3 = [{
    parentCatName: "VIENNOISERIE",
    parentCatCollection: [
      {
      categoryName: "CROISSANTS & DANISH",
      items: [
        {itemName:'Pain au chocolat',price:'120',description:'Indian origin millet flour, Pink Salt, Yeast, Agave, Water, Milk Powder, Butter, Dark Chocolate',image:pain_au_chocolat,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
        {itemName:'Plain Croissant',price:'120',description:'Indian origin millet flour, Pink Salt, Yeast, Agave, Water, Milk Powder, Butter',image:plain_croissant,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
        {itemName:'Almond Croissant',price:'120',description:'Indian origin millet flour, Almond, Pink Salt, Yeast, Agave, Water, Milk Powder, Butter',image:almond_croissant,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
        {itemName:'Cheese Croissant',price:'120',description:'Indian origin millet flour, Cheese, Pink Salt, Yeast, Agave, Water, Milk Powder, Butter',image:cheese_croissant,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
        {itemName:'Zaatar Puff',price:'120',description:'Indian origin millet flour, Zaatar Powder, Pink Salt, Yeast, Agave, Water, Milk Powder, Butter',image:zaatar_puff,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},
        {itemName:'Raspberry Danish',price:'120',description:'Indian origin millet flour, Raspberry, Pink Salt, Yeast, Agave, Water, Milk Powder, Butter',image:raspberry_danish,packaging:'Box of 6',yield:'',allergies:[
  { allergyName: 'Plant Based', allergySrc: plant_based },
  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Dairy', allergySrc: dairy },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }
]},   
      ]
    },
    ]}]

    export const items_4 = [{
      parentCatName: "FROMAGERIE",
      parentCatCollection: [
        {
        categoryName: "CHEESE",
        items: [
          {itemName:'Truffle Almond Cheese',price:'75',description:'Cream Cheese, Pink Salt, Truffle Oil, Almond Nuts',image:truffle_almond_cheese,packaging:'1pc',yield:'100g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
          {itemName:'Jalapeno Cranberry Cheese',price:'75',description:'Cream Cheese, Pink Salt, Jalapeno Slice, Dried Cranberry',image:jalapeno_cranberry_cheese,packaging:'1pc',yield:'100g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
          {itemName:'Basil chili Cheese',price:'75',description:'Cream Cheese, Pink Salt, Green Chilli, Basil Leaves',image:basil_chilli_cheese,packaging:'1pc',yield:'100g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
          {itemName:'Sundried Tomato Cheese',price:'75',description:'Cream Cheese, Pink Salt, Sundried Tomato, Basil Leaves',image:sundried_tomato_cheese,packaging:'1pc',yield:'100g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
          {itemName:'Honey Cinnamon Fig Cheese',price:'75',description:'Cream Cheese, Pink Salt, Honey, Cinnamon, Dry Fig, Almond',image:honey_cinnamon_fig_cheese,packaging:'1pc',yield:'100g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
          {itemName:'Chilli Chives Cheese',price:'75',description:'Cream Cheese, Pink Salt, Green Chilli, Chives, Dried Thyme',image:chilli_chives_cheese,packaging:'1pc',yield:'100g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
          {itemName:'Strawberry Chives Cheese',price:'75',description:'Cream Cheese, Pink Salt, Strawberry Fresh, Chives',image:strawberry_chives_cheese,packaging:'1pc',yield:'100g',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},  
        ]
      },
      {
        categoryName: "CHEESE PLATTER",
        items: [
          {itemName:'3 Cheese Platter',price:'450',description:'3 Cheeses + Crackers + Assorted Olives + Fresh Fruits',image:cheese_platter,packaging:'1pc',yield:'Serves 6',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},
          {itemName:'4 Cheese Platter',price:'600',description:'4 Cheeses + Crackers + Assorted Olives + Fresh Fruits',image:cheese_platter,packaging:'1pc',yield:'Serves 10',allergies:[  { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
  { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
  { allergyName: 'Eggs', allergySrc: eggs }]},  
        ]
      },


      ]}]

      export const items_5 = [{
        parentCatName: "CRACKERS",
        parentCatCollection: [
          {
            categoryName: "CRACKERS",
            items: [
              {itemName:'Ragi Chia Seed Crakers',price:'45',description:'Indian origin millet flour, Ragi Aata, Pink Salt, Yeast, Honey, Water, Black Chia Seeds',image:ragi_chia_seed_crakers,packaging:'1 Pack',yield:'150g',allergies:[
    { allergyName: 'Plant Based', allergySrc: plant_based },
    { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
    { allergyName: 'Dairy', allergySrc: dairy },
    { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
    { allergyName: 'Eggs', allergySrc: eggs }
    ]},
              {itemName:'Rosemary crackers',price:'45',description:'Indian origin millet flour, Dry Rosemery, Pink Salt, Yeast, Honey, Water',image:rosemary_crackers,packaging:'1 Pack',yield:'150g',allergies:[
    { allergyName: 'Plant Based', allergySrc: plant_based },
    { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
    { allergyName: 'Dairy', allergySrc: dairy },
    { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
    { allergyName: 'Eggs', allergySrc: eggs }
    ]},
              {itemName:'Zaatar crackers',price:'40',description:'Indian origin millet flour, Zaatar Powder, Pink Salt, Yeast, Honey, Water',image:zaatar_crackers,packaging:'1 Pack',yield:'150g',allergies:[
    { allergyName: 'Plant Based', allergySrc: plant_based },
    { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
    { allergyName: 'Dairy', allergySrc: dairy },
    { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
    { allergyName: 'Eggs', allergySrc: eggs }
    ]},
              {itemName:'Sumac crackers',price:'45',description:'Indian origin millet flour, Sumac Powder, Pink Salt, Yeast, Honey, Water',image:sumac_crackers,packaging:'1 Pack',yield:'150g',allergies:[
    { allergyName: 'Plant Based', allergySrc: plant_based },
    { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
    { allergyName: 'Dairy', allergySrc: dairy },
    { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
    { allergyName: 'Eggs', allergySrc: eggs }
    ]},
            ]
          },
        ]}]

        export const items_6 = [{
          parentCatName: "CONDIMENTS",
          parentCatCollection: [
            {
              categoryName: "JAMS & SAUCES",
              items: [
                {itemName:'Raspberry Truffle Jam',price:'35',description:'Fresh Raspberry, Agave Syrup, Water, Truffle Oil',image:raspberry_truffle_jam,packaging:'1pc',yield:'100g',allergies:[
      { allergyName: 'Plant Based', allergySrc: plant_based },
      { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
      { allergyName: 'Dairy', allergySrc: dairy },
      { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
      { allergyName: 'Eggs', allergySrc: eggs }
      ]},
                {itemName:'Strawberry Chilli Jam',price:'35',description:'Strawberry Fruits, Agave Syrup, Water, Green Chilli',image:strawberry_chilli_jam,packaging:'1pc',yield:'100g',allergies:[
      { allergyName: 'Plant Based', allergySrc: plant_based },
      { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
      { allergyName: 'Dairy', allergySrc: dairy },
      { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
      { allergyName: 'Eggs', allergySrc: eggs }
      ]},
                {itemName:'Mango Passion Fruit& Chilli Jam',price:'35',description:'Mango,Garlic, Cardamom Seed, Red Chilli, Cumin Seeds, Coconut Sugar, Vinegar, Water, Passion Fruit',image:mango_passion_fruit_and_chilli_jam,packaging:'1pc',yield:'100g',allergies:[
      { allergyName: 'Plant Based', allergySrc: plant_based },
      { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
      { allergyName: 'Dairy', allergySrc: dairy },
      { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
      { allergyName: 'Eggs', allergySrc: eggs }
      ]},
                {itemName:'Sriracha Sauce',price:'45',description:'Red Chilli, Water, Garlic, Coconut Sugar, Pink Salt, Vinegar',image:sriracha_sauce,packaging:'1pc',yield:'100g',allergies:[
      { allergyName: 'Plant Based', allergySrc: plant_based },
      { allergyName: 'Free From Wheat', allergySrc: free_from_wheat },
      { allergyName: 'Dairy', allergySrc: dairy },
      { allergyName: 'Refined Sugar', allergySrc: refined_sugar },
      { allergyName: 'Eggs', allergySrc: eggs }
      ]}, 
              ]
            },
          ]}]
