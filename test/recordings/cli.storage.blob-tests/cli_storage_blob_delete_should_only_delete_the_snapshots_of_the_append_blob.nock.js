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
  .delete('/storage-cli-blob-test/appendblobname2369')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd5c571f0-0001-00de-6dff-08096d000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:02:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2369')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:39 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716B99BF565"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '64eceb2c-0001-00dd-52ff-080a6a000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Wed, 07 Sep 2016 12:02:59 GMT' });
 return result; }]];