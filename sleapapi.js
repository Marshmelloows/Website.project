//--------------------------------------------------------
// Supabase client setup: Setup the connection between client - server
//--------------------------------------------------------
//Import the superbace client from libeary
import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
//My snapbaceURL
const supabaseUrl = 'https://gsdikywnoplgzwbqpofp.supabase.co';
//My snapbace API key
const supabaseKey = 'sb_publishable_bLqwP51ybMcdipss2Jzpwg_WVPDH-AG'
//create client instince
const supabase = createClient(supabaseUrl, supabaseKey);
//------------------------------------------------------------------------------------
//Using the Official Supabase Client
//------------------------------------------------------------------------------------
//The @supabase/supabase-js SDK provides a clean syntax that abstracts raw HTTP requests
// while routing everything through the /rest/v1/ PostgREST layer

//Async function to fetch data from the 'mobiletechnologyform' table in Supabase
async function getData() {
    // Fetch data from the 'mobiletechnologyform' table and order by 'created_at' in descending order
    const { data, error } = await supabase
    .from('mobiletechnologyform')
    .select('*')
    .order('created_at', { ascending: false });
    // Check for errors and return an empty array if there is an error
    if (error) {
        console.error('Error fetching data:', error);
        alert('Error Fetching Data');
        return [];
    }
        // Return the fetched data
    return data;
} 
// Javascript Async Promise: handle the return Promise
getData().then(data => {
    // Get the HTML element where the data will be displayed
    const outputElement = document.getElementById('mobiletechnologyform-data');

    //Debug: Display the fetched data as a formatted JSON string in the output element
    console.log(JSON.stringify(data, null, 2));
        //Loop through the data and display each record in a formatted way
        data.forEach(record => {
            // Create a new div element for each record
            const recordElement = document.createElement('div');
            //add background color to each record
            recordElement.style.backgroundColor = '#f0f0f0';
            recordElement.innerHTML = `
                <p>Firstname: ${record.fname}</p>
                <p>Lastname: ${record.lname}</p>
                <p>Gender: ${record.gender}</p>
            `;
        // Append the record element to the output element
        outputElement.appendChild(recordElement);
        });
    });