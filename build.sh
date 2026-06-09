#!/bin/bash
# Build script: copies web assets into www/ for the Capacitor iOS app.
# Uses app.html as the entry point (9 games) and rewrites internal paths
# so navigation + shared scripts resolve inside the Capacitor WebView.
# Portable: works on macOS (BSD sed) and Linux (GNU sed).
set -e

sed_inplace() { sed "$1" "$2" > "$2.tmp" && mv "$2.tmp" "$2"; }

rm -rf www
mkdir -p www

cp app.html www/index.html
cp daily.js stats.html manifest.json sw.js www/
cp icon-192.png icon-512.png www/ 2>/dev/null || true
cp privacy.html support.html www/ 2>/dev/null || true

GAMES="threads alibi bluff lineup echo cipher reflex sequence rank"

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
#  1) hub game cards    href="GAME/"   -> "GAME/index.html"
#  2) game back-links   ../app.html    -> ../index.html
#  3) stats play-links  href: 'GAME/'  -> 'GAME/index.html'
for g in $GAMES; do
  sed_inplace "s|href=\"$g/\"|href=\"$g/index.html\"|g" www/index.html
  [ -f "www/$g/index.html" ] && sed_inplace 's|href="\.\./app\.html"|href="../index.html"|g' "www/$g/index.html"
  [ -f "www/stats.html" ] && sed_inplace "s|href: '$g/'|href: '$g/index.html'|g" www/stats.html
done

# Drop the unshipped "vanish" game from the stats list (app ships 9 games)
[ -f "www/stats.html" ] && sed_inplace "/key: 'vanish'/d" www/stats.html

echo "Build complete: www/ (9 games)"
