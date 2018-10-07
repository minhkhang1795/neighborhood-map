# Neighborhood Map

Neighborhood Map is a single page map application using **React**, the **Google Maps API** and the **Foursquare API**. 

## How The App Works
The map displays 25 coffee shops nearby the Cambridge area in Boston, MA. Initially, the app will fetch coffee shop data from Foursquare and populate them on Google map with red markers. Users can click on the markers to view details of the coffee shops including name, address, and picture. Users can also filter the list of coffee shops by typing keyword into the search bar.  

Live Demo on [Github Page](https://minhkhang1795.github.io/neighborhood-map/)

## To run the app locally
Install [Create React App](https://github.com/facebook/create-react-app) to begin building apps with React!

Then, clone the app or download the app as a zip file
```
git clone https://github.com/minhkhang1795/neighborhood-map.git
cd neighborhood-map
```
Next, install all project dependencies with
```
npm install
```

Finally, start the development server with
```
npm start
```


## Implemented functionalities
* [x] Interface Design:
  * [x] Responsiveness: All application components render on-screen in a responsive manner.
  * [x] Usability: All application components are usable across modern desktop, tablet, and phone browsers.
* [x] Application Functionality:
  * [x] Location Filter: Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.
  * [x] List View: A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied. Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
  * [x] Map & markers: Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied. Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow).
* [x] Asynchronous Data Usage:
  * [x] Asynchronous API Requests: utilizes the `Google Maps API` and `Foursquare API`
  * [x] Error Handling: Data requests that fail are handled gracefully using common fallback techniques (i.e. `AJAX` error or fail methods).
* [x] Location Details Functionality:
  * [x] Additional Location Data: Functionality providing additional data about a location is provided and sourced from a 3rd party API, `Foursquare`. Information can be provided either in the marker’s infoWindow, or in an HTML element in the DOM (a sidebar, the list view, a modal, etc.)
* [x] Accessibility:
  * [x] Focus: Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
  * [x] Site elements are defined semantically
  * [x] Accessible Images
* [x] Offline Use:
  * [x] Service Worker: When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.
* [x] Application Architecture: proper use of React
  
    
## Credits
* Google Map:
    * This project was originally inspired by Google Map. Therefore, the user interface looks similar to Google Map's UI.
* react-google-maps:
    * A very powerful React package to integrate Google Map into React app.
* Foursquare:
    * A user-friendly location API for developers
* Udacity:
    * The most wonderful online learning platform on Earth!


## MIT License

    Copyright 2018 Minh-Khang Vu

    Permission is hereby granted, free of charge, to any person obtaining a copy 
    of this software and associated documentation files (the "Software"), to deal 
    in the Software without restriction, including without limitation the rights 
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
    of the Software, and to permit persons to whom the Software is furnished to do 
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all 
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
