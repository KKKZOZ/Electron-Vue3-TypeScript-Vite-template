module.exports =  () => {
  var glob = require("glob");

  glob("./electron/*.ts", {}, function (er, files) {
    require("esbuild").buildSync({
      entryPoints: files,
      platform: "node",
      format: "cjs",
      outdir: "./dist/electron/",
    });
  });
};
