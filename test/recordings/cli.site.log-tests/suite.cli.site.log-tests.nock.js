// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_GIT_USERNAME'] = 'amarzavery';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_ACCOUNT'] = 'cchs001';
  process.env['AZURE_STORAGE_ACCESS_KEY'] = 't1tPM0TOMUDeY4MCvI19GFfbyeVAXrGoUgZfSiBMIcePz7I2krEXFmSJi1pJEugUei0MK3CFa60++2WqGrTXfw==';
};

exports.scopes = [];
