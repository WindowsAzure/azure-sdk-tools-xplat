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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"8e532286-df0a-4530-bad2-c37523d0eb9a\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fd61676a-eddc-4c04-b0db-b7e5417131ce\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"8e532286-df0a-4530-bad2-c37523d0eb9a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8e532286-df0a-4530-bad2-c37523d0eb9a"',
  'x-ms-request-id': '0d82c095-2567-45e3-aa34-e619ae0c64ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'ded624d2-ed66-4de4-a2a7-20910f485622',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111055Z:ded624d2-ed66-4de4-a2a7-20910f485622',
  date: 'Wed, 27 Sep 2017 11:10:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"8e532286-df0a-4530-bad2-c37523d0eb9a\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"fd61676a-eddc-4c04-b0db-b7e5417131ce\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"8e532286-df0a-4530-bad2-c37523d0eb9a\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8e532286-df0a-4530-bad2-c37523d0eb9a"',
  'x-ms-request-id': '0d82c095-2567-45e3-aa34-e619ae0c64ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'ded624d2-ed66-4de4-a2a7-20910f485622',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111055Z:ded624d2-ed66-4de4-a2a7-20910f485622',
  date: 'Wed, 27 Sep 2017 11:10:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidRequestFormat\",\r\n    \"message\": \"Cannot parse the request.\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"JSON integer 2147483650 is too large or small for an Int32. Path 'properties.probes[0].properties.intervalInSeconds', line 1, position 924.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Could not find member 'name' on object of type 'LoadBalancerProbeProperties'. Path 'properties.probes[0].name', line 1, position 933.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Unexpected token when deserializing object: EndArray. Path 'properties.probes', line 1, position 974.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Unexpected token while deserializing object: PropertyName. Path 'properties.inboundNatRules', line 1, position 993.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Infinite loop detected from error handling. Path 'properties.inboundNatRules', line 1, position 995.\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1087',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f741b673-cf55-455b-a7ba-1ae59e0fb8b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '4ae00457-b215-4156-b10b-dcc0d45c927e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111055Z:4ae00457-b215-4156-b10b-dcc0d45c927e',
  date: 'Wed, 27 Sep 2017 11:10:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-probe/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidRequestFormat\",\r\n    \"message\": \"Cannot parse the request.\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"JSON integer 2147483650 is too large or small for an Int32. Path 'properties.probes[0].properties.intervalInSeconds', line 1, position 924.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Could not find member 'name' on object of type 'LoadBalancerProbeProperties'. Path 'properties.probes[0].name', line 1, position 933.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Unexpected token when deserializing object: EndArray. Path 'properties.probes', line 1, position 974.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Unexpected token while deserializing object: PropertyName. Path 'properties.inboundNatRules', line 1, position 993.\"\r\n      },\r\n      {\r\n        \"code\": \"InvalidJson\",\r\n        \"message\": \"Infinite loop detected from error handling. Path 'properties.inboundNatRules', line 1, position 995.\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1087',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f741b673-cf55-455b-a7ba-1ae59e0fb8b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '4ae00457-b215-4156-b10b-dcc0d45c927e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T111055Z:4ae00457-b215-4156-b10b-dcc0d45c927e',
  date: 'Wed, 27 Sep 2017 11:10:55 GMT',
  connection: 'close' });
 return result; }]];
