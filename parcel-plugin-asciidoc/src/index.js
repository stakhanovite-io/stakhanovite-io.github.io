module.exports = function(bundler) {
    bundler.addAssetType('adoc', require.resolve('./AsciidocAsset'));
  };