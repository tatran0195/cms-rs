import { getLocale } from '../runtime.js';

const translations = {"ar":"أعد المحاولة أو تحقّق من اتصال الخادم.","bn":"আবার চেষ্টা করুন বা সার্ভার সংযোগ পরীক্ষা করুন.","de":"Versuchen Sie es erneut oder überprüfen Sie die Serververbindung.","en":"Try again or check the server connection.","es":"Inténtalo de nuevo o comprueba la conexión del servidor.","fr":"Réessayez ou vérifiez la connexion au serveur.","hi":"पुनः प्रयास करें या सर्वर कनेक्शन की जाँच करें।","id":"Coba lagi atau periksa koneksi server.","pt-BR":"Tente novamente ou verifique a conexão do servidor.","ru":"Попробуйте еще раз или проверьте соединение с сервером.","ur":"دوبارہ کوشش کریں یا سرور کنکشن چیک کریں۔","zh-CN":"重试或检查服务器连接。"};

export function settings_git_workflow_loaderrorhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
