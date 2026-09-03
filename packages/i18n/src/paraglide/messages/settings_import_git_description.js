import { getLocale } from '../runtime.js';

const translations = {"ar":"ملفات Markdown في أي مستودع عام على GitHub أو GitLab أو Git — اضبطه وشغّله من إعدادات Git.","bn":"Markdown যেকোনো পাবলিক GitHub, GitLab, বা প্লেইন গিট রিপোজিটরি — কনফিগার করুন এবং গিট সেটিংস থেকে এটি চালান।","de":"Markdown in jedem öffentlichen GitHub, GitLab oder einfachen Git-Repository – konfigurieren und führen Sie es über die Git-Einstellungen aus.","en":"Markdown in any public GitHub, GitLab, or plain Git repository — configure and run it from the Git settings.","es":"Markdown en cualquier GitHub, GitLab o repositorio Git simple: configúrelo y ejecútelo desde la configuración de Git.","fr":"Markdown dans n'importe quel référentiel public GitHub, GitLab ou simple Git — configurez-le et exécutez-le à partir des paramètres Git.","hi":"Markdown किसी भी सार्वजनिक GitHub, GitLab, या सादे Git रिपॉजिटरी में - इसे Git सेटिंग्स से कॉन्फ़िगर करें और चलाएं।","id":"Markdown di GitHub, GitLab, atau repositori Git biasa mana pun — konfigurasikan dan jalankan dari pengaturan Git.","pt-BR":"Markdown em qualquer repositório público GitHub, GitLab ou Git simples - configure e execute-o nas configurações do Git.","ru":"Markdown в любом общедоступном GitHub, GitLab или простом репозитории Git — настройте и запустите его из настроек Git.","ur":"Markdown کسی بھی عوامی GitHub، GitLab، یا سادہ Git ذخیرہ میں — ترتیب دیں اور اسے Git کی ترتیبات سے چلائیں۔","zh-CN":"任何公共 GitHub、GitLab 或普通 Git 存储库中的 Markdown — 从 Git 设置配置并运行它。"};

export function settings_import_git_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
