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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5940/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'c7746c45-aa1c-468f-85ae-ed11c5b00941',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7bcb0546-614e-4802-86a3-1b90592924b0',
  'x-ms-routing-request-id': 'WESTUS:20160116T044444Z:7bcb0546-614e-4802-86a3-1b90592924b0',
  date: 'Sat, 16 Jan 2016 04:44:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate5940/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': 'c7746c45-aa1c-468f-85ae-ed11c5b00941',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7bcb0546-614e-4802-86a3-1b90592924b0',
  'x-ms-routing-request-id': 'WESTUS:20160116T044444Z:7bcb0546-614e-4802-86a3-1b90592924b0',
  date: 'Sat, 16 Jan 2016 04:44:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '86b6c88f-0954-4a51-9e99-1fc350a66106',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c0c965fe-3810-48fe-9444-5dce27600b46',
  'x-ms-routing-request-id': 'WESTUS:20160116T044514Z:c0c965fe-3810-48fe-9444-5dce27600b46',
  date: 'Sat, 16 Jan 2016 04:45:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '86b6c88f-0954-4a51-9e99-1fc350a66106',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c0c965fe-3810-48fe-9444-5dce27600b46',
  'x-ms-routing-request-id': 'WESTUS:20160116T044514Z:c0c965fe-3810-48fe-9444-5dce27600b46',
  date: 'Sat, 16 Jan 2016 04:45:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '2861747c-143c-4ebc-b20b-9fa2071522ef',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c9602ea4-19ad-425b-84a6-fb987e9f723d',
  'x-ms-routing-request-id': 'WESTUS:20160116T044545Z:c9602ea4-19ad-425b-84a6-fb987e9f723d',
  date: 'Sat, 16 Jan 2016 04:45:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '2861747c-143c-4ebc-b20b-9fa2071522ef',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c9602ea4-19ad-425b-84a6-fb987e9f723d',
  'x-ms-routing-request-id': 'WESTUS:20160116T044545Z:c9602ea4-19ad-425b-84a6-fb987e9f723d',
  date: 'Sat, 16 Jan 2016 04:45:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '23ed2cc0-a947-4f1b-9e66-af18cb8a5bc5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '6e2483ae-ae8d-4f2f-b496-24fb9aff0d34',
  'x-ms-routing-request-id': 'WESTUS:20160116T044616Z:6e2483ae-ae8d-4f2f-b496-24fb9aff0d34',
  date: 'Sat, 16 Jan 2016 04:46:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '23ed2cc0-a947-4f1b-9e66-af18cb8a5bc5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '6e2483ae-ae8d-4f2f-b496-24fb9aff0d34',
  'x-ms-routing-request-id': 'WESTUS:20160116T044616Z:6e2483ae-ae8d-4f2f-b496-24fb9aff0d34',
  date: 'Sat, 16 Jan 2016 04:46:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\",\r\n  \"endTime\": \"2016-01-16T04:46:25.7879196+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '84fc6c76-9bd9-4866-a4fc-b83a20f45dd4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4a5eff21-a512-493b-9183-41303c5654df',
  'x-ms-routing-request-id': 'WESTUS:20160116T044647Z:4a5eff21-a512-493b-9183-41303c5654df',
  date: 'Sat, 16 Jan 2016 04:46:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7746c45-aa1c-468f-85ae-ed11c5b00941?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"c7746c45-aa1c-468f-85ae-ed11c5b00941\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-01-16T04:44:41.0658296+00:00\",\r\n  \"endTime\": \"2016-01-16T04:46:25.7879196+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130936865996171702',
  'x-ms-request-id': '84fc6c76-9bd9-4866-a4fc-b83a20f45dd4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4a5eff21-a512-493b-9183-41303c5654df',
  'x-ms-routing-request-id': 'WESTUS:20160116T044647Z:4a5eff21-a512-493b-9183-41303c5654df',
  date: 'Sat, 16 Jan 2016 04:46:47 GMT',
  connection: 'close' });
 return result; }]];