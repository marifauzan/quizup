import React from "react";

export default function Quiz() {
  return (
    <div className="container p-8">
      <div className="flex flex-col">
        <div className="w-full dark:bg-yellow-100 rounded-full h-1.5 bg-yellow-100">
          <div
            className="dark:bg-yellow-500 h-1.5 rounded-full bg-yellow-500"
            style={{ width: "45%" }}
          ></div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div>Previous</div>
          <div>00:00:00</div>
        </div>
        <div className="flex flex-col items-center self-center w-1/2 mt-8">
          <div className="text-base font-bold text-center mb-2">
            Question 2/10
          </div>
          <div className="text-base font-normal text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            arcu pretium, rutrum augue ut, dictum nulla. Morbi venenatis magna a
            dui malesuada vehicula sed eget mauris.
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              A. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              B. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              C. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="bg-slate-200 rounded-lg py-2 px-4">
              D. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
