import { getLocale } from '../runtime.js';

const translations = {"ar":"تم ربط {name}","bn":"{name} সংযুক্ত","de":"{name} verbunden","en":"{name} connected","es":"{name} conectado","fr":"{name}connecté","hi":"{name}जुड़े","id":"{name}tersambung","pt-BR":"{name}ligado","ru":"{name}соединенный","ur":"{name} منسلک","zh-CN":"{name}已连接"};

export function settings_integrations_connectedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
