import React from "react";
import { MessageSquare, SearchCheck, Eye, UserRound } from "lucide-react";

const CardDetail = () => {
  const userData = {
    username: "Jeramay Rose",
    position: "Product Designer",
    location: "New York, NK",
    rating: 8.6,
    address: {
      primaryAddress: {
        main: "Spotify New York",
        street: "170 william Street",
        lane: "New York, NY 10038",
      },
      secondaryAddress: {
        main: "Metropolitan Museum ",
        street: "520 E 81st St",
        lane: "New York, NY 10038",
      },
    },
    skills: [
      "Branding",
      "UI/UX",
      "Web Design",
      "Packaging",
      "Print & Editorial",
    ],
    contactDetails: {
      phone: "+1 123 456 7890",
      address: "170 William Street, New York, NY 10038",
      email: "hello@jeri.com",
      site: "www.jeramayrose.com",
    },
    basicInfo: {
      BirthDay: "January 1, 1990",
      Gender: "Male",
    },
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  };
return (
    <>
        <div className="flex flex-col md:flex-row justify-between gap-10 bg-white p-10 rounded-lg w-full md:w-[70%]">
            <div className="grid grid-cols-2">
                <img src={userData.avatar} alt="" className="w-[300px]" />
                <div className="grid gap-3 border-b border-gray-200 ">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-gray-500">
                            {userData.username}{" "}
                            <span className="text-gray-300 text-sm ml-5">
                                {userData.location}
                            </span>
                        </h1>
                        <p className="text-blue-400 text-lg font-semibold">
                            {userData.position}
                        </p>
                    </div>

                    <div>
                        <h1 className="upperCase text-sm text-gray-400 font-semibold">
                            RANKINGS
                        </h1>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 text-2xl font-bold">
                                {userData.rating}
                            </span>
                            <span className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-5 h-5 ${
                                            i < 4 ? "text-blue-500" : "text-gray-300"
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                    </svg>
                                ))}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        <div className="flex items-center justify-center gap-3 ">
                            <MessageSquare className="text-gray-500" />
                            <span className="text-lg text-gray-600 font-semibold">
                                Send Message
                            </span>
                        </div>

                        <div className="flex items-center gap-3 bg-blue-100 px-6 py-2">
                            <SearchCheck className="text-gray-500" />
                            <span className="text-blue-500 font-semibold text-lg">
                                Contacts
                            </span>
                        </div>
                        <div>
                            <h1 className="text-gray-600 font-semibold">Report User</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mt-5">
                        <div className="flex items-center gap-3 py-4 ">
                            <Eye className="text-gray-500 w-[20px]" />
                            <span className="text-gray-400 font-semibold">Timeline</span>
                        </div>

                        <div className="flex items-center gap-3 group cursor-pointer border-b-2 border-blue-400 py-4">
                            <UserRound className="text-gray-600 w-[20px]" />
                            <span className="text-gray-600 font-semibold">About</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col items-end">
                <div className="self-end mb-auto">widj</div>
            </div>
        </div>
    </>
);
};

export default CardDetail;
