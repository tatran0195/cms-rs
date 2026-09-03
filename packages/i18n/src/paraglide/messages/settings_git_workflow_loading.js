import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ تحميل اتصال Git…","bn":"গিট সংযোগ লোড হচ্ছে...","de":"Git-Verbindung wird geladen…","en":"Loading Git connection…","es":"Cargando conexión Git...","fr":"Chargement de la connexion Git…","hi":"Git कनेक्शन लोड हो रहा है...","id":"Memuat koneksi Git…","pt-BR":"Carregando conexão Git…","ru":"Загрузка соединения Git…","ur":"Git کنکشن لوڈ ہو رہا ہے…","zh-CN":"正在加载 Git 连接..."};

export function settings_git_workflow_loading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
