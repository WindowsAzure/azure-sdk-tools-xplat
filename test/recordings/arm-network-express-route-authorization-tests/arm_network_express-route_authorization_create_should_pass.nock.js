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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGroupExpressRoutCircuiteAuth?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGroupExpressRoutCircuiteAuth' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'ed8a4033-4ac5-4f82-a223-1a81e01c5442',
  'x-ms-correlation-request-id': 'ed8a4033-4ac5-4f82-a223-1a81e01c5442',
  'x-ms-routing-request-id': 'EASTUS:20160120T193650Z:ed8a4033-4ac5-4f82-a223-1a81e01c5442',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 20 Jan 2016 19:36:49 GMT',
  connection: 'close',
  'content-length': '129' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGroupExpressRoutCircuiteAuth?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGroupExpressRoutCircuiteAuth' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'ed8a4033-4ac5-4f82-a223-1a81e01c5442',
  'x-ms-correlation-request-id': 'ed8a4033-4ac5-4f82-a223-1a81e01c5442',
  'x-ms-routing-request-id': 'EASTUS:20160120T193650Z:ed8a4033-4ac5-4f82-a223-1a81e01c5442',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 20 Jan 2016 19:36:49 GMT',
  connection: 'close',
  'content-length': '129' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGroupExpressRoutCircuiteAuth?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth\",\"name\":\"xplatTestGroupExpressRoutCircuiteAuth\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '5d6861ab-f46a-4ac1-b40f-0f9bd63f3d7c',
  'x-ms-correlation-request-id': '5d6861ab-f46a-4ac1-b40f-0f9bd63f3d7c',
  'x-ms-routing-request-id': 'EASTUS:20160120T193651Z:5d6861ab-f46a-4ac1-b40f-0f9bd63f3d7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 20 Jan 2016 19:36:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGroupExpressRoutCircuiteAuth?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth\",\"name\":\"xplatTestGroupExpressRoutCircuiteAuth\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '5d6861ab-f46a-4ac1-b40f-0f9bd63f3d7c',
  'x-ms-correlation-request-id': '5d6861ab-f46a-4ac1-b40f-0f9bd63f3d7c',
  'x-ms-routing-request-id': 'EASTUS:20160120T193651Z:5d6861ab-f46a-4ac1-b40f-0f9bd63f3d7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 20 Jan 2016 19:36:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRouteA' under resource group 'xplatTestGroupExpressRoutCircuiteAuth' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '380d5816-e37a-4119-b72d-5e4bc47b6cb9',
  'x-ms-correlation-request-id': '380d5816-e37a-4119-b72d-5e4bc47b6cb9',
  'x-ms-routing-request-id': 'EASTUS:20160120T193653Z:380d5816-e37a-4119-b72d-5e4bc47b6cb9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 20 Jan 2016 19:36:53 GMT',
  connection: 'close',
  'content-length': '198' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRouteA' under resource group 'xplatTestGroupExpressRoutCircuiteAuth' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '380d5816-e37a-4119-b72d-5e4bc47b6cb9',
  'x-ms-correlation-request-id': '380d5816-e37a-4119-b72d-5e4bc47b6cb9',
  'x-ms-routing-request-id': 'EASTUS:20160120T193653Z:380d5816-e37a-4119-b72d-5e4bc47b6cb9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 20 Jan 2016 19:36:53 GMT',
  connection: 'close',
  'content-length': '198' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"56810ab0-b80f-46c9-80a5-202a2c3cf507\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9f646b13-5eb1-4c62-8dbc-33127988faa0\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '036c50af-cff0-4c23-9a6c-55c5480bc9f8',
  'x-ms-routing-request-id': 'EASTUS:20160120T193655Z:036c50af-cff0-4c23-9a6c-55c5480bc9f8',
  date: 'Wed, 20 Jan 2016 19:36:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"56810ab0-b80f-46c9-80a5-202a2c3cf507\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"9f646b13-5eb1-4c62-8dbc-33127988faa0\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '036c50af-cff0-4c23-9a6c-55c5480bc9f8',
  'x-ms-routing-request-id': 'EASTUS:20160120T193655Z:036c50af-cff0-4c23-9a6c-55c5480bc9f8',
  date: 'Wed, 20 Jan 2016 19:36:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4f08e8a2-bba4-4308-b5f1-029a1ef98fe3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'bde407c3-c5fa-4406-ad88-9d52aec25e1c',
  'x-ms-routing-request-id': 'EASTUS:20160120T193706Z:bde407c3-c5fa-4406-ad88-9d52aec25e1c',
  date: 'Wed, 20 Jan 2016 19:37:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4f08e8a2-bba4-4308-b5f1-029a1ef98fe3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'bde407c3-c5fa-4406-ad88-9d52aec25e1c',
  'x-ms-routing-request-id': 'EASTUS:20160120T193706Z:bde407c3-c5fa-4406-ad88-9d52aec25e1c',
  date: 'Wed, 20 Jan 2016 19:37:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b500bc9-b415-470d-b3b6-8afc3450dc30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'cf89208a-75be-48fb-9fb9-6f0fe09212a5',
  'x-ms-routing-request-id': 'EASTUS:20160120T193737Z:cf89208a-75be-48fb-9fb9-6f0fe09212a5',
  date: 'Wed, 20 Jan 2016 19:37:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/eb8672b6-2ab0-4d70-a9a3-98b8dc6c3c82?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b500bc9-b415-470d-b3b6-8afc3450dc30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'cf89208a-75be-48fb-9fb9-6f0fe09212a5',
  'x-ms-routing-request-id': 'EASTUS:20160120T193737Z:cf89208a-75be-48fb-9fb9-6f0fe09212a5',
  date: 'Wed, 20 Jan 2016 19:37:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"9673d5c4-38fa-4ea0-b65c-f1569016689c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9f646b13-5eb1-4c62-8dbc-33127988faa0\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"585d3c98-3f00-4c19-b3b6-d6e15588daac\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c59c16cb-688a-4879-bcbd-5ceec4d8db83',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '6d7807a8-48df-4a16-a22e-5a9011e75dfe',
  'x-ms-routing-request-id': 'EASTUS:20160120T193738Z:6d7807a8-48df-4a16-a22e-5a9011e75dfe',
  date: 'Wed, 20 Jan 2016 19:37:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"9673d5c4-38fa-4ea0-b65c-f1569016689c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9f646b13-5eb1-4c62-8dbc-33127988faa0\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"585d3c98-3f00-4c19-b3b6-d6e15588daac\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c59c16cb-688a-4879-bcbd-5ceec4d8db83',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '6d7807a8-48df-4a16-a22e-5a9011e75dfe',
  'x-ms-routing-request-id': 'EASTUS:20160120T193738Z:6d7807a8-48df-4a16-a22e-5a9011e75dfe',
  date: 'Wed, 20 Jan 2016 19:37:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"9673d5c4-38fa-4ea0-b65c-f1569016689c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9f646b13-5eb1-4c62-8dbc-33127988faa0\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"585d3c98-3f00-4c19-b3b6-d6e15588daac\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9415a6f6-a895-480e-ac8c-ab0c84182c33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7a6f4ec7-275d-4507-a001-5cd46df670ed',
  'x-ms-routing-request-id': 'EASTUS:20160120T193740Z:7a6f4ec7-275d-4507-a001-5cd46df670ed',
  date: 'Wed, 20 Jan 2016 19:37:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteA\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA\",\r\n  \"etag\": \"W/\\\"9673d5c4-38fa-4ea0-b65c-f1569016689c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9f646b13-5eb1-4c62-8dbc-33127988faa0\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"585d3c98-3f00-4c19-b3b6-d6e15588daac\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9415a6f6-a895-480e-ac8c-ab0c84182c33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7a6f4ec7-275d-4507-a001-5cd46df670ed',
  'x-ms-routing-request-id': 'EASTUS:20160120T193740Z:7a6f4ec7-275d-4507-a001-5cd46df670ed',
  date: 'Wed, 20 Jan 2016 19:37:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '316',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f510d4d-7e19-4748-b354-05ea5a4c3cae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'a2549fc8-d59c-4017-b60d-09367bcabad7',
  'x-ms-routing-request-id': 'EASTUS:20160120T193741Z:a2549fc8-d59c-4017-b60d-09367bcabad7',
  date: 'Wed, 20 Jan 2016 19:37:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '316',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f510d4d-7e19-4748-b354-05ea5a4c3cae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'a2549fc8-d59c-4017-b60d-09367bcabad7',
  'x-ms-routing-request-id': 'EASTUS:20160120T193741Z:a2549fc8-d59c-4017-b60d-09367bcabad7',
  date: 'Wed, 20 Jan 2016 19:37:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"cba8c312-960d-489e-b274-665c2184a815\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"authorizationKey\": \"0cc55871-8593-42cc-99e0-da46734f0ab8\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '489',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'aa03c9ad-4911-4f28-9ee2-2d353a94365e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/aa03c9ad-4911-4f28-9ee2-2d353a94365e?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'cff33908-56f9-4844-b031-a228acbda6ea',
  'x-ms-routing-request-id': 'EASTUS:20160120T193742Z:cff33908-56f9-4844-b031-a228acbda6ea',
  date: 'Wed, 20 Jan 2016 19:37:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"cba8c312-960d-489e-b274-665c2184a815\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"authorizationKey\": \"0cc55871-8593-42cc-99e0-da46734f0ab8\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '489',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'aa03c9ad-4911-4f28-9ee2-2d353a94365e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/aa03c9ad-4911-4f28-9ee2-2d353a94365e?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'cff33908-56f9-4844-b031-a228acbda6ea',
  'x-ms-routing-request-id': 'EASTUS:20160120T193742Z:cff33908-56f9-4844-b031-a228acbda6ea',
  date: 'Wed, 20 Jan 2016 19:37:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/aa03c9ad-4911-4f28-9ee2-2d353a94365e?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a5a5f141-9adc-405a-b453-7bd58ade0733',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'fc02e097-f188-46b2-aa1c-871820b46e38',
  'x-ms-routing-request-id': 'EASTUS:20160120T193753Z:fc02e097-f188-46b2-aa1c-871820b46e38',
  date: 'Wed, 20 Jan 2016 19:37:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/aa03c9ad-4911-4f28-9ee2-2d353a94365e?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a5a5f141-9adc-405a-b453-7bd58ade0733',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'fc02e097-f188-46b2-aa1c-871820b46e38',
  'x-ms-routing-request-id': 'EASTUS:20160120T193753Z:fc02e097-f188-46b2-aa1c-871820b46e38',
  date: 'Wed, 20 Jan 2016 19:37:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"9d217bbd-2d90-45f4-a261-d4859bdd91b5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"0cc55871-8593-42cc-99e0-da46734f0ab8\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '490',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9296622f-fa88-4e21-ab18-4bce1b009a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '64c3b635-b142-41ce-bca2-f7c8ac8d4ea4',
  'x-ms-routing-request-id': 'EASTUS:20160120T193754Z:64c3b635-b142-41ce-bca2-f7c8ac8d4ea4',
  date: 'Wed, 20 Jan 2016 19:37:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRoutCircuiteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteA/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"9d217bbd-2d90-45f4-a261-d4859bdd91b5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"0cc55871-8593-42cc-99e0-da46734f0ab8\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '490',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9296622f-fa88-4e21-ab18-4bce1b009a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '64c3b635-b142-41ce-bca2-f7c8ac8d4ea4',
  'x-ms-routing-request-id': 'EASTUS:20160120T193754Z:64c3b635-b142-41ce-bca2-f7c8ac8d4ea4',
  date: 'Wed, 20 Jan 2016 19:37:53 GMT',
  connection: 'close' });
 return result; }]];