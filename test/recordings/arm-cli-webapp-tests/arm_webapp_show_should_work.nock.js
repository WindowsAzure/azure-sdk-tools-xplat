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
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083\",\"name\":\"webappclitests2083\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests2083\",\"state\":\"Running\",\"hostNames\":[\"webappclitests2083.azurewebsites.net\"],\"webSpace\":\"testrg18598-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-069.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg18598-WestUSwebspace/sites/webappclitests2083\",\"repositorySiteName\":\"webappclitests2083\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests2083.azurewebsites.net\",\"webappclitests2083.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests2083.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests2083.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests2105\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-16T21:23:15.98\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests2083\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.93.224.99,13.93.229.16,13.93.230.177,13.93.226.129\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-069\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg18598\",\"defaultHostName\":\"webappclitests2083.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2515',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D227F382102CC0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '02b2f74d-ab34-40be-b516-cb08a9279220',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '8363c51c-8345-40ce-adeb-5ea8100f4770',
  'x-ms-routing-request-id': 'WESTUS2:20161016T212318Z:8363c51c-8345-40ce-adeb-5ea8100f4770',
  date: 'Sun, 16 Oct 2016 21:23:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/sites/webappclitests2083\",\"name\":\"webappclitests2083\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests2083\",\"state\":\"Running\",\"hostNames\":[\"webappclitests2083.azurewebsites.net\"],\"webSpace\":\"testrg18598-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-069.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg18598-WestUSwebspace/sites/webappclitests2083\",\"repositorySiteName\":\"webappclitests2083\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests2083.azurewebsites.net\",\"webappclitests2083.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests2083.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests2083.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18598/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests2105\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-16T21:23:15.98\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests2083\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"13.93.224.99,13.93.229.16,13.93.230.177,13.93.226.129\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-069\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg18598\",\"defaultHostName\":\"webappclitests2083.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2515',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D227F382102CC0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '02b2f74d-ab34-40be-b516-cb08a9279220',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '8363c51c-8345-40ce-adeb-5ea8100f4770',
  'x-ms-routing-request-id': 'WESTUS2:20161016T212318Z:8363c51c-8345-40ce-adeb-5ea8100f4770',
  date: 'Sun, 16 Oct 2016 21:23:17 GMT',
  connection: 'close' });
 return result; }]];