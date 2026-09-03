import { getLocale } from '../runtime.js';

const translations = {"ar":"تحرير صفحة","bn":"Page Edited","de":"Page Edited","en":"Page Edited","es":"Page Edited","fr":"Page Edited","hi":"Page Edited","id":"Page Edited","pt-BR":"Page Edited","ru":"Page Edited","ur":"Page Edited","zh-CN":"Page Edited"};

export function admin_activity_pageedited(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
