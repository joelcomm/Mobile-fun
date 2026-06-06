#!/bin/bash
# Build script: copies web assets into www/ for Capacitor
set -e

rm -rf www
mkdir -p www

# Top-level files
cp index.html hub.html daily.js stats.html manifest.json sw.js www/
cp icon-192.png icon-512.png www/ 2>/dev/null || true

# Game directories
for dir in threads alibi bluff lineup echo cipher reflex vanish sequence rank drift; do
  if [ -d "$dir" ]; then
    mkdir -p "www/$dir"
    cp "$dir"/*.html "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.js "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.css "www/$dir/" 2>/dev/null || true
    cp "$dir"/*.png "www/$dir/" 2>/dev/null || true
  fi
done

# Puptown (has subdirectories)
if [ -d "puptown" ]; then
  mkdir -p www/puptown/dist/entities www/puptown/dist/managers www/puptown/dist/scenes www/puptown/dist/systems www/puptown/dist/ui www/puptown/dist/util
  cp puptown/index.html www/puptown/
  cp puptown/dist/*.js www/puptown/dist/
  cp puptown/dist/entities/*.js www/puptown/dist/entities/
  cp puptown/dist/managers/*.js www/puptown/dist/managers/
  cp puptown/dist/scenes/*.js www/puptown/dist/scenes/
  cp puptown/dist/systems/*.js www/puptown/dist/systems/
  cp puptown/dist/ui/*.js www/puptown/dist/ui/
  cp puptown/dist/util/*.js www/puptown/dist/util/ 2>/dev/null || true
fi

# Poundbreak (has textures)
if [ -d "poundbreak" ]; then
  mkdir -p www/poundbreak/textures
  cp poundbreak/*.html www/poundbreak/ 2>/dev/null || true
  cp poundbreak/*.js www/poundbreak/ 2>/dev/null || true
  cp poundbreak/*.css www/poundbreak/ 2>/dev/null || true
  cp poundbreak/textures/*.png www/poundbreak/textures/ 2>/dev/null || true
fi

echo "Build complete: www/"
