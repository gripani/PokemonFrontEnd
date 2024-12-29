import type { MoveType } from './types'

interface GenerationQuery {
  limit: number
  offset: number
}

export const GENERATION_MAP: Record<string, GenerationQuery> = {
  'generation-i': { limit: 151, offset: 0 },
  'generation-ii': { limit: 100, offset: 151 },
  'generation-iii': { limit: 135, offset: 251 }
}

export const MOVES_TYPES_SRC_MAP: Record<MoveType, string> = {
  PHYSICAL: 'https://archives.bulbagarden.net/media/upload/9/92/PhysicalIC_HGSS.png',
  SPECIAL: 'https://archives.bulbagarden.net/media/upload/8/80/SpecialIC_HGSS.png',
  STATUS: 'https://archives.bulbagarden.net/media/upload/f/f6/StatusIC_HGSS.png'
}
