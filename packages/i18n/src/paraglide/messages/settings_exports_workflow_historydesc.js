import { getLocale } from '../runtime.js';

const translations = {"ar":"راقب العناصر واستعدها ونزّلها","bn":"নিরীক্ষণ, পুনরুদ্ধার, এবং নিদর্শন ডাউনলোড করুন","de":"Artefakte überwachen, wiederherstellen und herunterladen","en":"Monitor, recover, and download artifacts","es":"Monitorear, recuperar y descargar artefactos","fr":"Surveiller, récupérer et télécharger des artefacts","hi":"कलाकृतियों की निगरानी करें, पुनर्प्राप्त करें और डाउनलोड करें","id":"Pantau, pulihkan, dan unduh artefak","pt-BR":"Monitore, recupere e baixe artefatos","ru":"Мониторинг, восстановление и загрузка артефактов","ur":"نمونے کی نگرانی، بازیافت اور ڈاؤن لوڈ کریں۔","zh-CN":"监控、恢复和下载工件"};

export function settings_exports_workflow_historydesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
