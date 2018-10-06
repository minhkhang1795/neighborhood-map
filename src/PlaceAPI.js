const BASE_URL = "https://api.foursquare.com/v2/",
  CLIENT_ID = "GXNQ2COYGRBWERDTMQUIPORYEMFNPKULF2FKEJQPUC3G4ILD",
  CLIENT_SECRET = "0AZEMMO1PMGZWVIMBPHIYH2MIZNGAJJ2EQNMTR2A252L5MIC";


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