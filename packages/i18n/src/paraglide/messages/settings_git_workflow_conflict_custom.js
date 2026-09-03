import { getLocale } from '../runtime.js';

const translations = {"ar":"حل مخصص","bn":"কাস্টম রেজোলিউশন","de":"Benutzerdefinierte Auflösung","en":"Custom resolution","es":"Resolución personalizada","fr":"Résolution personnalisée","hi":"कस्टम रिज़ॉल्यूशन","id":"Resolusi khusus","pt-BR":"Resolução personalizada","ru":"Пользовательское разрешение","ur":"حسب ضرورت ریزولوشن","zh-CN":"自定义分辨率"};

export function settings_git_workflow_conflict_custom(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
