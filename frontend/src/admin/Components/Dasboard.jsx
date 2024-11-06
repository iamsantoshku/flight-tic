import React from 'react';
import { FiSearch, FiDownload, FiPlus } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dasboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 15000, 13000, 16000, 14000, 17000, 20000],
        borderColor: '#9c27b0',
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-[vw]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-blue-600">
            <FiPlus className="text-lg" />
            <span>Add New Widgets</span>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything..."
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
            />
            <FiSearch className="absolute top-3 right-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Sales Performance */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Sales Performance</h3>
          <button className="flex items-center text-gray-600">
            <FiDownload className="mr-2" />
            Export
          </button>
        </div>
        <p className="text-gray-500 mb-4">Visited 10 of 100 countries.</p>
        <Line data={chartData} options={chartOptions} />
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-gray-500">Views</p>
            <h4 className="text-2xl font-bold">20,751</h4>
          </div>
          <div>
            <p className="text-gray-500">Sales</p>
            <h4 className="text-2xl font-bold">2,564</h4>
          </div>
        </div>
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white rounded-xl p-4 shadow-md">
          <h4 className="text-lg">Waiting list</h4>
          <div className="flex items-center justify-between mt-2">
            <p className="text-2xl font-bold">840</p>
            <span className="text-sm text-green-200">+1.5</span>
          </div>
        </div>
        <div className="bg-purple-500 text-white rounded-xl p-4 shadow-md">
          <h4 className="text-lg">Completed flights</h4>
          <div className="flex items-center justify-between mt-2">
            <p className="text-2xl font-bold">235</p>
            <span className="text-sm text-green-200">+0.2</span>
          </div>
        </div>
        <div className="bg-black text-white rounded-xl p-4 shadow-md">
          <h4 className="text-lg">Total revenue</h4>
          <div className="flex items-center justify-between mt-2">
            <p className="text-2xl font-bold">$2M</p>
            <span className="text-sm text-red-200">-0.5</span>
          </div>
        </div>
      </div>

      {/* All Bookings */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">All Bookings</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Departure date</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Booking type</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Date range</button>
          </div>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full flex items-center space-x-2">
            <FiDownload />
            <span>Month</span>
          </button>
        </div>
        {/* Booking List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">06:00 Singapore - BDO</p>
              <p className="text-gray-500">Duration: 2h 30m</p>
            </div>
            <div>
              <p className="text-gray-500">Nov 02, 2021</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">20:00 London - DME</p>
              <p className="text-gray-500">Duration: 3h 30m</p>
            </div>
            <div>
              <p className="text-gray-500">Nov 01, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
