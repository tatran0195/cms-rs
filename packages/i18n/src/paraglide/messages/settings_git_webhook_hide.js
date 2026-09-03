import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء السر","bn":"গোপন গোপন করুন","de":"Geheimnis verbergen","en":"Hide secret","es":"Ocultar secreto","fr":"Cacher le secret","hi":"रहस्य छिपाओ","id":"Sembunyikan rahasia","pt-BR":"Ocultar segredo","ru":"Скрыть секрет","ur":"راز چھپائیں۔","zh-CN":"隐藏秘密"};

export function settings_git_webhook_hide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
