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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/localNetworkGatewaysName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0ce7326f-f904-46aa-b32d-b51abcabe3a1',
  'x-ms-correlation-request-id': '0ce7326f-f904-46aa-b32d-b51abcabe3a1',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104848Z:0ce7326f-f904-46aa-b32d-b51abcabe3a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 10:48:47 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/localNetworkGatewaysName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0ce7326f-f904-46aa-b32d-b51abcabe3a1',
  'x-ms-correlation-request-id': '0ce7326f-f904-46aa-b32d-b51abcabe3a1',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104848Z:0ce7326f-f904-46aa-b32d-b51abcabe3a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 10:48:47 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"1d733b1e-1a5a-44b2-8ae6-5d6ed8bdc6b0\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"2466441e-9313-47b1-805b-2c63fb24aaef\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '732',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '52adc71d-4097-4171-becf-8f495882d8c6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/52adc71d-4097-4171-becf-8f495882d8c6?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a39ac778-c5ec-4d3f-94b4-21e57e077c15',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104851Z:a39ac778-c5ec-4d3f-94b4-21e57e077c15',
  date: 'Wed, 07 Dec 2016 10:48:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"1d733b1e-1a5a-44b2-8ae6-5d6ed8bdc6b0\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"2466441e-9313-47b1-805b-2c63fb24aaef\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '732',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '52adc71d-4097-4171-becf-8f495882d8c6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/52adc71d-4097-4171-becf-8f495882d8c6?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a39ac778-c5ec-4d3f-94b4-21e57e077c15',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104851Z:a39ac778-c5ec-4d3f-94b4-21e57e077c15',
  date: 'Wed, 07 Dec 2016 10:48:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/52adc71d-4097-4171-becf-8f495882d8c6?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b39bb2c6-a37b-4b90-91c6-cdbf9481dc1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '59c28abc-9597-4a62-9a94-2137661d5718',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104922Z:59c28abc-9597-4a62-9a94-2137661d5718',
  date: 'Wed, 07 Dec 2016 10:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/52adc71d-4097-4171-becf-8f495882d8c6?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b39bb2c6-a37b-4b90-91c6-cdbf9481dc1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '59c28abc-9597-4a62-9a94-2137661d5718',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104922Z:59c28abc-9597-4a62-9a94-2137661d5718',
  date: 'Wed, 07 Dec 2016 10:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"7ddab003-7e92-41dc-939f-0fb8e3945d2f\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2466441e-9313-47b1-805b-2c63fb24aaef\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '733',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7ddab003-7e92-41dc-939f-0fb8e3945d2f"',
  'x-ms-request-id': 'bd1009db-053c-46eb-b1df-e2be963c2829',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '74e2f7ad-b1ef-42d9-8e37-e2e27d3a1095',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104923Z:74e2f7ad-b1ef-42d9-8e37-e2e27d3a1095',
  date: 'Wed, 07 Dec 2016 10:49:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"7ddab003-7e92-41dc-939f-0fb8e3945d2f\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2466441e-9313-47b1-805b-2c63fb24aaef\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '733',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7ddab003-7e92-41dc-939f-0fb8e3945d2f"',
  'x-ms-request-id': 'bd1009db-053c-46eb-b1df-e2be963c2829',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '74e2f7ad-b1ef-42d9-8e37-e2e27d3a1095',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T104923Z:74e2f7ad-b1ef-42d9-8e37-e2e27d3a1095',
  date: 'Wed, 07 Dec 2016 10:49:23 GMT',
  connection: 'close' });
 return result; }]];