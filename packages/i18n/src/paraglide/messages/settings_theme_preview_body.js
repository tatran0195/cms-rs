import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم إعدادات واضحة وآمنة، مع بقاء أوامر الشيفرة باتجاهها الصحيح.","bn":"Use safe, predictable defaults while every component inherits your semantic theme.","de":"Use safe, predictable defaults while every component inherits your semantic theme.","en":"Use safe, predictable defaults while every component inherits your semantic theme.","es":"Use safe, predictable defaults while every component inherits your semantic theme.","fr":"Use safe, predictable defaults while every component inherits your semantic theme.","hi":"Use safe, predictable defaults while every component inherits your semantic theme.","id":"Use safe, predictable defaults while every component inherits your semantic theme.","pt-BR":"Use safe, predictable defaults while every component inherits your semantic theme.","ru":"Use safe, predictable defaults while every component inherits your semantic theme.","ur":"Use safe, predictable defaults while every component inherits your semantic theme.","zh-CN":"Use safe, predictable defaults while every component inherits your semantic theme."};

export function settings_theme_preview_body(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
