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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"071c74af-bf07-44be-bfea-97597a2452df\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '691',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"071c74af-bf07-44be-bfea-97597a2452df"',
  'x-ms-request-id': 'd31b63e7-e999-45ad-8229-4ccc3b60fc1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c8eec20b-39a0-4285-a733-21a6546136e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110135Z:c8eec20b-39a0-4285-a733-21a6546136e7',
  date: 'Wed, 27 Sep 2017 11:01:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"071c74af-bf07-44be-bfea-97597a2452df\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '691',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"071c74af-bf07-44be-bfea-97597a2452df"',
  'x-ms-request-id': 'd31b63e7-e999-45ad-8229-4ccc3b60fc1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c8eec20b-39a0-4285-a733-21a6546136e7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110135Z:c8eec20b-39a0-4285-a733-21a6546136e7',
  date: 'Wed, 27 Sep 2017 11:01:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"22d8845e-3511-49b8-826c-8c99471f22cb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '369',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"22d8845e-3511-49b8-826c-8c99471f22cb"',
  'x-ms-request-id': 'd6bb6a7a-e34b-4f4f-8ba0-bd1b4e560e33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '56d77126-d22f-4296-980a-d99cbd00c79d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110135Z:56d77126-d22f-4296-980a-d99cbd00c79d',
  date: 'Wed, 27 Sep 2017 11:01:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"22d8845e-3511-49b8-826c-8c99471f22cb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '369',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"22d8845e-3511-49b8-826c-8c99471f22cb"',
  'x-ms-request-id': 'd6bb6a7a-e34b-4f4f-8ba0-bd1b4e560e33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '56d77126-d22f-4296-980a-d99cbd00c79d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110135Z:56d77126-d22f-4296-980a-d99cbd00c79d',
  date: 'Wed, 27 Sep 2017 11:01:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        },\r\n        \"zones\": [\r\n          \"2\"\r\n        ]\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c2fc93de-8e78-4bfa-a806-f4500d8bbbc6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/c2fc93de-8e78-4bfa-a806-f4500d8bbbc6?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c0423a80-858f-4896-bee0-1d44924ac0c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110136Z:c0423a80-858f-4896-bee0-1d44924ac0c2',
  date: 'Wed, 27 Sep 2017 11:01:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        },\r\n        \"zones\": [\r\n          \"2\"\r\n        ]\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c2fc93de-8e78-4bfa-a806-f4500d8bbbc6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/c2fc93de-8e78-4bfa-a806-f4500d8bbbc6?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c0423a80-858f-4896-bee0-1d44924ac0c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110136Z:c0423a80-858f-4896-bee0-1d44924ac0c2',
  date: 'Wed, 27 Sep 2017 11:01:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        },\r\n        \"zones\": [\r\n          \"2\"\r\n        ]\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"98697d8b-11db-4d08-a326-7419941b87e4"',
  'x-ms-request-id': '3ccf49b3-2330-4151-a761-6529dc64e602',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '01306525-e470-44d7-8e1f-569016bee874',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110137Z:01306525-e470-44d7-8e1f-569016bee874',
  date: 'Wed, 27 Sep 2017 11:01:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"98697d8b-11db-4d08-a326-7419941b87e4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        },\r\n        \"zones\": [\r\n          \"2\"\r\n        ]\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"98697d8b-11db-4d08-a326-7419941b87e4"',
  'x-ms-request-id': '3ccf49b3-2330-4151-a761-6529dc64e602',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '01306525-e470-44d7-8e1f-569016bee874',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110137Z:01306525-e470-44d7-8e1f-569016bee874',
  date: 'Wed, 27 Sep 2017 11:01:36 GMT',
  connection: 'close' });
 return result; }]];
