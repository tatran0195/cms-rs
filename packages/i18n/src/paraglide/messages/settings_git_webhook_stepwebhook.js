import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة الـ webhook","bn":"ওয়েবহুক যোগ করুন","de":"Fügen Sie den Webhook hinzu","en":"Add the webhook","es":"Agregar el webhook","fr":"Ajouter le webhook","hi":"वेबहुक जोड़ें","id":"Tambahkan webhook","pt-BR":"Adicione o webhook","ru":"Добавьте вебхук","ur":"ویب ہک شامل کریں۔","zh-CN":"添加网络钩子"};

export function settings_git_webhook_stepwebhook(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
