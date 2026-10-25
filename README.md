# dj-controller-app

A planning-first repository for a **mobile-friendly (iPhone/iPad) and desktop (Mac)** DJ mixing experience with virtual turntables.

## Product Direction

Build a DJ app inspired by the workflow of Serato DJ Pro, with a more colorful and simplified interface that is still practical for performance.

### Core Experience Goals

- Mix songs from a user music library
- Two virtual turntables (Deck A / Deck B)
- Crossfader and channel volume controls
- Cue/play/sync controls and track waveform display
- Dark nightclub-style UI with accessible color contrast
- Touch-first behavior on iPhone/iPad and keyboard/mouse support on Mac

## Accessibility + Visual Style

- Dark base theme to reduce eye strain in low-light environments
- High-contrast text and controls that meet WCAG-friendly contrast targets
- Colorful accents used as status signals (active deck, cue, sync, recording)
- Do not rely on color alone: pair color with icon/label/state

Example palette direction (can evolve during design):

- Background: `#0B0F1A`
- Surface: `#121A2B`
- Text Primary: `#F4F7FF`
- Accent Cyan: `#4DE2E6`
- Accent Magenta: `#FF4FBF`
- Accent Lime: `#B7FF5A`
- Warning: `#FFC857`

## MVC App Plan

Use MVC boundaries so each area can be ideated independently.

### Model

Owns domain state and business rules:

- `Track` (id, title, artist, bpm, key, duration, path)
- `Library` (index/search/filter tracks)
- `Deck` (loaded track, playhead, pitch, gain, cue points)
- `Mixer` (crossfader, channel gains, EQ placeholders)
- `Session` (active decks, transport state, routing)

### View

Platform-adaptive UI components:

- Deck views (waveform, jog wheel, transport)
- Mixer strip (crossfader, channel controls, levels)
- Library browser (search, sort, load-to-deck actions)
- Performance status indicators (sync/cue/clip/warn)
- Layout profiles:
  - iPhone: stacked, thumb-reachable controls
  - iPad/Mac: split layout with persistent library + dual decks

### Controller

Coordinates user intent and model/view updates:

- Load track to deck
- Start/stop/cue/sync deck actions
- Crossfader and gain changes
- Library search and selection interactions
- Input routing for touch gestures and desktop shortcuts

## Suggested Module Layout

```text
src/
  model/
    track.*
    library.*
    deck.*
    mixer.*
    session.*
  view/
    components/
      deck-view.*
      mixer-view.*
      library-view.*
    themes/
      dark-accessible.*
  controller/
    transport-controller.*
    mixer-controller.*
    library-controller.*
```

## MVP Roadmap

1. **Foundation**: scaffold MVC modules + dark accessible theme tokens
2. **Library + Deck Load**: browse local library and load tracks to either deck
3. **Basic Mixing**: play/pause/cue + crossfader + channel gain
4. **Performance UX**: responsive layout polish for iPhone/iPad/Mac
5. **Iteration**: visual identity, effects, and advanced DJ workflows
