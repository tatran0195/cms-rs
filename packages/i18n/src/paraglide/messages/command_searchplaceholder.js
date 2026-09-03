import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث في المشاريع والإجراءات…","bn":"অনুসন্ধান প্রকল্প এবং কর্ম…","de":"Projekte und Aktionen suchen…","en":"Search projects and actions…","es":"Buscar proyectos y acciones…","fr":"Rechercher des projets et des actions…","hi":"प्रोजेक्ट और कार्य खोजें...","id":"Cari proyek dan tindakan…","pt-BR":"Pesquise projetos e ações…","ru":"Поиск проектов и действий…","ur":"پروجیکٹس اور اعمال تلاش کریں…","zh-CN":"搜索项目和行动..."};

export function command_searchplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
