import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { NavLink } from "@/components/NavLink";
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Video,
  FileText,
  Calendar,
  Target,
  Play,
  CheckCircle2,
} from "lucide-react";

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      nextLesson: "React Hooks Deep Dive",
      totalLessons: 156,
      completedLessons: 102,
    },
    {
      id: 2,
      title: "AI & Machine Learning Mastery",
      progress: 32,
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      nextLesson: "Neural Network Fundamentals",
      totalLessons: 124,
      completedLessons: 40,
    },
  ];

  const upcomingClasses = [
    {
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      time: "Today, 6:00 PM",
      duration: "90 min",
    },
    {
      title: "Machine Learning Q&A",
      instructor: "Dr. Rajesh Kumar",
      time: "Tomorrow, 4:00 PM",
      duration: "60 min",
    },
  ];

  const recentActivity = [
    {
      type: "completed",
      title: "Completed React State Management",
      time: "2 hours ago",
    },
    {
      type: "certificate",
      title: "Earned JavaScript Fundamentals Certificate",
      time: "Yesterday",
    },
    {
      type: "quiz",
      title: "Scored 92% on HTML/CSS Quiz",
      time: "2 days ago",
    },
  ];

  const stats = [
    {
      label: "Courses Enrolled",
      value: "2",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Hours Learned",
      value: "48",
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      label: "Certificates",
      value: "3",
      icon: Award,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Current Streak",
      value: "12 days",
      icon: TrendingUp,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Welcome back, <span className="gradient-text">John!</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Continue your learning journey and achieve your goals
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {stats.map((stat, index) => (
            <Card key={index} className="glass p-6">
              <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">Continue Learning</h2>
                <NavLink to="/courses">
                  <Button variant="ghost" className="text-primary">
                    View All
                  </Button>
                </NavLink>
              </div>

              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="glass p-6 hover:shadow-float transition-all duration-300 group">
                    <div className="flex gap-6">
                      {/* Thumbnail */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-48 h-32 object-cover rounded-lg"
                        />
                        <Button
                          size="icon"
                          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Play className="h-5 w-5 text-white fill-white ml-1" />
                        </Button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-display text-xl font-bold mb-2">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Next: {course.nextLesson}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {course.completedLessons} of {course.totalLessons} lessons
                            </span>
                            <span className="font-semibold text-primary">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <NavLink to={`/course/${course.id}`}>
                          <Button className="bg-gradient-orange border-0 text-white font-semibold hover:shadow-glow-orange hover:scale-105 transition-all">
                            Continue Learning
                          </Button>
                        </NavLink>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-display text-2xl font-bold mb-6">Recent Activity</h2>
              <Card className="glass p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 last:pb-0 border-b border-border last:border-0">
                      <div className={`w-10 h-10 rounded-full ${
                        activity.type === "completed" ? "bg-primary/10" :
                        activity.type === "certificate" ? "bg-green-500/10" :
                        "bg-accent/10"
                      } flex items-center justify-center flex-shrink-0`}>
                        {activity.type === "completed" && <CheckCircle2 className="h-5 w-5 text-primary" />}
                        {activity.type === "certificate" && <Award className="h-5 w-5 text-green-500" />}
                        {activity.type === "quiz" && <Target className="h-5 w-5 text-accent" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Live Classes */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-display text-2xl font-bold mb-6">Upcoming Classes</h2>
              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <Card key={index} className="glass p-6 hover:shadow-float transition-all duration-300">
                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                      <Video className="h-3 w-3 mr-1" />
                      Live Class
                    </Badge>
                    <h3 className="font-display text-lg font-bold mb-2">{classItem.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">with {classItem.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{classItem.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{classItem.duration}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full glass">
                      Set Reminder
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-display text-2xl font-bold mb-6">Quick Actions</h2>
              <Card className="glass p-6">
                <div className="space-y-3">
                  <NavLink to="/courses">
                    <Button variant="outline" className="w-full justify-start glass">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Browse Courses
                    </Button>
                  </NavLink>
                  <NavLink to="/live-classes">
                    <Button variant="outline" className="w-full justify-start glass">
                      <Video className="h-4 w-4 mr-2" />
                      Join Live Class
                    </Button>
                  </NavLink>
                  <NavLink to="/notes">
                    <Button variant="outline" className="w-full justify-start glass">
                      <FileText className="h-4 w-4 mr-2" />
                      View Notes
                    </Button>
                  </NavLink>
                  <NavLink to="/certificates">
                    <Button variant="outline" className="w-full justify-start glass">
                      <Award className="h-4 w-4 mr-2" />
                      My Certificates
                    </Button>
                  </NavLink>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
