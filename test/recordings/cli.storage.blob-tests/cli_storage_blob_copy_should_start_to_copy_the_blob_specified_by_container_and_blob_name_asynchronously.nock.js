// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 12 Aug 2016 06:48:26 GMT',
  etag: '"0x8D3C27CA9B3430C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '80cd81d0-0001-003e-3565-f42026000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 12 Aug 2016 06:48:26 GMT',
  etag: '"0x8D3C27CA9B3430C"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '80cd81d0-0001-003e-3565-f42026000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:35 GMT',
  etag: '"0x8D3C27CAEB091A8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c5180aa8-0001-003d-7665-f42321000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': 'e352103f-f361-4ec2-b10f-b80a33aeec83',
  'x-ms-copy-status': 'success',
  date: 'Fri, 12 Aug 2016 06:48:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:48:35 GMT',
  etag: '"0x8D3C27CAEB091A8"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c5180aa8-0001-003d-7665-f42321000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': 'e352103f-f361-4ec2-b10f-b80a33aeec83',
  'x-ms-copy-status': 'success',
  date: 'Fri, 12 Aug 2016 06:48:35 GMT',
  connection: 'close' });
 return result; }]];