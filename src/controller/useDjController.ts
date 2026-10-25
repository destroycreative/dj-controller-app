import { useEffect, useState } from 'react'
import { defaultDeck, tracks, type DeckId, type DeckState, type Track } from '../model/music'

type SessionState = {
  decks: Record<DeckId, DeckState>
  crossfader: number
  master: number
  selectedDeck: DeckId
  search: string
  isRecording: boolean
}

export function useDjController() {
  const [session, setSession] = useState<SessionState>({
    decks: { A: defaultDeck(tracks[0]), B: defaultDeck(tracks[1]) },
    crossfader: 50,
    master: 82,
    selectedDeck: 'A',
    search: '',
    isRecording: false,
  })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSession((current) => ({
        ...current,
        decks: Object.fromEntries(Object.entries(current.decks).map(([id, deck]) => [id, deck.isPlaying
          ? { ...deck, position: Math.min(deck.position + 1, deck.track.duration) }
          : deck])) as Record<DeckId, DeckState>,
      }))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const updateDeck = (deckId: DeckId, update: Partial<DeckState>) => setSession((current) => ({
    ...current,
    decks: { ...current.decks, [deckId]: { ...current.decks[deckId], ...update } },
  }))

  return {
    session,
    filteredTracks: tracks.filter((track) => `${track.title} ${track.artist} ${track.genre}`.toLowerCase().includes(session.search.toLowerCase())),
    setSearch: (search: string) => setSession((current) => ({ ...current, search })),
    selectDeck: (selectedDeck: DeckId) => setSession((current) => ({ ...current, selectedDeck })),
    loadTrack: (track: Track, deckId = session.selectedDeck) => updateDeck(deckId, { track, position: 0, isPlaying: false }),
    togglePlaying: (deckId: DeckId) => updateDeck(deckId, { isPlaying: !session.decks[deckId].isPlaying }),
    toggleCue: (deckId: DeckId) => updateDeck(deckId, { isCue: !session.decks[deckId].isCue }),
    toggleSync: (deckId: DeckId) => updateDeck(deckId, { isSync: !session.decks[deckId].isSync }),
    setDeckValue: (deckId: DeckId, key: 'gain' | 'pitch' | 'position', value: number) => updateDeck(deckId, { [key]: value }),
    setCrossfader: (crossfader: number) => setSession((current) => ({ ...current, crossfader })),
    setMaster: (master: number) => setSession((current) => ({ ...current, master })),
    toggleRecording: () => setSession((current) => ({ ...current, isRecording: !current.isRecording })),
  }
}
