import { getLocale } from '../runtime.js';

const translations = {"ar":"متصل — الدفعات إلى {branch} يمكن أن تُطلق مزامنة.","bn":"সংযুক্ত — {branch} এ পুশ একটি সিঙ্ক ট্রিগার করতে পারে৷","de":"Verbunden – Pushs an {branch} können eine Synchronisierung auslösen.","en":"Connected — pushes to {branch} can trigger a sync.","es":"Conectado: presionar a {branch} puede desencadenar una sincronización.","fr":"Connecté – les poussées vers {branch} peuvent déclencher une synchronisation.","hi":"कनेक्टेड - {branch} पर पुश करने से सिंक ट्रिगर हो सकता है।","id":"Terhubung — dorongan ke {branch} dapat memicu sinkronisasi.","pt-BR":"Conectado – envios para {branch} podem acionar uma sincronização.","ru":"Подключено — нажатие на {branch} может вызвать синхронизацию.","ur":"منسلک — {branch} پر دھکیلنا ایک مطابقت پذیری کو متحرک کر سکتا ہے۔","zh-CN":"已连接 — 推送到 {branch} 可以触发同步。"};

export function settings_git_webhook_stepconnectdone(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
