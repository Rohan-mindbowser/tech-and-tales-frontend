import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"

const featuredPosts = [
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
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="text-center max-w-5xl mx-auto relative">
          <div className="mb-8">
            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                Tech and Tales
              </h1>
            </ScrollReveal>
            <div className="space-y-4 mb-8">
              <ScrollReveal animation="fade-up" delay={400}>
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-300">
                  Tech. Thoughts. Real Talk.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={600}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  A blog where code meets curiosity, and tech stories meet life stories.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={800}>
                <p className="text-lg md:text-xl text-muted-foreground/80 italic">
                  From building software to breaking patterns — one post at a time.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal animation="scale" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
                <Link href="/blog">
                  Explore Stories <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6"
              >
                <Link href="/about">About the Tales</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Latest Tales</h2>
            <p className="text-muted-foreground text-lg md:text-xl">Stories from the intersection of code and life</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post, index) => (
            <ScrollReveal key={post.id} animation="fade-up" delay={index * 200}>
              <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 group h-full">
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

        <ScrollReveal animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6"
            >
              <Link href="/blog">
                Read All Tales <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <ScrollReveal animation="scale" delay={200}>
          <Card className="bg-gradient-to-r from-purple-900/30 to-black/30 backdrop-blur-sm border-purple-500/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-purple-400/10 animate-pulse" />
            <CardContent className="relative p-8 md:p-12 lg:p-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Join the Conversation</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Get the latest tech tales, coding insights, and life lessons delivered straight to your inbox. No spam,
                just stories worth telling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md bg-background/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-lg"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-3">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </section>
    </div>
  )
}
