import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Developer",
    bio: "Full-stack developer with 8+ years of experience in React, Next.js, and Node.js. Passionate about creating scalable web applications.",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Content Creator",
    bio: "Technical writer and developer advocate with expertise in modern web technologies and developer experience.",
    skills: ["Technical Writing", "Developer Relations", "JavaScript", "CSS"],
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mike Johnson",
    role: "UI/UX Designer",
    bio: "Creative designer focused on building beautiful and intuitive user interfaces for web applications.",
    skills: ["UI Design", "UX Research", "Figma", "Design Systems"],
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              About Tech and Tales
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We're storytellers at heart, developers by trade. This is where we share the intersection of technology
              and life, one tale at a time.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission Section */}
        <ScrollReveal animation="scale" delay={200}>
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-purple-900/20 to-black/20 backdrop-blur-sm border-purple-500/30">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "📚",
                      title: "Educate",
                      description: "Provide high-quality tutorials and guides to help developers learn and grow.",
                    },
                    {
                      icon: "🚀",
                      title: "Inspire",
                      description: "Share innovative ideas and cutting-edge technologies to inspire creativity.",
                    },
                    {
                      icon: "🤝",
                      title: "Connect",
                      description: "Build a community of developers who support and learn from each other.",
                    },
                  ].map((item, index) => (
                    <ScrollReveal key={item.title} animation="fade-up" delay={400 + index * 200}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Team Section */}
        <div className="mb-16">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 200}>
                <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-purple-400 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-center gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                      >
                        <Link href={member.social.github}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                      >
                        <Link href={member.social.twitter}>
                          <Twitter className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                      >
                        <Link href={member.social.linkedin}>
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <ScrollReveal animation="scale" delay={200}>
          <div className="text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-purple-500/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions, suggestions, or want to collaborate? We'd love to hear from you!
                </p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="mailto:hello@modernblog.dev">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
