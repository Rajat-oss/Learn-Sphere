import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ShoppingBag } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const PurchasesPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">No Items Purchased Yet</h3>
          <p className="text-gray-600 mb-8 max-w-md">
            Start by purchasing your first course, book, or webinar. Unlock expert guidance and begin your personalized learning journey today!
          </p>
          <NavLink to="/courses">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full px-8 hover:shadow-lg transition-all">
              Explore Now
            </Button>
          </NavLink>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PurchasesPage;
