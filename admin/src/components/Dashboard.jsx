import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { FaUsers, FaBoxOpen, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ token }) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalEarning, setTotalEarning] = useState(0);
  const [loading, setLoading] = useState(true);

  const [monthlyData, setMonthlyData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    orders: [0, 0, 0, 0, 0, 0, 0, 0],
    earnings: [0, 0, 0, 0, 0, 0, 0, 0],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [userRes, productRes, orderRes, earningRes] = await Promise.all([
          axios.get(`${backendUrl}/api/user/get-total`),
          axios.get(`${backendUrl}/api/product/get-product`),
          axios.get(`${backendUrl}/api/order/get-order`),
          axios.get(`${backendUrl}/api/order/get-earning`),
        ]);

        if (userRes.data.success) setTotalUsers(userRes.data.totalUsers);
        if (productRes.data.success) setTotalProducts(productRes.data.totalProduct);
        if (orderRes.data.success) setTotalOrders(orderRes.data.totalOrder);
        if (earningRes.data.success) setTotalEarning(earningRes.data.totalEarning);

        // Mock monthly data (replace with your backend API if available)
        setMonthlyData({
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          orders: [5, 10, 8, 12, 15, 9, 7, 14],
          earnings: [1000, 2000, 1500, 3000, 2500, 2200, 1800, 3500],
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  const cardData = [
    { title: "Users", count: totalUsers, icon: <FaUsers size={30} />, color: "from-pink-400 to-pink-600" },
    { title: "Products", count: totalProducts, icon: <FaBoxOpen size={30} />, color: "from-pink-300 to-pink-500" },
    { title: "Orders", count: totalOrders, icon: <FaShoppingCart size={30} />, color: "from-pink-200 to-pink-400" },
    { title: "Earnings", count: `₹${totalEarning}`, icon: <FaRupeeSign size={30} />, color: "from-pink-500 to-pink-700" },
  ];

  const lineChartData = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: "Orders",
        data: monthlyData.orders,
        borderColor: "rgba(236, 72, 153, 1)",
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        tension: 0.4,
      },
      {
        label: "Earnings",
        data: monthlyData.earnings,
        borderColor: "rgba(236, 72, 153, 0.6)",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const pieChartData = {
    labels: ["Users", "Products", "Orders"],
    datasets: [
      {
        data: [totalUsers, totalProducts, totalOrders],
        backgroundColor: ["#F472B6", "#EC4899", "#DB2777"],
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div className="p-">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Dashboard</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-6 rounded-xl shadow-lg bg-gradient-to-r ${card.color} text-white`}
          >
            <div>{card.icon}</div>
            <div>
              <p className="text-lg font-semibold">{card.title}</p>
              <p className="text-2xl font-bold">{loading ? "..." : card.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-pink-600">Monthly Orders & Earnings</h2>
          <Line data={lineChartData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-pink-600">Distribution</h2>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;