import { getLocale } from '../runtime.js';

const translations = {"ar":"وثائق متعددة اللغات","bn":"বহুভাষিক ডক্স","de":"Mehrsprachige Dokumente","en":"Multilingual docs","es":"Documentos multilingües","fr":"Documents multilingues","hi":"बहुभाषी दस्तावेज़","id":"Dokumen multibahasa","pt-BR":"Documentos multilíngues","ru":"Многоязычная документация","ur":"کثیر لسانی دستاویزات","zh-CN":"多语言文档"};

export function settings_plan_selfhosted_feature_languages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
