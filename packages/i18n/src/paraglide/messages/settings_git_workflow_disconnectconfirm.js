import { getLocale } from '../runtime.js';

const translations = {"ar":"قطع اتصال GitHub وإزالة بيانات الاعتماد المشفّرة وسجل المزامنة؟","bn":"GitHub সংযোগ বিচ্ছিন্ন করবেন এবং এনক্রিপ্ট করা শংসাপত্র এবং সিঙ্ক ইতিহাস মুছে ফেলবেন?","de":"GitHub trennen und verschlüsselte Anmeldeinformationen und Synchronisierungsverlauf entfernen?","en":"Disconnect GitHub and remove encrypted credentials and sync history?","es":"¿Desconectar GitHub y eliminar las credenciales cifradas y el historial de sincronización?","fr":"Déconnecter GitHub et supprimer les informations d'identification chiffrées et l'historique de synchronisation ?","hi":"GitHub को डिस्कनेक्ट करें और एन्क्रिप्टेड क्रेडेंशियल और सिंक इतिहास हटा दें?","id":"Putuskan sambungan GitHub dan hapus kredensial terenkripsi serta riwayat sinkronisasi?","pt-BR":"Desconectar GitHub e remover credenciais criptografadas e sincronizar o histórico?","ru":"Отключить GitHub и удалить зашифрованные учетные данные и историю синхронизации?","ur":"GitHub کو منقطع کریں اور خفیہ کردہ اسناد اور مطابقت پذیری کی تاریخ کو ہٹائیں؟","zh-CN":"断开 GitHub 并删除加密凭据和同步历史记录？"};

export function settings_git_workflow_disconnectconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
