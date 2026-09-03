import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات تنطبق على جميع المستخدمين في مساحة العمل هذه.","bn":"সেটিংস যা এই কর্মক্ষেত্রে প্রত্যেকের জন্য প্রযোজ্য।","de":"Einstellungen, die für alle in diesem Arbeitsbereich gelten.","en":"Settings that apply to everyone in this workspace.","es":"Configuraciones que se aplican a todos en este espacio de trabajo.","fr":"Paramètres qui s’appliquent à tout le monde dans cet espace de travail.","hi":"ऐसी सेटिंग्स जो इस कार्यक्षेत्र में सभी पर लागू होती हैं।","id":"Pengaturan yang berlaku untuk semua orang di ruang kerja ini.","pt-BR":"Configurações que se aplicam a todos neste espaço de trabalho.","ru":"Настройки, которые применяются ко всем в этой рабочей области.","ur":"وہ ترتیبات جو اس ورک اسپیس میں ہر کسی پر لاگو ہوتی ہیں۔","zh-CN":"应用于此工作区中每个人的设置。"};

export function settings_workspace_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
