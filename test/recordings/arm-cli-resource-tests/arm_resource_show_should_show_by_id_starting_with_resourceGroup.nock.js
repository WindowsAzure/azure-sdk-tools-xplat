// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd05f4e58-b80d-4ebd-a6d7-c9cac216cd39',
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource5033' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'd3a756d3-7d10-4db3-ab54-6097b6fcd536',
  'x-ms-correlation-request-id': 'd3a756d3-7d10-4db3-ab54-6097b6fcd536',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185111Z:d3a756d3-7d10-4db3-ab54-6097b6fcd536',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:11 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource5033' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'd3a756d3-7d10-4db3-ab54-6097b6fcd536',
  'x-ms-correlation-request-id': 'd3a756d3-7d10-4db3-ab54-6097b6fcd536',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185111Z:d3a756d3-7d10-4db3-ab54-6097b6fcd536',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:11 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource5033\",\"name\":\"xTestResource5033\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ab19f56a-30e0-44bf-bbe6-62147a155a20',
  'x-ms-correlation-request-id': 'ab19f56a-30e0-44bf-bbe6-62147a155a20',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185112Z:ab19f56a-30e0-44bf-bbe6-62147a155a20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource5033\",\"name\":\"xTestResource5033\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ab19f56a-30e0-44bf-bbe6-62147a155a20',
  'x-ms-correlation-request-id': 'ab19f56a-30e0-44bf-bbe6-62147a155a20',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185112Z:ab19f56a-30e0-44bf-bbe6-62147a155a20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes3290' under resource group 'xTestResource5033' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9c72dbd2-accf-4037-8736-a34d7777cd0a',
  'x-ms-correlation-request-id': '9c72dbd2-accf-4037-8736-a34d7777cd0a',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185113Z:9c72dbd2-accf-4037-8736-a34d7777cd0a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:13 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes3290' under resource group 'xTestResource5033' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9c72dbd2-accf-4037-8736-a34d7777cd0a',
  'x-ms-correlation-request-id': '9c72dbd2-accf-4037-8736-a34d7777cd0a',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185113Z:9c72dbd2-accf-4037-8736-a34d7777cd0a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:13 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290\",\"name\":\"xTestGrpRes3290\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3290\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3290.azurewebsites.net\"],\"webSpace\":\"xTestResource5033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-045.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource5033-SouthCentralUSwebspace/sites/xTestGrpRes3290\",\"repositorySiteName\":\"xTestGrpRes3290\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3290.azurewebsites.net\",\"xtestgrpres3290.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3290.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3290.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-29T18:51:19.687\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3290\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.85.77.179,13.85.74.156,13.66.58.227,13.84.220.20,13.66.62.231\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-045\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource5033\",\"defaultHostName\":\"xtestgrpres3290.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2346',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6d1610b7-cf20-47fe-b270-db27d9a13f84',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2c2282ef-5256-42c6-b8ce-5c42a39a0f85',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185128Z:2c2282ef-5256-42c6-b8ce-5c42a39a0f85',
  date: 'Mon, 29 Aug 2016 18:51:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290\",\"name\":\"xTestGrpRes3290\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3290\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3290.azurewebsites.net\"],\"webSpace\":\"xTestResource5033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-045.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource5033-SouthCentralUSwebspace/sites/xTestGrpRes3290\",\"repositorySiteName\":\"xTestGrpRes3290\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3290.azurewebsites.net\",\"xtestgrpres3290.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3290.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3290.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-29T18:51:19.687\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3290\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.85.77.179,13.85.74.156,13.66.58.227,13.84.220.20,13.66.62.231\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-045\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource5033\",\"defaultHostName\":\"xtestgrpres3290.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2346',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6d1610b7-cf20-47fe-b270-db27d9a13f84',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2c2282ef-5256-42c6-b8ce-5c42a39a0f85',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185128Z:2c2282ef-5256-42c6-b8ce-5c42a39a0f85',
  date: 'Mon, 29 Aug 2016 18:51:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290\",\"name\":\"xTestGrpRes3290\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3290\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3290.azurewebsites.net\"],\"webSpace\":\"xTestResource5033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-045.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource5033-SouthCentralUSwebspace/sites/xTestGrpRes3290\",\"repositorySiteName\":\"xTestGrpRes3290\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3290.azurewebsites.net\",\"xtestgrpres3290.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3290.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3290.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-29T18:51:20.137\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3290\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.85.77.179,13.85.74.156,13.66.58.227,13.84.220.20,13.66.62.231\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-045\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource5033\",\"defaultHostName\":\"xtestgrpres3290.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2346',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D2022654C4EB90"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dc80e8ac-f112-456f-ade9-8ac2bdff0bcc',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '64c428ab-45f8-4f38-9eab-338d35c07fc4',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185129Z:64c428ab-45f8-4f38-9eab-338d35c07fc4',
  date: 'Mon, 29 Aug 2016 18:51:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource5033/providers/Microsoft.Web/sites/xTestGrpRes3290\",\"name\":\"xTestGrpRes3290\",\"type\":\"Microsoft.Web/sites\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes3290\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres3290.azurewebsites.net\"],\"webSpace\":\"xTestResource5033-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-045.api.azurewebsites.windows.net:454/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/webspaces/xTestResource5033-SouthCentralUSwebspace/sites/xTestGrpRes3290\",\"repositorySiteName\":\"xTestGrpRes3290\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres3290.azurewebsites.net\",\"xtestgrpres3290.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres3290.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres3290.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-29T18:51:20.137\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes3290\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.85.77.179,13.85.74.156,13.66.58.227,13.84.220.20,13.66.62.231\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-sn1-045\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource5033\",\"defaultHostName\":\"xtestgrpres3290.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2346',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D2022654C4EB90"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dc80e8ac-f112-456f-ade9-8ac2bdff0bcc',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '64c428ab-45f8-4f38-9eab-338d35c07fc4',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185129Z:64c428ab-45f8-4f38-9eab-338d35c07fc4',
  date: 'Mon, 29 Aug 2016 18:51:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web//sites/xTestGrpRes3290/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b009c136-9a10-456d-b16f-372014913fad',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'df43d118-fe01-4921-8414-d9bc3f204c4d',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185130Z:df43d118-fe01-4921-8414-d9bc3f204c4d',
  date: 'Mon, 29 Aug 2016 18:51:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033/providers/Microsoft.Web//sites/xTestGrpRes3290/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b009c136-9a10-456d-b16f-372014913fad',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'df43d118-fe01-4921-8414-d9bc3f204c4d',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185130Z:df43d118-fe01-4921-8414-d9bc3f204c4d',
  date: 'Mon, 29 Aug 2016 18:51:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '40931c0c-bf84-452f-b8ee-cd1fdc9f9f00',
  'x-ms-correlation-request-id': '40931c0c-bf84-452f-b8ee-cd1fdc9f9f00',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185131Z:40931c0c-bf84-452f-b8ee-cd1fdc9f9f00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource5033?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '40931c0c-bf84-452f-b8ee-cd1fdc9f9f00',
  'x-ms-correlation-request-id': '40931c0c-bf84-452f-b8ee-cd1fdc9f9f00',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185131Z:40931c0c-bf84-452f-b8ee-cd1fdc9f9f00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:51:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '342be712-cf68-44a0-93f2-cc0acd9bfb96',
  'x-ms-correlation-request-id': '342be712-cf68-44a0-93f2-cc0acd9bfb96',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185201Z:342be712-cf68-44a0-93f2-cc0acd9bfb96',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:52:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '342be712-cf68-44a0-93f2-cc0acd9bfb96',
  'x-ms-correlation-request-id': '342be712-cf68-44a0-93f2-cc0acd9bfb96',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185201Z:342be712-cf68-44a0-93f2-cc0acd9bfb96',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:52:00 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'b3ea6719-9b5c-4b02-9379-e1a74e663fb2',
  'x-ms-correlation-request-id': 'b3ea6719-9b5c-4b02-9379-e1a74e663fb2',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185231Z:b3ea6719-9b5c-4b02-9379-e1a74e663fb2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:52:31 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'b3ea6719-9b5c-4b02-9379-e1a74e663fb2',
  'x-ms-correlation-request-id': 'b3ea6719-9b5c-4b02-9379-e1a74e663fb2',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185231Z:b3ea6719-9b5c-4b02-9379-e1a74e663fb2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:52:31 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '6c442c2c-a5d4-43cd-b92f-f6801eb67d6d',
  'x-ms-correlation-request-id': '6c442c2c-a5d4-43cd-b92f-f6801eb67d6d',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185302Z:6c442c2c-a5d4-43cd-b92f-f6801eb67d6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:53:01 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '6c442c2c-a5d4-43cd-b92f-f6801eb67d6d',
  'x-ms-correlation-request-id': '6c442c2c-a5d4-43cd-b92f-f6801eb67d6d',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185302Z:6c442c2c-a5d4-43cd-b92f-f6801eb67d6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:53:01 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '5dd3c64f-9c72-4c8d-9f15-094393b68466',
  'x-ms-correlation-request-id': '5dd3c64f-9c72-4c8d-9f15-094393b68466',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185332Z:5dd3c64f-9c72-4c8d-9f15-094393b68466',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:53:32 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNTAzMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '5dd3c64f-9c72-4c8d-9f15-094393b68466',
  'x-ms-correlation-request-id': '5dd3c64f-9c72-4c8d-9f15-094393b68466',
  'x-ms-routing-request-id': 'CENTRALUS:20160829T185332Z:5dd3c64f-9c72-4c8d-9f15-094393b68466',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Aug 2016 18:53:32 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource5033','xTestGrpRes3290'];};