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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"publicIPAddressName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n      \"etag\": \"W/\\\"e91d1f74-6aff-47d0-b22f-dedab86353f2\\\"\",\r\n      \"location\": \"southeastasia\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"931154f1-89b0-4330-afab-db28bc588fa5\",\r\n        \"ipAddress\": \"52.187.122.1\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 15,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"labelcreate\",\r\n          \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '856',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6e96c8b-250f-49ec-966d-7aeb2b11f5a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '7e2f5d56-ced5-48b0-9dfe-f71f07a933f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123804Z:7e2f5d56-ced5-48b0-9dfe-f71f07a933f9',
  date: 'Thu, 22 Jun 2017 12:38:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"publicIPAddressName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n      \"etag\": \"W/\\\"e91d1f74-6aff-47d0-b22f-dedab86353f2\\\"\",\r\n      \"location\": \"southeastasia\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"931154f1-89b0-4330-afab-db28bc588fa5\",\r\n        \"ipAddress\": \"52.187.122.1\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 15,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"labelcreate\",\r\n          \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '856',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6e96c8b-250f-49ec-966d-7aeb2b11f5a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '7e2f5d56-ced5-48b0-9dfe-f71f07a933f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T123804Z:7e2f5d56-ced5-48b0-9dfe-f71f07a933f9',
  date: 'Thu, 22 Jun 2017 12:38:04 GMT',
  connection: 'close' });
 return result; }]];