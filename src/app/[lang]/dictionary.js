import 'server-only'

const dictionary = {
    "en-US": () => import('lang/en.json').then(module => module.default),
    "en": () => import('lang/en.json').then(module => module.default),
    "fa-IR": () => import('lang/fa.json').then(module => module.default),
    "fa": () => import('lang/fa.json').then(module => module.default)
}

export const getLang = async (locale) => dictionary[locale]()