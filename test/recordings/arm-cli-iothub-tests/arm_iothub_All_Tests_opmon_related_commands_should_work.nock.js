// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': 'f067ff5a-5173-450f-a408-69f59d0a285b',
  'x-ms-correlation-request-id': 'f067ff5a-5173-450f-a408-69f59d0a285b',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235741Z:f067ff5a-5173-450f-a408-69f59d0a285b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': 'f067ff5a-5173-450f-a408-69f59d0a285b',
  'x-ms-correlation-request-id': 'f067ff5a-5173-450f-a408-69f59d0a285b',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235741Z:f067ff5a-5173-450f-a408-69f59d0a285b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'f93de492-7181-4a48-a32c-87fed1327f94',
  'x-ms-correlation-request-id': 'f93de492-7181-4a48-a32c-87fed1327f94',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235741Z:f93de492-7181-4a48-a32c-87fed1327f94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'f93de492-7181-4a48-a32c-87fed1327f94',
  'x-ms-correlation-request-id': 'f93de492-7181-4a48-a32c-87fed1327f94',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235741Z:f93de492-7181-4a48-a32c-87fed1327f94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"Information\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2523',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/NjQ3NDE1NGUtZTRlMy00MmQxLWJiODgtNDA0NTg0MDdhZmQ1?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'ee4b0fae-f7ef-4ee6-9cc5-49a823099293',
  'x-ms-correlation-request-id': 'ee4b0fae-f7ef-4ee6-9cc5-49a823099293',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235743Z:ee4b0fae-f7ef-4ee6-9cc5-49a823099293',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xE=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"5ANtGn1Sko+9pMg6mFq04wLO6FRq+xRUKjOe77rLvg8=\",\"secondaryKey\":\"O1KvAst4fwbPt2IK8NfLkBdm4pNGhgF6zKxtKtVxxXE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Nsb/9tKpfE8ztKCeDqq7bL3uBVQd022H4aBk/phXeWo=\",\"secondaryKey\":\"lUZULVLjL51jBcoyTLbyCKWO92GIjmnIPre6UDr2R9U=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"Z1apjqy+/gTk2bB+VH3Z8eatXhZoUmdcHf7wyHGw4Rk=\",\"secondaryKey\":\"GLOWclfdRCWrbw9zZhHtvZ1XbOxOZVeDd7K06nhpz0U=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"HKEfrr7MQ8cwQS9vFVZUKOwUXfC01CJv9BX0TnzsZrM=\",\"secondaryKey\":\"8fU2imFmyhyxWlZ7dF//e7JscdHUQJ5bHHvXzskZ99I=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"dzBcYS8V5oMEzqZqAeYSQom+cpEr3hO6bvv1fanLZ10=\",\"secondaryKey\":\"ZXK3FcKjrzWpX+VzNjD7Eghdcs44xQejxvXMBFgyXU0=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"Information\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2523',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/NjQ3NDE1NGUtZTRlMy00MmQxLWJiODgtNDA0NTg0MDdhZmQ1?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'ee4b0fae-f7ef-4ee6-9cc5-49a823099293',
  'x-ms-correlation-request-id': 'ee4b0fae-f7ef-4ee6-9cc5-49a823099293',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235743Z:ee4b0fae-f7ef-4ee6-9cc5-49a823099293',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:57:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/NjQ3NDE1NGUtZTRlMy00MmQxLWJiODgtNDA0NTg0MDdhZmQ1?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '0cb61eec-003e-4de2-b662-2a0a4b28f396',
  'x-ms-correlation-request-id': '0cb61eec-003e-4de2-b662-2a0a4b28f396',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235814Z:0cb61eec-003e-4de2-b662-2a0a4b28f396',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:58:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/operationResults/NjQ3NDE1NGUtZTRlMy00MmQxLWJiODgtNDA0NTg0MDdhZmQ1?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '0cb61eec-003e-4de2-b662-2a0a4b28f396',
  'x-ms-correlation-request-id': '0cb61eec-003e-4de2-b662-2a0a4b28f396',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235814Z:0cb61eec-003e-4de2-b662-2a0a4b28f396',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:58:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xY=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"Information\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1621',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '597911af-ea5c-4cb1-a505-f780da73a594',
  'x-ms-correlation-request-id': '597911af-ea5c-4cb1-a505-f780da73a594',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235815Z:597911af-ea5c-4cb1-a505-f780da73a594',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:58:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+xY=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"Information\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1621',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': '597911af-ea5c-4cb1-a505-f780da73a594',
  'x-ms-correlation-request-id': '597911af-ea5c-4cb1-a505-f780da73a594',
  'x-ms-routing-request-id': 'WESTUS2:20160809T235815Z:597911af-ea5c-4cb1-a505-f780da73a594',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:58:14 GMT',
  connection: 'close' });
 return result; }]];