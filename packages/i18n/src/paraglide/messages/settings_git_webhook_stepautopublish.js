import { getLocale } from '../runtime.js';

const translations = {"ar":"النشر التلقائي","bn":"স্বয়ংক্রিয় প্রকাশ","de":"Automatisch veröffentlichen","en":"Auto-publish","es":"Publicación automática","fr":"Publication automatique","hi":"स्वतः प्रकाशित","id":"Publikasikan otomatis","pt-BR":"Publicar automaticamente","ru":"Автоматическая публикация","ur":"خودکار اشاعت","zh-CN":"自动发布"};

export function settings_git_webhook_stepautopublish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
