Package.describe({
  name: 'medbook:metadata',
  version: '0.0.1',
  summary: 'metadata used by CRF and Fusion',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/UCSC-MedBook/MedBook-Metadata.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('server/collections.js', 'client');
  api.addFiles('server/dashboard.js', 'client');
  api.addFiles('server/metadata.js', 'client');
  api.addFiles('server/methods.js', 'client');
});

Package.onTest(function(api) {
});
