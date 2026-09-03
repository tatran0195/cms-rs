import { getLocale } from '../runtime.js';

const translations = {"ar":"اضبط استيراد المستندات من مستودعات عامة.","bn":"ডক্স সামগ্রীর জন্য পাবলিক রিপোজিটরি আমদানি কনফিগার করুন ।","de":"Konfigurieren Sie öffentliche Repository-Importe für Docs-Inhalte.","en":"Configure public repository imports for docs content.","es":"Configurar las importaciones del repositorio público para el contenido de los documentos.","fr":"Configurer les importations de dépôts publics pour le contenu des documents.","hi":"दस्तावेज़ सामग्री के लिए सार्वजनिक रिपोजिटरी आयात कॉन्फ़िगर करें।","id":"Atur impor repositori publik bagi isi dokumen.","pt-BR":"Configurar as importações do repositório público para o conteúdo do documento.","ru":"Настройте импорт контента документации из публичного репозитория.","ur":"دستاویزات کے مواد کے لئے عوامی ذخیرہ کی درآمدات کو ترتیب دیں ۔","zh-CN":"配置文档内容的公共仓库导入。"};

export function settings_integrations_github_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
