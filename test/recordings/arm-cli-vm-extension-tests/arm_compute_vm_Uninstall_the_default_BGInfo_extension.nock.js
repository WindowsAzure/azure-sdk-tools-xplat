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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"e3b6abad-d266-41a8-b293-e1c3a29871f4\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli341315772d5d8294-os-1470959337700\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext2232.blob.core.windows.net/xplatstoragecntext4420/cli341315772d5d8294-os-1470959337700.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext2232.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2260',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'a09c3eef-d8f6-404d-8d3e-cde182b2ac2e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '9f050eca-2027-4932-a54e-e17b95a66635',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235646Z:9f050eca-2027-4932-a54e-e17b95a66635',
  date: 'Thu, 11 Aug 2016 23:56:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"e3b6abad-d266-41a8-b293-e1c3a29871f4\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli341315772d5d8294-os-1470959337700\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext2232.blob.core.windows.net/xplatstoragecntext4420/cli341315772d5d8294-os-1470959337700.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext2232.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2260',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'a09c3eef-d8f6-404d-8d3e-cde182b2ac2e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '9f050eca-2027-4932-a54e-e17b95a66635',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235646Z:9f050eca-2027-4932-a54e-e17b95a66635',
  date: 'Thu, 11 Aug 2016 23:56:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"BGInfo\",\r\n    \"typeHandlerVersion\": \"2.1\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n  \"name\": \"BGInfo\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '2a6d2b0a-1f23-45e5-bf93-c3209c0307ec',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '8433f013-4a7e-4212-8606-6cfd408d3621',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235647Z:8433f013-4a7e-4212-8606-6cfd408d3621',
  date: 'Thu, 11 Aug 2016 23:56:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"BGInfo\",\r\n    \"typeHandlerVersion\": \"2.1\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n  \"name\": \"BGInfo\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '2a6d2b0a-1f23-45e5-bf93-c3209c0307ec',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '8433f013-4a7e-4212-8606-6cfd408d3621',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235647Z:8433f013-4a7e-4212-8606-6cfd408d3621',
  date: 'Thu, 11 Aug 2016 23:56:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'c9a67125-67e1-4471-b699-239d180f75d1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-correlation-request-id': 'fe93b1eb-bcb4-45ea-b959-bd7aca15e8d6',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235649Z:fe93b1eb-bcb4-45ea-b959-bd7aca15e8d6',
  date: 'Thu, 11 Aug 2016 23:56:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension8009/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'c9a67125-67e1-4471-b699-239d180f75d1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-correlation-request-id': 'fe93b1eb-bcb4-45ea-b959-bd7aca15e8d6',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235649Z:fe93b1eb-bcb4-45ea-b959-bd7aca15e8d6',
  date: 'Thu, 11 Aug 2016 23:56:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:56:47.5105986+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c9a67125-67e1-4471-b699-239d180f75d1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '086720fb-46ef-4906-84d3-c1dc66eb36ac',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '7e0bb211-bf88-44ca-948d-c00ef330c4dc',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235720Z:7e0bb211-bf88-44ca-948d-c00ef330c4dc',
  date: 'Thu, 11 Aug 2016 23:57:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:56:47.5105986+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c9a67125-67e1-4471-b699-239d180f75d1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '086720fb-46ef-4906-84d3-c1dc66eb36ac',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '7e0bb211-bf88-44ca-948d-c00ef330c4dc',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235720Z:7e0bb211-bf88-44ca-948d-c00ef330c4dc',
  date: 'Thu, 11 Aug 2016 23:57:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:56:47.5105986+00:00\",\r\n  \"endTime\": \"2016-08-11T23:57:31.8234104+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c9a67125-67e1-4471-b699-239d180f75d1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '9de4720d-362f-42c9-9d72-9ad128f1bfda',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-correlation-request-id': '564c9cd0-f46e-4df0-9d21-5ddffcaf7ff0',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235751Z:564c9cd0-f46e-4df0-9d21-5ddffcaf7ff0',
  date: 'Thu, 11 Aug 2016 23:57:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/c9a67125-67e1-4471-b699-239d180f75d1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:56:47.5105986+00:00\",\r\n  \"endTime\": \"2016-08-11T23:57:31.8234104+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c9a67125-67e1-4471-b699-239d180f75d1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '9de4720d-362f-42c9-9d72-9ad128f1bfda',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-correlation-request-id': '564c9cd0-f46e-4df0-9d21-5ddffcaf7ff0',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T235751Z:564c9cd0-f46e-4df0-9d21-5ddffcaf7ff0',
  date: 'Thu, 11 Aug 2016 23:57:50 GMT',
  connection: 'close' });
 return result; }]];