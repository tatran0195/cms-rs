import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط مشروع GitLab لاستضافة المحتوى كملفات.","bn":"ফাইল হিসেবে কনটেন্ট হোস্ট করতে একটি GitLab প্রজেক্ট সংযুক্ত করুন।","de":"Verbinden Sie ein GitLab-Projekt, um Inhalte als Dateien zu hosten.","en":"Connect a GitLab project to host content as files.","es":"Conecta un proyecto de GitLab para alojar contenido como archivos.","fr":"Connectez un projet GitLab pour héberger le contenu sous forme de fichiers.","hi":"फ़ाइलों के रूप में सामग्री होस्ट करने के लिए एक GitLab परियोजना कनेक्ट करें।","id":"Hubungkan proyek GitLab ke host konten sebagai berkas.","pt-BR":"Conecte um projeto GitLab para hospedar conteúdo como arquivos.","ru":"Подключите проект GitLab для размещения контента в виде файлов.","ur":"مواد کو بطور فائلوں کی میزبانی کرنے کے لیے GitLab پروجیکٹ منسلک کریں ۔","zh-CN":"连接一个 GitLab 项目, 将内容作为文件主机 。"};

export function settings_integrations_gitlab_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
