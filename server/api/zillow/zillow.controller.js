/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/zillows              ->  index
 */
var Zillow = require('node-zillow');

//Instantiate
var zillow = new Zillow('X1-ZWz1f3gdkpge8b_29gz1');

'use strict';

// Gets a list of Zillows
export function index(req, res) {
  var params = JSON.parse(req.query.param);
  var propertyInfo = {};
  var zpid;
  var parameters = {
    zpid: zpid
  }
  console.log(params)
    // getDeepSearchResults() returns zpid, which is passed into getUpdatedPropertyDetails()
    // var deepResults = zillow.getDeepSearchResults(address)
    //     .then(function(result) {
    //         zpid = result.response[0].results[0].result[0].zpid[0];
    //         propertyInfo.searchResults = result.response[0].results[0].result[0]
    //         return zillow.getUpdatedPropertyDetails(zpid)
    //     })
    //     .then(function(result) {
    //         propertyInfo.updatedProperty = result.response;
    //
    //         return zillow.callApi('GetZestimate', parameters)
    //     })
    //     .then(function(data) {
    //         if (data.message[0].code[0] === '502') {
    //             propertyInfo.zenEstimate = {};
    //         } else {
    //             propertyInfo.zenEstimate = data;
    //         }
    //         return zillow.callApi('GetRateSummary', parameters)
    //     }).then(function(data) {
    //         propertyInfo.rateSummary = data;
    //         res.json(propertyInfo);
    //
    //     })
    // Call the primary API function based on the arguments passed in
  if (params.apiName === 'GetDeepSearchResults') {
    console.log('hit hte apit')
    zillow.getDeepSearchResults(params.address)
      .then(function(result) {
        console.log(result)
        res.json(result);
      })
  } else {
    zillow.callApi(params.apiName, params.address)
      .then(function(data) {
        console.log(data)
        res.json(data);
        // return data;
      })
  }
}
