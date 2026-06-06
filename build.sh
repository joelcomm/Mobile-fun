#!/bin/bash
# Build script: copies web assets into www/ for Capacitor iOS app
# Uses app.html as the entry point (9 games, no Vanish/Puptown/Poundbreak)
set -e

rm -rf www
mkdir -p www

# App entry point — app.html becomes index.html in the app
cp app.html www/index.html

# Shared files
cp daily.js stats.html manifest.json sw.js www/
cp icon-192.png icon-512.png www/ 2>/dev/null || true

# Only the 9 app games (no vanish, puptown, poundbreak)
for dir in threads alibi bluff lineup echo cipher reflex sequence rank; do
  if [ -d "$dir" ]; then
    mkdir -p "www/$dir"
    cp "$dir"/*.html "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.js "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.css "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.png "www/$dir/" 2>/dev/null || true
  fi
done

echo "Build complete: www/ (9 games)"
