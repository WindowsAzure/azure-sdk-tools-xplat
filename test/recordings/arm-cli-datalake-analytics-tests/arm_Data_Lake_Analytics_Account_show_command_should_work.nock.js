// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e0202030-53bc-4b19-9b94-e3a896ecc9c3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': 'd4e3a565-ce4b-4ec0-9789-060ccf28ee93',
  'x-ms-routing-request-id': 'WESTUS:20151107T010221Z:d4e3a565-ce4b-4ec0-9789-060ccf28ee93',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e0202030-53bc-4b19-9b94-e3a896ecc9c3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': 'd4e3a565-ce4b-4ec0-9789-060ccf28ee93',
  'x-ms-routing-request-id': 'WESTUS:20151107T010221Z:d4e3a565-ce4b-4ec0-9789-060ccf28ee93',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"copyservicetest.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-21T02:48:35.2085982Z\",\"lastModifiedTime\":\"2015-10-21T02:48:35.2085982Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/copyservicetest\",\"name\":\"copyservicetest\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs04a889c02bbf4050884338.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T13:02:37.4653664Z\",\"lastModifiedTime\":\"2015-10-26T13:02:37.4653664Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs04a889c02bbf4050884338\",\"name\":\"cs04a889c02bbf4050884338\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs1667ff1b34504973a03335.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-29T19:44:10.8802499Z\",\"lastModifiedTime\":\"2015-10-29T19:44:10.8802499Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs1667ff1b34504973a03335\",\"name\":\"cs1667ff1b34504973a03335\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs300c041ebdf84179903fbe.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T11:29:07.6089268Z\",\"lastModifiedTime\":\"2015-10-26T11:29:07.6089268Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs300c041ebdf84179903fbe\",\"name\":\"cs300c041ebdf84179903fbe\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs32a1b3e1b28149279715fe.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-30T01:37:59.9077605Z\",\"lastModifiedTime\":\"2015-10-30T01:37:59.9077605Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs32a1b3e1b28149279715fe\",\"name\":\"cs32a1b3e1b28149279715fe\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs495cce936b3441248d5874.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T07:35:59.8245136Z\",\"lastModifiedTime\":\"2015-10-26T07:35:59.8245136Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs495cce936b3441248d5874\",\"name\":\"cs495cce936b3441248d5874\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs63b6b91b670843febc5dbc.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T13:01:14.5038668Z\",\"lastModifiedTime\":\"2015-10-26T13:01:14.5038668Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs63b6b91b670843febc5dbc\",\"name\":\"cs63b6b91b670843febc5dbc\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs6b24bd02a80b419b935556.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T12:59:53.3163175Z\",\"lastModifiedTime\":\"2015-10-26T12:59:53.3163175Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs6b24bd02a80b419b935556\",\"name\":\"cs6b24bd02a80b419b935556\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs808f2d6d720a4338869cf0.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-27T05:54:39.9811606Z\",\"lastModifiedTime\":\"2015-10-27T05:54:39.9811606Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs808f2d6d720a4338869cf0\",\"name\":\"cs808f2d6d720a4338869cf0\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":\"2015-10-31T00:11:04.712258Z\",\"lastModifiedTime\":\"2015-10-31T00:11:04.712258Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs90c65bf28c084532877175\",\"name\":\"cs90c65bf28c084532877175\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"csd30745ad2cec442d89cce7.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-05T20:52:00.4561739Z\",\"lastModifiedTime\":\"2015-11-05T20:52:00.4561739Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/csd30745ad2cec442d89cce7\",\"name\":\"csd30745ad2cec442d89cce7\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cse51d17c03242489e915b69.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T07:39:42.0846481Z\",\"lastModifiedTime\":\"2015-10-26T07:39:42.0846481Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cse51d17c03242489e915b69\",\"name\":\"cse51d17c03242489e915b69\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"copyserviceprod.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-17T12:19:37.5708184Z\",\"lastModifiedTime\":\"2015-09-17T12:19:37.5708184Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyserviceresourceprod/providers/Microsoft.DataLakeAnalytics/accounts/copyserviceprod\",\"name\":\"copyserviceprod\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/Default-Storage-EastUS2/providers/Microsoft.DataLakeAnalytics/accounts/testcertmitigation\",\"name\":\"testcertmitigation\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"konaibizarunner1.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-24T08:09:24.8601971Z\",\"lastModifiedTime\":\"2015-09-24T08:09:24.8601971Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/ibizarunner/providers/Microsoft.DataLakeAnalytics/accounts/konaibizarunner1\",\"name\":\"konaibizarunner1\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"konaibizarunner2.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-24T08:10:06.4516006Z\",\"lastModifiedTime\":\"2015-09-24T08:10:06.4516006Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/ibizarunner/providers/Microsoft.DataLakeAnalytics/accounts/konaibizarunner2\",\"name\":\"konaibizarunner2\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"konaibizarunner3.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-24T08:11:19.5898309Z\",\"lastModifiedTime\":\"2015-09-24T08:11:19.5898309Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/ibizarunner/providers/Microsoft.DataLakeAnalytics/accounts/konaibizarunner3\",\"name\":\"konaibizarunner3\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testkaprod.azuredatalakeanalytics.net\",\"creationTime\":\"2015-06-15T06:54:14.7437003Z\",\"lastModifiedTime\":\"2015-06-16T01:06:04.4937755Z\"},\"location\":\"east us 2\",\"tags\":{\"owner\":\"jianyw\",\"description\":\"hello kona\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/konaprodgroup/providers/Microsoft.DataLakeAnalytics/accounts/testkaprod\",\"name\":\"testkaprod\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":\"2015-11-05T18:08:11.3054935Z\",\"lastModifiedTime\":\"2015-11-05T18:08:53.6834244Z\"},\"location\":\"East US 2\",\"tags\":{\"updatedKey\":\"updatedValue\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/rgaba15884/providers/Microsoft.DataLakeAnalytics/accounts/testaba12926\",\"name\":\"testaba12926\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":\"2015-11-05T17:56:20.2260922Z\",\"lastModifiedTime\":\"2015-11-05T17:57:02.9507995Z\"},\"location\":\"East US 2\",\"tags\":{\"updatedKey\":\"updatedValue\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/rgaba17200/providers/Microsoft.DataLakeAnalytics/accounts/testaba12021\",\"name\":\"testaba12021\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8245.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T00:59:16.0582472Z\",\"lastModifiedTime\":\"2015-11-07T00:59:16.0582472Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8245\",\"name\":\"xplattestadla8245\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '10725',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '254c8f5a-2752-4f81-b3e6-757239d98de3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '800227fc-796f-4b50-aefb-d854e7a97dbe',
  'x-ms-routing-request-id': 'WESTUS:20151107T010222Z:800227fc-796f-4b50-aefb-d854e7a97dbe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"copyservicetest.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-21T02:48:35.2085982Z\",\"lastModifiedTime\":\"2015-10-21T02:48:35.2085982Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/copyservicetest\",\"name\":\"copyservicetest\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs04a889c02bbf4050884338.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T13:02:37.4653664Z\",\"lastModifiedTime\":\"2015-10-26T13:02:37.4653664Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs04a889c02bbf4050884338\",\"name\":\"cs04a889c02bbf4050884338\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs1667ff1b34504973a03335.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-29T19:44:10.8802499Z\",\"lastModifiedTime\":\"2015-10-29T19:44:10.8802499Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs1667ff1b34504973a03335\",\"name\":\"cs1667ff1b34504973a03335\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs300c041ebdf84179903fbe.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T11:29:07.6089268Z\",\"lastModifiedTime\":\"2015-10-26T11:29:07.6089268Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs300c041ebdf84179903fbe\",\"name\":\"cs300c041ebdf84179903fbe\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs32a1b3e1b28149279715fe.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-30T01:37:59.9077605Z\",\"lastModifiedTime\":\"2015-10-30T01:37:59.9077605Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs32a1b3e1b28149279715fe\",\"name\":\"cs32a1b3e1b28149279715fe\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs495cce936b3441248d5874.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T07:35:59.8245136Z\",\"lastModifiedTime\":\"2015-10-26T07:35:59.8245136Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs495cce936b3441248d5874\",\"name\":\"cs495cce936b3441248d5874\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs63b6b91b670843febc5dbc.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T13:01:14.5038668Z\",\"lastModifiedTime\":\"2015-10-26T13:01:14.5038668Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs63b6b91b670843febc5dbc\",\"name\":\"cs63b6b91b670843febc5dbc\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs6b24bd02a80b419b935556.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T12:59:53.3163175Z\",\"lastModifiedTime\":\"2015-10-26T12:59:53.3163175Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs6b24bd02a80b419b935556\",\"name\":\"cs6b24bd02a80b419b935556\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cs808f2d6d720a4338869cf0.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-27T05:54:39.9811606Z\",\"lastModifiedTime\":\"2015-10-27T05:54:39.9811606Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs808f2d6d720a4338869cf0\",\"name\":\"cs808f2d6d720a4338869cf0\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":\"2015-10-31T00:11:04.712258Z\",\"lastModifiedTime\":\"2015-10-31T00:11:04.712258Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cs90c65bf28c084532877175\",\"name\":\"cs90c65bf28c084532877175\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"csd30745ad2cec442d89cce7.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-05T20:52:00.4561739Z\",\"lastModifiedTime\":\"2015-11-05T20:52:00.4561739Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/csd30745ad2cec442d89cce7\",\"name\":\"csd30745ad2cec442d89cce7\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"cse51d17c03242489e915b69.azuredatalakeanalytics.net\",\"creationTime\":\"2015-10-26T07:39:42.0846481Z\",\"lastModifiedTime\":\"2015-10-26T07:39:42.0846481Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyservicegroupprod/providers/Microsoft.DataLakeAnalytics/accounts/cse51d17c03242489e915b69\",\"name\":\"cse51d17c03242489e915b69\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"copyserviceprod.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-17T12:19:37.5708184Z\",\"lastModifiedTime\":\"2015-09-17T12:19:37.5708184Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/copyserviceresourceprod/providers/Microsoft.DataLakeAnalytics/accounts/copyserviceprod\",\"name\":\"copyserviceprod\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/Default-Storage-EastUS2/providers/Microsoft.DataLakeAnalytics/accounts/testcertmitigation\",\"name\":\"testcertmitigation\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"konaibizarunner1.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-24T08:09:24.8601971Z\",\"lastModifiedTime\":\"2015-09-24T08:09:24.8601971Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/ibizarunner/providers/Microsoft.DataLakeAnalytics/accounts/konaibizarunner1\",\"name\":\"konaibizarunner1\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"konaibizarunner2.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-24T08:10:06.4516006Z\",\"lastModifiedTime\":\"2015-09-24T08:10:06.4516006Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/ibizarunner/providers/Microsoft.DataLakeAnalytics/accounts/konaibizarunner2\",\"name\":\"konaibizarunner2\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"konaibizarunner3.azuredatalakeanalytics.net\",\"creationTime\":\"2015-09-24T08:11:19.5898309Z\",\"lastModifiedTime\":\"2015-09-24T08:11:19.5898309Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/ibizarunner/providers/Microsoft.DataLakeAnalytics/accounts/konaibizarunner3\",\"name\":\"konaibizarunner3\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testkaprod.azuredatalakeanalytics.net\",\"creationTime\":\"2015-06-15T06:54:14.7437003Z\",\"lastModifiedTime\":\"2015-06-16T01:06:04.4937755Z\"},\"location\":\"east us 2\",\"tags\":{\"owner\":\"jianyw\",\"description\":\"hello kona\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/konaprodgroup/providers/Microsoft.DataLakeAnalytics/accounts/testkaprod\",\"name\":\"testkaprod\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":\"2015-11-05T18:08:11.3054935Z\",\"lastModifiedTime\":\"2015-11-05T18:08:53.6834244Z\"},\"location\":\"East US 2\",\"tags\":{\"updatedKey\":\"updatedValue\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/rgaba15884/providers/Microsoft.DataLakeAnalytics/accounts/testaba12926\",\"name\":\"testaba12926\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Failed\",\"state\":null,\"endpoint\":null,\"creationTime\":\"2015-11-05T17:56:20.2260922Z\",\"lastModifiedTime\":\"2015-11-05T17:57:02.9507995Z\"},\"location\":\"East US 2\",\"tags\":{\"updatedKey\":\"updatedValue\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/rgaba17200/providers/Microsoft.DataLakeAnalytics/accounts/testaba12021\",\"name\":\"testaba12021\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8245.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T00:59:16.0582472Z\",\"lastModifiedTime\":\"2015-11-07T00:59:16.0582472Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8245\",\"name\":\"xplattestadla8245\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '10725',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '254c8f5a-2752-4f81-b3e6-757239d98de3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '800227fc-796f-4b50-aefb-d854e7a97dbe',
  'x-ms-routing-request-id': 'WESTUS:20151107T010222Z:800227fc-796f-4b50-aefb-d854e7a97dbe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9ed74841-46b8-4a04-80b7-a154eca43c6e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14904',
  'x-ms-correlation-request-id': 'd45308b9-8f88-48f9-8450-eaaf4d9fbc99',
  'x-ms-routing-request-id': 'WESTUS:20151107T010222Z:d45308b9-8f88-48f9-8450-eaaf4d9fbc99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9ed74841-46b8-4a04-80b7-a154eca43c6e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14904',
  'x-ms-correlation-request-id': 'd45308b9-8f88-48f9-8450-eaaf4d9fbc99',
  'x-ms-routing-request-id': 'WESTUS:20151107T010222Z:d45308b9-8f88-48f9-8450-eaaf4d9fbc99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:22 GMT',
  connection: 'close' });
 return result; }]];