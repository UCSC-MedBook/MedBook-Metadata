Package.describe({
  name: 'medbook:metadata',
  version: '0.0.4',
  summary: 'metadata used by CRF and Fusion',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/UCSC-MedBook/MedBook-Metadata.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    "medbook:primary-collections@0.0.17",
    "medbook:collaborations@2.4.11",
  ]);

  api.addFiles("server/dashboard.js", "server");
  api.addFiles("server/publications.js", "server");
  api.addFiles("server/methods.js", "server");
});

Package.onTest(function(api) {
});
