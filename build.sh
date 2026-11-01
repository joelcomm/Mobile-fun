#!/bin/bash
# Acumen v2 build: assembles www/ for the Capacitor iOS app.
# Core games only: Bluff, Alibi, Missing Link (threads/), Rank.
# app.html (the Acumen hub) becomes www/index.html.
# Portable: works on macOS (BSD sed) and Linux (GNU sed).
set -e

sed_inplace() { sed "$1" "$2" > "$2.tmp" && mv "$2.tmp" "$2"; }

# 1) Rebuild Rank's precompiled bundle (React + Tailwind are local; no CDN, no in-browser Babel)
if [ -x node_modules/.bin/babel ] && [ -x node_modules/.bin/tailwindcss ] && [ -f rank/src/app.jsx ]; then
  node_modules/.bin/babel --config-file ./rank/src/babel.config.json rank/src/app.jsx -o rank/app.js
  node_modules/.bin/tailwindcss -c rank/src/tailwind.config.js -i rank/src/tailwind.css -o rank/rank.css --minify >/dev/null 2>&1
fi

rm -rf www
mkdir -p www

cp app.html www/index.html
cp daily.js acumen-core.js acumen-ui.css stats.html manifest.json www/
cp icon-192.png icon-512.png www/ 2>/dev/null || true
mkdir -p www/fonts
cp fonts/*.woff2 www/fonts/ 2>/dev/null || true
cp privacy.html support.html www/ 2>/dev/null || true

GAMES="bluff alibi threads rank"

for dir in $GAMES; do
  if [ -d "$dir" ]; then
    mkdir -p "www/$dir"
    cp "$dir"/*.html "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.js   "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.css  "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.png  "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.json "www/$dir/" 2>/dev/null || true
    if [ -d "$dir/fonts" ]; then
      mkdir -p "www/$dir/fonts"
      cp "$dir"/fonts/*.woff2 "www/$dir/fonts/" 2>/dev/null || true
    fi
  fi
done

# Strip dev-only files that sneak in via the globs
rm -f www/*/eslint.config.js www/*/server.js www/*/vite.config.js www/*/package.json www/*/package-lock.json www/*/*.test.js www/*/generate-*.js

# Fix paths for the native app (capacitor:// serves from the www root):
#  1) game back-links  ../app.html -> ../index.html   (game pages)
for g in $GAMES; do
  [ -f "www/$g/index.html" ] && sed_inplace 's|href="\.\./app\.html"|href="../index.html"|g' "www/$g/index.html"
  [ -f "www/$g/app.js" ] && sed_inplace 's|href: "\.\./app\.html"|href: "../index.html"|g' "www/$g/app.js"
done
# Rank's compiled bundle links home too
[ -f www/rank/app.js ] && sed_inplace 's|href: "../app.html"|href: "../index.html"|g; s|href="../app.html"|href="../index.html"|g' www/rank/app.js

# Daily "ALL GAMES" links inside daily.js point at "../" (resolves to index.html) — nothing to change.

echo "Build complete: www/ (4 core games: $GAMES)"
