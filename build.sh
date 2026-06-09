#!/bin/bash
# Build script: copies web assets into www/ for the Capacitor iOS app.
# Uses app.html as the entry point (9 games) and rewrites internal paths
# so navigation + shared scripts resolve inside the Capacitor WebView.
set -e

rm -rf www
mkdir -p www

# App entry point — app.html becomes index.html in the app
cp app.html www/index.html

# Shared files
cp daily.js stats.html manifest.json sw.js www/
cp icon-192.png icon-512.png www/ 2>/dev/null || true
cp privacy.html support.html www/ 2>/dev/null || true

GAMES="threads alibi bluff lineup echo cipher reflex sequence rank"

# The 9 app games
for dir in $GAMES; do
  if [ -d "$dir" ]; then
    mkdir -p "www/$dir"
    cp "$dir"/*.html "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.js   "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.css  "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.png  "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.json "www/$dir/" 2>/dev/null || true
  fi
done

# Fix paths for the native app (capacitor:// serves from the www root):
#  1) hub game cards   GAME/        -> GAME/index.html
#  2) game back-links  ../app.html  -> ../index.html  (hub is index.html in www)
for g in $GAMES; do
  sed -i "s|href=\"$g/\"|href=\"$g/index.html\"|g" www/index.html
  [ -f "www/$g/index.html" ] && sed -i 's|href="\.\./app\.html"|href="../index.html"|g' "www/$g/index.html"
done

echo "Build complete: www/ (9 games)"
