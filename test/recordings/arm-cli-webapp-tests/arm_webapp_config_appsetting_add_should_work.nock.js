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
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6053d244-b7ab-44cd-8dd4-2aa23927878c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '8bd87b95-f2a2-4fce-8e84-b751170874c8',
  'x-ms-routing-request-id': 'WESTUS2:20160912T235804Z:8bd87b95-f2a2-4fce-8e84-b751170874c8',
  date: 'Mon, 12 Sep 2016 23:58:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6053d244-b7ab-44cd-8dd4-2aa23927878c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '8bd87b95-f2a2-4fce-8e84-b751170874c8',
  'x-ms-routing-request-id': 'WESTUS2:20160912T235804Z:8bd87b95-f2a2-4fce-8e84-b751170874c8',
  date: 'Mon, 12 Sep 2016 23:58:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951\",\"name\":\"webappclitests1951\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests1951\",\"state\":\"Running\",\"hostNames\":[\"webappclitests1951.azurewebsites.net\"],\"webSpace\":\"testrg18956-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-051.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg18956-WestUSwebspace/sites/webappclitests1951\",\"repositorySiteName\":\"webappclitests1951\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests1951.azurewebsites.net\",\"webappclitests1951.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests1951.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests1951.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests272\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-09-12T23:58:03.473\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests1951\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.78.17.157,40.78.21.191,40.78.22.38,40.78.21.180\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-051\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg18956\",\"defaultHostName\":\"webappclitests1951.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2512',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20D517FCBA410"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '668ac158-8fab-4426-96d9-474c2e7c02ff',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '687ebb84-2723-4b44-9b90-bb1c82e45caf',
  'x-ms-routing-request-id': 'WESTUS2:20160912T235805Z:687ebb84-2723-4b44-9b90-bb1c82e45caf',
  date: 'Mon, 12 Sep 2016 23:58:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951\",\"name\":\"webappclitests1951\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests1951\",\"state\":\"Running\",\"hostNames\":[\"webappclitests1951.azurewebsites.net\"],\"webSpace\":\"testrg18956-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-051.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg18956-WestUSwebspace/sites/webappclitests1951\",\"repositorySiteName\":\"webappclitests1951\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests1951.azurewebsites.net\",\"webappclitests1951.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests1951.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests1951.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests272\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-09-12T23:58:03.473\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests1951\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"40.78.17.157,40.78.21.191,40.78.22.38,40.78.21.180\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-051\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg18956\",\"defaultHostName\":\"webappclitests1951.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2512',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20D517FCBA410"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '668ac158-8fab-4426-96d9-474c2e7c02ff',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '687ebb84-2723-4b44-9b90-bb1c82e45caf',
  'x-ms-routing-request-id': 'WESTUS2:20160912T235805Z:687ebb84-2723-4b44-9b90-bb1c82e45caf',
  date: 'Mon, 12 Sep 2016 23:58:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey17102\":\"testval15190\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0bd40c89-de21-4967-9ad7-c51e92921a7b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f2f8abaa-6316-407f-923e-e2828360d589',
  'x-ms-routing-request-id': 'WESTUS2:20160912T235807Z:f2f8abaa-6316-407f-923e-e2828360d589',
  date: 'Mon, 12 Sep 2016 23:58:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18956/providers/Microsoft.Web/sites/webappclitests1951/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey17102\":\"testval15190\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0bd40c89-de21-4967-9ad7-c51e92921a7b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f2f8abaa-6316-407f-923e-e2828360d589',
  'x-ms-routing-request-id': 'WESTUS2:20160912T235807Z:f2f8abaa-6316-407f-923e-e2828360d589',
  date: 'Mon, 12 Sep 2016 23:58:06 GMT',
  connection: 'close' });
 return result; }]];