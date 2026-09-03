import { getLocale } from '../runtime.js';

const translations = {"ar":"انشر إصدارًا جديدًا تلقائيًا بعد كل مزامنة دفع. عند الإيقاف تُحدَّث المسودات فقط.","bn":"প্রতিটি পুশ সিঙ্কের পরে স্বয়ংক্রিয়ভাবে একটি নতুন স্থাপনা প্রকাশ করুন। বন্ধ = শুধুমাত্র খসড়া আপডেট করে।","de":"Veröffentlichen Sie nach jeder Push-Synchronisierung automatisch eine neue Bereitstellung. Aus = Pusht nur Update-Entwürfe.","en":"Publish a new deployment automatically after each push sync. Off = pushes only update drafts.","es":"Publique una nueva implementación automáticamente después de cada sincronización push. Desactivado = envía solo borradores de actualización.","fr":"Publiez automatiquement un nouveau déploiement après chaque synchronisation push. Off = pousse uniquement les brouillons de mise à jour.","hi":"प्रत्येक पुश सिंक के बाद स्वचालित रूप से एक नई तैनाती प्रकाशित करें। बंद = केवल अपडेट ड्राफ्ट को पुश करता है।","id":"Publikasikan penerapan baru secara otomatis setelah setiap sinkronisasi push. Off = hanya mendorong pembaruan draf.","pt-BR":"Publique uma nova implantação automaticamente após cada sincronização push. Desligado = envia apenas rascunhos de atualização.","ru":"Публикуйте новое развертывание автоматически после каждой принудительной синхронизации. Выкл. = обновлять только черновики.","ur":"ہر پش سنک کے بعد خود بخود ایک نئی تعیناتی شائع کریں۔ آف = صرف اپ ڈیٹ ڈرافٹس کو دھکیلتا ہے۔","zh-CN":"每次推送同步后自动发布新部署。关闭 = 仅推送更新草稿。"};

export function settings_git_webhook_autopublishdetail(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
