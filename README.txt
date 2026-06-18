GEORGIAMEDICAREENROLLMENT.COM  —  complete website package
===========================================================

This zip is the ENTIRE site. To update GitHub: delete everything currently
in the repo and upload everything from this zip (see steps below).

WHAT'S INSIDE
- index.html .................. homepage (served at the domain root)
- 33 .html pages .............. all city, region, plan, and info pages
- site.css, site.js ........... shared styling + behavior (every page uses them)
- 8 photos (.jpg/.webp) ....... the local imagery, already wired into the pages
- robots.txt, sitemap.xml, llms.txt, llms-full.txt ... crawl + AI discovery
- CNAME ....................... your custom domain (georgiamedicareenrollment.com)
- .nojekyll ................... tells GitHub Pages to serve files as-is (keep it; meant to be empty)

NOTE: links are now RELATIVE, so the site renders correctly both at the
temporary GitHub preview address (username.github.io/repo/) AND at your
custom domain. That was the cause of the earlier "unstyled / no images" problem.

DEPLOY (GitHub Pages)
1. Open your repo on github.com. Delete the old files (or delete the repo and
   make a new Public one).
2. Click "Add file" -> "Upload files".
3. Unzip this package on your computer, then select ALL the files inside
   (including the hidden .nojekyll and CNAME) and drag them in together. Commit.
4. Settings -> Pages -> Deploy from a branch -> main -> / (root) -> Save.
5. Wait ~2 minutes. Live at https://<username>.github.io/<repo>/ and at your
   domain once DNS is set.

DNS for georgiamedicareenrollment.com (apex): four A records ->
185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
www (optional): CNAME -> <username>.github.io
Then Settings -> Pages -> Enforce HTTPS.

PHOTOS — which pages have them
- Homepage and most cities/regions: keep the drawn (SVG) landscape scenes.
- Atlanta, Savannah, Columbus, North Georgia, and the Veterans page: real photos.

ALREADY DONE (no action needed)
- Phone number set to (770) 285-5174 throughout.
- Medicare disclaimer counts filled in (8 organizations / 87 products).
- Base names corrected to current: Fort Benning (Columbus), Fort Gordon (Augusta).

OPTIONAL, WHEN YOU'RE READY (just ask)
- Add your headshot to the "Who you'll be working with" section (send a photo).
- Set a real social-share preview image (link previews currently reference a
  file that isn't included, so they show no image).
- Add photos for more cities (Augusta, Macon, Gainesville, etc.) when you have them.
