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
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n  \"etag\": \"W/\\\"ae33b042-f202-4117-96c3-66f1533ff44b\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6fc39c82-e8af-40f1-a287-3edca1713187\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"e6c1183b-5135-4623-8e49-1869f5f03176\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '24be627d-7d36-40e7-975b-1af91061276d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2db71726-5f84-4a91-bbae-3891c5feae1c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T125912Z:2db71726-5f84-4a91-bbae-3891c5feae1c',
  date: 'Wed, 12 Jul 2017 12:59:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n  \"etag\": \"W/\\\"ae33b042-f202-4117-96c3-66f1533ff44b\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6fc39c82-e8af-40f1-a287-3edca1713187\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"e6c1183b-5135-4623-8e49-1869f5f03176\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '24be627d-7d36-40e7-975b-1af91061276d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2db71726-5f84-4a91-bbae-3891c5feae1c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T125912Z:2db71726-5f84-4a91-bbae-3891c5feae1c',
  date: 'Wed, 12 Jul 2017 12:59:12 GMT',
  connection: 'close' });
 return result; }]];