// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-endpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e9515513-46ff-4a46-80ab-09757323f594',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '23f11777-89e8-4b08-9585-fdab05d0d5d0',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191755Z:23f11777-89e8-4b08-9585-fdab05d0d5d0',
  date: 'Sun, 26 Mar 2017 19:17:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-endpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e9515513-46ff-4a46-80ab-09757323f594',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '23f11777-89e8-4b08-9585-fdab05d0d5d0',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191755Z:23f11777-89e8-4b08-9585-fdab05d0d5d0',
  date: 'Sun, 26 Mar 2017 19:17:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":1,\"priority\":1,\"endpointLocation\":\"East US\",\"geoMapping\":[\"RE\",\"GEO-NA\"]}}", { 'cache-control': 'private',
  'content-length': '493',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7f69f371-1db0-4cf8-886e-a9df9994ddc2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'ed0126fd-5eb7-4c64-af0b-997c89719bc0',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191757Z:ed0126fd-5eb7-4c64-af0b-997c89719bc0',
  date: 'Sun, 26 Mar 2017 19:17:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":1,\"priority\":1,\"endpointLocation\":\"East US\",\"geoMapping\":[\"RE\",\"GEO-NA\"]}}", { 'cache-control': 'private',
  'content-length': '493',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7f69f371-1db0-4cf8-886e-a9df9994ddc2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'ed0126fd-5eb7-4c64-af0b-997c89719bc0',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191757Z:ed0126fd-5eb7-4c64-af0b-997c89719bc0',
  date: 'Sun, 26 Mar 2017 19:17:57 GMT',
  connection: 'close' });
 return result; }]];