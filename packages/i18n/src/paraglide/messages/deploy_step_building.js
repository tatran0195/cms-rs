import { getLocale } from '../runtime.js';

const translations = {"ar":"بناء اللقطة","bn":"বিল্ডিং স্ন্যাপশট","de":"Bau-Schnappschuss","en":"Building snapshot","es":"Instantánea del edificio","fr":"Aperçu du bâtiment","hi":"बिल्डिंग स्नैपशॉट","id":"Membangun cuplikan","pt-BR":"Criando instantâneo","ru":"Снимок здания","ur":"عمارت کا اسنیپ شاٹ","zh-CN":"建筑快照"};

export function deploy_step_building(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
