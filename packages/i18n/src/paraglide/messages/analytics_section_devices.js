import { getLocale } from '../runtime.js';

const translations = {"ar":"الأجهزة","bn":"ডিভাইস","de":"Geräte","en":"Devices","es":"Dispositivos","fr":"Appareils","hi":"उपकरण","id":"Perangkat","pt-BR":"Dispositivos","ru":"Устройства","ur":"آلات","zh-CN":"设备"};

export function analytics_section_devices(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
