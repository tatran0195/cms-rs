import { getLocale } from '../runtime.js';

const translations = {"ar":"نجح التحقق من تكامل Nibleaf.","bn":"Nibleaf ইন্টিগ্রেশন যাচাইকরণ সফল হয়েছে ।","de":"Nibleaf-Integrationsüberprüfung erfolgreich.","en":"Nibleaf integration verification succeeded.","es":"La verificación de la integración de Nibleaf ha tenido éxito.","fr":"La vérification de l'intégration de Nibleaf a réussi.","hi":"Nibleaf एकीकरण सत्यापन सफल रहा।","id":"Integrasi Nibleaf berhasil.","pt-BR":"A verificação da integração do Nibleaf foi bem sucedida.","ru":"Интеграция Nibleaf прошла успешно.","ur":"Nibleaf انضمام کی توثیق کامیاب ہوگئی ۔","zh-CN":"Nibleaf整合核查成功."};

export function settings_integrations_testmessage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
