import { getLocale } from '../runtime.js';

const translations = {"ar":"مساحة عمل تقنية مع شريط أوامر وتنقّل كثيف ومساحات عريضة للمحتوى البرمجي.","bn":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","de":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","en":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","es":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","fr":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","hi":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","id":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","pt-BR":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","ru":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","ur":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces.","zh-CN":"A technical workbench with a command rail, dense navigation, and wide code-first content surfaces."};

export function settings_theme_preset_signal_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
