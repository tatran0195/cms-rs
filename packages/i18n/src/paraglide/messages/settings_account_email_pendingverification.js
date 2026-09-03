import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل الرمز المرسل إلى {email} لإكمال التغيير.","bn":"পরিবর্তনটি শেষ করতে {email} এ পাঠানো কোডটি লিখুন।","de":"Geben Sie den an {email} gesendeten Code ein, um die Änderung abzuschließen.","en":"Enter the code sent to {email} to finish the change.","es":"Ingrese el código enviado a {email} para finalizar el cambio.","fr":"Saisissez le code envoyé à {email} pour terminer la modification.","hi":"परिवर्तन पूरा करने के लिए {email} पर भेजा गया कोड दर्ज करें।","id":"Masukkan kode yang dikirim ke {email} untuk menyelesaikan perubahan.","pt-BR":"Digite o código enviado para {email} para finalizar a alteração.","ru":"Введите код, отправленный на {email}, чтобы завершить изменение.","ur":"تبدیلی کو مکمل کرنے کے لیے {email} پر بھیجا گیا کوڈ درج کریں۔","zh-CN":"输入发送到 {email} 的代码以完成更改。"};

export function settings_account_email_pendingverification(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
