<template>
  <div class="max-w-4xl mx-auto space-y-12">
    <!-- About Me Section -->
    <section class="bg-white rounded-lg shadow-md p-8">
      <div class="prose prose-lg max-w-none text-right" dir="rtl">
        <div v-html="aboutContent" class="text-gray-800 leading-relaxed"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const aboutContent = ref(`
<p dir="rtl">في عام ١٣٩٥هـ، أنجبتني. صنعتني على مهلٍ وكأنها تقول للحياة: "ستلقينه بما أودعت فيه من المعاني: كاملا، وبعطفه على النفوس: قويا، وبإصغاءه لكل شيء: فصيحا."</p>

<p dir="rtl">والدي، والذي لشدة بساطته، لا يكاد يرى تعقيدات الحياة: يهزم الهائل بابتسامة ويعالج أذى الناس بذات الابتسامة.</p>

<p dir="rtl">علماني كل شيء دون أن يقولا الكثير؛ كانا دليل المستخدم لفك شفرة الحياة.</p>

<p dir="rtl">نشأت في قرية "الدار"؛ وادعة وجميلة. تتوسط تخوم وادي "شرى" بين منطقتي الباحة وعسير.</p>

<p dir="rtl"><video style="width: 100%; height: 100%; border-radius: 15px;" src="/src/assets/videos/shura.mov" autoplay="autoplay" loop="loop" muted="" width="1844" height="920"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span>
<span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><source type="video/quicktime" src="https://misfer.info/hala/wp-content/uploads/shura.mov" /><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span>
</video></p>

<p dir="rtl">مستفيدا من تعليم الدولة المجاني بالكامل، نلت بكالوريوس هندسة الكمبيوتر من الظهران. وبعدها بعشر سنوات، ماجستير في الإدارة الصحية للتنفيذيين. عشر سنين أخرى، ماجستير في إدارة التقنية.</p>

<p dir="rtl">تشرفت بالمشاركة في التنمية وبناء مستقبل مستدام ومزدهر لوطني على مدى عقدين في مجالات تقنية المعلومات، الرعاية الصحية، التغذية، العقارات، وحاليا في القطاع الغير ربحي.</p>

<p dir="rtl">لدي رغبة كبيرة تجاه إعادة الفضل إلى مجتمعي: للتدريب في بناء الاستراتيجيات، مساعدة الشركات الناشئة، والتوجيه الحياتي.</p>

<p dir="rtl">مسيرتي المهنية طابعها: العطاء الغير مشروط، والتعلم والتحسين المستمرين.</p>

<p dir="rtl">&nbsp;</p>

<p dir="rtl"><b>وبين يدي منشئ هذا الكون يملأني الامتنان: منحني الحياة، ألهمني التعلم من المحن، والتواضع لأوقن أن لا فضل لي في شيء.</b></p>
`)
</script>
