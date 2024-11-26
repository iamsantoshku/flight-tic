// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { FaTicketAlt, FaDollarSign } from "react-icons/fa";
// import { AiOutlineLineChart } from "react-icons/ai";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   // Line Chart Data
//   const ticketData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
//     datasets: [
//       {
//         label: "Solved Tickets",
//         data: [30, 45, 60, 70, 90, 110, 120, 140, 150, 160, 170],
//         borderColor: "#4CAF50",
//         backgroundColor: "rgba(76, 175, 80, 0.2)",
//         tension: 0.3,
//       },
//       {
//         label: "New Tickets",
//         data: [50, 60, 80, 95, 100, 120, 130, 145, 150, 165, 180],
//         borderColor: "#FF9800",
//         backgroundColor: "rgba(255, 152, 0, 0.2)",
//         tension: 0.3,
//       },
//     ],
//   };

//   const ticketOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Solved Tickets vs New Tickets",
//       },
//     },
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="grid md:grid-cols-3 gap-4 mb-6">
//         <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
//           <div>
//             <h3 className="text-gray-600">Revenue</h3>
//             <p className="text-3xl font-bold text-blue-600">$10,259</p>
//           </div>
//           <FaDollarSign className="text-3xl text-blue-600" />
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
//           <div>
//             <h3 className="text-gray-600">Ticket Ordered</h3>
//             <p className="text-3xl font-bold text-orange-600">800 Pcs</p>
//           </div>
//           <FaTicketAlt className="text-3xl text-orange-600" />
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
//           <div>
//             <h3 className="text-gray-600">Ticket Refunded</h3>
//             <p className="text-3xl font-bold text-blue-600">50 Left</p>
//           </div>
//           <AiOutlineLineChart className="text-3xl text-blue-600" />
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid lg:grid-cols-3 gap-4">
//         {/* Solved Tickets vs New Tickets */}
//         <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-bold text-gray-600 mb-4">Solved Tickets vs New Tickets</h3>
//           <Line data={ticketData} options={ticketOptions} />
//         </div>

//         {/* Other Charts Placeholder */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-bold text-gray-600">Ticket by Type</h3>
//           <div className="h-64 bg-gray-100 rounded-lg flex justify-center items-center text-gray-500">
//             Chart Placeholder
//           </div>
//         </div>
//       </div>

//       {/* Recent Sales and Agent Stats */}
//       <div className="grid lg:grid-cols-2 gap-4 mt-6">
//         {/* New vs Returned Tickets */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-bold text-gray-600">New vs Returned Ticket</h3>
//           <div className="h-64 bg-gray-100 rounded-lg flex justify-center items-center text-gray-500">
//             Chart Placeholder
//           </div>
//         </div>
//         {/* Recent Sales Table */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-bold text-gray-600">Recent Sales</h3>
//           <table className="w-full mt-4 text-gray-600">
//             <thead>
//               <tr>
//                 <th className="text-left">No.</th>
//                 <th className="text-left">Order ID</th>
//                 <th className="text-left">Name</th>
//                 <th className="text-left">Date</th>
//                 <th className="text-left">Sold Ticket</th>
//                 <th className="text-left">Refund</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>#C87675</td>
//                 <td>Martin</td>
//                 <td>04/08/23</td>
//                 <td>1 Pcs</td>
//                 <td>No</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>#A12778</td>
//                 <td>Josha</td>
//                 <td>03/08/23</td>
//                 <td>2 Pcs</td>
//                 <td>No</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>#B32789</td>
//                 <td>Tony</td>
//                 <td>02/08/23</td>
//                 <td>3 Pcs</td>
//                 <td>No</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { FaDollarSign, FaTicketAlt } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Data for Line Chart (Solved vs New Tickets)
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Solved Tickets",
        data: [30, 50, 45, 60, 70, 90, 110, 120, 140, 160, 180],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.3,
      },
      {
        label: "New Tickets",
        data: [40, 60, 55, 70, 80, 100, 120, 130, 150, 170, 200],
        borderColor: "#FF9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  // Data for Doughnut Chart (Ticket by Type)
  const doughnutChartData = {
    labels: ["Sales", "Setup", "Refund"],
    datasets: [
      {
        data: [24000, 8000, 5000],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">Revenue</h3>
            <p className="text-3xl font-bold text-blue-600">$10,259</p>
          </div>
          <FaDollarSign className="text-4xl text-blue-600" />
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">Tickets Ordered</h3>
            <p className="text-3xl font-bold text-orange-600">800 Pcs</p>
          </div>
          <FaTicketAlt className="text-4xl text-orange-600" />
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">Tickets Refunded</h3>
            <p className="text-3xl font-bold text-blue-600">50 Left</p>
          </div>
          <HiOutlineChartBar className="text-4xl text-blue-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Solved vs New Tickets Chart */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Solved Tickets vs New Tickets</h3>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>

        {/* Ticket by Type Doughnut Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Tickets by Type</h3>
          <Doughnut data={doughnutChartData} />
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        {/* Recent Sales Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Recent Sales</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b pb-2">No.</th>
                <th className="border-b pb-2">Order ID</th>
                <th className="border-b pb-2">Name</th>
                <th className="border-b pb-2">Date</th>
                <th className="border-b pb-2">Sold Ticket</th>
                <th className="border-b pb-2">Refund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#C87675</td>
                <td>Martin</td>
                <td>04/08/23</td>
                <td>1 Pcs</td>
                <td>No</td>
              </tr>
              <tr>
                <td>2</td>
                <td>#A12778</td>
                <td>Josha</td>
                <td>03/08/23</td>
                <td>2 Pcs</td>
                <td>No</td>
              </tr>
              <tr>
                <td>3</td>
                <td>#B32789</td>
                <td>Tony</td>
                <td>02/08/23</td>
                <td>3 Pcs</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Agents with Most Tickets Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="font-bold text-gray-600 mb-4">Agent with Most Tickets</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b pb-2">Name</th>
                <th className="border-b pb-2">Tickets</th>
                <th className="border-b pb-2">Location</th>
                <th className="border-b pb-2">Last Replay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Briggs</td>
                <td>10</td>
                <td>🇺🇸</td>
                <td>10:20pm</td>
              </tr>
              <tr>
                <td>Martin</td>
                <td>20</td>
                <td>🇯🇵</td>
                <td>05:20pm</td>
              </tr>
              <tr>
                <td>Jones</td>
                <td>35</td>
                <td>🇩🇪</td>
                <td>06:30am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




// dynemic code 
// import React, { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";
// import { Line, Doughnut } from "react-chartjs-2";
// import { FaDollarSign, FaTicketAlt } from "react-icons/fa";
// import { HiOutlineChartBar } from "react-icons/hi";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// // Registering Chart.js modules
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const Dashboard = () => {
//   const [stats, setStats] = useState({});
//   const [recentSales, setRecentSales] = useState([]);
//   const [agents, setAgents] = useState([]);

//   // Line chart and Doughnut chart data and options
//   const lineChartData = {
//     labels: stats?.lineChartLabels || [],
//     datasets: [
//       {
//         label: "Solved Tickets",
//         data: stats?.solvedTickets || [],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.4,
//       },
//       {
//         label: "New Tickets",
//         data: stats?.newTickets || [],
//         borderColor: "rgba(255, 99, 132, 1)",
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const lineChartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Solved vs New Tickets",
//       },
//     },
//   };

//   const doughnutChartData = {
//     labels: stats?.ticketTypes || [],
//     datasets: [
//       {
//         data: stats?.ticketTypeData || [],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       },
//     ],
//   };

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const statsResponse = await axios.get(`${BACKENDURL}/api/dashboard/stats`);
//         setStats(statsResponse.data);

//         const recentSalesResponse = await axios.get(
//           `${BACKENDURL}/api/dashboard/recent-sales`
//         );
//         setRecentSales(recentSalesResponse.data);

//         const agentsResponse = await axios.get(`${BACKENDURL}/api/dashboard/agents`);
//         setAgents(agentsResponse.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data", error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Stats */}
//       <div className="grid md:grid-cols-3 gap-4 mb-6">
//         <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
//           <div>
//             <h3 className="text-gray-600">Revenue</h3>
//             <p className="text-3xl font-bold text-blue-600">${stats.revenue || 0}</p>
//           </div>
//           <FaDollarSign className="text-4xl text-blue-600" />
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
//           <div>
//             <h3 className="text-gray-600">Tickets Ordered</h3>
//             <p className="text-3xl font-bold text-orange-600">
//               {stats.ticketsOrdered || 0}
//             </p>
//           </div>
//           <FaTicketAlt className="text-4xl text-orange-600" />
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
//           <div>
//             <h3 className="text-gray-600">Tickets Refunded</h3>
//             <p className="text-3xl font-bold text-blue-600">
//               {stats.ticketsRefunded || 0}
//             </p>
//           </div>
//           <HiOutlineChartBar className="text-4xl text-blue-600" />
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-3 gap-4">
//         {/* Solved vs New Tickets Chart */}
//         <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-bold text-gray-600 mb-4">Solved Tickets vs New Tickets</h3>
//           <Line data={lineChartData} options={lineChartOptions} />
//         </div>

//         {/* Ticket by Type Doughnut Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-bold text-gray-600 mb-4">Tickets by Type</h3>
//           <Doughnut data={doughnutChartData} />
//         </div>
//       </div>

//       {/* Recent Sales Table */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//         <h3 className="font-bold text-gray-600 mb-4">Recent Sales</h3>
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr>
//               <th className="border-b pb-2">No.</th>
//               <th className="border-b pb-2">Name</th>
//               <th className="border-b pb-2">Email</th>
//               <th className="border-b pb-2">Seat</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentSales.map((sale, index) => (
//               <tr key={sale._id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {sale.fName} {sale.lName}
//                 </td>
//                 <td>{sale.email}</td>
//                 <td>{sale.seat}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Agents with Most Tickets */}
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h3 className="font-bold text-gray-600 mb-4">Agent with Most Tickets</h3>
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr>
//               <th className="border-b pb-2">Name</th>
//               <th className="border-b pb-2">Tickets</th>
//             </tr>
//           </thead>
//           <tbody>
//             {agents.map((agent) => (
//               <tr key={agent._id}>
//                 <td>{agent.name}</td>
//                 <td>{agent.tickets}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
