import { theme } from '#tailwind-config'
export const screens = theme?.screens as any
export const sm = Number(screens.sm.slice(0, screens.sm.indexOf('px')))
export const md = Number(screens.md.slice(0, screens.md.indexOf('px')))
export const lg = Number(screens.lg.slice(0, screens.lg.indexOf('px')))
export const xl = Number(screens.xl.slice(0, screens.xl.indexOf('px')))
