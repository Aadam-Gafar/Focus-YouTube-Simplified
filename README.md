# Focus for YouTube

> This is not YouTube as entertainment. It is YouTube as a tool.

A lightweight browser extension that strips YouTube down to the essentials by hiding recommendations, distractions, and dark patterns with pure CSS. No JavaScript, no tracking, no background processes.

## What it removes

### Header
- Hamburger menu and left sidebar
- Notification bell
- Create button

### Watch page
- Right-hand recommendations sidebar
- End-of-video recommendation grid
- End cards overlaid on the video
- Subscribe button
- Download, Save, and More (...) buttons
- Comment input box
- Comment reply and engagement bars
- Info cards under the description

### Search page
- Shelf recommendations
- Shorts shelves
- Channel cards
- Collapsed sidebar

## What it keeps

Everything you actually need: the search bar, the video player, comments (read-only), the description, and your account controls.

## Design principles

- **CSS only** - no JavaScript means no overhead, no permissions, no risk
- **No feature creep** - if it doesn't reduce distraction, it doesn't belong
- **Minimal footprint** - one stylesheet, one manifest, one icon
- **Non-destructive** - hides elements visually, does not modify the DOM

## Known limitations

- YouTube frequently updates its internal class names and element structure. If something stops working, the relevant selector likely needs updating.
- Some elements use YouTube's custom web components (e.g. `ytd-*`) which may behave differently across page navigations due to YouTube's single-page app architecture.
- The watch page centering (`#primary` offsets) is tuned for typical desktop widths and may need adjustment on very large or ultrawide screens.