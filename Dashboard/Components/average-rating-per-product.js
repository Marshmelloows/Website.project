//IMPORT
import { products } from "../Data/dataset.js";

//COMPONENT CODES
export const averageRatingChart = {
  //------------------------------------
  //Data properties
  data: [],

  //------------------------------------
  //Component User Interface (UI)
  renderUI(chartID) {
    //Load the product data used by this chart.
    this.data = products; 

    //Create Data for a Ratings Chart
    const ratingLabels = this.data.map(product => product.name);
    const ratingValues = this.data.map(product => Number(this.getAverageRating(product)));

    //Use Chart.js Bar Chart for Ratings
    //This will display a dashboard chart showing each product's average customer rating 
    // on a scale from 1 to 5 stars.
    new Chart(document.getElementById(chartID), {
      type: "bar",
      data: {
        labels: ratingLabels,
        datasets: [{
            label: "Average Rating",
            data: ratingValues,
            backgroundColor: "#0d6efd"
        }]
        },
      options: {
        scales: {
            y: {min: 0, max: 5 }
          }
       }
      }
    );
  },

  //Get average ratings per product
  getAverageRating(product) {
    //Add together all review ratings for the product.
    const total = product.reviews.reduce( (sum, review) => sum + review.rating, 0 );
    //Return the average rounded to one decimal place for the chart.
    return (total / product.reviews.length).toFixed(1);
  }
}
