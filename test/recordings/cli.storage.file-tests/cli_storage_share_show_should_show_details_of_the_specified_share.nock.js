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
nock('https://cliteststorage6387.file.core.windows.net:443')
  .head('/storageclitest3?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:04:37 GMT',
  etag: '"0x8D3D71723B45D8C"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '18eefce5-001a-0086-4f00-090d16000000',
  'x-ms-version': '2015-04-05',
  'x-ms-share-quota': '20',
  date: 'Wed, 07 Sep 2016 12:04:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage6387.file.core.windows.net:443')
  .get('/storageclitest3?restype=share&comp=stats')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><ShareStats><ShareUsage>0</ShareUsage></ShareStats>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e9c0fd76-001a-0032-7200-090114000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:04:37 GMT' });
 return result; }]];