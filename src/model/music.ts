export type DeckId = 'A' | 'B'

export type Track = {
  id: string
  title: string
  artist: string
  album: string
  bpm: number
  key: string
  duration: number
  color: string
  genre: string
}

export type DeckState = {
  track: Track
  isPlaying: boolean
  isSync: boolean
  isCue: boolean
  position: number
  gain: number
  pitch: number
}

export const tracks: Track[] = [
  { id: 'neon-drift', title: 'Neon Drift', artist: 'Astra Vale', album: 'Afterimage', bpm: 124, key: '8A', duration: 256, color: '#4de2e6', genre: 'Melodic House' },
  { id: 'night-runner', title: 'Night Runner', artist: 'Kairo Bloom', album: 'City Lights', bpm: 128, key: '11B', duration: 231, color: '#ff4fbf', genre: 'Disco House' },
  { id: 'gravity-well', title: 'Gravity Well', artist: 'Mira Sol', album: 'Orbitals', bpm: 122, key: '2A', duration: 274, color: '#b7ff5a', genre: 'Progressive' },
  { id: 'soft-focus', title: 'Soft Focus', artist: 'North Arcade', album: 'Low Resolution', bpm: 118, key: '6B', duration: 198, color: '#ffc857', genre: 'Indie Dance' },
  { id: 'parallel-lines', title: 'Parallel Lines', artist: 'Glass Index', album: 'Signal Bloom', bpm: 126, key: '9A', duration: 247, color: '#a68cff', genre: 'Electro' },
  { id: 'magnetic-south', title: 'Magnetic South', artist: 'Lumen Park', album: 'Tidal Memory', bpm: 120, key: '4A', duration: 221, color: '#ff8d5c', genre: 'Deep House' },
]

export const defaultDeck = (track: Track): DeckState => ({
  track,
  isPlaying: false,
  isSync: true,
  isCue: false,
  position: 0,
  gain: 78,
  pitch: 0,
})
