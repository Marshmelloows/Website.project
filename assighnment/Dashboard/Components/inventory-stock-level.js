//IMPORT
import { products } from "../Data/dataset.js";

//COMPONENT CODES
export const stockLevelChart = {
  //------------------------------------
  //Data properties
  data: [],

  //------------------------------------
  //Component User Interface (UI)
  renderUI(chartID) {
    //Load the product data used by this chart.
    this.data = products;
    
    //Prepare Data
    const stockLabels = this.data.map(product => product.name);
    const stockValues = this.data.map(product => product.stockQuantity);
    
    //Create Chart
    const ctx = document.getElementById(chartID);
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: stockLabels,
          datasets: [{
            label: "Units in Stock",
            data: stockValues,
            backgroundColor: [
              "#0d6efd",
              "#198754",
              "#ffc107",
              "#dc3545",
              "#6f42c1",
              "#20c997",
              "#fd7e14",
              "#6610f2",
              "#198754",
              "#0dcaf0" ],
            borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {display: true, text: "Current Stock Levels"},
          legend: {display: false}
          },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Quantity"
            }
          },
          x: {
            ticks: {
              maxRotation: 60,
              minRotation: 60
            }
          }
        }
      }
    });
  }
}
