GEORGIAMEDICAREENROLLMENT.COM - single-folder version

Every page is a single .html file in THIS folder (no nested page folders).
- index.html ........ the homepage (served at the domain root)
- atlanta.html, veterans.html, medicare-costs.html, etc. ... all other pages
- site.css, site.js . shared styling/behavior used by every page
- robots.txt, sitemap.xml, llms.txt, llms-full.txt ... crawl + AI discovery
- CNAME ............. your custom domain (georgiamedicareenrollment.com)
- .nojekyll ......... tells GitHub Pages to serve files as-is (keep it, it's meant to be empty)

DEPLOY (GitHub Pages):
1. github.com -> New repository -> Public -> Create.
2. Click "uploading an existing file".
3. Select ALL the files in this folder and drag them in together. Commit.
4. Settings -> Pages -> Deploy from a branch -> main -> / (root) -> Save.
5. Wait ~2 min. Live at https://<username>.github.io/<repo>/ and at your domain once DNS is set.

DNS for georgiamedicareenrollment.com (apex): four A records ->
185.199.108.153 / .109.153 / .110.153 / .111.153
www (optional): CNAME -> <username>.github.io
Then Settings -> Pages -> Enforce HTTPS.

STILL TO DO BEFORE LAUNCH:
- Replace the two [#] placeholders in the Medicare disclaimer (footer of every page)
  with the organization/product counts from your carrier/FMO. Search files for: [#]
- Test the contact form once live (it should land on thank-you.html).

Page addresses in this version look like /atlanta.html (instead of /atlanta/).
Both work fine on GitHub Pages.
