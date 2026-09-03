import { getLocale } from '../runtime.js';

const translations = {"ar":"إنشاء طلب سحب أو تحديثه","bn":"পিআর তৈরি বা আপডেট করুন","de":"PR erstellen oder aktualisieren","en":"Create or update PR","es":"Crear o actualizar PR","fr":"Créer ou mettre à jour un PR","hi":"पीआर बनाएं या अपडेट करें","id":"Membuat atau memperbarui PR","pt-BR":"Criar ou atualizar relações públicas","ru":"Создайте или обновите PR","ur":"PR بنائیں یا اپ ڈیٹ کریں۔","zh-CN":"创建或更新 PR"};

export function settings_git_workflow_nav_publish(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
