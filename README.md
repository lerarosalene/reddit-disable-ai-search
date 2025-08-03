# \[Reddit\] Disable AI search links

Userscript that disables AI search links on Reddit.

## Install

### Prerequisites

Install any userscript manager.

- Chrome:
    - [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Firefox:
    - [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

### Install from this repository

Follow this link: [https://github.com/lerarosalene/reddit-disable-ai-search/releases/latest/download/reddit-disable-ai-search.user.js](https://github.com/lerarosalene/reddit-disable-ai-search/releases/latest/download/reddit-disable-ai-search.user.js). Your userscript manager should trigger installation automatically.

NOTE: this option includes automatic updates. Disable them in your userscript manager if you don't want/don't trust them.

### Build from scratch

1. Install [NodeJS](https://nodejs.org/)
2. Clone this repository
3. Open terminal in cloned repository directory
4. Run `npm ci` to install dependencies
5. Run `npm run typecheck` to verify types
6. Run `npm run build` to build userscript
7. Grab your userscript from `dist/reddit-disable-ai-search.user.js`, copy its contents and paste into editor in your userscript manager

This option doesn't include automatic updates: you will need to sync your copy of repository manually and build new versions yourself.