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
  .put('/storageclitest?restype=container&comp=lease')
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>LeaseIsBrokenAndCannotBeRenewed</Code><Message>The lease ID matched, but the lease has been broken explicitly and cannot be renewed.\nRequestId:12a925ba-0001-00d2-15ff-08e79c000000\nTime:2016-09-07T12:00:38.3802995Z</Message></Error>", { 'content-length': '285',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '12a925ba-0001-00d2-15ff-08e79c000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:00:38 GMT' });
 return result; }]];