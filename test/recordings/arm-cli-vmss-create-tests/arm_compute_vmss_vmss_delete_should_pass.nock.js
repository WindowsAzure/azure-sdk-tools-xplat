// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate7027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'a13e35db-c531-42ac-87b8-aa48050e6014',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ac81e580-e1e4-4170-9cd7-a4965d001139',
  'x-ms-routing-request-id': 'WESTUS:20160116T061533Z:ac81e580-e1e4-4170-9cd7-a4965d001139',
  date: 'Sat, 16 Jan 2016 06:15:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate7027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'a13e35db-c531-42ac-87b8-aa48050e6014',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ac81e580-e1e4-4170-9cd7-a4965d001139',
  'x-ms-routing-request-id': 'WESTUS:20160116T061533Z:ac81e580-e1e4-4170-9cd7-a4965d001139',
  date: 'Sat, 16 Jan 2016 06:15:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '888395dc-f3bc-46e7-ae94-f497aad80c57',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': 'f4c04487-b5da-4655-a871-0aa048a3bb59',
  'x-ms-routing-request-id': 'WESTUS:20160116T061604Z:f4c04487-b5da-4655-a871-0aa048a3bb59',
  date: 'Sat, 16 Jan 2016 06:16:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '888395dc-f3bc-46e7-ae94-f497aad80c57',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14964',
  'x-ms-correlation-request-id': 'f4c04487-b5da-4655-a871-0aa048a3bb59',
  'x-ms-routing-request-id': 'WESTUS:20160116T061604Z:f4c04487-b5da-4655-a871-0aa048a3bb59',
  date: 'Sat, 16 Jan 2016 06:16:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'a15ba06c-07b2-402e-9cd0-9cc9ae47b70b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'a87d0944-72d9-4355-8418-de9a771f5662',
  'x-ms-routing-request-id': 'WESTUS:20160116T061635Z:a87d0944-72d9-4355-8418-de9a771f5662',
  date: 'Sat, 16 Jan 2016 06:16:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'a15ba06c-07b2-402e-9cd0-9cc9ae47b70b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'a87d0944-72d9-4355-8418-de9a771f5662',
  'x-ms-routing-request-id': 'WESTUS:20160116T061635Z:a87d0944-72d9-4355-8418-de9a771f5662',
  date: 'Sat, 16 Jan 2016 06:16:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'd89cfef5-1a13-40e1-9293-c843eaffb443',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': '5cd01b6b-cb44-48df-84cc-81a4c2b7cd02',
  'x-ms-routing-request-id': 'WESTUS:20160116T061706Z:5cd01b6b-cb44-48df-84cc-81a4c2b7cd02',
  date: 'Sat, 16 Jan 2016 06:17:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'd89cfef5-1a13-40e1-9293-c843eaffb443',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': '5cd01b6b-cb44-48df-84cc-81a4c2b7cd02',
  'x-ms-routing-request-id': 'WESTUS:20160116T061706Z:5cd01b6b-cb44-48df-84cc-81a4c2b7cd02',
  date: 'Sat, 16 Jan 2016 06:17:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '5bdec9a0-129e-4ff3-b5b8-ce35631e56e0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '950e2e8a-fa9e-4aec-b2c2-7eade794de23',
  'x-ms-routing-request-id': 'WESTUS:20160116T061737Z:950e2e8a-fa9e-4aec-b2c2-7eade794de23',
  date: 'Sat, 16 Jan 2016 06:17:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '5bdec9a0-129e-4ff3-b5b8-ce35631e56e0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '950e2e8a-fa9e-4aec-b2c2-7eade794de23',
  'x-ms-routing-request-id': 'WESTUS:20160116T061737Z:950e2e8a-fa9e-4aec-b2c2-7eade794de23',
  date: 'Sat, 16 Jan 2016 06:17:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\",\r\n  \"endTime\": \"2016-01-16T06:17:44.4321942+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'c9681d19-4a9c-4802-a367-710bc73604ec',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': 'f14afc4e-b87b-412a-9fcd-adb4d60d1b34',
  'x-ms-routing-request-id': 'WESTUS:20160116T061809Z:f14afc4e-b87b-412a-9fcd-adb4d60d1b34',
  date: 'Sat, 16 Jan 2016 06:18:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a13e35db-c531-42ac-87b8-aa48050e6014?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a13e35db-c531-42ac-87b8-aa48050e6014\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-16T06:15:31.2412966+00:00\",\r\n  \"endTime\": \"2016-01-16T06:17:44.4321942+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'c9681d19-4a9c-4802-a367-710bc73604ec',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': 'f14afc4e-b87b-412a-9fcd-adb4d60d1b34',
  'x-ms-routing-request-id': 'WESTUS:20160116T061809Z:f14afc4e-b87b-412a-9fcd-adb4d60d1b34',
  date: 'Sat, 16 Jan 2016 06:18:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate7027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '776aab86-62d5-4738-828f-6084a368b9c4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'b887d394-2ff9-4751-9e70-e0a0f4590ad7',
  'x-ms-routing-request-id': 'WESTUS:20160116T061810Z:b887d394-2ff9-4751-9e70-e0a0f4590ad7',
  date: 'Sat, 16 Jan 2016 06:18:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate7027/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '776aab86-62d5-4738-828f-6084a368b9c4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'b887d394-2ff9-4751-9e70-e0a0f4590ad7',
  'x-ms-routing-request-id': 'WESTUS:20160116T061810Z:b887d394-2ff9-4751-9e70-e0a0f4590ad7',
  date: 'Sat, 16 Jan 2016 06:18:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '086273d3-ea1e-46bd-b595-c975dded5b42',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '69f35692-6dff-4983-b5b2-4fbccd93fc89',
  'x-ms-routing-request-id': 'WESTUS:20160116T061841Z:69f35692-6dff-4983-b5b2-4fbccd93fc89',
  date: 'Sat, 16 Jan 2016 06:18:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '086273d3-ea1e-46bd-b595-c975dded5b42',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '69f35692-6dff-4983-b5b2-4fbccd93fc89',
  'x-ms-routing-request-id': 'WESTUS:20160116T061841Z:69f35692-6dff-4983-b5b2-4fbccd93fc89',
  date: 'Sat, 16 Jan 2016 06:18:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'f02d2a0d-d471-4688-b3ef-df1172fe1269',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '6b8c7c26-7934-4e09-888a-adb6228db466',
  'x-ms-routing-request-id': 'WESTUS:20160116T061912Z:6b8c7c26-7934-4e09-888a-adb6228db466',
  date: 'Sat, 16 Jan 2016 06:19:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'f02d2a0d-d471-4688-b3ef-df1172fe1269',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '6b8c7c26-7934-4e09-888a-adb6228db466',
  'x-ms-routing-request-id': 'WESTUS:20160116T061912Z:6b8c7c26-7934-4e09-888a-adb6228db466',
  date: 'Sat, 16 Jan 2016 06:19:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '5ca415c1-8195-4e9c-94df-52c60d581831',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '4bb983f6-4d34-4ee0-961b-36ae5e2895f1',
  'x-ms-routing-request-id': 'WESTUS:20160116T061944Z:4bb983f6-4d34-4ee0-961b-36ae5e2895f1',
  date: 'Sat, 16 Jan 2016 06:19:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '5ca415c1-8195-4e9c-94df-52c60d581831',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '4bb983f6-4d34-4ee0-961b-36ae5e2895f1',
  'x-ms-routing-request-id': 'WESTUS:20160116T061944Z:4bb983f6-4d34-4ee0-961b-36ae5e2895f1',
  date: 'Sat, 16 Jan 2016 06:19:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '0b59e5c3-ae6d-418d-92b4-1d39b9c639ad',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'acdc23c0-d54d-4ce9-b78a-0d5b252bcfa4',
  'x-ms-routing-request-id': 'WESTUS:20160116T062015Z:acdc23c0-d54d-4ce9-b78a-0d5b252bcfa4',
  date: 'Sat, 16 Jan 2016 06:20:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '0b59e5c3-ae6d-418d-92b4-1d39b9c639ad',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'acdc23c0-d54d-4ce9-b78a-0d5b252bcfa4',
  'x-ms-routing-request-id': 'WESTUS:20160116T062015Z:acdc23c0-d54d-4ce9-b78a-0d5b252bcfa4',
  date: 'Sat, 16 Jan 2016 06:20:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'efbb33f2-af83-4655-aa24-322d96be5e06',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '75ed7df7-966c-4358-9b7e-7d8a4c2a1ceb',
  'x-ms-routing-request-id': 'WESTUS:20160116T062045Z:75ed7df7-966c-4358-9b7e-7d8a4c2a1ceb',
  date: 'Sat, 16 Jan 2016 06:20:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'efbb33f2-af83-4655-aa24-322d96be5e06',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '75ed7df7-966c-4358-9b7e-7d8a4c2a1ceb',
  'x-ms-routing-request-id': 'WESTUS:20160116T062045Z:75ed7df7-966c-4358-9b7e-7d8a4c2a1ceb',
  date: 'Sat, 16 Jan 2016 06:20:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\",\r\n  \"endTime\": \"2016-01-16T06:21:11.8437366+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'f0c655a8-ab99-4f3c-8557-b70353bc3f0c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': 'f2a9ed6c-78b6-4202-a3d4-095ff5c90698',
  'x-ms-routing-request-id': 'WESTUS:20160116T062117Z:f2a9ed6c-78b6-4202-a3d4-095ff5c90698',
  date: 'Sat, 16 Jan 2016 06:21:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/776aab86-62d5-4738-828f-6084a368b9c4?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"776aab86-62d5-4738-828f-6084a368b9c4\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-16T06:18:07.8389996+00:00\",\r\n  \"endTime\": \"2016-01-16T06:21:11.8437366+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'f0c655a8-ab99-4f3c-8557-b70353bc3f0c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': 'f2a9ed6c-78b6-4202-a3d4-095ff5c90698',
  'x-ms-routing-request-id': 'WESTUS:20160116T062117Z:f2a9ed6c-78b6-4202-a3d4-095ff5c90698',
  date: 'Sat, 16 Jan 2016 06:21:17 GMT',
  connection: 'close' });
 return result; }]];