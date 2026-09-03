import { getLocale } from '../runtime.js';

const translations = {"ar":"يجب إصلاح عمليات إعادة التوجيه قبل النشر","bn":"পুনঃনির্দেশ প্রকাশের আগে ঠিক করতে হবে","de":"Weiterleitungen müssen vor der Veröffentlichung behoben werden","en":"Redirects must be fixed before publishing","es":"Las redirecciones deben corregirse antes de publicar","fr":"Les redirections doivent être corrigées avant la publication","hi":"प्रकाशन से पहले रीडायरेक्ट को ठीक किया जाना चाहिए","id":"Pengalihan harus diperbaiki sebelum dipublikasikan","pt-BR":"Os redirecionamentos devem ser corrigidos antes da publicação","ru":"Перед публикацией необходимо исправить перенаправления.","ur":"شائع کرنے سے پہلے ری ڈائریکٹ کو درست کرنا ضروری ہے۔","zh-CN":"发布前必须修复重定向"};

export function publish_redirectsblocked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
