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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"e05707ab-23f3-4dba-ba7d-59b2e9e4a5c4\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e05707ab-23f3-4dba-ba7d-59b2e9e4a5c4"',
  'x-ms-request-id': '42eef3ab-7ba7-4316-8b4a-f26cdfd1d2ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '0aff3f5e-021d-4788-86e5-6cc4b32c795f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085628Z:0aff3f5e-021d-4788-86e5-6cc4b32c795f',
  date: 'Mon, 02 Oct 2017 08:56:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"e05707ab-23f3-4dba-ba7d-59b2e9e4a5c4\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e05707ab-23f3-4dba-ba7d-59b2e9e4a5c4"',
  'x-ms-request-id': '42eef3ab-7ba7-4316-8b4a-f26cdfd1d2ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '0aff3f5e-021d-4788-86e5-6cc4b32c795f',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085628Z:0aff3f5e-021d-4788-86e5-6cc4b32c795f',
  date: 'Mon, 02 Oct 2017 08:56:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName/stop?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/39edd97f-272c-43e9-8eda-661814cd490b?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '39edd97f-272c-43e9-8eda-661814cd490b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/39edd97f-272c-43e9-8eda-661814cd490b?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4d010667-e105-4561-bb4a-336c054e40c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085628Z:4d010667-e105-4561-bb4a-336c054e40c4',
  date: 'Mon, 02 Oct 2017 08:56:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName/stop?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/39edd97f-272c-43e9-8eda-661814cd490b?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '39edd97f-272c-43e9-8eda-661814cd490b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/39edd97f-272c-43e9-8eda-661814cd490b?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4d010667-e105-4561-bb4a-336c054e40c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085628Z:4d010667-e105-4561-bb4a-336c054e40c4',
  date: 'Mon, 02 Oct 2017 08:56:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/39edd97f-272c-43e9-8eda-661814cd490b?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'da23ae0f-bc30-43ca-af8f-188e0a7d8f2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '83ce6541-2e55-464c-a0af-13b2d410f7b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085659Z:83ce6541-2e55-464c-a0af-13b2d410f7b9',
  date: 'Mon, 02 Oct 2017 08:56:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/39edd97f-272c-43e9-8eda-661814cd490b?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'da23ae0f-bc30-43ca-af8f-188e0a7d8f2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '83ce6541-2e55-464c-a0af-13b2d410f7b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085659Z:83ce6541-2e55-464c-a0af-13b2d410f7b9',
  date: 'Mon, 02 Oct 2017 08:56:59 GMT',
  connection: 'close' });
 return result; }]];
