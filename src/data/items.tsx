import placeholder from "../images/placeholder.webp";
import basil_chilli_cheese from "../images/items/basil-chilli-cheese.webp"
import beetroot_wrap from "../images/items/beetroot-wrap.webp"
import brioche_bread from "../images/items/brioche-bread.webp"
import burger_bun from "../images/items/burger-bun.webp"
import cauliflower_wrap from "../images/items/cauliflower-wrap.webp"
import cheese_platter from "../images/items/cheese-platter.webp"
import chilli_chives_cheese from "../images/items/chilli-chives-cheese.webp"
import chocolate_cake from "../images/items/chocolate-cake.webp"
import country_style_ciabatta from "../images/items/country-style-ciabatta.webp"
import country_style_slice_bread from "../images/items/country-style-slice-bread.webp"
import cranberry_chilli_ciabatta from "../images/items/cranberry-chilli-ciabatta.webp"
import dark_chocolate_truffle from "../images/items/dark-chocolate truffle.webp"
import dark_chocolate_strawberry_cake from "../images/items/dark-chocolate-strawberry-cake.webp"
import granola_dark_chocolate_truffle from "../images/items/granola-dark-chocolate-truffle.webp"
import honey_cinnamon_fig_cheese from "../images/items/honey-cinnamon-fig-cheese.webp"
import jalapeno_cranberry_cheese from "../images/items/jalapeno-cranberry-cheese.webp"
import lemon_cheese_cake from "../images/items/lemon-cheese-cake.webp"
import mango_passion_fruit_and_chilli_jam from "../images/items/mango-passion-fruit-and-chilli-jam.webp"
import matcha_pistachio_truffle from "../images/items/matcha-pistachio-truffle.webp"
import pecan_carrot_tea_cake from "../images/items/pecan-carrot-tea-cake.webp"
import pecan_tart from "../images/items/pecan-tart.webp"
import pecan_tart_bite_size from "../images/items/pecan-tart-bite-size.webp"
import pistachio_tart from "../images/items/pistachio-tart.webp"
import pistachio_tart_bite_size from "../images/items/pistachio-tart-bite-size.webp"
import ragi_chia_seed_crakers from "../images/items/ragi-chia-seed-crakers.webp"
import raspberry_gooey_brownie from "../images/items/raspberry-gooey-brownie.webp"
import raspberry_truffle_jam from "../images/items/raspberry-truffle-jam.webp"
import rosemary_crackers from "../images/items/rosemary-crackers.webp"
import spinach_wrap from "../images/items/spinach-wrap.webp"
import sriracha_sauce from "../images/items/sriracha-sauce.webp"
import strawberry_chilli_jam from "../images/items/strawberry-chilli-jam.webp"
import strawberry_chives_cheese from "../images/items/strawberry-chives-cheese.webp"
import sumac_crackers from "../images/items/sumac-crackers.webp"
import sundried_tomato_cheese from "../images/items/sundried-tomato-cheese.webp"
import toffee_dates_tea_cake from "../images/items/toffee-dates-tea-cake.webp"
import truffle_almond_cheese from "../images/items/truffle-almond-cheese.webp"
import zaatar_crackers from "../images/items/zaatar-crackers.webp"

export const items = [
  {
    parentCatName: "Country Style Loaf Boulangerie",
    parentCatCollection: [
      {
        categoryName: "Breads",
        items: [
          
          {itemName:'Brioche Bread',price:'60',description:'Indian origin millet flour, Butter, Milk, Eggs, Salt, Agave Syrup, Yeast',image:brioche_bread,allergies:['Free from: Wheat'],packaging:'1pc',yield:'350g'},
          {itemName:'Country Style Slice Bread',price:'48',description:'Indian origin millet flour, Agave Syrup, Pink Salt, Yeast, Sunflower oil, Water',image:country_style_slice_bread,allergies:['Plant Based, Free From: Wheat,  Dairy, Refined Sugar & Eggs '],packaging:'1pc',yield:'350g'},
          {itemName:'Country Style Ciabatta',price:'48',description:'Indian origin millet flour, Pink Salt, Yeast, Starter, Water',image:country_style_ciabatta,allergies:['Plant Based, Free From: Wheat,  Dairy, Refined Sugar & Eggs '],packaging:'1pc',yield:'300g'},
          {itemName:'Cranberry Chilli Ciabatta',price:'49',description:'Indian origin millet flour, Pink Salt, Yeast, Starter, Dry Cranberries, Green Chilli, Water',image:cranberry_chilli_ciabatta,allergies:['Plant Based, Free From: Wheat,  Dairy, Refined Sugar & Eggs '],packaging:'1pc',yield:'300g'},
          {itemName:'Burger Bun',price:'35',description:'Indian origin millet flour, Agave Syrup, Pink Salt, Yeast, Sunflower oil, Water',image:burger_bun,allergies:['Plant Based, Free from: Wheat, Dairy, Refined Sugars, Eggs'],packaging:'3pcs',yield:'300g'},
        ],
      },
      {
        categoryName: "Wraps",
        items: [
          {itemName:'Cauliflower Wrap',price:'40',description:'Water, Indian origin millet flour, Cauliflower, Dry Yeast, Maple Syrup, Olive Oil, Pink Salt',image:cauliflower_wrap,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'4pcs',yield:'400g'},
          {itemName:'Beetroot Wrap',price:'40',description:'Water, Indian origin millet flour, Beetroot, Dry Yeast, Maple Syrup, Olive Oil, Pink Salt',image:beetroot_wrap,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'4pcs',yield:'400g'},
          {itemName:'Spinach Wrap',price:'40',description:'Water, Indian origin millet flour, Spinach, Dry Yeast, Maple Syrup, Olive Oil, Pink Salt',image:spinach_wrap,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'4pcs',yield:'400g'},
      ],
      },
    ],
  },
  {
    parentCatName: "Patisserie",
    parentCatCollection: [
      {
        categoryName: "Cakes",
        items: [

          {itemName:'Raspberry Gooey Brownie',price:'270',description:'Gooye Sponge (Bulk), Raspberry Jam (Bulk), Granola (Bulk)',image:raspberry_gooey_brownie,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'500g'},
          {itemName:'Pecan Carrot Tea Cake',price:'330',description:'Pasteurized Egg, Agave Syrup, Sunflower oil, Long Life Milk, Vanilla Esence, Indian origin millet flour, Cinnamon Powder, Baking Powder, Baking Soda, Chopped Peacan nut, Carrots, Whip Cream, Cream Cheese, Icing Sugar, Mascopan Cream Cheese, Pecan nut',image:pecan_carrot_tea_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'500g'},
          {itemName:'Pecan Carrot Tea Cake',price:'450',description:'Pasteurized Egg, Agave Syrup, Sunflower oil, Long Life Milk, Vanilla Esence, Indian origin millet flour, Cinnamon Powder, Baking Powder, Baking Soda, Chopped Peacan nut, Carrots, Whip Cream, Cream Cheese, Icing Sugar, Mascopan Cream Cheese, Pecan nut',image:pecan_carrot_tea_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'750g'},
          {itemName:'Pecan Carrot Tea Cake',price:'450',description:'Water, Whole Dates, Butter, Agave Syrup, Pasteurized Egg, Indian origin millet flour, Baking Soda, Cinnamon Powder, Cream Cheese, Toffee Cream, Whole Dates, Cocoa Powder',image:pecan_carrot_tea_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'750g'},
          {itemName:'Toffee Dates Tea Cake',price:'330',description:'Water, Whole Dates, Butter, Agave Syrup, Pasteurized Egg, Indian origin millet flour, Baking Soda, Cinnamon Powder, Cream Cheese, Toffee Cream, Whole Dates, Cocoa Powder',image:toffee_dates_tea_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'500g'},
          {itemName:'Toffee Dates Tea Cake',price:'450',description:'Water, Whole Dates, Butter, Agave Syrup, Pasteurized Egg, Indian origin millet flour, Baking Soda, Cinnamon Powder, Cream Cheese, Toffee Cream, Whole Dates, Cocoa Powder',image:toffee_dates_tea_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'750g'},
          {itemName:'Lemon Cheese Cake',price:'300',description:'Almond Nuts, Whole Dates, Rice Flour, Water, Cashew Nuts, Lemon Juice, Ginger Juice, Agave Syrup, Pink salt, Water, Coconut oil, Cocoa Butter',image:lemon_cheese_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'500g'},
          {itemName:'Lemon Cheese Cake',price:'450',description:'Almond Nuts, Whole Dates, Rice Flour, Water, Cashew Nuts, Lemon Juice, Ginger Juice, Agave Syrup, Pink salt, Water, Coconut oil, Cocoa Butter',image:lemon_cheese_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'1000g'},
          {itemName:'Dark Chocolate Strawberry Cake',price:'350',description:'Indian origin millet flour, Agave Syrup, Cocoa Powder, Baking Powder, Baking Soda, Pink Salt, Laban Milk, Water, Vanilla Essence, Sunflower Oil, Pasteurized Egg, Dark Chocolate, Whipping Cream, Fresh Strawberry, Agave Syrup, Fresh Strawberry',image:dark_chocolate_strawberry_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'500g'},
          {itemName:'Dark Chocolate Strawberry Cake',price:'500',description:'Indian origin millet flour, Agave Syrup, Cocoa Powder, Baking Powder, Baking Soda, Pink Salt, Laban Milk, Water, Vanilla Essence, Sunflower Oil, Pasteurized Egg, Dark Chocolate, Whipping Cream, Fresh Strawberry, Agave Syrup, Fresh Strawberry',image:dark_chocolate_strawberry_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'1000g'},
          {itemName:'Chocolate Cake',price:'350',description:'Indian origin millet flour, Agave Syrup, Cocoa Powder, Baking Soda, Baking Powder, Pink Salt, HM Almond Milk (Bulk), Sunflower Oil, HM Almond Milk (Bulk), Agave Syrup, Dark Chocolate',image:chocolate_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'500g'},
          {itemName:'Chocolate Cake',price:'500',description:'Indian origin millet flour, Agave Syrup, Cocoa Powder, Baking Soda, Baking Powder, Pink Salt, HM Almond Milk (Bulk), Sunflower Oil, HM Almond Milk (Bulk), Agave Syrup, Dark Chocolate',image:chocolate_cake,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'1000g'},
      ],
      },
    ],
  },
  {
    parentCatName: "Fromagerie",
    parentCatCollection: [
      {
        categoryName: "Cheeses",
        items: [
          {itemName:'Truffle Almond Cheese',price:'40',description:'Cream Cheese, Pink Salt, Truffle Oil, Almond Nuts',image:truffle_almond_cheese,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Jalapeno Cranberry Cheese',price:'40',description:'Cream Cheese, Pink Salt, Jalapeno Slice, Dried Cranberry',image:jalapeno_cranberry_cheese,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Basil chilli Cheese',price:'40',description:'Cream Cheese, Pink Salt, Green Chilli, Basil Leaves',image:basil_chilli_cheese,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Sundried Tomato Cheese',price:'40',description:'Cream Cheese, Pink Salt, Sundried Tomato, Basil Leaves',image:sundried_tomato_cheese,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Honey Cinnamon Fig Cheese',price:'40',description:'Cream Cheese, Pink Salt, Honey, Cinnamon, Dry Fig, Almond',image:honey_cinnamon_fig_cheese,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Chilli Chives Cheese',price:'40',description:'Cream Cheese, Pink Salt, Green Chilli, Chives, Dried Thyme',image:chilli_chives_cheese,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Strawberry Chives Cheese',price:'40',description:'Cream Cheese, Pink Salt, Strawberry Fresh, Chives',image:strawberry_chives_cheese,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Cheese Platter',price:'450',description:'3 Cheeses + Crackers + Assorted Olives + Fresh Fruits',image:cheese_platter,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'Serves 6'},
          {itemName:'Cheese Platter ',price:'600',description:'4 Cheeses + Crackers + Assorted Olives + Fresh Fruits',image:placeholder,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'1pc',yield:'Serves 10'},
      ],
      },
    ],
  },
  {
    parentCatName: "Condiments",
    parentCatCollection: [
      {
        categoryName: "Jams",
        items: [
          {itemName:'Raspberry Truffle Jam',price:'35',description:'Fresh Raspberry, Agave Syrup, Water, Truffle Oil',image:raspberry_truffle_jam,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Strawberry Chilli Jam',price:'35',description:'Strawberry Fruits, Agave Syrup, Water, Green Chilli',image:strawberry_chilli_jam,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
          {itemName:'Mango Passion Fruit& Chilli Jam',price:'35',description:'Mango,Garlic, Cardamom Seed, Red Chilli, Cumin Seeds, Coconut Sugar, Vinegar, Water, Passion Fruit',image:mango_passion_fruit_and_chilli_jam,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
      ],
      },
      {
        categoryName: "Sauses",
        items: [
          {itemName:'Sriracha Sauce',price:'45',description:'Red Chilli, Water, Garlic, Coconut Sugar, Pink Salt, Vinegar',image:sriracha_sauce,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'1pc',yield:'100g'},
      ],
      },
    ],
  },
  {
    parentCatName: "Viennoiserie",
    parentCatCollection: [
      {
        categoryName: "Tart",
        items: [
          {itemName:'Pecan Tart Bite Size',price:'210',description:'Tart Shell Small, Pie Mix Small, 24k Gold Leaf, Pecan Nut',image:pecan_tart_bite_size,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'6pcs',yield:'180g'},
          {itemName:'Pistachio Tart Bite Size',price:'210',description:'Tart Shell Small, Pistachio Sponge, Pistachio Praline, Butter Cream, Pistachio Cream Cheese, 24K GOLD leaf',image:pistachio_tart_bite_size,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'6pcs',yield:'180g'},
          {itemName:'Pecan Tart ',price:'330',description:'Tart Shell Small, Pie Mix Small, 24k Gold Leaf, Pecan Nut',image:pecan_tart,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'6pcs',yield:'360g'},
          {itemName:'Pistachio Tart',price:'330',description:'Tart Shell Small, Pistachio Sponge, Pistachio Praline, Butter Cream, Pistachio Cream Cheese, 24K GOLD leaf',image:pistachio_tart,allergies:['plant_based,free_from_wheat,dairy,refined_sugar,eggs '],packaging:'6pcs',yield:'360g'},
      ],
      },
    ],
  },
  {
    parentCatName: "Truffle",
    parentCatCollection: [
      {
        categoryName: "Truffle Balls",
        items: [
          {itemName:'Matcha Pistachio Truffle',price:'150',description:'White Chocolate, Whipping Cream, Matcha Powder, Pistachio Slivered',image:matcha_pistachio_truffle,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'10pcs',yield:'200g'},
          {itemName:'Dark Chocolate Truffle',price:'150',description:'Whipping Cream, Dark Chocolate, Cocoa Powder',image:dark_chocolate_truffle,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'10pcs',yield:'200g'},
          {itemName:'Granola Dark Chocolate Truffle',price:'150',description:'Granola (Bulk), Whipping Cream, Dark Chocolate',image:granola_dark_chocolate_truffle,allergies:['free_from_wheat,refined_sugar,eggs '],packaging:'10pcs',yield:'200g'},
      ],
      },
    ],
  },



];
