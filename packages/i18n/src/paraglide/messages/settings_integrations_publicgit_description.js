import { getLocale } from '../runtime.js';

const translations = {"ar":"استورد التوثيق من مستودع Git عام.","bn":"একটি পাবলিক গিট রিপোজিটরি থেকে ডকুমেন্টেশন আমদানি করুন ।","de":"Dokumentationen aus einem öffentlichen Git-Repository importieren.","en":"Import documentation from a public Git repository.","es":"Importar documentación desde un repositorio público de Git.","fr":"Importer la documentation d'un dépôt public Git.","hi":"एक सार्वजनिक गिट भंडार से प्रलेखन आयात करें।","id":"Impor dokumentasi dari repositori Git publik.","pt-BR":"Importar documentação de um repositório Git público.","ru":"Импорт документации из публичного хранилища Git.","ur":"عوامی Git مخزن سے دستاویزات درآمد کریں ۔","zh-CN":"从公共 Git 仓库导入文档 。"};

export function settings_integrations_publicgit_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
