# Word Frequency Counter

# Below instructions will execute only when you click the submit button (Button holds the onClick function)

# Step 1
DataFetch.js (component)
This file refer to fetch a data from link (https://www.terriblytinytales.com/test.txt). <br>
Imported a useState and useEffect function to set a fetched data to variable called mainStr. <br>

useEffect(() => { <br>
    fetch("https://www.terriblytinytales.com/test.txt") <br>
    .then((response) => response.text()) <br>
    .then((data) => setMainStr(data)) <br>
  }); <br>
  
This code refers to fetch a data from the link and give the response (respose.text) as a text format then set that particular response (response.text) to a mainStr using useEffect function.

# Step 2
By using useEffect the mainStr holds the particular response/data which is fetched from the link in a string format. <br>
Then I initialized a variable called lower and then I stored that data into a lower variable which is converted to lowercase. <br>
Then I splited a string and stored into variable called textArr. <br>
Then I created a function called giveFreq() to get a frequency of all words. <br>
Then I stored the frequency in a object form into a variable called newObj. <br>

# Step 3
By using for loop I sorted the objects in assecending order from length of 0 to 354 then I assigned to array called sortable. <br>
Then after I again sorted a array in a desscending order to get a highest frequency in a top order. <br>
Then I sliced the first top 20 words of an sorted array to get a top 20 most occured elements and stored into a variable called resArr. <br>
Then I returned the resArr to import the top 20 elements in another component called Barchart.Js.

# Step 4
BarChart.js (component)
In a component Barchart.js the function DataFetch() will returns the top 20 words and it will stored in variable called resArr. <br>
Then I have created a for loop to seperate word and word-count by unpacking a 2d array (resArr). <br>
Then I stored a X-axis values inside the variable called xValues. <br>
And I stored a Y-axis values inside the variable called yValues. <br>

# Step 5
I used a chart.js library to display a histogram in a front-end. <br>
I filled a xValues to labels to display a X-axis. <br>
And I filled a yvalues to data to display a y-axis. <br>
Once it returned a data={data} the histogram will display in a front-end. <br>

# Step 6 
I created a button and rendered it in App.js file. <br>
And I kept a onClick function inside the button to display a chart. <br>
Once onClick function satisfies true then only the chart will display in front-end. <br>

# Components
1. DataFetch.js <br>
2. BarChart.js <br>

# Libraries
Chart.js and react-chartjs-2 (To display a Histogram).

# Above solution is hosted in Vercel "https://word-frequency-counter-alpha.vercel.app/".



