import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر الآن","bn":"এখন প্রকাশ করুন","de":"Jetzt veröffentlichen","en":"Publish now","es":"Publicar ahora","fr":"Publier maintenant","hi":"अभी प्रकाशित करें","id":"Publikasikan sekarang","pt-BR":"Publique agora","ru":"Опубликовать сейчас","ur":"ابھی شائع کریں۔","zh-CN":"立即发布"};

export function publish_now(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
