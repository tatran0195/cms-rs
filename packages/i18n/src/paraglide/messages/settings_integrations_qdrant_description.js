import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين متجهي مُدار للبحث الدلالي والهجين.","bn":"সেমান্টিক ও হাইব্রিড অনুসন্ধানের জন্য পরিচালিত ভেক্টর স্টোরেজ।","de":"Verwaltete Vektorspeicherung für semantische und hybride Suche.","en":"Managed vector storage for semantic and hybrid search.","es":"Almacenamiento vectorial gestionado para búsqueda semántica e híbrida.","fr":"Stockage vectoriel géré pour la recherche sémantique et hybride.","hi":"सिमेंटिक और हाइब्रिड खोज के लिए प्रबंधित वेक्टर संग्रहण।","id":"Mengatur penyimpanan vektor untuk semantik dan pencarian hibrida.","pt-BR":"Armazenamento de vetores gerenciados para pesquisa semântica e híbrida.","ru":"Управляемое векторное хранилище для семантического и гибридного поиска.","ur":"معنوی اور ہائبرڈ تلاش کے لئے منظم ویکٹر اسٹوریج ۔","zh-CN":"用于语义和混合搜索的托管向量存储。"};

export function settings_integrations_qdrant_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
