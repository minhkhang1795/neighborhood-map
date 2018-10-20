const BASE_URL = "https://api.foursquare.com/v2/",
  CLIENT_ID = "VE10SB3UPIQ23AG3G5AIEHOPDIQKWO1BZXZTK3LOI0HWTS4G",
  CLIENT_SECRET = "RUWR5CLLYIUMKWN3X1W0P2VX1KRQALEIPR4SPRWSN3C4W0PU";


export const explore = (lat, long, query) =>
  fetch(`${BASE_URL}/venues/explore/?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=25&ll=${lat},${long}&query=${query}`)
    .then(res => res.json())
    .then(data => {
      if (data && data.response && data.response.groups)
        return data.response.groups[0].items;
      else
        return null;
    })
    .catch(e => e);

export const getDetails = (venueID) =>
  fetch(`${BASE_URL}/venues/${venueID}/?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323`)
    .then(res => res.json())
    .then(data => {
      if (data && data.response)
        return data.response.venue;
      else
        return null;
    })
    .catch(e => e);