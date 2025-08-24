export interface Post {
  id: string
  title: string
  content: string
  timestamp: string
  excerpt: string
  slug: string
}

// Utility function to extract first 25 words from content
function extractFirst25Words(content: string): string {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  
  // Split into words and take first 25
  const words = plainText.split(' ')
  const first25Words = words.slice(0, 25).join(' ')
  
  // Add ellipsis if there are more words
  return words.length > 25 ? first25Words + '...' : first25Words
}

// Function to parse HTML and extract metadata and content using regex
function parseHTMLPost(htmlContent: string): Post {
  console.log('Parsing HTML content length:', htmlContent.length)
  console.log('First 200 chars:', htmlContent.substring(0, 200))
  
  // Extract metadata using regex
  const idMatch = htmlContent.match(/<meta name="post-id" content="([^"]+)"/)
  const titleMatch = htmlContent.match(/<meta name="post-title" content="([^"]+)"/)
  const timestampMatch = htmlContent.match(/<meta name="post-timestamp" content="([^"]+)"/)
  const slugMatch = htmlContent.match(/<meta name="post-slug" content="([^"]+)"/)
  
  // Extract content between <div class="post-content" dir="rtl"> and </div>
  const contentMatch = htmlContent.match(/<div class="post-content" dir="rtl">([\s\S]*?)<\/div>/)
  
  console.log('Regex matches:', { idMatch, titleMatch, timestampMatch, slugMatch, contentMatch })
  
  const post = {
    id: idMatch ? idMatch[1] : '',
    title: titleMatch ? titleMatch[1] : '',
    content: contentMatch ? contentMatch[1] : '',
    timestamp: timestampMatch ? timestampMatch[1] : '',
    excerpt: '',
    slug: slugMatch ? slugMatch[1] : ''
  }
  
  console.log('Parsed post:', post)
  return post
}

// Dynamically load all HTML post files from the posts directory
// Using the raw plugin to import HTML as actual content
const postModules = import.meta.glob('../posts/*.html', { eager: true })

console.log('Post modules loaded:', Object.keys(postModules))
console.log('Post modules object:', postModules)

// Convert the modules to Post objects
const posts: Post[] = Object.values(postModules).map((module: any) => {
  console.log('Processing module:', module)
  const htmlContent = typeof module === 'string' ? module : module.default
  console.log('HTML content type:', typeof htmlContent)
  console.log('HTML content length:', htmlContent ? htmlContent.length : 'undefined')
  return parseHTMLPost(htmlContent)
})

console.log('Final posts array:', posts)

// All posts including the about page (for internal use)
export const allPosts: Post[] = [
  ...posts,
  {
    id: '9',
    title: 'نبذة',
    content: `<p dir="rtl">في عام ١٣٩٥هـ، أنجبتني. صنعتني على مهلٍ وتؤدة وكأنها تقول: ستلقاك الحياة كاملا بما أودعت فيك من المعاني، قويا بعطفك على النفوس، وفصيحا بإصغائك لكل شيء.</p>
<p dir="rtl">والدي، والذي لشدة بساطته، لا يكاد يرى تعقيدات الحياة: يهزم الهائل بابتسامة ويعالج أذى الناس بذات الابتسامة.</p>
<p dir="rtl">علماني كل شيء دون أن يقولا الكثير؛ كانا دليل المستخدم لفك شفرة الحياة.</p>
<p dir="rtl">نشأت في قرية "الدار"؛ وادعة وجميلة. تتوسط تخوم وادي "شرى" بين منطقتي الباحة وعسير.</p>
<p dir="rtl"><video style="width: 100%; height: 100%; border-radius: 15px;" src="https://misfer.info/hala/wp-content/uploads/shura.mov" autoplay="autoplay" loop="loop" muted="" width="1844" height="920"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span>
<span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><source type="video/quicktime" src="https://misfer.info/hala/wp-content/uploads/shura.mov" /><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span>
</video></p>
<p dir="rtl">مستفيدا من تعليم الدولة المجاني بالكامل، نلت بكالوريوس هندسة الكمبيوتر من الظهران. وبعدها بعشر سنوات، ماجستير في الإدارة الصحية للتنفيذيين. عشر سنين أخرى، ماجستير في إدارة التقنية.</p>
<p dir="rtl">تشرفت بالمشاركة في التنمية وبناء مستقبل مستدام ومزدهر لوطني على مدى عقدين في مجالات تقنية المعلومات، الرعاية الصحية، التغذية، والعقارات، شملت تنفيذ الاستراتيجيات وإدارة المشاريع.</p>
<p dir="rtl">لدي شغف كبير تجاه إعادة الفضل إلى مجتمعي: للتدريب في إدارة المشاريع، بناء الاستراتيجيات، مساعدة الشركات الناشئة، والتوجيه الحياتي.</p>
<p dir="rtl">مسيرتي المهنية طابعها: العطاء الغير مشروط، التعلم المستمر، والتحسين المستمر.</p>
<p dir="rtl">.</p>
<p dir="rtl">.</p>
<p dir="rtl"><b>بين يدي منشئ هذا الكون يملأني الامتنان: منحني الحياة، ألهمني التعلم من المحن، والتواضع لأوقن أن لا فضل لي في شيء.</b></p>`,
    timestamp: '30 Aug 2024 10:27:38 AM',
    excerpt: '',
    slug: 'about'
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find(post => post.slug === slug)
}

export function getAllPosts(): Post[] {
  // Return only blog posts, excluding the about page
  return posts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .map(post => ({
      ...post,
      excerpt: extractFirst25Words(post.content)
    }))
}

export function getRecentPosts(limit: number = 3): Post[] {
  return getAllPosts().slice(0, limit)
} 