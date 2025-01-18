export const RevenueCard = ({ title, amount, orderCount, isPayout }) => {
  return (
    <div>
      <div
        className={
          isPayout
            ? "bg-blue-700 rounded-t-lg shadow-md p-5 text-white"
            : "bg-white rounded shadow-md p-5"
        }
      >
        <div
          className={
            isPayout ? "text-white flex pb-2" : "text-gray-700 flex pb-2"
          }
        >
          <div>{title}</div>
          <div className="pl-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold text-3xl">₹ {amount}</div>
          <div>
            {" "}
            {orderCount ? (
              <div className="flex pt-2 cursor-pointer">
                <div className="underline">{orderCount} orders</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      {isPayout ? (
        <div className="flex justify-between bg-blue-900 pt-2 pl-4 rounded-b-lg shadow-md px-5 pb-2 text-white">
          <div>Next Payout date:</div>
          <div>Today, 04:00 PM</div>
        </div>
      ) : (
        <div className="bg-white"></div>
      )}
    </div>
  );
};
