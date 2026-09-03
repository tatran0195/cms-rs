import { getLocale } from '../runtime.js';

const translations = {"ar":"مشاهدات الصفحة · جميع المشاريع","bn":"পৃষ্ঠা দেখা · সমস্ত প্রকল্প","de":"Seitenaufrufe · alle Projekte","en":"Pageviews · all projects","es":"Páginas vistas · todos los proyectos","fr":"Pages vues · tous les projets","hi":"पृष्ठदृश्य · सभी परियोजनाएँ","id":"Tayangan Halaman · semua proyek","pt-BR":"Visualizações de página · todos os projetos","ru":"Просмотры страниц · все проекты","ur":"پیج ویوز · تمام پروجیکٹس","zh-CN":"浏览量·所有项目"};

export function analytics_chart_pageviewsallprojects(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
