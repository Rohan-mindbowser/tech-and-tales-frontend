import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T&T</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Tech and Tales
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              A blog where code meets curiosity, and tech stories meet life stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog?category=development"
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=react"
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=typescript"
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  TypeScript
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=css"
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  CSS
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ModernBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
