import React from 'react';
import { Phone, MapPin, Mail, Globe, Calendar, User } from 'lucide-react';

const PersonalInfo = ({ data }) => {

return (
    <div className="bg-gray-50 flex items-center justify-center">
        <div className="p-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Column - Work Information */}
                <div>
                    <h1 className="text-sm font-semibold text-gray-500 mb-6">WORK</h1>
                    {/* Spotify */}
                    <div className="mb-8">
                        <div className='flex items-center gap-8'>
                            <h2 className="text-xl font-bold text-gray-600 mb-2">Spotify New York</h2>
                            <div className='bg-blue-100 px-6 py-2 text-blue-500 font-semibold'>Primary</div>
                        </div>
                        <p className="text-gray-600">170 William Street</p>
                        <p className="text-gray-600">New York, NY 10038-78 212-312-51</p>
                    </div>
                    {/* Metropolitan Museum */}
                    <div className="mb-8">
                        <div className='flex items-center gap-8'>
                            <h2 className="text-xl font-bold text-gray-600 mb-2">Metropolitan <br /> Museum</h2>
                            <div className='bg-blue-100 px-6 py-2 text-blue-500 font-semibold'>Secondary</div>
                        </div>
                        <p className="text-gray-600">525 E 68th Street</p>
                        <p className="text-gray-600">New York, NY 10651-78 156-187-60</p>
                    </div>
                    {/* Branding */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 mb-8">Skills</h2>
                        <div className="flex flex-col gap-2 font-bold text-gray-600">
                            <h1 className="text-sm">Branding</h1>
                            <h1 className="text-sm">UI/UX</h1>
                            <h1 className="text-sm">Web - Design</h1>
                            <h1 className="text-sm">Packaging</h1>
                            <h1 className="text-sm">Print & Editorial</h1>
                        </div>
                    </div>
                </div>
                {/* Right Column - Contact Information */}
                <div>
                    <h1 className="text-sm font-semibold text-gray-500 mb-6">CONTACT INFORMATION</h1>
                    <table className="w-full mb-8">
                        <tbody>
                            <tr>
                                <td className="pr-4 align-top py-2">Phone</td>
                                <td className="text-blue-400 py-2">+1 123 456 7890</td>
                            </tr>
                            <tr>
                                <td className="pr-4 align-top py-2">Address</td>
                                <td className="text-gray-700 py-2">
                                    525 E 68th Street<br />
                                    New York, NY 10651-78 156-187-60
                                </td>
                            </tr>
                            <tr>
                                <td className="pr-4 align-top py-2">Email</td>
                                <td className="text-blue-400 py-2">hello@jeremyrose.com</td>
                            </tr>
                            <tr>
                                <td className="pr-4 align-top py-2">Website</td>
                                <td className="text-blue-400 py-2">www.jeremyrose.com</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pt-6 border-t border-gray-200">
                        <h2 className="text-sm font-semibold text-gray-600 mb-4">BASIC INFORMATION</h2>
                        <table className="w-full ">
                            <tbody>
                                <tr>
                                    <td className="pr-4 align-top py-2">Birthday</td>
                                    <td className="text-gray-700 py-2">June 5, 1992</td>
                                </tr>
                                <tr>
                                    <td className="pr-4 align-top py-2">Gender</td>
                                    <td className="text-gray-700 py-2">Male</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

// Default data in case no props are passed
PersonalInfo.defaultProps = {
  data: {
    work: [
      {
        company: "Spotify New York",
        address: "170 William Street",
        city: "New York, NY 10038-78 212-312-51"
      },
      {
        company: "Metropolitan Museum",
        address: "525 E 68th Street",
        city: "New York, NY 10651-78 156-187-60",
        tags: ["Museum", "Secondary", "BULLS"]
      }
    ],
    skills: ["UI/UX", "Web - Design", "Packaging", "Print & Editorial"],
    contact: {
      phone: "+1 123 456 7890",
      address: "525 E 68th Street",
      city: "New York, NY 10651-78 156-187-60",
      email: "hello@jeremyrose.com",
      website: "www.jeremyrose.com"
    },
    basicInfo: {
      birthday: "June 5, 1992",
      gender: "Male"
    }
  }
};

export default PersonalInfo;