export const Transactions = () => {
  return (
    <div className="p-3 pt-8">
      <div className="pb-7">
        <div className="text-xl font-medium">Transactions | This Month</div>
        <div className="flex pt-3 gap-x-3">
          <div className="rounded-full bg-button-grey px-3 py-1">
            Payouts(22)
          </div>
          <div className="rounded-full bg-button-blue px-3 py-1">
            Refunds (6)
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4 bg-white rounded px-3">
        <div className="w-96">
          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none pl-3">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-base text-gray-900  rounded-lg dark:bg-white border border-grey-700  dark:placeholder-gray-400 dark:text-white caret-black focus:outline-none"
                placeholder="Order ID or transaction ID"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex justify-end gap-4">
          <div className="flex border border-black-150 h-9 px-3  rounded">
            <div className="text-xl">Sort</div>
            <div className="pl-2 pt-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.624959 7.93424C0.833239 7.72596 1.17093 7.72596 1.37921 7.93424L3.64295 10.198L5.90669 7.93424C6.11497 7.72596 6.45266 7.72596 6.66094 7.93424C6.86922 8.14252 6.86922 8.48021 6.66094 8.68849L4.02007 11.3294C3.81179 11.5376 3.47411 11.5376 3.26583 11.3294L0.624959 8.68849C0.41668 8.48021 0.41668 8.14252 0.624959 7.93424Z"
                  fill="#4D4D4D"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.6429 0.515641C3.93746 0.515641 4.17624 0.754422 4.17624 1.04897L4.17624 10.9522C4.17624 11.2468 3.93746 11.4856 3.6429 11.4856C3.34835 11.4856 3.10957 11.2468 3.10957 10.9522L3.10957 1.04897C3.10957 0.754422 3.34835 0.515641 3.6429 0.515641Z"
                  fill="#4D4D4D"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3792 4.06695C13.1709 4.27523 12.8332 4.27523 12.6249 4.06695L10.3612 1.8032L8.09745 4.06695C7.88917 4.27523 7.55149 4.27523 7.34321 4.06695C7.13493 3.85867 7.13493 3.52098 7.34321 3.3127L9.98408 0.671834C10.1924 0.463555 10.53 0.463555 10.7383 0.671835L13.3792 3.3127C13.5875 3.52098 13.5875 3.85867 13.3792 4.06695Z"
                  fill="#4D4D4D"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3612 11.4855C10.0667 11.4855 9.82791 11.2468 9.82791 10.9522L9.82791 1.04896C9.82791 0.75441 10.0667 0.51563 10.3612 0.51563C10.6558 0.51563 10.8946 0.75441 10.8946 1.04896L10.8946 10.9522C10.8946 11.2468 10.6558 11.4855 10.3612 11.4855Z"
                  fill="#4D4D4D"
                ></path>
              </svg>
            </div>
          </div>
          <div className="border border-black-150 rounded h-9 px-3 pt-1">
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white rounded pt-5">
        <table className="w-full text-sm ">
          <thead className="text-xm text-table-header font-medium rounded">
            <tr>
              <th className="pl-6 font-medium text-left">ORDER ID</th>
              <th className="pl-6 font-medium text-left">STATUS</th>
              <th className="pl-6 font-medium text-left">TRANSACTION</th>
              <th className="pl-6 font-medium text-left">REFUND DATE</th>
              <th className="text-right pr-10 font-medium">ORDER AMOUNT </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281209
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Successfull
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                Today, 08:45 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281208
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                Yesterday, 08:45 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281207
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                Failed
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281206
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                Successfull
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="pl-6 py-6 font-medium text-left text-button-blue">
                #281205
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-400"></div>
                Processing
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                131634495747
              </td>
              <td className="pl-6 py-6 text-neutral-800 text-left">
                12 Jul 2023, 3:00 PM
              </td>
              <td className="text-right py-6 pr-10 text-neutral-800">
                ₹1,125.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
