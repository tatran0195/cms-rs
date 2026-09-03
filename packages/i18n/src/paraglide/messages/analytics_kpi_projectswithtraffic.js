import { getLocale } from '../runtime.js';

const translations = {"ar":"المشاريع التي بها زيارات","bn":"ট্রাফিক সঙ্গে প্রকল্প","de":"Projekte mit Verkehr","en":"Projects with traffic","es":"Proyectos con tráfico","fr":"Projets avec trafic","hi":"ट्रैफ़िक वाली परियोजनाएँ","id":"Proyek dengan lalu lintas","pt-BR":"Projetos com tráfego","ru":"Проекты с трафиком","ur":"ٹریفک کے ساتھ پروجیکٹس","zh-CN":"有流量的项目"};

export function analytics_kpi_projectswithtraffic(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
