// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"DOCKER_REGISTRY_SERVER_USERNAME\":\"MyUsername\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '346',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1e35e959-02ed-4813-a5b4-22e9710b1302',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '3a064c39-8c08-4082-b865-d0fb0b5db3af',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212340Z:3a064c39-8c08-4082-b865-d0fb0b5db3af',
  date: 'Sun, 16 Oct 2016 21:23:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"DOCKER_REGISTRY_SERVER_USERNAME\":\"MyUsername\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '346',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1e35e959-02ed-4813-a5b4-22e9710b1302',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '3a064c39-8c08-4082-b865-d0fb0b5db3af',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212340Z:3a064c39-8c08-4082-b865-d0fb0b5db3af',
  date: 'Sun, 16 Oct 2016 21:23:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083\",\"name\":\"webappclitests2083\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests2083\",\"state\":\"Running\",\"hostNames\":[\"webappclitests2083.azurewebsites.net\"],\"webSpace\":\"testrg18598-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-069.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg18598-WestUSwebspace/sites/webappclitests2083\",\"repositorySiteName\":\"webappclitests2083\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests2083.azurewebsites.net\",\"webappclitests2083.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests2083.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests2083.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests2105\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-16T21:23:38.6033333\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests2083\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.93.224.99,13.93.229.16,13.93.230.177,13.93.226.129\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-069\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg18598\",\"defaultHostName\":\"webappclitests2083.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2520',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D227F38F8C38B5"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '52de20b5-fec4-4212-86b8-a8592bc194e6',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8a3a1695-d2e2-4a5e-bace-7bd3263c6e9f',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212340Z:8a3a1695-d2e2-4a5e-bace-7bd3263c6e9f',
  date: 'Sun, 16 Oct 2016 21:23:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083\",\"name\":\"webappclitests2083\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests2083\",\"state\":\"Running\",\"hostNames\":[\"webappclitests2083.azurewebsites.net\"],\"webSpace\":\"testrg18598-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-069.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg18598-WestUSwebspace/sites/webappclitests2083\",\"repositorySiteName\":\"webappclitests2083\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests2083.azurewebsites.net\",\"webappclitests2083.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests2083.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests2083.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests2105\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-16T21:23:38.6033333\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests2083\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.93.224.99,13.93.229.16,13.93.230.177,13.93.226.129\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-069\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg18598\",\"defaultHostName\":\"webappclitests2083.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2520',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D227F38F8C38B5"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '52de20b5-fec4-4212-86b8-a8592bc194e6',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8a3a1695-d2e2-4a5e-bace-7bd3263c6e9f',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212340Z:8a3a1695-d2e2-4a5e-bace-7bd3263c6e9f',
  date: 'Sun, 16 Oct 2016 21:23:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd2ba7c3f-c254-4ffc-9f06-f2f99a7cb35f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ce8b4757-2723-451f-87f3-ad8f7c777457',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212341Z:ce8b4757-2723-451f-87f3-ad8f7c777457',
  date: 'Sun, 16 Oct 2016 21:23:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd2ba7c3f-c254-4ffc-9f06-f2f99a7cb35f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ce8b4757-2723-451f-87f3-ad8f7c777457',
  'x-ms-routing-request-id': 'CENTRALUS:20161016T212341Z:ce8b4757-2723-451f-87f3-ad8f7c777457',
  date: 'Sun, 16 Oct 2016 21:23:41 GMT',
  connection: 'close' });
 return result; }]];