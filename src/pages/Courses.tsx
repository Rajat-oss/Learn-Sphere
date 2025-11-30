import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Search, Star, Clock, Users, BookOpen, Filter } from "lucide-react";
import courseWeb from "@/assets/course-web.jpg";
import courseAI from "@/assets/course-ai.jpg";
import courseBusiness from "@/assets/course-business.jpg";
import courseDesign from "@/assets/course-design.jpg";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" },
    { id: "data-science", label: "Data Science" },
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      category: "development",
      rating: 4.8,
      students: 12500,
      lessons: 156,
      duration: "48 hours",
      price: "₹2,999",
      level: "Beginner",
      image: courseWeb,
      description: "Master HTML, CSS, JavaScript, React, Node.js and become a full-stack developer",
    },
    {
      id: 2,
      title: "AI & Machine Learning Mastery",
      instructor: "Dr. Rajesh Kumar",
      category: "data-science",
      rating: 4.9,
      students: 8400,
      lessons: 124,
      duration: "60 hours",
      price: "₹4,999",
      level: "Advanced",
      image: courseAI,
      description: "Deep dive into neural networks, TensorFlow, and cutting-edge AI applications",
    },
    {
      id: 3,
      title: "Digital Marketing & Growth Hacking",
      instructor: "Priya Mehta",
      category: "business",
      rating: 4.7,
      students: 15200,
      lessons: 98,
      duration: "36 hours",
      price: "₹2,499",
      level: "Intermediate",
      image: courseBusiness,
      description: "Learn SEO, social media marketing, content strategy, and analytics",
    },
    {
      id: 4,
      title: "UI/UX Design Complete Course",
      instructor: "Amit Sharma",
      category: "design",
      rating: 4.9,
      students: 9800,
      lessons: 142,
      duration: "52 hours",
      price: "₹3,499",
      level: "Intermediate",
      image: courseDesign,
      description: "Master Figma, prototyping, user research, and design systems",
    },
    {
      id: 5,
      title: "Python for Data Analysis",
      instructor: "Neha Gupta",
      category: "data-science",
      rating: 4.8,
      students: 11200,
      lessons: 108,
      duration: "42 hours",
      price: "₹3,299",
      level: "Beginner",
      image: courseAI,
      description: "Learn Pandas, NumPy, Matplotlib and data visualization techniques",
    },
    {
      id: 6,
      title: "Advanced React & Next.js",
      instructor: "Vikram Patel",
      category: "development",
      rating: 4.9,
      students: 7600,
      lessons: 134,
      duration: "56 hours",
      price: "₹4,499",
      level: "Advanced",
      image: courseWeb,
      description: "Build production-ready apps with React 18, Next.js 14, and TypeScript",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Explore Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover world-class courses designed by industry experts to accelerate your career
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search courses, instructors, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 glass text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="h-5 w-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-orange border-0 text-white"
                    : "glass"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Showing {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Card
              key={course.id}
              className="glass overflow-hidden hover:shadow-float transition-all duration-300 group glow-on-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${getLevelColor(course.level)}`}>
                  {course.level}
                </Badge>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
                    alt={course.instructor}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{course.instructor}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration} total</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="font-display text-2xl font-bold text-primary">
                    {course.price}
                  </div>
                  <NavLink to={`/course/${course.id}`}>
                    <Button className="bg-gradient-orange border-0 text-white font-semibold hover:shadow-glow-orange hover:scale-105 transition-all">
                      View Course
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
