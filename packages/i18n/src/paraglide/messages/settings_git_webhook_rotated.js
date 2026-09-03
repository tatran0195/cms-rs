import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تدوير سر الـ webhook — حدّثه في إعدادات مستودعك.","bn":"ওয়েবহুক গোপন ঘোরানো — আপনার সংগ্রহস্থল সেটিংসে এটি আপডেট করুন।","de":"Webhook-Secret gedreht – aktualisieren Sie es in Ihren Repository-Einstellungen.","en":"Webhook secret rotated — update it in your repository settings.","es":"Secreto del webhook rotado: actualícelo en la configuración de su repositorio.","fr":"Rotation du secret Webhook : mettez-le à jour dans les paramètres de votre référentiel.","hi":"वेबहुक सीक्रेट घुमाया गया - इसे अपनी रिपॉजिटरी सेटिंग्स में अपडेट करें।","id":"Rahasia webhook diputar — perbarui di pengaturan repositori Anda.","pt-BR":"Segredo do webhook girado – atualize-o nas configurações do repositório.","ru":"Секрет вебхука изменен — обновите его в настройках репозитория.","ur":"ویب ہُک سیکرٹ گھمایا گیا — اسے اپنے ریپوزٹری سیٹنگز میں اپ ڈیٹ کریں۔","zh-CN":"Webhook 秘密已轮换 - 在您的存储库设置中更新它。"};

export function settings_git_webhook_rotated(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
