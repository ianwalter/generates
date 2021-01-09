import clone from '@ianwalter/clone'
import { del, set, get } from '@generates/dotter'

export function excluding (src, ...props) {
  const dest = clone(src)
  for (const prop of props) del(dest, prop)
  return dest
}

export function including (src, ...props) {
  const dest = {}
  for (const prop of props) set(dest, prop, get(src, prop))
  return dest
}

export function map (src, map) {
  const dest = {}
  const entries = Object.entries(map)
  for (const [key, val] of Object.entries(src)) {
    const [toKey] = entries.find(e => e[1] === key)
    dest[toKey] = val
  }
  return dest
}

export function remap (src, map) {
  const dest = {}
  for (const [key, val] of Object.entries(src)) dest[map[key]] = val
  return dest
}
