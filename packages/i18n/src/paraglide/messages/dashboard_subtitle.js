import { getLocale } from '../runtime.js';

const translations = {"ar":"جميع مواقع التوثيق الخاصة بك — لكلٍّ منها إعداداته وأعضاؤه وخطته.","bn":"আপনার সমস্ত ডকুমেন্টেশন সাইট — প্রতিটি নিজস্ব সেটিংস, সদস্য এবং পরিকল্পনা সহ।","de":"Alle Ihre Dokumentationsseiten – jede mit eigenen Einstellungen, Mitgliedern und Plan.","en":"All your documentation sites — each with its own settings, members, and plan.","es":"Todos sus sitios de documentación, cada uno con su propia configuración, miembros y plan.","fr":"Tous vos sites de documentation, chacun avec ses propres paramètres, membres et plan.","hi":"आपकी सभी दस्तावेज़ीकरण साइटें - प्रत्येक की अपनी सेटिंग्स, सदस्य और योजना है।","id":"Semua situs dokumentasi Anda — masing-masing memiliki pengaturan, anggota, dan rencananya sendiri.","pt-BR":"Todos os seus sites de documentação — cada um com suas próprias configurações, membros e plano.","ru":"Все ваши сайты документации — каждый со своими настройками, участниками и планом.","ur":"آپ کی تمام دستاویزات کی سائٹیں — ہر ایک اپنی سیٹنگز، ممبرز اور پلان کے ساتھ۔","zh-CN":"您的所有文档站点 — 每个站点都有自己的设置、成员和计划。"};

export function dashboard_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
