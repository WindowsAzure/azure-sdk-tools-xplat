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
  .head('/testfilecopydestshare/testfilecopydestdir/toCopy')
  .reply(200, "", { 'content-length': '10',
  'last-modified': 'Wed, 07 Sep 2016 12:05:56 GMT',
  etag: '"0x8D3D717531790A7"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bb4d5b13-001a-00e7-0300-0949c9000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': '27acdbfc-d05f-4aee-a587-e7dfa2e01d0f',
  'x-ms-copy-source': 'https://cliteststorage6387.file.core.windows.net/testfilecopysourceshare/testfilecopysourcedir/toCopy?se=2016-09-14T12%3A05%3A57Z&sp=r&sv=2015-04-05&sr=f&sig=0CHhGjbqQwB4eF%2BR8o4jXXL8Izi%2BU%2FdUb6nQWhYHs5w%3D',
  'x-ms-copy-status': 'success',
  'x-ms-copy-progress': '10/10',
  'x-ms-copy-completion-time': 'Wed, 07 Sep 2016 12:05:56 GMT',
  'x-ms-type': 'File',
  date: 'Wed, 07 Sep 2016 12:05:57 GMT' });
 return result; }]];