//IMPORT
import { products } from "./Data/dataset.js"; 
import { productsGrid } from "./Components/products-grid.js";
import { search } from "./Components/search.js"
import { filter } from "./Components/filter.js";
import { sort } from "./Components/sort.js";

//COMPONENT CODES
//Render all products when the page first opens
productsGrid.data = products; //Initially, load dataset
document.getElementById("productsGrid").innerHTML = productsGrid.renderUI();

//Controls panel
document.getElementById("controls-panel").innerHTML += search.renderUI();
search.addEvent();
//
document.getElementById("controls-panel").innerHTML += filter.renderUI();
filter.populateCategoryAndAddEvent();
search.addEvent();
//
document.getElementById("controls-panel").innerHTML += sort.renderUI();
sort.addEvent();
filter.populateCategoryAndAddEvent();
search.addEvent();
