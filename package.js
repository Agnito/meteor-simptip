Package.describe({
  summary: "Simple CSS tooltips",
  version: "0.0.1",
  git: "https://github.com/Agnito/meteor-simptip.git",
  name: "agnito:simptip"
});

Package.onUse(function (api, where) {
  api.addFiles('simptip.min.css', 'client');
});

