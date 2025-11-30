import DashboardLayout from "@/components/DashboardLayout";

const ChatPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Chat</h1>
        <p className="text-gray-600">Your chat conversations will appear here.</p>
      </div>
    </DashboardLayout>
  );
};

export default ChatPage;
