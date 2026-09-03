import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط مستودع Git عامًا واستورد ملفات Markdown إلى صفحاتك.","bn":"একটি সর্বজনীন Git সংগ্রহস্থল সংযুক্ত করুন এবং আপনার পৃষ্ঠাগুলিতে এর Markdown আমদানি করুন৷","de":"Verbinden Sie ein öffentliches Git-Repository und importieren Sie dessen Markdown in Ihre Seiten.","en":"Connect a public Git repository and import its Markdown into your pages.","es":"Conecte un repositorio público de Git e importe su Markdown a sus páginas.","fr":"Connectez un référentiel Git public et importez son Markdown dans vos pages.","hi":"एक सार्वजनिक Git रिपॉजिटरी कनेक्ट करें और उसके Markdown को अपने पृष्ठों में आयात करें।","id":"Hubungkan repositori Git publik dan impor Markdown ke halaman Anda.","pt-BR":"Conecte um repositório Git público e importe seu Markdown para suas páginas.","ru":"Подключите общедоступный репозиторий Git и импортируйте его Markdown на свои страницы.","ur":"ایک عوامی Git ذخیرہ کو مربوط کریں اور اس کا Markdown اپنے صفحات میں درآمد کریں۔","zh-CN":"连接公共 Git 存储库并将其 Markdown 导入到您的页面中。"};

export function settings_git_import_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
