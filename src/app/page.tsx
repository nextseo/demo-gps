import HomePage from "./components/Home";
import MenuProfile from "./components/MenuProfile";

export default function Home() {
  return (
    <div className="  bg-gray-100">
      <header className="flex flex-row gap-2 justify-between px-10  lg:px-32 py-6 shadow-lg bg-white ">
        <div className="w-1/2 lg:w-1/3">
          <h2 className=" font-semibold">ระบบติดตามจากดาวเทียม</h2>
        </div>

        <div className="w-1/2 lg:w-2/3 flex justify-end"><MenuProfile/></div>
      </header>
      <div className="container mx-auto">
        <div className=" mx-10 lg:mx-32 py-10 h-screen  ">
          <HomePage />
        </div>
      </div>
    </div>
  );
}
