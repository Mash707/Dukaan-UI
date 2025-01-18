export const Footer = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center text-slate-500 gap-1 text-xl">
      <div>
        -----Made by{" "}
        <a
          className="underline underline-offset-2 text-button-blue"
          href="https://x.com/Divy707"
        >
          Divyanshu Gupta
        </a>
        , inspired by{" "}
        <a
          className="underline underline-offset-2 text-button-blue"
          href="https://x.com/subhashchy/status/1744308069751025894?t=MrLV-PSnfsgv0Hg2jTz5JA&s=08"
        >
          Dukaan App UI
        </a>
        -----
      </div>
      <div>
        <a
          className="underline underline-offset-2"
          href="https://github.com/Mash707/Dukaan-UI"
        >
          Get the source code
        </a>
      </div>
    </div>
  );
};
