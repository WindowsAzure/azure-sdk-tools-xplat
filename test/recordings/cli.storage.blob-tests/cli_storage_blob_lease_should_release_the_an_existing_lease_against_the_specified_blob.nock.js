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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname695232365434740?comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:01:49 GMT',
  etag: '"0x8D3D716BFB52D7C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '61946c5d-0001-0059-73ff-085c42000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:01:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname695232365434740')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:49 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716BFB52D7C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bc68a609-0001-007a-57ff-083389000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 07 Sep 2016 12:02:00 GMT' });
 return result; }]];