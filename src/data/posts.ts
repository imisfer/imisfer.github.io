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
  // Extract metadata using regex
  const idMatch = htmlContent.match(/<meta name="post-id" content="([^"]+)"/)
  const titleMatch = htmlContent.match(/<meta name="post-title" content="([^"]+)"/)
  const timestampMatch = htmlContent.match(/<meta name="post-timestamp" content="([^"]+)"/)
  const slugMatch = htmlContent.match(/<meta name="post-slug" content="([^"]+)"/)
  
  // Extract content between <div class="post-content" dir="rtl"> and </div>
  const contentMatch = htmlContent.match(/<div class="post-content" dir="rtl">([\s\S]*?)<\/div>/)
  
  const post = {
    id: idMatch ? idMatch[1] : '',
    title: titleMatch ? titleMatch[1] : '',
    content: contentMatch ? contentMatch[1] : '',
    timestamp: timestampMatch ? timestampMatch[1] : '',
    excerpt: '',
    slug: slugMatch ? slugMatch[1] : ''
  }
  
  return post
}

// Load HTML files as raw strings using Vite's import.meta.glob with ?raw suffix
const modules = import.meta.glob('../posts/*.html', { query: '?raw', import: 'default', eager: true })

console.log('Modules loaded:', Object.keys(modules))
console.log('Modules object:', modules)
console.log('Modules type:', typeof modules)
console.log('Modules keys:', Object.keys(modules))

// Convert the modules to Post objects
const posts: Post[] = Object.entries(modules)
  .filter(([path]) => !path.includes('TEMPLATE.html')) // Exclude the template file
  .map(([path, content]) => {
    console.log('Processing path:', path, 'content type:', typeof content, 'content length:', content ? content.length : 'undefined')
    const slug = path.match(/\.\.\/posts\/(.+)\.html$/)![1]
    console.log('Extracted slug:', slug)
    const post = parseHTMLPost(content)
    console.log('Parsed post:', post)
    return post
  })

console.log('Final posts array length:', posts.length)
console.log('Final posts array:', posts)

// All posts (blog posts only, no about page)
export const allPosts: Post[] = [...posts]

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