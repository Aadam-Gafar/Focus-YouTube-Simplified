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
- Hides YouTube Shorts shelves
- Removes end cards and end-of-video autoplay recommendations
- Removes subscribe and download buttons
- Removes comment input (comments remain readable)
- Disables channel links
- Centres the video player

Lightweight CSS-only extension - no JavaScript, no tracking, no background processes. Works on all YouTube pages including watch, search, and homepage.

Development by Aadam Gafar

Source code: https://github.com/Aadam-Gafar/Focus-YouTube-Simplified
