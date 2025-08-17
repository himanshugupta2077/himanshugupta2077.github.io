/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "en": {
        "site.title": {
            text: "Home"
        },
        "site.description": {
            text: "portfolio of Himanshu Gupta"
        },
        "profile.description": {
            text: "your neighborhood friendly hacker"
        },
        "blog.lastUpdated": {
            text: "Last updated:"
        },
        "sidebar.tableOfContents": {
            text: "Table of Contents"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    },
    "es": {
        "site.title": {
            text: "Home"
        },
        "site.description": {
            text: "portfolio of Himanshu Gupta"
        },
        "profile.description": {
            text: "your neighborhood friendly hacker"
        },
        "blog.lastUpdated": {
            text: "Última actualización:"
        },
        "sidebar.tableOfContents": {
            text: "Tabla de contenidos"
        },
        "project.platform": {
            text: "PLATAFORMA"
        },
        "project.stack": {
            text: "PILA"
        },
        "project.website": {
            text: "WEBSITE"
        }
    }
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };