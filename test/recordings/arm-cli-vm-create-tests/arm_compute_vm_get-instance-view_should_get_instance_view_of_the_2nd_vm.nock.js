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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2b6ee0ac-4347-435f-94ff-804bbb9a3c6c\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL7923\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli0e026df7b384a4e6-os-1468873478507\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13353.blob.core.windows.net/xplatteststoragecnt13178/cli0e026df7b384a4e6-os-1468873478507.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 1,\r\n      \"platformFaultDomain\": 1,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.778\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2016-07-18T20:34:47+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli0e026df7b384a4e6-os-1468873478507\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-07-18T20:32:13.8963928+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-07-18T20:33:25.2254581+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4560',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131106124671095645',
  'x-ms-request-id': 'ab3cdd90-88fc-4536-a530-199c5f05d1a5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-correlation-request-id': 'b1277c14-0a0a-489a-9dee-1c1f7af849f3',
  'x-ms-routing-request-id': 'EASTUS:20160718T203449Z:b1277c14-0a0a-489a-9dee-1c1f7af849f3',
  date: 'Mon, 18 Jul 2016 20:34:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2b6ee0ac-4347-435f-94ff-804bbb9a3c6c\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL7923\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli0e026df7b384a4e6-os-1468873478507\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13353.blob.core.windows.net/xplatteststoragecnt13178/cli0e026df7b384a4e6-os-1468873478507.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 1,\r\n      \"platformFaultDomain\": 1,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.778\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2016-07-18T20:34:47+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli0e026df7b384a4e6-os-1468873478507\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-07-18T20:32:13.8963928+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-07-18T20:33:25.2254581+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate8259/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4560',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131106124671095645',
  'x-ms-request-id': 'ab3cdd90-88fc-4536-a530-199c5f05d1a5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-correlation-request-id': 'b1277c14-0a0a-489a-9dee-1c1f7af849f3',
  'x-ms-routing-request-id': 'EASTUS:20160718T203449Z:b1277c14-0a0a-489a-9dee-1c1f7af849f3',
  date: 'Mon, 18 Jul 2016 20:34:49 GMT',
  connection: 'close' });
 return result; }]];