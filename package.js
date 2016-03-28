Package.describe({
  name: 'medbook:metadata',
  version: '0.0.3',
  summary: 'metadata used by CRF and Fusion',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/UCSC-MedBook/MedBook-Metadata.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('server/collections.js', 'server');
  api.addFiles('server/dashboard.js', 'server');
  api.addFiles('server/metadata.js', 'server');
  api.addFiles('server/methods.js', 'server');
});

Package.onTest(function(api) {
});
