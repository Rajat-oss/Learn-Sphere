import { useState, useEffect } from "react";
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
  const [apiCourses, setApiCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://collection-for-coursera-courses.p.rapidapi.com/rapidapi/course/get_institution.php', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'f735c7dec3msh59187241bf1980ep1d9b2cjsn68b8408b287c',
            'x-rapidapi-host': 'collection-for-coursera-courses.p.rapidapi.com'
          }
        });
        const data = await response.json();
        setApiCourses(data || []);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

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

  const allCourses = [...courses, ...apiCourses.map((course: any, index: number) => ({
    id: `api-${index}`,
    title: course.name || course.title || 'Course',
    instructor: course.instructor || course.partner || 'Coursera',
    category: 'development',
    rating: course.rating || 4.5,
    students: course.enrolled || 1000,
    lessons: course.modules || 50,
    duration: course.duration || '30 hours',
    price: '₹2,999',
    level: course.level || 'Intermediate',
    image: course.image || courseWeb,
    description: course.description || 'Learn from industry experts',
  }))];

  const filteredCourses = allCourses.filter((course) => {
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
    <div className="min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Explore Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover world-class courses designed by industry experts to accelerate your career
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 sm:mb-10 md:mb-12 space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 sm:pl-12 h-12 sm:h-14 glass text-base sm:text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hidden sm:block" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-orange border-0 text-white text-xs sm:text-sm"
                    : "glass text-xs sm:text-sm"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Showing {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading courses...</p>
          </div>
        )}

        {/* Course Grid */}
        {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
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
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">{course.students.toLocaleString()}</span>
                    <span className="sm:hidden">{(course.students / 1000).toFixed(1)}k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                  <div className="font-display text-xl sm:text-2xl font-bold text-primary">
                    {course.price}
                  </div>
                  <NavLink to={`/course/${course.id}`}>
                    <Button size="sm" className="bg-gradient-orange border-0 text-white font-semibold hover:shadow-glow-orange hover:scale-105 transition-all text-xs sm:text-sm">
                      View Course
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
        )}

        {/* No Results */}
        {!loading && filteredCourses.length === 0 && (
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
