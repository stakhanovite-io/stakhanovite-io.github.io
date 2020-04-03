const HTMLAsset  = require('parcel-bundler/src/assets/HTMLAsset');

class AsciidocAsset extends HTMLAsset {
  async parse (code) {
    console.log("parse\n")
    console.log(code)
    const pkg = await this.getPackage();
    const config = await this.getConfig(['marked.config.js']);
    this.markedOptions = config || pkg.marked || {};
    this.contents = "<div>Heehhh</div>";
    return super.parse(this.contents);
  }
  async load() {
    console.log("load");
    return load();
  }
}

module.exports = AsciidocAsset;