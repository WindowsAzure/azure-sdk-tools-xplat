// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Node CLI Test',
    username: 'user@domain.example',
    registeredProviders: ['website', 'sqlserver', 'visualstudio.account'],
    registeredResourceNamespaces: ['successbricks.cleardb', 'microsoft.insights', 'microsoft.cache', 'microsoft.cache', 'microsoft.cache', 'microsoft.cache', 'microsoft.web'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1?api-version=2014-04-01-preview')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/\",\"tagName\":\"xplatTestTagCreate1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1116',
  'x-ms-request-id': '50496cea-d6b8-4ac5-83da-7969a233a980',
  'x-ms-correlation-request-id': '50496cea-d6b8-4ac5-83da-7969a233a980',
  'x-ms-routing-request-id': 'WESTUS:20140728T232308Z:50496cea-d6b8-4ac5-83da-7969a233a980',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:07 GMT',
  'content-length': '169' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/tagValues/foobar?api-version=2014-04-01-preview')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/tagValues/foobar\",\"tagValue\":\"foobar\",\"count\":{\"type\":\"Total\",\"value\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1118',
  'x-ms-request-id': 'd8a67404-07a1-4fff-8bfe-6ee9c0709c16',
  'x-ms-correlation-request-id': 'd8a67404-07a1-4fff-8bfe-6ee9c0709c16',
  'x-ms-routing-request-id': 'WESTUS:20140728T232309Z:d8a67404-07a1-4fff-8bfe-6ee9c0709c16',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:09 GMT',
  'content-length': '161' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/\",\"tagName\":\"check\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/tagValues/Mark\",\"tagValue\":\"Mark\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/\",\"tagName\":\"checkmark\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/\",\"tagName\":\"dept\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/tagValues/Finance\",\"tagValue\":\"Finance\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/\",\"tagName\":\"fluff\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/\",\"tagName\":\"xplatResourceTag2\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/\",\"tagName\":\"aztag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/tagValues/world;hello\",\"tagValue\":\"world;hello\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/\",\"tagName\":\"department\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/tagValues/Accounting\",\"tagValue\":\"Accounting\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/\",\"tagName\":\"onesdk2461\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/\",\"tagName\":\"onesdk5708\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/\",\"tagName\":\"onesdk9628\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/\",\"tagName\":\"xplatResourceTag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/\",\"tagName\":\"xplatTestTagCreate1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/tagValues/foobar\",\"tagValue\":\"foobar\",\"count\":{\"type\":\"Total\",\"value\":0}}]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31887',
  'x-ms-request-id': 'af221b88-5718-4af1-adc5-86740c2e4d4c',
  'x-ms-correlation-request-id': 'af221b88-5718-4af1-adc5-86740c2e4d4c',
  'x-ms-routing-request-id': 'WESTUS:20140728T232309Z:af221b88-5718-4af1-adc5-86740c2e4d4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:09 GMT',
  'content-length': '4261' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/\",\"tagName\":\"check\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/tagValues/Mark\",\"tagValue\":\"Mark\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/\",\"tagName\":\"checkmark\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/\",\"tagName\":\"dept\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/tagValues/Finance\",\"tagValue\":\"Finance\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/\",\"tagName\":\"fluff\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/\",\"tagName\":\"xplatResourceTag2\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/\",\"tagName\":\"aztag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/tagValues/world;hello\",\"tagValue\":\"world;hello\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/\",\"tagName\":\"department\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/tagValues/Accounting\",\"tagValue\":\"Accounting\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/\",\"tagName\":\"onesdk2461\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/\",\"tagName\":\"onesdk5708\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/\",\"tagName\":\"onesdk9628\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/\",\"tagName\":\"xplatResourceTag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/\",\"tagName\":\"xplatTestTagCreate1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/tagValues/foobar\",\"tagValue\":\"foobar\",\"count\":{\"type\":\"Total\",\"value\":0}}]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31872',
  'x-ms-request-id': '72e63371-3445-49fd-9f59-d1164fb2885e',
  'x-ms-correlation-request-id': '72e63371-3445-49fd-9f59-d1164fb2885e',
  'x-ms-routing-request-id': 'WESTUS:20140728T232309Z:72e63371-3445-49fd-9f59-d1164fb2885e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:09 GMT',
  'content-length': '4261' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/\",\"tagName\":\"check\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/tagValues/Mark\",\"tagValue\":\"Mark\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/\",\"tagName\":\"checkmark\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/\",\"tagName\":\"dept\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/tagValues/Finance\",\"tagValue\":\"Finance\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/\",\"tagName\":\"fluff\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/\",\"tagName\":\"xplatResourceTag2\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/\",\"tagName\":\"aztag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/tagValues/world;hello\",\"tagValue\":\"world;hello\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/\",\"tagName\":\"department\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/tagValues/Accounting\",\"tagValue\":\"Accounting\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/\",\"tagName\":\"onesdk2461\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/\",\"tagName\":\"onesdk5708\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/\",\"tagName\":\"onesdk9628\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/\",\"tagName\":\"xplatResourceTag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/\",\"tagName\":\"xplatTestTagCreate1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/tagValues/foobar\",\"tagValue\":\"foobar\",\"count\":{\"type\":\"Total\",\"value\":0}}]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31885',
  'x-ms-request-id': '647be5fc-e99e-4daa-ac73-b3ff9fc503ea',
  'x-ms-correlation-request-id': '647be5fc-e99e-4daa-ac73-b3ff9fc503ea',
  'x-ms-routing-request-id': 'WESTUS:20140728T232309Z:647be5fc-e99e-4daa-ac73-b3ff9fc503ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:09 GMT',
  'content-length': '4261' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/\",\"tagName\":\"check\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/tagValues/Mark\",\"tagValue\":\"Mark\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/\",\"tagName\":\"checkmark\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/\",\"tagName\":\"dept\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/tagValues/Finance\",\"tagValue\":\"Finance\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/\",\"tagName\":\"fluff\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/\",\"tagName\":\"xplatResourceTag2\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/\",\"tagName\":\"aztag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/tagValues/world;hello\",\"tagValue\":\"world;hello\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/\",\"tagName\":\"department\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/tagValues/Accounting\",\"tagValue\":\"Accounting\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/\",\"tagName\":\"onesdk2461\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/\",\"tagName\":\"onesdk5708\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/\",\"tagName\":\"onesdk9628\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/\",\"tagName\":\"xplatResourceTag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/\",\"tagName\":\"xplatTestTagCreate1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/tagValues/foobar\",\"tagValue\":\"foobar\",\"count\":{\"type\":\"Total\",\"value\":0}}]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31890',
  'x-ms-request-id': '93318b11-ab5b-40c4-8e73-eb0cba0c4307',
  'x-ms-correlation-request-id': '93318b11-ab5b-40c4-8e73-eb0cba0c4307',
  'x-ms-routing-request-id': 'WESTUS:20140728T232309Z:93318b11-ab5b-40c4-8e73-eb0cba0c4307',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:09 GMT',
  'content-length': '4261' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1/tagValues/foobar?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1124',
  'x-ms-request-id': 'a0c0ba48-872a-43a8-9ccf-4305e1d8f32e',
  'x-ms-correlation-request-id': 'a0c0ba48-872a-43a8-9ccf-4305e1d8f32e',
  'x-ms-routing-request-id': 'WESTUS:20140728T232310Z:a0c0ba48-872a-43a8-9ccf-4305e1d8f32e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:09 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatTestTagCreate1?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1137',
  'x-ms-request-id': 'e9c94a32-1d68-42dc-900c-3ac8dfac42ea',
  'x-ms-correlation-request-id': 'e9c94a32-1d68-42dc-900c-3ac8dfac42ea',
  'x-ms-routing-request-id': 'WESTUS:20140728T232311Z:e9c94a32-1d68-42dc-900c-3ac8dfac42ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:11 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/\",\"tagName\":\"check\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/check/tagValues/Mark\",\"tagValue\":\"Mark\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/\",\"tagName\":\"checkmark\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/checkmark/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/\",\"tagName\":\"dept\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/dept/tagValues/Finance\",\"tagValue\":\"Finance\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/\",\"tagName\":\"fluff\",\"count\":{\"type\":\"Total\",\"value\":3},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/fluff/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":3}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/\",\"tagName\":\"xplatResourceTag2\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag2/tagValues/\",\"tagValue\":\"\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/\",\"tagName\":\"aztag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/aztag1/tagValues/world;hello\",\"tagValue\":\"world;hello\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/\",\"tagName\":\"department\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/department/tagValues/Accounting\",\"tagValue\":\"Accounting\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/\",\"tagName\":\"onesdk2461\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk2461/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/\",\"tagName\":\"onesdk5708\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk5708/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/\",\"tagName\":\"onesdk9628\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value1\",\"tagValue\":\"value1\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value2\",\"tagValue\":\"value2\",\"count\":{\"type\":\"Total\",\"value\":0}},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/onesdk9628/tagValues/value3\",\"tagValue\":\"value3\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/\",\"tagName\":\"xplatResourceTag1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/tagNames/xplatResourceTag1/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31884',
  'x-ms-request-id': '7e556f91-7a2f-4f60-b568-a47f3385ae82',
  'x-ms-correlation-request-id': '7e556f91-7a2f-4f60-b568-a47f3385ae82',
  'x-ms-routing-request-id': 'WESTUS:20140728T232311Z:7e556f91-7a2f-4f60-b568-a47f3385ae82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 28 Jul 2014 23:23:11 GMT',
  'content-length': '3930' });
 return result; }],
[]];