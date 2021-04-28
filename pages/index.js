import React, { useState } from "react";
export default function Home() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <div className="h-screen flex">
      {/* SIDEBAR */}
      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 px-8 py-4 z-30 bg-white  border-r overflow-auto  lg:translate-x-0 transform ${
          isOpenSideBar
            ? "translate-x-0 ease-out transition-medium"
            : "-translate-x-full ease-in transition-medium"
        } `}
      >
        <div className="flex justify-between items-center">
          <img src="/images/logo.svg" alt="Logo" className="w-10 h-10" />
          <button
            className="text-gray-700 lg:hidden"
            onClick={() => toggleSidebar()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-8">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Scrumboard
          </h3>

          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">23</span>
            </a>

            <a
              href="#"
              className="flex justify-between items-center px-3 py-2 bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg"
            >
              <span className="text-sm font-medium  text-white">
                Active Sprints
              </span>
              <span className="text-xs font-semibold text-white">1</span>
            </a>

            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
          </div>

          <h3 className="mt-8 text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Tags
          </h3>

          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Bug</span>
            </a>

            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">
                New Feature
              </span>
            </a>

            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">
                Marketing
              </span>
            </a>

            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>

            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">
                Research
              </span>
            </a>

            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Overdue</span>
            </a>
          </div>
        </nav>
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0 flex flex-col bg-white ">
        <div className="flex-shrink-0">
          <header className="flex flex-col px-6 border-b border-gray-200">
            <div className=" min-w-0 flex justify-between items-center  py-3">
              <div className="min-w-0 flex-1 flex">
                {/* HAMBURGER */}

                <button
                  className="text-gray-600 lg:hidden "
                  onClick={() => toggleSidebar()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Search */}
                <div className=" relative w-64 ml-4 lg:ml-0 ">
                  <span className="  absolute inset-y-0 left-0 flex items-center pl-3 ">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    className="block w-full text-sm border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400"
                    placeholder="search"
                  />
                </div>
              </div>

              {/* ICONS */}
              <div className="ml-4  flex items-center ">
                <button className="flex-shrink-0 text-gray-500 h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <button className="flex-shrink-0 ml-4 mr-2">
                  <img
                    src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                    className="cat rounded-full w-9 h-9 object-cover  "
                  />
                </button>
              </div>
            </div>

            {/* Header Bottom */}
            <div className="flex justify-between items-center py-2">
              <div className="sm:flex sm:items-center">
                <h2 className="text-lg font-medium text-gray-900 ">
                  Assigness
                </h2>

                <div className="flex sm:ml-4 sm:mt-0 mt-1">
                  <span className="border-2 border-white rounded-full">
                    <img
                      src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                      className="cat rounded-full w-6 h-6 object-cover  "
                    />
                  </span>

                  <span className="-ml-2.5 border-2 border-white rounded-full">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      className="cat rounded-full w-6 h-6 object-cover  "
                    />
                  </span>

                  <span className="-ml-2.5 border-2 border-white rounded-full">
                    <img
                      src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      className="cat rounded-full w-6 h-6 object-cover  "
                    />
                  </span>

                  <span className="-ml-2.5 border-2 border-white rounded-full">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="cat rounded-full w-6 h-6 object-cover  "
                    />
                  </span>
                </div>
              </div>

              <div className="ml-8  flex items-center ">
                <button className="text-white bg-gray-900 pl-2 pr-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Complete Sprint
                </button>
                <button className="flex items-center ml-4 text-white bg-gradient-to-r from-purple-700 to-blue-500 pl-2 pr-4 py-2 rounded-md text-sm font-medium hover:from-purple-600 hover:to-blue-400">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                  <span className="ml-1">New Item</span>
                </button>
              </div>
            </div>
          </header>
        </div>

        {/* MAIN */}
        <div className="flex-1 bg-gray-50 overflow-auto">
          <main className="h-full inline-flex space-x-2 overflow-hidden">
            <div className="p-3 flex flex-col w-80  rounded-md">
              <h3 className="pt-3 px-3 pb-1 text-md font-medium text-gray-700 leading-tight ">
                Todo
              </h3>
              <div className="flex-1 min-h-0 ">
                <ul className="pt-1 pb-3 px-3">
                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-3 py-1 bg-blue-200 rounded ">
                            <span className="text-sm font-medium text-blue-500 leading-tight ">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="mt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-3 py-1 bg-red-200 rounded ">
                            <span className="text-sm font-medium text-red-500 leading-tight ">
                              BUG
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-red-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ın progress */}
            <div className="p-3 flex flex-col w-80  rounded-md">
              <h3 className="pt-3 px-3 pb-1 text-md font-medium text-gray-700 leading-tight ">
                In Progress
              </h3>
              <div className="flex-1 min-h-0 overflow-y-auto">
                <ul className="pt-1 pb-3 px-3">
                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-2 py-1 bg-blue-200 rounded ">
                            <span className="text-sm font-medium text-blue-500 leading-tight ">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-2 py-1 bg-pink-200 rounded ">
                            <span className="text-sm font-medium text-pink-500 leading-tight ">
                              RESEARCH
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-2 py-1 bg-green-200 rounded ">
                            <span className="text-sm font-medium text-green-500 leading-tight ">
                              NEW FEATURE
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-2 py-1 bg-blue-200 rounded ">
                            <span className="text-sm font-medium text-blue-500 leading-tight ">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-2 py-1 bg-blue-200 rounded ">
                            <span className="text-sm font-medium text-blue-500 leading-tight ">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* test */}
            <div className="p-3 flex flex-col w-80  rounded-md">
              <h3 className="pt-3 px-3 pb-1 text-md font-medium text-gray-700 leading-tight ">
                Testing
              </h3>
              <div className="flex-1 min-h-0 ">
                <ul className="pt-1 pb-3 px-3">
                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-2 py-1 bg-blue-200 rounded ">
                            <span className="text-sm font-medium text-blue-500 leading-tight ">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* done */}
            <div className="p-3 flex flex-col w-80  rounded-md">
              <h3 className="pt-3 px-3 pb-1 text-md font-medium text-gray-700 leading-tight ">
                Done
              </h3>
              <div className="flex-1 min-h-0 ">
                <ul className="pt-1 pb-3 px-3">
                  <li className="pt-1">
                    <a href="#" class="block bg-white p-5 rounded-md shadow">
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="px-2 py-1 bg-pink-200 rounded ">
                            <span className="text-sm font-medium text-pink-500 leading-tight ">
                              RESEARCH
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-sm to-gray-800">
                            Vero duo accusam magna vero sadipscing sed.
                          </p>
                        </div>

                        <div className="mt-3 flex">
                          <span className="border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?cs=srgb&dl=pexels-emily-garland-1499327.jpg&fm=jpg"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>

                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              className="cat rounded-full w-6 h-6 object-cover  "
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
