// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '21b6a43a-2913-4802-8619-5b91b57f583f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '242f73fe-92f5-47b6-99c8-bf86e203f375',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115759Z:242f73fe-92f5-47b6-99c8-bf86e203f375',
  date: 'Thu, 05 Oct 2017 11:57:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '295',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '21b6a43a-2913-4802-8619-5b91b57f583f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '242f73fe-92f5-47b6-99c8-bf86e203f375',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115759Z:242f73fe-92f5-47b6-99c8-bf86e203f375',
  date: 'Thu, 05 Oct 2017 11:57:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"6676737e-8a71-405b-9d72-4a2e71a937d0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [\r\n      \"1024\",\r\n      \"1026\"\r\n    ],\r\n    \"destinationPortRanges\": [\r\n      \"4242\",\r\n      \"65042\"\r\n    ],\r\n    \"sourceAddressPrefixes\": [\r\n      \"10.0.0.0/16\"\r\n    ],\r\n    \"destinationAddressPrefixes\": [\r\n      \"11.0.0.0/24\"\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '749',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f05a146d-8b30-4f21-bba5-2be3c09279e4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/f05a146d-8b30-4f21-bba5-2be3c09279e4?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '557de9a2-6118-4496-820e-fdc7184de367',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115801Z:557de9a2-6118-4496-820e-fdc7184de367',
  date: 'Thu, 05 Oct 2017 11:58:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-10-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"6676737e-8a71-405b-9d72-4a2e71a937d0\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [\r\n      \"1024\",\r\n      \"1026\"\r\n    ],\r\n    \"destinationPortRanges\": [\r\n      \"4242\",\r\n      \"65042\"\r\n    ],\r\n    \"sourceAddressPrefixes\": [\r\n      \"10.0.0.0/16\"\r\n    ],\r\n    \"destinationAddressPrefixes\": [\r\n      \"11.0.0.0/24\"\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '749',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f05a146d-8b30-4f21-bba5-2be3c09279e4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/f05a146d-8b30-4f21-bba5-2be3c09279e4?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '557de9a2-6118-4496-820e-fdc7184de367',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115801Z:557de9a2-6118-4496-820e-fdc7184de367',
  date: 'Thu, 05 Oct 2017 11:58:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/f05a146d-8b30-4f21-bba5-2be3c09279e4?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f5f1f6d8-4541-461a-81b9-afed6d606abd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '38fc9647-9f0f-40fb-9edf-6bc47d98c1e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115832Z:38fc9647-9f0f-40fb-9edf-6bc47d98c1e9',
  date: 'Thu, 05 Oct 2017 11:58:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/f05a146d-8b30-4f21-bba5-2be3c09279e4?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f5f1f6d8-4541-461a-81b9-afed6d606abd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '38fc9647-9f0f-40fb-9edf-6bc47d98c1e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115832Z:38fc9647-9f0f-40fb-9edf-6bc47d98c1e9',
  date: 'Thu, 05 Oct 2017 11:58:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"0c07fc74-2ebe-4399-9026-d4ce5b80f9b6\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [\r\n      \"1024\",\r\n      \"1026\"\r\n    ],\r\n    \"destinationPortRanges\": [\r\n      \"4242\",\r\n      \"65042\"\r\n    ],\r\n    \"sourceAddressPrefixes\": [\r\n      \"10.0.0.0/16\"\r\n    ],\r\n    \"destinationAddressPrefixes\": [\r\n      \"11.0.0.0/24\"\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '750',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0c07fc74-2ebe-4399-9026-d4ce5b80f9b6"',
  'x-ms-request-id': 'be791d2b-90ba-4c94-9c3a-a8c173c11c22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7c2c5e78-f9bf-4364-95a2-3378006bb7a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115834Z:7c2c5e78-f9bf-4364-95a2-3378006bb7a5',
  date: 'Thu, 05 Oct 2017 11:58:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"0c07fc74-2ebe-4399-9026-d4ce5b80f9b6\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\",\r\n    \"sourcePortRanges\": [\r\n      \"1024\",\r\n      \"1026\"\r\n    ],\r\n    \"destinationPortRanges\": [\r\n      \"4242\",\r\n      \"65042\"\r\n    ],\r\n    \"sourceAddressPrefixes\": [\r\n      \"10.0.0.0/16\"\r\n    ],\r\n    \"destinationAddressPrefixes\": [\r\n      \"11.0.0.0/24\"\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '750',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0c07fc74-2ebe-4399-9026-d4ce5b80f9b6"',
  'x-ms-request-id': 'be791d2b-90ba-4c94-9c3a-a8c173c11c22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '7c2c5e78-f9bf-4364-95a2-3378006bb7a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T115834Z:7c2c5e78-f9bf-4364-95a2-3378006bb7a5',
  date: 'Thu, 05 Oct 2017 11:58:34 GMT',
  connection: 'close' });
 return result; }]];
