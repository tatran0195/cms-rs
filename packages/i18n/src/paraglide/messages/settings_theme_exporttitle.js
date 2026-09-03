import { getLocale } from '../runtime.js';

const translations = {"ar":"التصدير والمشاركة","bn":"রপ্তানি এবং ভাগ","de":"Exportieren und teilen","en":"Export and share","es":"Exportar y compartir","fr":"Exporter et partager","hi":"निर्यात करें और साझा करें","id":"Ekspor dan bagikan","pt-BR":"Exportar e compartilhar","ru":"Экспортируйте и делитесь","ur":"ایکسپورٹ اور شیئر کریں۔","zh-CN":"导出并分享"};

export function settings_theme_exporttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
