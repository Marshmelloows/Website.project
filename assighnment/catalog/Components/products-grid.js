//IMPORT
import { product } from "./Product.js";

//COMPONENT CODES
export const productsGrid = {

  //------------------------------------
  //Data properties
  data: [],

  //------------------------------------
  //Functions
  renderUI() {
    //Loop through all product in products array
    let ui = "";
    this.data.forEach(item => {     
      product.data = item; 
      //container.innerHTML += product.renderUI();
      ui += product.renderUI();
    });
    //Return the markup UI
    return ui;
  },
}
