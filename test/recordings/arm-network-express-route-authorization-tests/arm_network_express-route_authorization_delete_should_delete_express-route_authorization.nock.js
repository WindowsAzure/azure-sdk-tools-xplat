// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"2d787b7b-b130-4822-be03-eb4eda623136\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"80c39a60-3a6a-4353-9667-f7a8618db45d\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"f84139aa-08ad-4b61-b9b2-bbcb4678ba3b\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '980',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a11b1f97-c750-4d6a-84f0-b7b32d4c4661',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '8952c5f8-8f9c-4579-bf2d-cfd508f7335b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160119T114309Z:8952c5f8-8f9c-4579-bf2d-cfd508f7335b',
  date: 'Tue, 19 Jan 2016 11:43:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"2d787b7b-b130-4822-be03-eb4eda623136\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"80c39a60-3a6a-4353-9667-f7a8618db45d\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"f84139aa-08ad-4b61-b9b2-bbcb4678ba3b\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '980',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a11b1f97-c750-4d6a-84f0-b7b32d4c4661',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '8952c5f8-8f9c-4579-bf2d-cfd508f7335b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160119T114309Z:8952c5f8-8f9c-4579-bf2d-cfd508f7335b',
  date: 'Tue, 19 Jan 2016 11:43:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '305',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2c9253e6-a44e-4e1c-9191-3ad81eec0cc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '782e3cf3-c5f5-4afc-bc9a-25573da95e69',
  'x-ms-routing-request-id': 'WESTEUROPE:20160119T114310Z:782e3cf3-c5f5-4afc-bc9a-25573da95e69',
  date: 'Tue, 19 Jan 2016 11:43:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '305',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2c9253e6-a44e-4e1c-9191-3ad81eec0cc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '782e3cf3-c5f5-4afc-bc9a-25573da95e69',
  'x-ms-routing-request-id': 'WESTEUROPE:20160119T114310Z:782e3cf3-c5f5-4afc-bc9a-25573da95e69',
  date: 'Tue, 19 Jan 2016 11:43:09 GMT',
  connection: 'close' });
 return result; }]];