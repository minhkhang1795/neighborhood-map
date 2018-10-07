const BASE_URL = "https://api.foursquare.com/v2/",
  CLIENT_ID = "S3OKMK3HIO2EJF4K5CK4HKM0BFLEZTYT1AQ2RTE5BQ21JMWG",
  CLIENT_SECRET = "1BV35PSGPDYTRJRHVYKOBVJKG5LIW12TBLR5X2MLMZZG1Q51";


export const explore = (lat, long, query) =>
  fetch(`${BASE_URL}/venues/explore/?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=25&ll=${lat},${long}&query=${query}`)
    .then(res => res.json())
    .then(data => data.response.groups[0].items)
    .catch(e => e);

export const getDetails = (venueID) =>
  fetch(`${BASE_URL}/venues/${venueID}/?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323`)
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(e => e);