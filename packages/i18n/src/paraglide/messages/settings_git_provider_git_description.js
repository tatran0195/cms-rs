import { getLocale } from '../runtime.js';

const translations = {"ar":"استنسخ مستودع Git عام عبر http(s)","bn":"একটি সর্বজনীন http(গুলি) Git সংগ্রহস্থল ক্লোন করুন","de":"Klonen Sie ein öffentliches http(s)-Git-Repository","en":"Clone a public http(s) Git repository","es":"Clonar un repositorio Git http(s) público","fr":"Cloner un dépôt Git http(s) public","hi":"एक सार्वजनिक http(s) Git रिपॉजिटरी को क्लोन करें","id":"Kloning repositori http(s) Git publik","pt-BR":"Clonar um repositório Git http(s) público","ru":"Клонирование общедоступного http(s) репозитория Git","ur":"عوامی http(s) Git ذخیرہ کو کلون کریں۔","zh-CN":"克隆公共 http(s) Git 存储库"};

export function settings_git_provider_git_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
