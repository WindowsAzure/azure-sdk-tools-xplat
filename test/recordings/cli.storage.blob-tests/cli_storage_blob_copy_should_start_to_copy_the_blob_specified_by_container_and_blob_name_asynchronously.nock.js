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
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 07 Sep 2016 12:03:02 GMT',
  etag: '"0x8D3D716EB11670C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '32712c90-0001-00f6-63ff-087ed2000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:03:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:03:09 GMT',
  etag: '"0x8D3D716EF1AC30C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c821f46e-0001-00cd-26ff-083c8c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': 'cf8477a2-1287-48c2-a36b-c309f8d50131',
  'x-ms-copy-status': 'success',
  date: 'Wed, 07 Sep 2016 12:03:08 GMT' });
 return result; }]];