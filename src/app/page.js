import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center main-page">
        <h1 className="text-9xl text-yellow-200 font-FoundersGrotesk text-stroke">
          Welcome to PawsNation
        </h1>
        <Link href={"/main"}>
          {/* <button class="cursor-pointer relative top-12 group overflow-hidden border-2 px-8 py-2 border-yellow-300">
            <span class="font-bold text-zinc-900 text-xl relative z-10 group-hover:text-yellow-300 duration-300">
              Explore
            </span>
            <span class="absolute top-0 left-0 w-full bg-yellow-300 duration-300 group-hover:-translate-x-full h-full"></span>
            <span class="absolute top-0 left-0 w-full bg-yellow-300 duration-300 group-hover:translate-x-full h-full"></span>

            <span class="absolute top-0 left-0 w-full bg-yellow-300 duration-300 delay-300 group-hover:-translate-y-full h-full"></span>
            <span class="absolute delay-300 top-0 left-0 w-full bg-yellow-300 duration-300 group-hover:translate-y-full h-full"></span>
          </button> */}
          {/* <button class="group flex items-center justify-between top-8 w-16 h-16 bg-yellow-300 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-36 hover:rounded-lg active:translate-x-1 active:translate-y-1">
            <div class="flex items-center justify-center w-full transition-all duration-500 group-hover:justify-start group-hover:px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[44px] text-zinc-700"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </div>
            <div class="absolute right-3 transform translate-x-full opacity-0 text-zinc-700 text-2xl font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Explore
            </div>
          </button> */}
          <button className="px-6 py-4 bg-yellow-300 rounded-md top-8 text-[#240A34] relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-yellow-400 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#EABE6C;] hover:[text-shadow:2px_2px_2px_#FFF67E] text-2xl font-Anta">
            Explore
          </button>
        </Link>
      </div>
    </>
  );
}
