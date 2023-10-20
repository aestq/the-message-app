export type Mods = Record<string, boolean | undefined>
export type Additional = Array<string | undefined>

export const classNames = (cls: string, mods: Mods = {}, additional: Additional = []): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls)
  ].join(' ')
}
