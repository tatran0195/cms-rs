import { getLocale } from '../runtime.js';

const translations = {"ar":"مزامنة المستودعات الخاصة والـ webhooks والدفع في الاتجاهين غير مفعّلة في نسخة Cloud التجريبية الحالية.","bn":"বর্তমান ক্লাউড বিটাতে ব্যক্তিগত রেপো সিঙ্ক, ওয়েবহুক এবং দ্বি-মুখী পুশ সক্ষম করা নেই।","de":"Private Repo-Synchronisierung, Webhooks und bidirektionaler Push sind in der aktuellen Cloud-Beta nicht aktiviert.","en":"Private repo sync, webhooks, and two-way push are not enabled in the current Cloud beta.","es":"La sincronización de repositorios privados, los webhooks y la inserción bidireccional no están habilitados en la versión beta actual de la nube.","fr":"La synchronisation des dépôts privés, les webhooks et le push bidirectionnel ne sont pas activés dans la version bêta actuelle de Cloud.","hi":"वर्तमान क्लाउड बीटा में निजी रेपो सिंक, वेबहुक और टू-वे पुश सक्षम नहीं हैं।","id":"Sinkronisasi repo pribadi, webhook, dan push dua arah tidak diaktifkan di Cloud beta saat ini.","pt-BR":"Sincronização de repositório privado, webhooks e push bidirecional não estão habilitados na versão beta atual do Cloud.","ru":"Синхронизация частного репозитория, веб-перехватчики и двусторонняя отправка не включены в текущей бета-версии Cloud.","ur":"موجودہ کلاؤڈ بیٹا میں پرائیویٹ ریپو سنک، ویب ہکس، اور دو طرفہ پش فعال نہیں ہیں۔","zh-CN":"当前的 Cloud Beta 版中未启用私有存储库同步、Webhooks 和双向推送。"};

export function settings_git_twowaysync_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
