//IMPORT
import { categoryChart } from "./Components/products-by-category.js";
import { averageRatingChart } from "./Components/average-rating-per-product.js";
import { stockLevelChart } from "./Components/inventory-stock-level.js";

//APP CODES
categoryChart.renderUI("category-chart");
averageRatingChart.renderUI("rating-chart");
stockLevelChart.renderUI("stock-chart");
