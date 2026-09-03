import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تريد حذف اتصال {name} وبيانات اعتماده المشفرة؟ لا يمكن التراجع عن ذلك.","bn":"{name} সংযোগ ও এর এনক্রিপ্ট করা শংসাপত্র মুছবেন? এটি পূর্বাবস্থায় ফেরানো যাবে না।","de":"Die Verbindung {name} und ihre verschlüsselten Zugangsdaten löschen? Dies kann nicht rückgängig gemacht werden.","en":"Delete the {name} connection and its encrypted credential? This cannot be undone.","es":"¿Eliminar la conexión {name} y su credencial cifrada? Esta acción no se puede deshacer.","fr":"Supprimer la connexion {name} et son identifiant chiffré ? Cette action est irréversible.","hi":"क्या {name} कनेक्शन और उसके एन्क्रिप्टेड क्रेडेंशियल को हटाना है? इसे पूर्ववत नहीं किया जा सकता।","id":"Hapus koneksi {name} dan kredensial terenkripsinya? Tindakan ini tidak dapat dibatalkan.","pt-BR":"Excluir a conexão {name} e sua credencial criptografada? Esta ação não pode ser desfeita.","ru":"Удалить подключение {name} и его зашифрованные учетные данные? Это действие нельзя отменить.","ur":"{name} کنکشن اور اس کی خفیہ اسناد حذف کریں؟ یہ عمل واپس نہیں لیا جا سکتا۔","zh-CN":"删除 {name} 连接及其加密凭据？此操作无法撤销。"};

export function settings_integrations_deletedescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
