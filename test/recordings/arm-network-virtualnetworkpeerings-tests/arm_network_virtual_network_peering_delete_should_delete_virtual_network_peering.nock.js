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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringsName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName\",\r\n  \"etag\": \"W/\\\"748299d6-87be-4131-bd76-1ccf3c16d9b9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": true,\r\n    \"allowForwardedTraffic\": true,\r\n    \"allowGatewayTransit\": true,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '884',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"748299d6-87be-4131-bd76-1ccf3c16d9b9"',
  'x-ms-request-id': '80d1a9f1-33e2-4804-9038-56775082f8f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '40c27a30-078c-454b-979f-20642ccd0e61',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T120203Z:40c27a30-078c-454b-979f-20642ccd0e61',
  date: 'Fri, 19 Aug 2016 12:02:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName?api-version=2016-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/c2ef0bea-df22-4b15-a402-f992fb86a7fb?api-version=2016-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'c2ef0bea-df22-4b15-a402-f992fb86a7fb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/c2ef0bea-df22-4b15-a402-f992fb86a7fb?api-version=2016-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'cb0a636e-297c-4090-bf23-c5e2eb871ead',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T120204Z:cb0a636e-297c-4090-bf23-c5e2eb871ead',
  date: 'Fri, 19 Aug 2016 12:02:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/c2ef0bea-df22-4b15-a402-f992fb86a7fb?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cda2c6bb-53ea-4e3f-b964-ba61bee0e221',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'ac77bdbd-8ec6-4d48-a4da-25da244c91b2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T120235Z:ac77bdbd-8ec6-4d48-a4da-25da244c91b2',
  date: 'Fri, 19 Aug 2016 12:02:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName?api-version=2016-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '322',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f9f40e35-b9f6-4191-a6e6-926f17022c0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14931',
  'x-ms-correlation-request-id': '9796ca17-d686-4c21-a927-16b76d0bd40d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T120237Z:9796ca17-d686-4c21-a927-16b76d0bd40d',
  date: 'Fri, 19 Aug 2016 12:02:36 GMT' });
 return result; }]];