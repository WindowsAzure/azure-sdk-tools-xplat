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
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"572b4436-2166-4501-9c4b-b99167b09941\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6e0f6b79-ab0b-4e66-913d-25b9e62e821d\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '702',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"572b4436-2166-4501-9c4b-b99167b09941"',
  'x-ms-request-id': 'abf05ca3-3df5-405e-b2f9-fe03a24db127',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': 'c1d9d8a2-f1a7-46ab-bb95-e251b3c25f91',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012236Z:c1d9d8a2-f1a7-46ab-bb95-e251b3c25f91',
  date: 'Fri, 12 Aug 2016 01:22:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"572b4436-2166-4501-9c4b-b99167b09941\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6e0f6b79-ab0b-4e66-913d-25b9e62e821d\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '702',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"572b4436-2166-4501-9c4b-b99167b09941"',
  'x-ms-request-id': 'abf05ca3-3df5-405e-b2f9-fe03a24db127',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': 'c1d9d8a2-f1a7-46ab-bb95-e251b3c25f91',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012236Z:c1d9d8a2-f1a7-46ab-bb95-e251b3c25f91',
  date: 'Fri, 12 Aug 2016 01:22:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/6ab0f9ba-b706-427e-9f41-69a5332a69ce?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '6ab0f9ba-b706-427e-9f41-69a5332a69ce',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6ab0f9ba-b706-427e-9f41-69a5332a69ce?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '0e6e907d-9059-4261-bfcf-2965534c4e33',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012238Z:0e6e907d-9059-4261-bfcf-2965534c4e33',
  date: 'Fri, 12 Aug 2016 01:22:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/6ab0f9ba-b706-427e-9f41-69a5332a69ce?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '6ab0f9ba-b706-427e-9f41-69a5332a69ce',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6ab0f9ba-b706-427e-9f41-69a5332a69ce?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '0e6e907d-9059-4261-bfcf-2965534c4e33',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012238Z:0e6e907d-9059-4261-bfcf-2965534c4e33',
  date: 'Fri, 12 Aug 2016 01:22:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6ab0f9ba-b706-427e-9f41-69a5332a69ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e8978135-350f-4b9c-9f53-bdc0fb0482ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14945',
  'x-ms-correlation-request-id': '0eee97cb-f986-46de-b556-7948e888b447',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012308Z:0eee97cb-f986-46de-b556-7948e888b447',
  date: 'Fri, 12 Aug 2016 01:23:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6ab0f9ba-b706-427e-9f41-69a5332a69ce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e8978135-350f-4b9c-9f53-bdc0fb0482ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14945',
  'x-ms-correlation-request-id': '0eee97cb-f986-46de-b556-7948e888b447',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012308Z:0eee97cb-f986-46de-b556-7948e888b447',
  date: 'Fri, 12 Aug 2016 01:23:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4fc8b986-7be1-47cc-bedb-3819f8288805',
  'x-ms-correlation-request-id': '4fc8b986-7be1-47cc-bedb-3819f8288805',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012310Z:4fc8b986-7be1-47cc-bedb-3819f8288805',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:23:09 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4fc8b986-7be1-47cc-bedb-3819f8288805',
  'x-ms-correlation-request-id': '4fc8b986-7be1-47cc-bedb-3819f8288805',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012310Z:4fc8b986-7be1-47cc-bedb-3819f8288805',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:23:09 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; }]];