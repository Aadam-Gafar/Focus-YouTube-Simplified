# Release Guide

Use this checklist when packaging Mono for the Chrome Web Store and Mozilla Add-ons.

## Extension package

Create a zip from the repository root that includes only the runtime extension files:

```text
manifest.json
styles.css
art/icon_128.png
```

Do not include these files in the extension upload zip:

```text
README.md
RELEASE.md
art/designs.free
art/marquee_1400_560.png
art/promo_440_280.png
art/splash_1280_800.png
art/ss1_1280_800.png
art/ss2_1280_800.png
art/ss3_1280_800.png
art/ss4_1280_800.png
```

## Chrome Web Store

Upload the extension package zip containing:

```text
manifest.json
styles.css
art/icon_128.png
```

Store assets:

```text
art/icon_128.png
art/promo_440_280.png
art/marquee_1400_560.png
art/splash_1280_800.png
art/ss1_1280_800.png
art/ss2_1280_800.png
art/ss3_1280_800.png
art/ss4_1280_800.png
```

## Mozilla Add-ons

Upload the same extension package zip containing:

```text
manifest.json
styles.css
art/icon_128.png
```

Store assets:

```text
art/icon_128.png
art/splash_1280_800.png
art/ss1_1280_800.png
art/ss2_1280_800.png
art/ss3_1280_800.png
art/ss4_1280_800.png
```

## Store listing

Meet Mono - the tired little robot who tidied up your YouTube so you didn't have to. Don't bother thanking him. He'll probably ignore you.

This is a lightweight browser extension that strips YouTube down to the essentials by hiding recommendations, distractions, and dark patterns with pure CSS. No JavaScript, no tracking, no background processes.

Features:
- Blocks YouTube homepage recommendations
- Removes sidebar and navigation menus
- Hides notification and create buttons
- Hides YouTube Shorts shelves
- Hides individual Shorts search results
- Hides channel cards and channel search links
- Hides search result shelves and filter clutter
- Removes end cards and end-of-video autoplay recommendations
- Removes fullscreen recommendation overlays
- Removes subscribe, join, download, save, and more buttons
- Removes comment input (comments remain readable)
- Removes comment engagement bars and creator reply indicators
- Removes live chat replay clutter and sidebar carousels
- Removes info cards under video descriptions
- Disables channel links
- Centres the video player

Lightweight CSS-only extension - no JavaScript, no tracking, no background processes. Works on all YouTube pages including watch, search, and homepage.

Development: Aadam Gafar
Website: https://monoapp.uk
Contact: contact@monoapp.uk
Source code: https://github.com/Aadam-Gafar/Mono-for-YouTube
Website: https://monoapp.uk

Contact: contact@monoapp.uk

Source code: https://github.com/Aadam-Gafar/Focus-YouTube-Simplified
