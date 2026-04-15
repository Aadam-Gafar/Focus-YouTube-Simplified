# Mono, a distraction-free YouTube extension

![Mono](art/splash_1280_800.png)

Meet **Mono** - the tired little robot who tidied up your YouTube so you didn't have to. Don't bother thanking him. He'll probably ignore you.

This is a lightweight browser extension that strips YouTube down to the essentials by hiding recommendations, distractions, and dark patterns with pure CSS. No JavaScript, no tracking, no background processes.

## What it removes

### Header
- Hamburger menu and left sidebar
- Notification bell
- Create button

### Watch page

![Watch page](art/ss1_1280_800.png)

- Right-hand recommendations sidebar
- End-of-video recommendation grid
- End cards overlaid on the video
- Subscribe button
- Download, Save, and More (...) buttons
- Comment input box
- Comment reply and engagement bars
- Info cards under the description

### Search page

![Search page](art/ss4_1280_800.png)

- Shelf recommendations
- Shorts shelves
- Channel cards
- Collapsed sidebar

### Comments

![Comments](art/ss2_1280_800.png)

- Comment input box
- Reply and engagement bars
- Creator reply indicators

## What it keeps

Everything you actually need: the search bar, the video player, comments (read-only), the description, and your account controls.

### Themes

![Night mode](art/ss3_1280_800.png)

And yes, night mode is still here. Mono isn't unreasonable.

## Installation

### [Chrome](https://chromewebstore.google.com/detail/focus-for-youtube/nppiofogichmlkadpbpkpojpidedifeh)

### [Firefox](https://addons.mozilla.org/en-US/firefox/addon/mono-extension/)

## File structure

```
mono/

├── manifest.json
├── popup.html
├── styles.css
├── art/
│   ├── bmc_popup.png
│   ├── designs.free
│   ├── icon_128.png
│   ├── marquee_1400_560.png
│   ├── promo_440_280.png
│   ├── splash_1280_800.png
│   ├── ss1_1280_800.png
│   ├── ss2_1280_800.png
│   ├── ss3_1280_800.png
│   └── ss4_1280_800.png
└── README.md
```

## Mono

Mono isn't just a random robot; his visual identity is a literal subversion of YouTube’s core UI. His face is derived directly from the YouTube Play button. By turning the iconic play triangle into a pause symbol (his oh, so tired eyes), the brand reflects the extension's primary goal: stopping the infinite loop of recommendations and giving the user a moment to breathe.

## Design principles

- **CSS only** - no JavaScript, no overhead, no permissions, no risk
- **No feature creep** - if it doesn't reduce distraction, it's out
- **Minimal footprint** - one stylesheet, one manifest, one icon
- **Non-destructive** - hides elements visually, does not modify the DOM

## Known limitations

- YouTube frequently updates its internal class names and element structure. If something stops working, the relevant selector likely needs updating.
- Some elements use YouTube's custom web components (e.g. `ytd-*`) which may behave differently across page navigations due to YouTube's single-page app architecture.
- The watch page centering (`#primary` offsets) is tuned for typical desktop widths and may need adjustment on very large or ultrawide screens.

### Support

Modern tech is often designed to hijack our attention with dark patterns and infinite feeds. I build things to fight that. If you find my tools helpful, your support is appreciated. If not, no pressure, just remember to touch grass every once in a while.

<p align="center">
  <a href="https://www.buymeacoffee.com/aadamgafar">
    <img src="art/bmc-button.png" alt="Buy Me A Coffee" width="220" />
  </a>
</p>