
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <Card className="overflow-hidden border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          <div className="relative overflow-hidden">
            <img
              src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=400&q=80`}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="text-xs">
                {post.category}
              </Badge>
            </div>
            
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
              {post.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3 flex-1">
              {post.description}
            </p>
            
            <div className="flex flex-wrap items-center text-xs text-slate-500 dark:text-slate-400 gap-2 sm:gap-4 mt-auto">
              <div className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                <span className="truncate">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
