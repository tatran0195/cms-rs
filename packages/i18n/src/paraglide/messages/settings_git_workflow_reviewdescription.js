import { getLocale } from '../runtime.js';

const translations = {"ar":"أكّد الحساب والمصدر ووجهة الكتابة قبل الاتصال.","bn":"সংযোগ করার আগে অ্যাকাউন্ট, উত্স, এবং গন্তব্য লিখুন নিশ্চিত করুন.","de":"Bestätigen Sie das Konto, die Quelle und das Schreibziel, bevor Sie eine Verbindung herstellen.","en":"Confirm the account, source, and write destination before connecting.","es":"Confirme la cuenta, el origen y el destino de escritura antes de conectarse.","fr":"Confirmez le compte, la source et la destination d'écriture avant de vous connecter.","hi":"कनेक्ट करने से पहले खाते, स्रोत की पुष्टि करें और गंतव्य लिखें।","id":"Konfirmasikan akun, sumber, dan tulis tujuan sebelum menghubungkan.","pt-BR":"Confirme a conta, a origem e o destino de gravação antes de conectar.","ru":"Перед подключением подтвердите учетную запись, источник и место назначения записи.","ur":"رابطہ کرنے سے پہلے اکاؤنٹ، سورس کی تصدیق کریں اور منزل لکھیں۔","zh-CN":"连接前确认帐户、源和写入目的地。"};

export function settings_git_workflow_reviewdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
