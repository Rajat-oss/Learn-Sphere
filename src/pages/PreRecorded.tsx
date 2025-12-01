import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const PreRecorded = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Video className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pre-Recorded Classes</h1>
          <p className="text-lg text-gray-600 mb-8">
            Access our library of pre-recorded video lectures and learn at your own pace.
          </p>
          <Button className="bg-gradient-orange text-white rounded-full px-8">
            Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreRecorded;
