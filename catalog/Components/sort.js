//IMPORT
import { products } from "../Data/dataset.js";
import { productsGrid } from "./products-grid.js";

//COMPONENT CODES
export const sort = {
  //------------------------------------
  //Functions
  renderUI() {
    //
    let UI = ` 
      <!-- Sort products by price -->
      <div class="col-md-4">
        <select id="sortPrice" class="form-select">
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    `;
    //Return the markup UI
    return UI;    
  },

  //Add event to sort input
  addEvent() {    
    document.getElementById("sortPrice").addEventListener("change", () => {
      //Get selected category
      const sortPrice = document.getElementById("sortPrice");
      const selectedSort = sortPrice.value;
      // Sort the filtered products by price in the selected direction.
      products.sort((a, b) => {
          return selectedSort === "asc"
              ? a.price - b.price
              : b.price - a.price;
      });
      //Update data of productsGrid
      productsGrid.data = products;
      //Render filtered outcome
      document.getElementById("productsGrid").innerHTML = productsGrid.renderUI();
    });
  },
}
