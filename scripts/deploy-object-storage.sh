#!/usr/bin/env bash
set -euo pipefail

# Usage: scripts/deploy-object-storage.sh [OUT_DIR] [BUCKET]
# Defaults: OUT_DIR=out, BUCKET=lending
OUT_DIR="${1:-out}"
BUCKET="${2:-lending}"

if ! command -v yc >/dev/null 2>&1; then
  echo "yc CLI is required but not found in PATH" >&2
  exit 1
fi

if [ ! -d "$OUT_DIR" ]; then
  echo "OUT_DIR '$OUT_DIR' not found. Build first (npm run export)." >&2
  exit 1
fi

echo "Uploading ${OUT_DIR}/* to s3://${BUCKET}/ ..."
yc storage s3 cp --recursive "${OUT_DIR}/" "s3://${BUCKET}/"

# Normalize MIME types
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
bash "${SCRIPT_DIR}/fix-mime.sh" "${OUT_DIR}" "${BUCKET}"

echo "Deployment complete."






