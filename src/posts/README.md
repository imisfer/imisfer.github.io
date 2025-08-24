# 📝 نظام إدارة المقالات - HTML

## 🗂️ **كيفية إضافة مقال جديد:**

### **الخطوة 1: إنشاء ملف HTML جديد**
- انسخ `TEMPLATE.html` وسمه باسم المقال (مثال: `my-new-post.html`)
- عدل المحتوى والبيانات الوصفية حسب احتياجاتك

### **الخطوة 2: تعديل البيانات الوصفية**
في رأس الملف HTML، عدل هذه العلامات:
```html
<meta name="post-id" content="NEW_ID">
<meta name="post-title" content="عنوان المقال الجديد">
<meta name="post-timestamp" content="DD Month YYYY HH:MM:SS AM/PM">
<meta name="post-slug" content="new-post-slug">
```

### **الخطوة 3: كتابة المحتوى**
اكتب محتوى المقال داخل `<div class="post-content" dir="rtl">`:
```html
<div class="post-content" dir="rtl">
  <p>محتوى المقال هنا...</p>
  <p>يمكنك استخدام أي عناصر HTML تريدها</p>
</div>
```

### **الخطوة 4: بناء وتطبيق الموقع**
```bash
npm run build
npm run deploy
```

## 📋 **حقول المقال:**

- **`post-id`**: معرف فريد (رقم تسلسلي)
- **`post-title`**: عنوان المقال
- **`post-timestamp`**: تاريخ النشر
- **`post-slug`**: رابط المقال (مثال: `/post/my-new-post`)
- **`post-content`**: محتوى المقال (HTML)
- **`excerpt`**: يملأ تلقائياً (أول 25 كلمة)

## ✨ **مزايا النظام الجديد:**

1. **ملفات HTML طبيعية**: أسهل للكتابة والتعديل
2. **بيانات وصفية واضحة**: علامات meta منظمة
3. **دعم HTML كامل**: يمكنك استخدام أي عناصر HTML
4. **تلقائي بالكامل**: يقرأ جميع ملفات HTML في مجلد posts/
5. **سهولة التعديل**: عدل الملف HTML مباشرة

## 🔧 **ملاحظات مهمة:**

- استخدم `dir="rtl"` للنص العربي
- ضع المحتوى داخل `<div class="post-content">`
- استخدم علامات meta للبيانات الوصفية
- يمكنك استخدام أي عناصر HTML (صور، روابط، قوائم، إلخ)

## 📁 **الملفات الموجودة:**

- `farfar-wadi-shura.html` - مقال فرفر وادي شرى
- `silent-skill.html` - مقال المهارة الصامتة
- `TEMPLATE.html` - قالب لإنشاء مقالات جديدة
- `README.md` - هذا الدليل 