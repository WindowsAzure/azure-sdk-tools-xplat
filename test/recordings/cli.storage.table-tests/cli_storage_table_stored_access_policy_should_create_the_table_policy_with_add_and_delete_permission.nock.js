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
nock('https://cliteststorage2026.table.core.windows.net:443')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3b79a380-0002-0009-4100-09434a000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:06:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2026.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitesttable?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fa795786-0002-0069-6300-090668000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:06:51 GMT' });
 return result; }]];