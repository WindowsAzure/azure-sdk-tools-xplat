// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: ['microsoft.web', 'microsoft.insights'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=16b28e1df9924e078f10d7022ad24166; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 14 Apr 2015 18:45:25 GMT',
  'content-length': '2978' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatTestGCreate9327?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate9327' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31965',
  'x-ms-request-id': '98b06d54-6e33-4f6d-9584-8f1ac8f4e371',
  'x-ms-correlation-request-id': '98b06d54-6e33-4f6d-9584-8f1ac8f4e371',
  'x-ms-routing-request-id': 'WESTUS:20150414T184526Z:98b06d54-6e33-4f6d-9584-8f1ac8f4e371',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 14 Apr 2015 18:45:25 GMT',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatTestGCreate9327?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate9327\",\"name\":\"xplatTestGCreate9327\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': '496f3b7f-66b5-47af-8987-d04818d607e0',
  'x-ms-correlation-request-id': '496f3b7f-66b5-47af-8987-d04818d607e0',
  'x-ms-routing-request-id': 'WESTUS:20150414T184526Z:496f3b7f-66b5-47af-8987-d04818d607e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 14 Apr 2015 18:45:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/CS-BrazilSouth-scheduler\",\"name\":\"CS-BrazilSouth-scheduler\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/CS-EastAsia-scheduler\",\"name\":\"CS-EastAsia-scheduler\",\"location\":\"eastasia\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/CS-JapanEast-scheduler\",\"name\":\"CS-JapanEast-scheduler\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/CS-JapanWest-scheduler\",\"name\":\"CS-JapanWest-scheduler\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/CS-NorthCentralUS-scheduler\",\"name\":\"CS-NorthCentralUS-scheduler\",\"location\":\"northcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/CS-SouthCentralUS-scheduler\",\"name\":\"CS-SouthCentralUS-scheduler\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/Default-Storage-SouthCentralUS\",\"name\":\"Default-Storage-SouthCentralUS\",\"location\":\"southcentralus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/test\",\"name\":\"test\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/test3\",\"name\":\"test3\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/test4\",\"name\":\"test4\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/test5\",\"name\":\"test5\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/testvivekcs\",\"name\":\"testvivekcs\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xplatTestGCreate9327\",\"name\":\"xplatTestGCreate9327\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31967',
  'x-ms-request-id': '013bfe04-2f8e-4950-b1a2-58ea0dbedf3c',
  'x-ms-correlation-request-id': '013bfe04-2f8e-4950-b1a2-58ea0dbedf3c',
  'x-ms-routing-request-id': 'WESTUS:20150414T184526Z:013bfe04-2f8e-4950-b1a2-58ea0dbedf3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 14 Apr 2015 18:45:26 GMT',
  'content-length': '2757' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xplatTestGCreate9327?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTMyNy1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '71afecf9-a8c1-4489-9742-197fd155f7dc',
  'x-ms-correlation-request-id': '71afecf9-a8c1-4489-9742-197fd155f7dc',
  'x-ms-routing-request-id': 'WESTUS:20150414T184527Z:71afecf9-a8c1-4489-9742-197fd155f7dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 14 Apr 2015 18:45:27 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTMyNy1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTMyNy1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31965',
  'x-ms-request-id': '6e08ca3d-ff8a-4c49-8163-3f76c0127fa8',
  'x-ms-correlation-request-id': '6e08ca3d-ff8a-4c49-8163-3f76c0127fa8',
  'x-ms-routing-request-id': 'WESTUS:20150414T184542Z:6e08ca3d-ff8a-4c49-8163-3f76c0127fa8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 14 Apr 2015 18:45:41 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGCreate9327'];};