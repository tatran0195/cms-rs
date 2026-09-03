import { getLocale } from '../runtime.js';

const translations = {"ar":"تم قطع اتصال GitHub وإزالة بيانات الاعتماد المشفّرة.","bn":"GitHub সংযোগ বিচ্ছিন্ন এবং এনক্রিপ্ট করা শংসাপত্র সরানো হয়েছে৷","de":"GitHub getrennt und verschlüsselte Anmeldeinformationen entfernt.","en":"GitHub disconnected and encrypted credentials removed.","es":"GitHub credenciales desconectadas y cifradas eliminadas.","fr":"GitHub identifiants déconnectés et chiffrés supprimés.","hi":"GitHub डिस्कनेक्ट और एन्क्रिप्टेड क्रेडेंशियल हटा दिए गए।","id":"GitHub terputus dan kredensial terenkripsi dihapus.","pt-BR":"GitHub credenciais desconectadas e criptografadas removidas.","ru":"GitHub отключен, а зашифрованные учетные данные удалены.","ur":"GitHub منقطع اور خفیہ کردہ اسناد ہٹا دی گئیں۔","zh-CN":"GitHub 已断开连接并删除了加密凭据。"};

export function settings_git_workflow_disconnected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
