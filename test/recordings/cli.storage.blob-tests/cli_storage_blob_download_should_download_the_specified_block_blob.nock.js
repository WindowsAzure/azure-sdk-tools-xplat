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
  .head('/storage-cli-blob-test/blockblobname69523236543')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:44 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716BCCB3CF8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '802ad12e-0001-00cf-1aff-083e76000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 07 Sep 2016 12:01:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .get('/storage-cli-blob-test/blockblobname69523236543')
  .reply(200, "HelloWorld", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:44 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716BCCB3CF8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0819a279-0001-010b-6eff-0807e5000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 07 Sep 2016 12:01:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname69523236543')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:44 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716BCCB3CF8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '63b2c092-0001-00dc-67ff-080b97000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 07 Sep 2016 12:01:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname69523236543')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/xml',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:44 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716BCCB3CF8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '521db8e9-0001-008e-19ff-081665000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 07 Sep 2016 12:01:47 GMT' });
 return result; }]];