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
nock('https://cliteststorage8177.blob.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '71dd724d-0001-007b-5900-093274000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage8177.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd6827de3-0001-00b0-5500-09a044000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage8177.table.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd7c6f6e5-0002-00b4-6b00-0955c6000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage8177.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ba62ce91-0002-009c-3600-092279000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage8177.queue.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>7</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '14193b09-0003-008d-2000-091562000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage8177.queue.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fdfcdfb9-0003-00c3-0400-09d087000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage8177.file.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>7</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>503</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fab3a6ae-001a-003b-5700-091b9a000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage8177.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b716b1a3-001a-00b8-3200-09bb37000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:11:06 GMT' });
 return result; }]];