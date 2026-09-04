//IMPORT
import { products } from "../Data/dataset.js";

//COMPONENT CODES
export const categoryChart = {
  //------------------------------------
  //Data properties
  data: [],

  //------------------------------------
  //Component User Interface (UI)
  renderUI(chartID) {
    //Load the product data used by this chart.
    this.data = products;

    //Automatically calculates category totals from the products array.
    const categoryCounts = {};
    this.data.forEach(product => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    });

    //Use category names as labels and product totals as chart values.
    const labels = Object.keys(categoryCounts); 
    const values = Object.values(categoryCounts);

    //Create a doughnut chart showing the number of products in each category.
    new Chart(document.getElementById(chartID), {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [{ 
            data: values, 
            backgroundColor: ["#0d6efd", "#198754", "#ffc107", "#dc3545", "#20c997", "#6f42c1"]
            }]
          },
        options: {
          responsive: true,
          plugins: {
            title: {display: true, text: "Products by Category"},
            legend: { position: "bottom" }
          }
        }
      })
  }
}
