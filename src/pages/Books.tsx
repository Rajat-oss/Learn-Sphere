import { useState } from "react";
import { Search, BookOpen, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const books: Book[] = [
    { id: 1, title: "Web Development Fundamentals", author: "John Smith", price: 29.99, rating: 4.5, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400", category: "Programming" },
    { id: 2, title: "Data Science Essentials", author: "Sarah Johnson", price: 34.99, rating: 4.8, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400", category: "Data Science" },
    { id: 3, title: "UI/UX Design Principles", author: "Mike Chen", price: 24.99, rating: 4.6, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400", category: "Design" },
    { id: 4, title: "Machine Learning Basics", author: "Emily Davis", price: 39.99, rating: 4.7, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400", category: "AI/ML" },
    { id: 5, title: "Digital Marketing Guide", author: "Alex Brown", price: 27.99, rating: 4.4, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400", category: "Marketing" },
    { id: 6, title: "Cloud Computing AWS", author: "David Wilson", price: 44.99, rating: 4.9, image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400", category: "Cloud" },
  ];

  const categories = ["All", "Programming", "Data Science", "Design", "AI/ML", "Marketing", "Cloud"];

  const filteredBooks = books.filter(book => 
    (selectedCategory === "All" || book.category === selectedCategory) &&
    (book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <BookOpen className="h-5 w-5" />
            <span className="font-semibold">Book Library</span>
          </div>
          <h1 className="text-5xl font-black text-[#0B1A2A] mb-4">
            Explore Our <span className="text-gradient">Book Collection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover knowledge through our curated selection of books
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search books or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-orange text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden h-64">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-sm">{book.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  {book.category}
                </span>
                <h3 className="text-xl font-bold text-[#0B1A2A] mt-3 mb-2">{book.title}</h3>
                <p className="text-muted-foreground mb-4">by {book.author}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#0B1A2A]">${book.price}</span>
                  <Button className="bg-gradient-orange text-white rounded-full hover:shadow-glow-orange">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No books found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
