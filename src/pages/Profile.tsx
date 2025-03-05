import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, LogOut } from "lucide-react";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ fullname: string; useremail: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true); // ✅ Added loading state

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/login/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        localStorage.removeItem("token"); // ✅ Remove invalid token
        navigate("/login");
      } finally {
        setIsLoading(false); // ✅ Stop loading
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-orange-700 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-orange-700 p-6 text-white">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Profile</h1>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-white text-orange-700 px-4 py-2 rounded-md hover:bg-orange-50 transition"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-100 p-4 rounded-full">
                <User className="w-16 h-16 text-orange-700" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  {user?.fullname || "N/A"}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  {user?.useremail || "N/A"}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
