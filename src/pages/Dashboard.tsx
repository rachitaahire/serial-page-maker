import Header from "@/components/Header";
import ArticleForm from "@/components/ArticleForm";
import ArticleHistory from "@/components/ArticleHistory";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <ArticleForm />
        <ArticleHistory />
      </div>
    </div>
  );
};

export default Dashboard;