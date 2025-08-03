#!/usr/env/bin bash

set -ex

VERSION="$(cat package.json | jq .version -r)"
TAG="v${VERSION}"
NAME="$(cat package.json | jq .name -r)"
UPDATE_URL="https://github.com/${REPOSITORY}/releases/latest/download/${NAME}.user.js"

if [ $(git tag -l "${TAG}") ]; then
  echo "Can't create release for tag ${TAG}: ${TAG} already exists"
  exit 1
fi

npm ci
npm run typecheck
UPDATE_URL="${UPDATE_URL}" npm run build

gh release create "${TAG}" -F "changelogs/${TAG}.md" "dist/${NAME}.user.js"
