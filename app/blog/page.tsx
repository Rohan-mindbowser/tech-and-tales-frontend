import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Calendar, User, Search } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    description:
      "Learn the latest features and improvements in Next.js 15, including the new App Router and Server Components.",
    author: "John Doe",
    date: "2024-01-15",
    category: "Development",
    readTime: "5 min read",
    slug: "getting-started-nextjs-15",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    description:
      "Exploring emerging trends and technologies that will shape the future of web development in 2024 and beyond.",
    author: "Jane Smith",
    date: "2024-01-12",
    category: "Technology",
    readTime: "8 min read",
    slug: "future-web-development",
  },
  {
    id: 3,
    title: "Building Scalable React Applications",
    description:
      "Best practices and patterns for building large-scale React applications that are maintainable and performant.",
    author: "Mike Johnson",
    date: "2024-01-10",
    category: "React",
    readTime: "12 min read",
    slug: "scalable-react-applications",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use What",
    description:
      "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
    author: "Sarah Wilson",
    date: "2024-01-08",
    category: "CSS",
    readTime: "7 min read",
    slug: "css-grid-vs-flexbox",
  },
  {
    id: 5,
    title: "TypeScript Best Practices for 2024",
    description:
      "Essential TypeScript patterns and practices that every developer should know for writing better code.",
    author: "David Brown",
    date: "2024-01-05",
    category: "TypeScript",
    readTime: "10 min read",
    slug: "typescript-best-practices-2024",
  },
  {
    id: 6,
    title: "Introduction to Server Components",
    description: "Understanding React Server Components and how they're changing the way we build React applications.",
    author: "Emily Davis",
    date: "2024-01-03",
    category: "React",
    readTime: "9 min read",
    slug: "introduction-server-components",
  },
]

const categories = ["All", "Development", "React", "TypeScript", "CSS", "Technology"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              All Tales
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every story from our journey through code, creativity, and the spaces in between.
            </p>
          </div>
        </ScrollReveal>

        {/* Search and Filter */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-background/50 border-purple-500/30 focus:border-purple-500"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category, index) => (
                  <ScrollReveal key={category} animation="scale" delay={300 + index * 50}>
                    <Badge
                      variant={category === "All" ? "default" : "secondary"}
                      className={`cursor-pointer transition-colors ${
                        category === "All"
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                      }`}
                    >
                      {category}
                    </Badge>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} animation="fade-up" delay={index * 100}>
              <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
