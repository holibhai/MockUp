import React, { useState, useEffect } from "react";
import {
  File,
  CirclePlus,
  MessageSquare,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Settings,
  CircleX
} from "lucide-react";
import { useNavigate } from "react-router-dom";



const DashBoard = () => {
  // User data and pagination state
  const [allUsers, setAllUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage] = useState(5);
  const [totalUsers, setTotalUsers] = useState(0);

  const navigate=useNavigate();

  // Fetch user data (simulating API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API response delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // This would typically come from an API
        const userData = {
          page: 1,
          per_page: 6,
          total: 10,
          total_pages: 2,
          data: [
            {
              id: 1,
              email: "george.bluth@reqres.in",
              first_name: "George",
              last_name: "Bluth",
              avatar: "https://reqres.in/img/faces/1-image.jpg",
              dateCreated: "04/10/2013",
              role: "Admin",
              status: "Active",
            },
            {
              id: 2,
              email: "janet.weaver@reqres.in",
              first_name: "Janet",
              last_name: "Weaver",
              avatar: "https://reqres.in/img/faces/2-image.jpg",
              dateCreated: "05/08/2014",
              role: "Publisher",
              status: "Active",
            },
            {
              id: 3,
              email: "emma.wong@reqres.in",
              first_name: "Emma",
              last_name: "Wong",
              avatar: "https://reqres.in/img/faces/3-image.jpg",
              dateCreated: "11/05/2015",
              role: "Publisher",
              status: "Suspended",
            },
            {
              id: 4,
              email: "eve.holt@reqres.in",
              first_name: "Eve",
              last_name: "Holt",
              avatar: "https://reqres.in/img/faces/4-image.jpg",
              dateCreated: "06/09/2016",
              role: "Reviewer",
              status: "Active",
            },
            {
              id: 5,
              email: "charles.morris@reqres.in",
              first_name: "Charles",
              last_name: "Morris",
              avatar: "https://reqres.in/img/faces/5-image.jpg",
              dateCreated: "12/08/2017",
              role: "Moderator",
              status: "Inactive",
            },
            {
              id: 6,
              email: "tracey.ramos@reqres.in",
              first_name: "Tracey",
              last_name: "Ramos",
              avatar: "https://reqres.in/img/faces/6-image.jpg",
              dateCreated: "03/04/2018",
              role: "Reviewer",
              status: "Active",
            },
            {
              id: 7,
              email: "michael.lawson@reqres.in",
              first_name: "Michael",
              last_name: "Lawson",
              avatar: "https://reqres.in/img/faces/7-image.jpg",
              dateCreated: "07/12/2018",
              role: "Admin",
              status: "Active",
            },
            {
              id: 8,
              email: "lindsay.ferguson@reqres.in",
              first_name: "Lindsay",
              last_name: "Ferguson",
              avatar: "https://reqres.in/img/faces/8-image.jpg",
              dateCreated: "09/22/2019",
              role: "Publisher",
              status: "Suspended",
            },
            {
              id: 9,
              email: "tobias.funke@reqres.in",
              first_name: "Tobias",
              last_name: "Funke",
              avatar: "https://reqres.in/img/faces/9-image.jpg",
              dateCreated: "11/15/2019",
              role: "Reviewer",
              status: "Active",
            },
            {
              id: 10,
              email: "byron.fields@reqres.in",
              first_name: "Byron",
              last_name: "Fields",
              avatar: "https://reqres.in/img/faces/10-image.jpg",
              dateCreated: "01/20/2020",
              role: "Moderator",
              status: "Inactive",
            },
          ],
        };

        setAllUsers(userData.data);
        setTotalUsers(userData.data.length);
        setTotalPages(Math.ceil(userData.data.length / perPage));
        updateCurrentUsers(userData.data, currentPage, perPage);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchData();
  }, []);

  // Update current users when page changes
  useEffect(() => {
    updateCurrentUsers(allUsers, currentPage, perPage);
  }, [currentPage, allUsers, perPage]);

  const updateCurrentUsers = (users, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    setCurrentUsers(users.slice(startIndex, endIndex));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Suspended":
        return "bg-red-500";
      case "Inactive":
        return "bg-gray-400";
      default:
        return "bg-blue-500";
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handliClick = () => {
        navigate('/userdetail');
  }


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 md:p-5 rounded-lg mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">
          User <span className="font-semibold">Management</span>
        </h1>
        <div className="flex gap-3 text-sm font-semibold">
          <button className="flex gap-2 items-center bg-white text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
            <File size={18} />
            <span>Export to Excel</span>
          </button>
          <button className="flex gap-2 items-center bg-white text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
            <CirclePlus size={18} />
            <span>Add New User</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left font-medium text-center">#</th>
                <th className="p-3 text-left font-medium">Name</th>
                <th className="p-3 text-left font-medium">Date Created</th>
                <th className="p-3 text-left font-medium">Role</th>
                <th className="p-3 text-left font-medium">Status</th>
                <th className="p-3 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  onClick={handliClick}
                >
                  <td className="text-center p-3">{user.id}</td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-gray-500 font-bold">
                          {user.first_name} {user.last_name}
                        </div>
                        
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-gray-600">{user.dateCreated}</td>
                  <td className="p-3 text-gray-600">{user.role}</td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <span
                        className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(
                          user.status
                        )}`}
                      ></span>
                      <span className="text-gray-600">{user.status}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2 text-gray-500">
                      <button className="p-1 hover:text-blue-600 transition-colors">
                        <Settings size={20} className="bg-blu" />
                      </button>
                      <button className="p-1 hover:text-blue-600 transition-colors">
                        <CircleX size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 border-t border-gray-200 bg-white text-sm text-gray-600">
          <div className="mb-3 sm:mb-0">
            Showing {Math.min(currentPage * perPage, totalUsers)} out of{" "}
            {totalUsers} entries
          </div>
          <div className="flex items-center gap-1">
            <button
              className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-md ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                } transition-colors`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;