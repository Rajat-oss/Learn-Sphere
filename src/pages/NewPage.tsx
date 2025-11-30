import DashboardLayout from "@/components/DashboardLayout";

const NewPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">New</h1>
        <p className="text-gray-600">Create new content here.</p>
      </div>
    </DashboardLayout>
  );
};

export default NewPage;
