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
  .delete('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg13761/providers/Microsoft.Web/sites/webappclitests2314?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  etag: '"1D228A3C97712D0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '43a9b370-d641-4142-9ff3-7fb8b4ced595',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'e5b40a89-38bc-4d6c-ae1d-bc2a29fa6791',
  'x-ms-routing-request-id': 'CENTRALUS:20161017T182515Z:e5b40a89-38bc-4d6c-ae1d-bc2a29fa6791',
  date: 'Mon, 17 Oct 2016 18:25:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg13761/providers/Microsoft.Web/sites/webappclitests2314?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  etag: '"1D228A3C97712D0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '43a9b370-d641-4142-9ff3-7fb8b4ced595',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'e5b40a89-38bc-4d6c-ae1d-bc2a29fa6791',
  'x-ms-routing-request-id': 'CENTRALUS:20161017T182515Z:e5b40a89-38bc-4d6c-ae1d-bc2a29fa6791',
  date: 'Mon, 17 Oct 2016 18:25:14 GMT',
  connection: 'close' });
 return result; }]];