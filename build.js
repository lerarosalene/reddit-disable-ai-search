const fs = require("node:fs");
const p = require("node:path");
const esbuild = require("esbuild");
const Header = require("userscript-header-format");

const fsp = fs.promises;

async function main() {
  const packageData = JSON.parse(await fsp.readFile("package.json", "utf-8"));
  const header = {
    name: "[Reddit] Disable AI search links",
    namespace: "http://tampermonkey.net",
    version: packageData.version,
    description: packageData.description,
    author: packageData.author,
    match: "*://*.reddit.com/*",
    icon: "https://icons.duckduckgo.com/ip3/reddit.com.ico",
  };

  if (process.env.UPDATE_URL) {
    header.updateURL = process.env.UPDATE_URL;
    header.downloadURL = process.env.UPDATE_URL;
  }

  await esbuild.build({
    entryPoints: [p.join("src", "index.ts")],
    bundle: true,
    minify: false,
    outfile: p.join("dist", `${packageData.name}.user.js`),
    banner: {
      js: Header.fromObject(header) + "\n",
    },
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
