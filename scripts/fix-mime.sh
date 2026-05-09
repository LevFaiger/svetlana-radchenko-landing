#!/usr/bin/env bash
set -euo pipefail

# Usage: scripts/fix-mime.sh [OUT_DIR] [BUCKET]
# Defaults: OUT_DIR=out, BUCKET=lending
OUT_DIR="${1:-out}"
BUCKET="${2:-lending}"

if ! command -v yc >/dev/null 2>&1; then
  echo "yc CLI is required but not found in PATH" >&2
  exit 1
fi

if [ ! -d "$OUT_DIR" ]; then
  echo "OUT_DIR '$OUT_DIR' not found" >&2
  exit 1
fi

put_with_headers() {
  local file="$1"
  local key="$2"
  local mime="$3"
  local cache_control="$4"
  yc storage s3 cp "$file" "s3://${BUCKET}/${key}" \
    --content-type "${mime}" \
    --cache-control "${cache_control}" \
    --no-guess-mime-type --quiet || true
}

fix_ext() {
  local ext="$1"
  local mime="$2"
  local cache_control="$3"
  find "$OUT_DIR" -type f -name "*.${ext}" -print0 | \
  while IFS= read -r -d '' f; do
    key="${f#${OUT_DIR}/}"
    put_with_headers "$f" "$key" "$mime" "$cache_control"
  done
}

echo "Fixing MIME types and cache headers in bucket: ${BUCKET}, from: ${OUT_DIR}"

# Cache policy
NC="max-age=0, no-cache, no-store, must-revalidate"
if [ "${FORCE_NO_CACHE:-0}" = "1" ]; then
  LONG="$NC"
  HTML_CC="$NC"
  MANIFEST_CC="$NC"
  echo "FORCE_NO_CACHE=1 → applying no-cache to all assets"
else
  LONG="public, max-age=31536000, immutable"
  HTML_CC="$NC"
  MANIFEST_CC="max-age=0, no-cache, must-revalidate"
fi

# Apply headers
fix_ext html  "text/html"                "$HTML_CC"
fix_ext css   "text/css"                 "$LONG"
fix_ext js    "application/javascript"   "$LONG"
fix_ext woff2 "font/woff2"               "$LONG"
fix_ext png   "image/png"                "$LONG"  || true
fix_ext jpg   "image/jpeg"               "$LONG"  || true
fix_ext jpeg  "image/jpeg"               "$LONG"  || true
fix_ext svg   "image/svg+xml"            "$LONG"  || true
fix_ext webmanifest "application/manifest+json" "$MANIFEST_CC" || true

# Common cleanup
yc storage s3 rm "s3://${BUCKET}/.DS_Store" --quiet || true

echo "MIME type normalization complete."


