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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"8cb245d2-af95-4061-afaa-6bc2f69fc180\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"8cb245d2-af95-4061-afaa-6bc2f69fc180\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"8cb245d2-af95-4061-afaa-6bc2f69fc180\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2424',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8cb245d2-af95-4061-afaa-6bc2f69fc180"',
  'x-ms-request-id': '2f035371-842c-47b4-bd92-1e3693641de6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': 'e8470144-ecc3-41c5-a3bf-2e1c97d2f070',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013922Z:e8470144-ecc3-41c5-a3bf-2e1c97d2f070',
  date: 'Fri, 12 Aug 2016 01:39:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"8cb245d2-af95-4061-afaa-6bc2f69fc180\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"8cb245d2-af95-4061-afaa-6bc2f69fc180\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"8cb245d2-af95-4061-afaa-6bc2f69fc180\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2424',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8cb245d2-af95-4061-afaa-6bc2f69fc180"',
  'x-ms-request-id': '2f035371-842c-47b4-bd92-1e3693641de6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': 'e8470144-ecc3-41c5-a3bf-2e1c97d2f070',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013922Z:e8470144-ecc3-41c5-a3bf-2e1c97d2f070',
  date: 'Fri, 12 Aug 2016 01:39:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1310',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1bae8224-3d6b-435e-9473-d3c4305077ef',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1bae8224-3d6b-435e-9473-d3c4305077ef?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1182',
  'x-ms-correlation-request-id': '295e53f5-a043-4cf0-a05d-801b89cc68e5',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013923Z:295e53f5-a043-4cf0-a05d-801b89cc68e5',
  date: 'Fri, 12 Aug 2016 01:39:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1310',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1bae8224-3d6b-435e-9473-d3c4305077ef',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1bae8224-3d6b-435e-9473-d3c4305077ef?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1182',
  'x-ms-correlation-request-id': '295e53f5-a043-4cf0-a05d-801b89cc68e5',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013923Z:295e53f5-a043-4cf0-a05d-801b89cc68e5',
  date: 'Fri, 12 Aug 2016 01:39:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1310',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ac820496-39cc-491c-9e39-0da50bd8c6a0"',
  'x-ms-request-id': 'a23e502b-441b-4b99-a334-acdda2e51681',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '5616a59b-f0fe-489f-87c3-48a25bf45d63',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013924Z:5616a59b-f0fe-489f-87c3-48a25bf45d63',
  date: 'Fri, 12 Aug 2016 01:39:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1310',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ac820496-39cc-491c-9e39-0da50bd8c6a0"',
  'x-ms-request-id': 'a23e502b-441b-4b99-a334-acdda2e51681',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '5616a59b-f0fe-489f-87c3-48a25bf45d63',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013924Z:5616a59b-f0fe-489f-87c3-48a25bf45d63',
  date: 'Fri, 12 Aug 2016 01:39:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1310',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ac820496-39cc-491c-9e39-0da50bd8c6a0"',
  'x-ms-request-id': '448f2d48-356c-4dc7-990c-bcfdd841368a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14943',
  'x-ms-correlation-request-id': '186ff4f4-7d84-4450-8b30-87b791d14fba',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013926Z:186ff4f4-7d84-4450-8b30-87b791d14fba',
  date: 'Fri, 12 Aug 2016 01:39:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f2e843d3-3d89-47dc-bb95-c8a09268db16\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"ac820496-39cc-491c-9e39-0da50bd8c6a0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1310',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ac820496-39cc-491c-9e39-0da50bd8c6a0"',
  'x-ms-request-id': '448f2d48-356c-4dc7-990c-bcfdd841368a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14943',
  'x-ms-correlation-request-id': '186ff4f4-7d84-4450-8b30-87b791d14fba',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T013926Z:186ff4f4-7d84-4450-8b30-87b791d14fba',
  date: 'Fri, 12 Aug 2016 01:39:25 GMT',
  connection: 'close' });
 return result; }]];