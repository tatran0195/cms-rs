import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث النشر التلقائي","bn":"স্বয়ংক্রিয় প্রকাশ আপডেট করা হয়েছে","de":"Automatische Veröffentlichung aktualisiert","en":"Auto-publish updated","es":"Publicación automática actualizada","fr":"Publication automatique mise à jour","hi":"स्वतः-प्रकाशन अद्यतन किया गया","id":"Publikasikan otomatis diperbarui","pt-BR":"Publicação automática atualizada","ru":"Автоматическая публикация обновлена","ur":"خودکار اشاعت کو اپ ڈیٹ کر دیا گیا۔","zh-CN":"自动发布更新"};

export function settings_git_webhook_autopublishsaved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
