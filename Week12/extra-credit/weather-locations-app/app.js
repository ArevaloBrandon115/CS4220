// update the URL in config as the base URL

// This function should get a list of locations using the weather.gov api (see the link below)
// https://www.weather.gov/documentation/services-web-api#/default/get_products_locations
// - Go to the URL above and click on Specifications tab
// - Scroll down to view and use the (GET /products/locations)
// - Use template string notation to compose the URL

// NOTE - to get a valid response you will need to set headers of User-Agent as the key, and superagent as the value
// NOTE - refer to the docs for setting headers https://visionmedia.github.io/superagent/#setting-header-fields
const _listLocations = () => {};


// This function should fetch location types by providing the location id using the weather.gov api
// https://www.weather.gov/documentation/services-web-api#/default/get_products_locations__locationId__types
// - Go to the URL above and click on Specifications tab
// - Scroll down to view and use the (GET /products/locations/{locationId}/types)
// - Use template string notation to compose the URL

// NOTE - to get a valid response you will need to set headers of User-Agent as the key, and superagent as the value
// NOTE - refer to the docs for setting headers https://visionmedia.github.io/superagent/#setting-header-fields
const _fetchLocationType = () => {};


// This function logs to the console the final organized results
// - do not hard code in the function ('fire' and 'forecast')
// - each category must be printed uppercase ex: (FIRE or FORECAST)
// - each location product type name associated to that category must be printed as it was returned from the API
// - use proper looping
const _print = () => {};


// This function creates a prompt that displays locations that were return from the API
// - only locations that are NOT null should be displayed (the list should NOT include nulls)
// - the locations shown to the user should be in the format of "City, State" (aka the format that is returned by API)
// - use proper looping
const _displayLocations = () => {};


// This function organizes the response of location product types into two catagories (fire and forecast)
// - if the location type name has the word fire in it - find a way to associate to that category
// - if the location type name has the word forecast in it - find a way to associate to that category
// - do not hard code ('fire' and 'forecast') anywhere including object keys (only the validCatagories should contain these words)
// - do not change the validCatagories array as it is defined
// - use proper looping
const _organizeTypes = () => {
    const validCatagories = ['fire', 'forecast'];
};


// This is the main function that will call the support functions above
// - this MUST call: _listLocations, _displayLocations, _fetchLocationType, _organizeTypes, and _print
async function locations() {}
