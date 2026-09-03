import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ سرًا أولًا، ثم أضفه إلى webhook مستودعك.","bn":"প্রথমে একটি গোপনীয়তা তৈরি করুন, তারপর এটি আপনার সংগ্রহস্থল ওয়েবহুকে যোগ করুন।","de":"Generieren Sie zunächst ein Geheimnis und fügen Sie es dann Ihrem Repository-Webhook hinzu.","en":"Generate a secret first, then add it to your repository webhook.","es":"Primero genere un secreto y luego agréguelo al webhook de su repositorio.","fr":"Générez d’abord un secret, puis ajoutez-le au webhook de votre référentiel.","hi":"पहले एक रहस्य उत्पन्न करें, फिर उसे अपने रिपॉजिटरी वेबहुक में जोड़ें।","id":"Buat rahasia terlebih dahulu, lalu tambahkan ke webhook repositori Anda.","pt-BR":"Gere um segredo primeiro e depois adicione-o ao webhook do seu repositório.","ru":"Сначала создайте секрет, а затем добавьте его в вебхук репозитория.","ur":"پہلے ایک راز بنائیں، پھر اسے اپنے ریپوزٹری ویب ہک میں شامل کریں۔","zh-CN":"首先生成一个密钥，然后将其添加到您的存储库 Webhook 中。"};

export function settings_git_webhook_nosecret(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
