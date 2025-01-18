export const Overview = () => {
  return (
    <div className="flex justify-between p-5">
      <div className="text-xl font-medium">Overview</div>
      <div className="flex text-base border-2 border-black-150 rounded p-1.5">
        <div>This Month</div>
        <div className="pt-0.5">
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
