import { getLocale } from '../runtime.js';

const translations = {"ar":"اسمح بالنوافذ المنبثقة لفتح معاينة المسودة في علامة تبويب جديدة.","bn":"একটি নতুন ট্যাবে খসড়া পূর্বরূপ খুলতে পপ-আপগুলিকে অনুমতি দিন৷","de":"Lassen Sie Pop-ups zu, um die Entwurfsvorschau in einem neuen Tab zu öffnen.","en":"Allow pop-ups to open the draft preview in a new tab.","es":"Permitir que las ventanas emergentes abran la vista previa del borrador en una nueva pestaña.","fr":"Autoriser les fenêtres contextuelles à ouvrir l'aperçu du brouillon dans un nouvel onglet.","hi":"पॉप-अप को ड्राफ्ट पूर्वावलोकन को एक नए टैब में खोलने की अनुमति दें।","id":"Izinkan pop-up untuk membuka pratinjau draf di tab baru.","pt-BR":"Permitir que pop-ups abram a visualização do rascunho em uma nova guia.","ru":"Разрешить всплывающие окна для открытия предварительного просмотра черновика на новой вкладке.","ur":"ایک نئے ٹیب میں ڈرافٹ کا پیش منظر کھولنے کے لیے پاپ اپس کو اجازت دیں۔","zh-CN":"允许弹出窗口在新选项卡中打开草稿预览。"};

export function editor_previewpopupblocked(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
