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
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices')
  .reply(200, "<StorageServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/0pportalvhds5rzsbktxt4h7</Url><ServiceName>0pportalvhds5rzsbktxt4h7</ServiceName><StorageServiceProperties><Description>Implicitly created storage service</Description><Location>East US</Location><Label>MHBwb3J0YWx2aGRzNXJ6c2JrdHh0NGg3</Label><Status>Created</Status><Endpoints><Endpoint>https://0pportalvhds5rzsbktxt4h7.blob.core.windows.net/</Endpoint><Endpoint>https://0pportalvhds5rzsbktxt4h7.queue.core.windows.net/</Endpoint><Endpoint>https://0pportalvhds5rzsbktxt4h7.table.core.windows.net/</Endpoint><Endpoint>https://0pportalvhds5rzsbktxt4h7.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>East US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-04-08T12:47:43Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-EastUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>East US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/abcdefghijklmnopqrstuvwx</Url><ServiceName>abcdefghijklmnopqrstuvwx</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West Europe</Location><Label>YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4</Label><Status>Created</Status><Endpoints><Endpoint>https://abcdefghijklmnopqrstuvwx.blob.core.windows.net/</Endpoint><Endpoint>https://abcdefghijklmnopqrstuvwx.queue.core.windows.net/</Endpoint><Endpoint>https://abcdefghijklmnopqrstuvwx.table.core.windows.net/</Endpoint><Endpoint>https://abcdefghijklmnopqrstuvwx.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-09-05T09:38:45Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestEurope</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West Europe</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/azsmnet4404</Url><ServiceName>azsmnet4404</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXpzbW5ldDQ0MDQ=</Label><Status>Created</Status><Endpoints><Endpoint>https://azsmnet4404.blob.core.windows.net/</Endpoint><Endpoint>https://azsmnet4404.queue.core.windows.net/</Endpoint><Endpoint>https://azsmnet4404.table.core.windows.net/</Endpoint><Endpoint>https://azsmnet4404.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-02-27T19:53:35Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/azsmnet7371</Url><ServiceName>azsmnet7371</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXpzbW5ldDczNzE=</Label><Status>Created</Status><Endpoints><Endpoint>https://azsmnet7371.blob.core.windows.net/</Endpoint><Endpoint>https://azsmnet7371.queue.core.windows.net/</Endpoint><Endpoint>https://azsmnet7371.table.core.windows.net/</Endpoint><Endpoint>https://azsmnet7371.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-07-22T18:52:13Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/clitestvm523814264783346</Url><ServiceName>clitestvm523814264783346</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>tdstnodetest</AffinityGroup><Label>Y2xpdGVzdHZtNTIzODE0MjY0NzgzMzQ2</Label><Status>Created</Status><Endpoints><Endpoint>https://clitestvm523814264783346.blob.core.windows.net/</Endpoint><Endpoint>https://clitestvm523814264783346.queue.core.windows.net/</Endpoint><Endpoint>https://clitestvm523814264783346.table.core.windows.net/</Endpoint><Endpoint>https://clitestvm523814264783346.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-03-16T03:58:56Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/clitestvmvnet76214295711</Url><ServiceName>clitestvmvnet76214295711</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>AG-CLI-f461037bc56c214d</AffinityGroup><Label>Y2xpdGVzdHZtdm5ldDc2MjE0Mjk1NzEx</Label><Status>Created</Status><Endpoints><Endpoint>https://clitestvmvnet76214295711.blob.core.windows.net/</Endpoint><Endpoint>https://clitestvmvnet76214295711.queue.core.windows.net/</Endpoint><Endpoint>https://clitestvmvnet76214295711.table.core.windows.net/</Endpoint><Endpoint>https://clitestvmvnet76214295711.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-04-20T23:05:34Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/devtestpowershell52139</Url><ServiceName>devtestpowershell52139</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>East US 2</Location><Label>ZGV2dGVzdHBvd2Vyc2hlbGw1MjEzOQ==</Label><Status>Created</Status><Endpoints><Endpoint>https://devtestpowershell52139.blob.core.windows.net/</Endpoint><Endpoint>https://devtestpowershell52139.queue.core.windows.net/</Endpoint><Endpoint>https://devtestpowershell52139.table.core.windows.net/</Endpoint><Endpoint>https://devtestpowershell52139.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>East US 2</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-06-24T23:32:26Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-EastUS2</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>East US 2</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/devtestpowershell78507</Url><ServiceName>devtestpowershell78507</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>East US 2</Location><Label>ZGV2dGVzdHBvd2Vyc2hlbGw3ODUwNw==</Label><Status>Created</Status><Endpoints><Endpoint>https://devtestpowershell78507.blob.core.windows.net/</Endpoint><Endpoint>https://devtestpowershell78507.queue.core.windows.net/</Endpoint><Endpoint>https://devtestpowershell78507.table.core.windows.net/</Endpoint><Endpoint>https://devtestpowershell78507.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>East US 2</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2015-06-24T23:43:42Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-EastUS2</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>East US 2</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/hovsepstorage</Url><ServiceName>hovsepstorage</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>aG92c2Vwc3RvcmFnZQ==</Label><Status>Created</Status><Endpoints><Endpoint>https://hovsepstorage.blob.core.windows.net/</Endpoint><Endpoint>https://hovsepstorage.queue.core.windows.net/</Endpoint><Endpoint>https://hovsepstorage.table.core.windows.net/</Endpoint><Endpoint>https://hovsepstorage.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-09-04T00:13:01Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/portalvhds1461230620494</Url><ServiceName>portalvhds1461230620494</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>Southeast Asia</Location><Label>cG9ydGFsdmhkczE0NjEyMzA2MjA0OTQ=</Label><Status>Created</Status><Endpoints><Endpoint>https://portalvhds1461230620494.blob.core.windows.net/</Endpoint><Endpoint>https://portalvhds1461230620494.queue.core.windows.net/</Endpoint><Endpoint>https://portalvhds1461230620494.table.core.windows.net/</Endpoint><Endpoint>https://portalvhds1461230620494.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>Southeast Asia</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-04-21T09:24:22Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-SoutheastAsia</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>Southeast Asia</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/portalvhds1462872768008</Url><ServiceName>portalvhds1462872768008</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>East US</Location><Label>cG9ydGFsdmhkczE0NjI4NzI3NjgwMDg=</Label><Status>Created</Status><Endpoints><Endpoint>https://portalvhds1462872768008.blob.core.windows.net/</Endpoint><Endpoint>https://portalvhds1462872768008.queue.core.windows.net/</Endpoint><Endpoint>https://portalvhds1462872768008.table.core.windows.net/</Endpoint><Endpoint>https://portalvhds1462872768008.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>East US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-05-10T09:32:50Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-EastUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>East US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/portalvhds1469533778493</Url><ServiceName>portalvhds1469533778493</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>AG-CLI-05f8c31394d2a45b</AffinityGroup><Label>cG9ydGFsdmhkczE0Njk1MzM3Nzg0OTM=</Label><Status>Created</Status><Endpoints><Endpoint>https://portalvhds1469533778493.blob.core.windows.net/</Endpoint><Endpoint>https://portalvhds1469533778493.queue.core.windows.net/</Endpoint><Endpoint>https://portalvhds1469533778493.table.core.windows.net/</Endpoint><Endpoint>https://portalvhds1469533778493.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-07-26T11:49:40Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/portalvhds38v5hbggr1fmp</Url><ServiceName>portalvhds38v5hbggr1fmp</ServiceName><StorageServiceProperties><Description>Implicitly created storage service</Description><Location>West US</Location><Label>cG9ydGFsdmhkczM4djVoYmdncjFmbXA=</Label><Status>Created</Status><Endpoints><Endpoint>https://portalvhds38v5hbggr1fmp.blob.core.windows.net/</Endpoint><Endpoint>https://portalvhds38v5hbggr1fmp.queue.core.windows.net/</Endpoint><Endpoint>https://portalvhds38v5hbggr1fmp.table.core.windows.net/</Endpoint><Endpoint>https://portalvhds38v5hbggr1fmp.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2015-03-15T03:33:25Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/testfoog34</Url><ServiceName>testfoog34</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdGZvb2czNA==</Label><Status>Created</Status><Endpoints><Endpoint>https://testfoog34.blob.core.windows.net/</Endpoint><Endpoint>https://testfoog34.queue.core.windows.net/</Endpoint><Endpoint>https://testfoog34.table.core.windows.net/</Endpoint><Endpoint>https://testfoog34.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-08-04T17:29:49Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/testromangroup1692</Url><ServiceName>testromangroup1692</ServiceName><StorageServiceProperties><Description>testromangroup1692</Description><Location>West US</Location><Label>dGVzdHJvbWFuZ3JvdXAxNjky</Label><Status>Created</Status><Endpoints><Endpoint>https://testromangroup1692.blob.core.windows.net/</Endpoint><Endpoint>https://testromangroup1692.queue.core.windows.net/</Endpoint><Endpoint>https://testromangroup1692.table.core.windows.net/</Endpoint><Endpoint>https://testromangroup1692.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2016-06-06T09:39:11Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>test-roman-group</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>westus</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/testromangroup8108</Url><ServiceName>testromangroup8108</ServiceName><StorageServiceProperties><Description>testromangroup8108</Description><Location>West US</Location><Label>dGVzdHJvbWFuZ3JvdXA4MTA4</Label><Status>Created</Status><Endpoints><Endpoint>https://testromangroup8108.blob.core.windows.net/</Endpoint><Endpoint>https://testromangroup8108.queue.core.windows.net/</Endpoint><Endpoint>https://testromangroup8108.table.core.windows.net/</Endpoint><Endpoint>https://testromangroup8108.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2016-06-06T09:53:56Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>test-roman-group</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>westus</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/teststorage1220</Url><ServiceName>teststorage1220</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2UxMjIw</Label><Status>Created</Status><Endpoints><Endpoint>https://teststorage1220.blob.core.windows.net/</Endpoint><Endpoint>https://teststorage1220.queue.core.windows.net/</Endpoint><Endpoint>https://teststorage1220.table.core.windows.net/</Endpoint><Endpoint>https://teststorage1220.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-07-09T19:35:26Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/vmbugrepo</Url><ServiceName>vmbugrepo</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dm1idWdyZXBv</Label><Status>Created</Status><Endpoints><Endpoint>https://vmbugrepo.blob.core.windows.net/</Endpoint><Endpoint>https://vmbugrepo.queue.core.windows.net/</Endpoint><Endpoint>https://vmbugrepo.table.core.windows.net/</Endpoint><Endpoint>https://vmbugrepo.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2014-10-28T18:40:15Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestUS</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xcliaccount5672</Url><ServiceName>xcliaccount5672</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>xcliaffinity7578</AffinityGroup><Label>eGNsaWFjY291bnQ1Njcy</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount5672.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount5672.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount5672.table.core.windows.net/</Endpoint><Endpoint>https://xcliaccount5672.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-09-05T10:07:55Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xcliaccount9323</Url><ServiceName>xcliaccount9323</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West Europe</Location><Label>eGNsaWFjY291bnQ5MzIz</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount9323.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount9323.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount9323.table.core.windows.net/</Endpoint><Endpoint>https://xcliaccount9323.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-09-05T10:07:17Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestEurope</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West Europe</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xplatdonotdeletedepl8053</Url><ServiceName>xplatdonotdeletedepl8053</ServiceName><StorageServiceProperties><Description>xplatdonotdeletedepl8053</Description><Location>West US</Location><Label>eHBsYXRkb25vdGRlbGV0ZWRlcGw4MDUz</Label><Status>Created</Status><Endpoints><Endpoint>https://xplatdonotdeletedepl8053.blob.core.windows.net/</Endpoint><Endpoint>https://xplatdonotdeletedepl8053.queue.core.windows.net/</Endpoint><Endpoint>https://xplatdonotdeletedepl8053.table.core.windows.net/</Endpoint><Endpoint>https://xplatdonotdeletedepl8053.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2016-08-22T13:30:14Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>xplat-do-not-delete-deploy-group</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>westus</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xplattestdeploydonot5376</Url><ServiceName>xplattestdeploydonot5376</ServiceName><StorageServiceProperties><Description>xplattestdeploydonot5376</Description><Location>West US</Location><Label>eHBsYXR0ZXN0ZGVwbG95ZG9ub3Q1Mzc2</Label><Status>Created</Status><Endpoints><Endpoint>https://xplattestdeploydonot5376.blob.core.windows.net/</Endpoint><Endpoint>https://xplattestdeploydonot5376.queue.core.windows.net/</Endpoint><Endpoint>https://xplattestdeploydonot5376.table.core.windows.net/</Endpoint><Endpoint>https://xplattestdeploydonot5376.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2016-08-22T13:43:37Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>xplat-test-deploy-do-not-delete</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>westus</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xplattestgroup8276</Url><ServiceName>xplattestgroup8276</ServiceName><StorageServiceProperties><Description>xplattestgroup8276</Description><Location>West US</Location><Label>eHBsYXR0ZXN0Z3JvdXA4Mjc2</Label><Status>Created</Status><Endpoints><Endpoint>https://xplattestgroup8276.blob.core.windows.net/</Endpoint><Endpoint>https://xplattestgroup8276.queue.core.windows.net/</Endpoint><Endpoint>https://xplattestgroup8276.table.core.windows.net/</Endpoint><Endpoint>https://xplattestgroup8276.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2016-08-18T10:57:31Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>xplat-test-group</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>westus</Value></ExtendedProperty></ExtendedProperties></StorageService><StorageService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/storageservices/xplattestgroup8933</Url><ServiceName>xplattestgroup8933</ServiceName><StorageServiceProperties><Description>xplattestgroup8933</Description><Location>West US</Location><Label>eHBsYXR0ZXN0Z3JvdXA4OTMz</Label><Status>Created</Status><Endpoints><Endpoint>https://xplattestgroup8933.blob.core.windows.net/</Endpoint><Endpoint>https://xplattestgroup8933.queue.core.windows.net/</Endpoint><Endpoint>https://xplattestgroup8933.table.core.windows.net/</Endpoint><Endpoint>https://xplattestgroup8933.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary>Available</StatusOfSecondary><CreationTime>2016-08-18T10:28:25Z</CreationTime><CustomDomains/><AccountType>Standard_GRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>xplat-test-group</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>westus</Value></ExtendedProperty></ExtendedProperties></StorageService></StorageServices>", { 'cache-control': 'no-cache',
  'content-length': '28245',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.408 (rd_rdfe_stable.160802-0931) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6f79a4ceba270b718cba1613c8648f34',
  date: 'Mon, 05 Sep 2016 10:08:29 GMT' });
 return result; }]];