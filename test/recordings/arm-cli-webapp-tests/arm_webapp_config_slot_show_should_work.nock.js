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
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/web?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/web\",\"name\":\"webappclitests5275\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"5.4\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":\"VS2012\",\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests5275__slotTest\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":{\"triggers\":null,\"actions\":null},\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2372',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '24426fe7-c0ff-47e1-9312-0316a861a495',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '3d47493c-c115-4847-81a8-7c96decb0ea3',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210932Z:3d47493c-c115-4847-81a8-7c96decb0ea3',
  date: 'Thu, 20 Oct 2016 21:09:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/web?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/web\",\"name\":\"webappclitests5275\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"5.4\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":\"VS2012\",\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests5275__slotTest\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":{\"triggers\":null,\"actions\":null},\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2372',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '24426fe7-c0ff-47e1-9312-0316a861a495',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '3d47493c-c115-4847-81a8-7c96decb0ea3',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210932Z:3d47493c-c115-4847-81a8-7c96decb0ea3',
  date: 'Thu, 20 Oct 2016 21:09:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/publishingcredentials/$webappclitests5275__slotTest\",\"name\":\"webappclitests5275\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests5275__slotTest\",\"publishingPassword\":\"1bYdJXznl5Nl9rW6gsP50Ay1GXlo8MkZrlfwKhLygHrepYoEpE6QluLHdmHN\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests5275__slotTest:1bYdJXznl5Nl9rW6gsP50Ay1GXlo8MkZrlfwKhLygHrepYoEpE6QluLHdmHN@webappclitests5275-slotTest.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '737',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '218f3811-7eaa-41be-b64d-1ce176d2b64c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5e61f2ac-e1c3-494a-9a0e-1a910e7f8cc1',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210933Z:5e61f2ac-e1c3-494a-9a0e-1a910e7f8cc1',
  date: 'Thu, 20 Oct 2016 21:09:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/publishingcredentials/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/publishingcredentials/$webappclitests5275__slotTest\",\"name\":\"webappclitests5275\",\"type\":\"Microsoft.Web/sites/publishingcredentials\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":null,\"publishingUserName\":\"$webappclitests5275__slotTest\",\"publishingPassword\":\"1bYdJXznl5Nl9rW6gsP50Ay1GXlo8MkZrlfwKhLygHrepYoEpE6QluLHdmHN\",\"publishingPasswordHash\":null,\"publishingPasswordHashSalt\":null,\"metadata\":null,\"isDeleted\":false,\"scmUri\":\"https://$webappclitests5275__slotTest:1bYdJXznl5Nl9rW6gsP50Ay1GXlo8MkZrlfwKhLygHrepYoEpE6QluLHdmHN@webappclitests5275-slotTest.scm.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '737',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '218f3811-7eaa-41be-b64d-1ce176d2b64c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5e61f2ac-e1c3-494a-9a0e-1a910e7f8cc1',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210933Z:5e61f2ac-e1c3-494a-9a0e-1a910e7f8cc1',
  date: 'Thu, 20 Oct 2016 21:09:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5f2f0f6d-28aa-4bbf-8ef1-7462a33fc430',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '23c5a93a-91d3-4cb8-9644-083ca9df17ff',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210933Z:23c5a93a-91d3-4cb8-9644-083ca9df17ff',
  date: 'Thu, 20 Oct 2016 21:09:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5f2f0f6d-28aa-4bbf-8ef1-7462a33fc430',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '23c5a93a-91d3-4cb8-9644-083ca9df17ff',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210933Z:23c5a93a-91d3-4cb8-9644-083ca9df17ff',
  date: 'Thu, 20 Oct 2016 21:09:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest\",\"name\":\"webappclitests5275/slotTest\",\"type\":\"Microsoft.Web/sites/slots\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests5275(slotTest)\",\"state\":\"Running\",\"hostNames\":[\"webappclitests5275-slottest.azurewebsites.net\"],\"webSpace\":\"testrg15042-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-067.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg15042-WestUSwebspace/sites/webappclitests5275\",\"repositorySiteName\":\"webappclitests5275\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests5275-slottest.azurewebsites.net\",\"webappclitests5275-slottest.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests5275-slottest.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests5275-slottest.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests6340\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-20T21:09:22.1266667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests5275__3d1b\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"23.99.58.14,23.99.60.163,23.99.57.5,23.99.60.173\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-067\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg15042\",\"defaultHostName\":\"webappclitests5275-slottest.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2618',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D22B163AB340EB"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6bb9183e-09c9-4efa-8788-f165df800c23',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2ea49aaa-cce4-46c3-b487-8f30502fb67d',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210934Z:2ea49aaa-cce4-46c3-b487-8f30502fb67d',
  date: 'Thu, 20 Oct 2016 21:09:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/sites/webappclitests5275/slots/slotTest\",\"name\":\"webappclitests5275/slotTest\",\"type\":\"Microsoft.Web/sites/slots\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests5275(slotTest)\",\"state\":\"Running\",\"hostNames\":[\"webappclitests5275-slottest.azurewebsites.net\"],\"webSpace\":\"testrg15042-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-067.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg15042-WestUSwebspace/sites/webappclitests5275\",\"repositorySiteName\":\"webappclitests5275\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests5275-slottest.azurewebsites.net\",\"webappclitests5275-slottest.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests5275-slottest.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests5275-slottest.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests6340\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-10-20T21:09:22.1266667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests5275__3d1b\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"23.99.58.14,23.99.60.163,23.99.57.5,23.99.60.173\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-067\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg15042\",\"defaultHostName\":\"webappclitests5275-slottest.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2618',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D22B163AB340EB"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6bb9183e-09c9-4efa-8788-f165df800c23',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2ea49aaa-cce4-46c3-b487-8f30502fb67d',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210934Z:2ea49aaa-cce4-46c3-b487-8f30502fb67d',
  date: 'Thu, 20 Oct 2016 21:09:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests6340?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests6340\",\"name\":\"arm-cli-webapp-tests6340\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"arm-cli-webapp-tests6340\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg15042-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":10,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":1,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg15042\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-067_2842\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"size\":\"S1\",\"family\":\"S\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1041',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7d5584b7-882e-4051-bbb0-a276d30e63ba',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'aa9b38b8-0b6c-4f53-8178-86409f77d173',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210935Z:aa9b38b8-0b6c-4f53-8178-86409f77d173',
  date: 'Thu, 20 Oct 2016 21:09:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests6340?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg15042/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests6340\",\"name\":\"arm-cli-webapp-tests6340\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"arm-cli-webapp-tests6340\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg15042-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":10,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":1,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg15042\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-067_2842\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"size\":\"S1\",\"family\":\"S\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1041',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7d5584b7-882e-4051-bbb0-a276d30e63ba',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'aa9b38b8-0b6c-4f53-8178-86409f77d173',
  'x-ms-routing-request-id': 'CENTRALUS:20161020T210935Z:aa9b38b8-0b6c-4f53-8178-86409f77d173',
  date: 'Thu, 20 Oct 2016 21:09:35 GMT',
  connection: 'close' });
 return result; }]];