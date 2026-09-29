## Yandex Object Storage - Static Site Deployment Guide

This project is exported as a static site and hosted from a Yandex Object Storage bucket.

### Prerequisites
- Yandex Cloud CLI authenticated and configured (profile: `sveta`).
- Bucket: `lending` in folder `b1glqojh3e5n2otaiv1c`.

### 1) Build static export

```bash
cd landing-website-clean
npm ci  # optional if deps changed
npm run export
# Static files will be in ./out
```

### 2) Upload to the bucket

First pass (all files):
```bash
yc storage s3 cp --recursive out/ s3://lending/
```

Force correct MIME types for key asset classes (prevents “text/plain” on CSS/JS):
```bash
# HTML
find out -name '*.html' -print0 | xargs -0 -I{} sh -c 'k="${1#out/}"; yc storage s3 cp "$1" "s3://lending/$k" --content-type text/html --no-guess-mime-type' _ {}

# CSS
find out -name '*.css' -print0 | xargs -0 -I{} sh -c 'k="${1#out/}"; yc storage s3 cp "$1" "s3://lending/$k" --content-type text/css --no-guess-mime-type' _ {}

# JS
find out -name '*.js' -print0 | xargs -0 -I{} sh -c 'k="${1#out/}"; yc storage s3 cp "$1" "s3://lending/$k" --content-type application/javascript --no-guess-mime-type' _ {}

# Fonts
find out -name '*.woff2' -print0 | xargs -0 -I{} sh -c 'k="${1#out/}"; yc storage s3 cp "$1" "s3://lending/$k" --content-type font/woff2 --no-guess-mime-type' _ {}

# Optional images (usually guessed correctly, include if needed)
find out -name '*.png'  -print0 | xargs -0 -I{} sh -c 'k="${1#out/}"; yc storage s3 cp "$1" "s3://lending/$k" --content-type image/png  --no-guess-mime-type' _ {}
find out -name '*.jpg'  -print0 | xargs -0 -I{} sh -c 'k="${1#out/}"; yc storage s3 cp "$1" "s3://lending/$k" --content-type image/jpeg --no-guess-mime-type' _ {}
find out -name '*.jpeg' -print0 | xargs -0 -I{} sh -c 'k="${1#out/}"; yc storage s3 cp "$1" "s3://lending/$k" --content-type image/jpeg --no-guess-mime-type' _ {}
```

Recommended cleanup:
```bash
yc storage s3 rm s3://lending/.DS_Store || true
```

### 3) Make bucket public and set website documents

```bash
yc storage bucket update lending \
  --public-read \
  --website-settings '{"index":"index.html","error":"404.html"}'
```

Website endpoint (HTTP only):
```
http://finmodel.guru.website.yandexcloud.net/en/services/
```

Object endpoint (HTTPS; no directory index fallback, use full keys):
```
https://lending.storage.yandexcloud.net/index.html
https://lending.storage.yandexcloud.net/services/index.html
https://lending.storage.yandexcloud.net/en/index.html
```

### 4) Verify headers (spot checks)

```bash
curl -I http://finmodel.guru.website.yandexcloud.net/en/services/
curl -I http://finmodel.guru.website.yandexcloud.net/_next/static/css/9dbe6639f264ae09.css   # should be text/css
curl -I http://finmodel.guru.website.yandexcloud.net/_next/static/chunks/main-app-*.js       # application/javascript
curl -I http://finmodel.guru.website.yandexcloud.net/_next/static/media/*.woff2              # font/woff2
curl -I http://finmodel.guru.website.yandexcloud.net/favicon.svg                             # image/svg+xml
curl -I http://finmodel.guru.website.yandexcloud.net/site.webmanifest                        # application/manifest+json
```

### 5) HTTPS with your own domain (optional)

The `website.yandexcloud.net` endpoint is HTTP-only. For HTTPS + pretty URLs:
1. Create a DNS CNAME: `yourhost.example.com` → `lending.website.yandexcloud.net`.
2. Issue/obtain a certificate in Certificate Manager; get `CERT_ID`.
3. Bind HTTPS to the bucket:
   ```bash
   yc storage bucket set-https lending --certificate-id <CERT_ID>
   ```
4. Open `https://yourhost.example.com`.

### 6) Cache modes (choose one)

Default behavior (cached assets, fresh HTML):
- HTML: `no-cache` (always fetch latest)
- Hashed assets (CSS/JS/fonts/images): `public, max-age=31536000, immutable`

Deploy WITH cache (recommended for production):
```bash
cd landing-website-clean
npm run export
FORCE_NO_CACHE=0 scripts/deploy-object-storage.sh out lending
# or simply:
scripts/deploy-object-storage.sh out lending
```

Deploy WITHOUT cache (for immediate changes across all devices; useful during testing):
```bash
cd landing-website-clean
npm run export
FORCE_NO_CACHE=1 scripts/deploy-object-storage.sh out lending
```

Quick verification:
```bash
curl -I http://finmodel.guru.website.yandexcloud.net/en/services/                # HTML: Cache-Control: max-age=0, no-cache...
curl -I http://finmodel.guru.website.yandexcloud.net/_next/static/css/9dbe6... .css   # CSS: either immutable (cache) or no-cache (no cache mode)
```

### Troubleshooting
- CSS/JS served as `text/plain`: re-run the MIME forcing commands above.
- Object endpoint shows XML “NoSuchKey” for `/en/about/`: use full key paths (e.g., `/en/about/index.html`). The object endpoint does not perform index fallback.
- 404 for `/favicon.ico`: browsers may still request `.ico`. Use `favicon.svg` (already added). To silence warnings, you can also upload a tiny `favicon.ico` at bucket root.

### Notes
- Navigation has been adjusted to use explicit `index.html` links so language switching works on the HTTPS object endpoint.
- Build config (`next.config.js`) uses `output: 'export'` and `trailingSlash: true` to generate static pages under directories with `index.html` files.



### 5) English version: build-time settings (GA4, Search Console)

The RU and EN versions use separate root layouts (`src/app/(ru)/layout.tsx` and
`src/app/(en)/en/layout.tsx`). Yandex.Metrika is loaded on RU pages only; EN pages
load Google Analytics 4 when a measurement ID is provided at build time.

```bash
cp .env.example .env.local
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX          (GA4 → Admin → Data Streams)
# NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>        (Search Console → HTML tag, content="...")
npm run export
```

Without these variables the GA4 script and the verification meta tag are omitted
from the EN pages (no placeholders are ever emitted).

### 6) Canonical host: 301 redirect finmodel.guru → www.finmodel.guru

All canonical URLs, hreflang links and the sitemap use `https://www.finmodel.guru`.
A static export cannot issue redirects itself, so the redirect must be configured
on the hosting side. With Yandex Object Storage, serve the apex domain from a
second bucket named exactly `finmodel.guru` whose only job is to redirect:

```bash
yc storage bucket create --name finmodel.guru
yc storage bucket update finmodel.guru \
  --public-read \
  --website-settings '{"redirectAllRequests":{"protocol":"https","hostname":"www.finmodel.guru"}}'
```

Then point the apex DNS record (ALIAS/ANAME or A via CDN) at that bucket's website
endpoint. If the site is fronted by a CDN, configure the host redirect there instead.

### 7) Sitemap and Search Console

`https://www.finmodel.guru/sitemap.xml` lists every RU and EN page with
`xhtml:link` hreflang alternates. After each deploy:

1. Google Search Console → Sitemaps → submit `https://www.finmodel.guru/sitemap.xml`.
2. Check a couple of EN URLs with the URL Inspection tool (canonical must be the EN URL).
3. Check `https://www.finmodel.guru/en/` and `/en/services/` in LinkedIn Post Inspector
   to confirm the English title, description and `og:image` (`/images/og-image-en.jpg`).
