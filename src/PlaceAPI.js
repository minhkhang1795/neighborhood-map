const BASE_URL = "https://api.foursquare.com/v2/",
  CLIENT_ID = "FEJGB5NXNDHQWWX35N3DN1I1IW0XNWLPASCHCLQT4BTPKIKI",
  CLIENT_SECRET = "JTOZGKKDCE0EMP31C1WKACGECG4TS5AFETN4NPX2NPFFSMBN";


export const explore = (lat, long, query) =>
  fetch(`${BASE_URL}/venues/explore/?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=25&ll=${lat},${long}&query=${query}`)
    .then(res => res.json())
    .then(data => data.response.groups[0].items)
    .catch(e => e);