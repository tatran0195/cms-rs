import { getLocale } from '../runtime.js';

const translations = {"ar":"دقيقة قراءة","bn":"মিনিট পড়া","de":"Min. gelesen","en":"min read","es":"min de lectura","fr":"lecture min.","hi":"मिनट पढ़ा","id":"min baca","pt-BR":"minutos de leitura","ru":"минута чтения","ur":"منٹ پڑھیں","zh-CN":"分钟阅读"};

export function site_minread(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
