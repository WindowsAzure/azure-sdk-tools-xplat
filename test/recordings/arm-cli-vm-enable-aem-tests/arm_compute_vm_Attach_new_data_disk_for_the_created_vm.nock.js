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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"03b428ef-3613-49ba-932a-08554143f31a\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5eddf2cfc6c75486-os-1470961176343\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/cli5eddf2cfc6c75486-os-1470961176343.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3640.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1627',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '376c1708-28c2-4b83-8c33-f5ac5c62c865',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': 'ffec7949-f3e0-4798-a6f5-44a16ebe774c',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002340Z:ffec7949-f3e0-4798-a6f5-44a16ebe774c',
  date: 'Fri, 12 Aug 2016 00:23:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"03b428ef-3613-49ba-932a-08554143f31a\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5eddf2cfc6c75486-os-1470961176343\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/cli5eddf2cfc6c75486-os-1470961176343.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3640.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1627',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '376c1708-28c2-4b83-8c33-f5ac5c62c865',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': 'ffec7949-f3e0-4798-a6f5-44a16ebe774c',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002340Z:ffec7949-f3e0-4798-a6f5-44a16ebe774c',
  date: 'Fri, 12 Aug 2016 00:23:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"03b428ef-3613-49ba-932a-08554143f31a\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5eddf2cfc6c75486-os-1470961176343\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/cli5eddf2cfc6c75486-os-1470961176343.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160812-032338981\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/xplatvmExt-20160812-032338981.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3640.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1992',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/fdfbaa01-b23a-47b4-b554-457e6fcc44fd?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'fdfbaa01-b23a-47b4-b554-457e6fcc44fd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '4e021d28-9cf7-44ed-a8f1-0cbd2767f9bd',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002342Z:4e021d28-9cf7-44ed-a8f1-0cbd2767f9bd',
  date: 'Fri, 12 Aug 2016 00:23:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"03b428ef-3613-49ba-932a-08554143f31a\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5eddf2cfc6c75486-os-1470961176343\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/cli5eddf2cfc6c75486-os-1470961176343.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160812-032338981\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/xplatvmExt-20160812-032338981.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3640.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1992',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/fdfbaa01-b23a-47b4-b554-457e6fcc44fd?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'fdfbaa01-b23a-47b4-b554-457e6fcc44fd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '4e021d28-9cf7-44ed-a8f1-0cbd2767f9bd',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002342Z:4e021d28-9cf7-44ed-a8f1-0cbd2767f9bd',
  date: 'Fri, 12 Aug 2016 00:23:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/fdfbaa01-b23a-47b4-b554-457e6fcc44fd?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-12T00:23:40.3334491+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"fdfbaa01-b23a-47b4-b554-457e6fcc44fd\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'f07806e4-09fc-4194-83af-70b533b1440f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '2af19300-683a-41f2-a5b7-f0a894741237',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002413Z:2af19300-683a-41f2-a5b7-f0a894741237',
  date: 'Fri, 12 Aug 2016 00:24:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/fdfbaa01-b23a-47b4-b554-457e6fcc44fd?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-12T00:23:40.3334491+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"fdfbaa01-b23a-47b4-b554-457e6fcc44fd\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'f07806e4-09fc-4194-83af-70b533b1440f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '2af19300-683a-41f2-a5b7-f0a894741237',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002413Z:2af19300-683a-41f2-a5b7-f0a894741237',
  date: 'Fri, 12 Aug 2016 00:24:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/fdfbaa01-b23a-47b4-b554-457e6fcc44fd?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-12T00:23:40.3334491+00:00\",\r\n  \"endTime\": \"2016-08-12T00:24:14.2242834+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"fdfbaa01-b23a-47b4-b554-457e6fcc44fd\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '3fc5b1ad-3a66-4f8b-be25-f77b8cda69ce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '91286604-830f-42fa-97f9-e3bd821b28c1',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002444Z:91286604-830f-42fa-97f9-e3bd821b28c1',
  date: 'Fri, 12 Aug 2016 00:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/fdfbaa01-b23a-47b4-b554-457e6fcc44fd?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-12T00:23:40.3334491+00:00\",\r\n  \"endTime\": \"2016-08-12T00:24:14.2242834+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"fdfbaa01-b23a-47b4-b554-457e6fcc44fd\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '3fc5b1ad-3a66-4f8b-be25-f77b8cda69ce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '91286604-830f-42fa-97f9-e3bd821b28c1',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002444Z:91286604-830f-42fa-97f9-e3bd821b28c1',
  date: 'Fri, 12 Aug 2016 00:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"03b428ef-3613-49ba-932a-08554143f31a\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5eddf2cfc6c75486-os-1470961176343\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/cli5eddf2cfc6c75486-os-1470961176343.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160812-032338981\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/xplatvmExt-20160812-032338981.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3640.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1993',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '56df4603-c47e-44b0-9270-ca9cc97949b1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': 'e7f2fae6-0c80-4235-9193-51a8772e8b93',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002445Z:e7f2fae6-0c80-4235-9193-51a8772e8b93',
  date: 'Fri, 12 Aug 2016 00:24:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"03b428ef-3613-49ba-932a-08554143f31a\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5eddf2cfc6c75486-os-1470961176343\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/cli5eddf2cfc6c75486-os-1470961176343.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160812-032338981\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext3640.blob.core.windows.net/xplatstoragecntext3639/xplatvmExt-20160812-032338981.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3640.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension3524/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1993',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '56df4603-c47e-44b0-9270-ca9cc97949b1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': 'e7f2fae6-0c80-4235-9193-51a8772e8b93',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T002445Z:e7f2fae6-0c80-4235-9193-51a8772e8b93',
  date: 'Fri, 12 Aug 2016 00:24:45 GMT',
  connection: 'close' });
 return result; }]];