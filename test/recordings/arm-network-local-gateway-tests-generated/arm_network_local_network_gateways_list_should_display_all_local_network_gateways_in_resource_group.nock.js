// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"localNetworkGatewayName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\",\r\n      \"etag\": \"W/\\\"6f65b882-e92d-468d-930a-c58368a8a8af\\\"\",\r\n      \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"39682934-7349-4468-b15e-f32616889fa5\",\r\n        \"localNetworkAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/8\",\r\n            \"192.168.0.0/16\"\r\n          ]\r\n        },\r\n        \"gatewayIpAddress\": \"10.0.0.24\",\r\n        \"bgpSettings\": {\r\n          \"asn\": 142,\r\n          \"bgpPeeringAddress\": \"11.0.0.12\",\r\n          \"peerWeight\": 25\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '875',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '51689c67-5da1-42ab-b651-321f4ac0c962',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '9148d487-340f-4035-a743-9ee4d653d00f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171016T145113Z:9148d487-340f-4035-a743-9ee4d653d00f',
  date: 'Mon, 16 Oct 2017 14:51:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"localNetworkGatewayName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewayName\",\r\n      \"etag\": \"W/\\\"6f65b882-e92d-468d-930a-c58368a8a8af\\\"\",\r\n      \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"39682934-7349-4468-b15e-f32616889fa5\",\r\n        \"localNetworkAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/8\",\r\n            \"192.168.0.0/16\"\r\n          ]\r\n        },\r\n        \"gatewayIpAddress\": \"10.0.0.24\",\r\n        \"bgpSettings\": {\r\n          \"asn\": 142,\r\n          \"bgpPeeringAddress\": \"11.0.0.12\",\r\n          \"peerWeight\": 25\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '875',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '51689c67-5da1-42ab-b651-321f4ac0c962',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '9148d487-340f-4035-a743-9ee4d653d00f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171016T145113Z:9148d487-340f-4035-a743-9ee4d653d00f',
  date: 'Mon, 16 Oct 2017 14:51:12 GMT',
  connection: 'close' });
 return result; }]];
