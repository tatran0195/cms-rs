import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر عند الدفع","bn":"ধাক্কা উপর স্থাপন","de":"Bereitstellung per Push","en":"Deploy on push","es":"Implementar al presionar","fr":"Déployer en push","hi":"पुश पर तैनात करें","id":"Terapkan saat push","pt-BR":"Implantar por push","ru":"Развертывание при нажатии","ur":"پش پر تعینات کریں۔","zh-CN":"推送部署"};

export function settings_git_webhook_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
