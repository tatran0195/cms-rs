import { getLocale } from '../runtime.js';

const translations = {"ar":"GitLab: الإعدادات ← Webhooks — الصق رابط الاستلام، وضَع السر في «Secret token»، وفعّل «Push events».","bn":"GitLab: সেটিংস → ওয়েবহুকস — পেলোড ইউআরএল পেস্ট করুন, সিক্রেটটি \"সিক্রেট টোকেন\"-এ রাখুন এবং \"পুশ ইভেন্ট\" সক্ষম করুন।","de":"GitLab: Einstellungen → Webhooks – fügen Sie die Payload-URL ein, geben Sie das Geheimnis in „Geheimes Token“ ein und aktivieren Sie „Push-Ereignisse“.","en":"GitLab: Settings → Webhooks — paste the payload URL, put the secret in “Secret token”, and enable “Push events”.","es":"GitLab: Configuración → Webhooks: pegue la URL de carga útil, coloque el secreto en \"Token secreto\" y habilite \"Eventos push\".","fr":"GitLab : Paramètres → Webhooks : collez l'URL de la charge utile, placez le secret dans « Jeton secret » et activez « Événements push ».","hi":"GitLab: सेटिंग्स → वेबहुक - पेलोड यूआरएल पेस्ट करें, सीक्रेट को \"सीक्रेट टोकन\" में डालें, और \"पुश इवेंट\" सक्षम करें।","id":"GitLab: Pengaturan → Webhook — tempelkan URL payload, masukkan rahasia di “Token rahasia”, dan aktifkan “Acara push”.","pt-BR":"GitLab: Configurações → Webhooks — cole o URL da carga útil, coloque o segredo em “Token secreto” e habilite “Eventos push”.","ru":"GitLab: Настройки → Веб-перехватчики — вставьте URL-адрес полезной нагрузки, поместите секрет в «Секретный токен» и включите «Push-события».","ur":"GitLab: ترتیبات → ویب ہکس — پے لوڈ URL چسپاں کریں، راز کو \"خفیہ ٹوکن\" میں رکھیں، اور \"پش ایونٹس\" کو فعال کریں۔","zh-CN":"GitLab：设置 → Webhooks — 粘贴负载 URL，将密钥放入“秘密令牌”中，并启用“推送事件”。"};

export function settings_git_webhook_instructions_gitlab(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
