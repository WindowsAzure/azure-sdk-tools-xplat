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
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"edcf7dea-76cf-4b12-9393-6df3e3dbca25\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d3413054-927a-4dd2-9aee-80b528704043\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '733',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"edcf7dea-76cf-4b12-9393-6df3e3dbca25"',
  'x-ms-request-id': '698db337-8ec1-4377-858b-1ea1d40cce1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '9233629c-2bea-4aaf-9654-3d004fa3f39c',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T090945Z:9233629c-2bea-4aaf-9654-3d004fa3f39c',
  date: 'Mon, 05 Dec 2016 09:09:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"localNetworkGatewaysName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n  \"etag\": \"W/\\\"edcf7dea-76cf-4b12-9393-6df3e3dbca25\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d3413054-927a-4dd2-9aee-80b528704043\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.42\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 125,\r\n      \"bgpPeeringAddress\": \"11.0.0.11\",\r\n      \"peerWeight\": 15\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '733',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"edcf7dea-76cf-4b12-9393-6df3e3dbca25"',
  'x-ms-request-id': '698db337-8ec1-4377-858b-1ea1d40cce1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '9233629c-2bea-4aaf-9654-3d004fa3f39c',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T090945Z:9233629c-2bea-4aaf-9654-3d004fa3f39c',
  date: 'Mon, 05 Dec 2016 09:09:44 GMT',
  connection: 'close' });
 return result; }]];