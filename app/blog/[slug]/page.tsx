import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"

// This would typically come from a CMS or database
const blogPost = {
  title: "Getting Started with Next.js 15",
  description:
    "Learn the latest features and improvements in Next.js 15, including the new App Router and Server Components.",
  author: "John Doe",
  date: "2024-01-15",
  category: "Development",
  readTime: "5 min read",
  content: `
    <h2>Introduction</h2>
    <p>Next.js 15 brings exciting new features and improvements that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore the key updates and how to get started with them.</p>
    
    <h2>What's New in Next.js 15</h2>
    <p>The latest version of Next.js introduces several groundbreaking features:</p>
    <ul>
      <li><strong>Enhanced App Router:</strong> Improved performance and developer experience</li>
      <li><strong>Server Components:</strong> Better server-side rendering capabilities</li>
      <li><strong>Improved TypeScript Support:</strong> Enhanced type safety and IntelliSense</li>
      <li><strong>Better Performance:</strong> Optimized bundling and loading times</li>
    </ul>
    
    <h2>Getting Started</h2>
    <p>To start using Next.js 15, you can create a new project using the following command:</p>
    <pre><code>npx create-next-app@latest my-app</code></pre>
    
    <p>This will set up a new Next.js project with all the latest features and best practices configured out of the box.</p>
    
    <h2>Key Features Deep Dive</h2>
    <h3>App Router Enhancements</h3>
    <p>The App Router in Next.js 15 provides a more intuitive way to structure your application. It supports:</p>
    <ul>
      <li>Nested layouts</li>
      <li>Loading states</li>
      <li>Error boundaries</li>
      <li>Parallel routes</li>
    </ul>
    
    <h3>Server Components</h3>
    <p>Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client and improving performance.</p>
    
    <h2>Conclusion</h2>
    <p>Next.js 15 represents a significant step forward in React development. With its enhanced features and improved developer experience, it's an excellent choice for building modern web applications.</p>
  `,
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-purple-600">{blogPost.category}</Badge>
              <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {blogPost.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">{blogPost.description}</p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </header>

          <Separator className="mb-8 bg-purple-500/20" />

          {/* Article Content */}
          <div
            className="prose prose-invert prose-purple max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-white prose-code:text-purple-400 prose-code:bg-purple-500/20 prose-code:px-1 prose-code:rounded prose-pre:bg-card prose-pre:border prose-pre:border-purple-500/20"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          <Separator className="my-12 bg-purple-500/20" />

          {/* Author Bio */}
          <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">About the Author</h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {blogPost.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-medium">{blogPost.author}</p>
                <p className="text-sm text-muted-foreground">
                  Full-stack developer with expertise in React, Next.js, and modern web technologies. Passionate about
                  sharing knowledge and helping developers build better applications.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
