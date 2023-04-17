import useCurrentLocation from "../../hooks/useCurrentLocation";
import { Creation, SidebarLinks } from "./data";

const SideBar = () => {
  const { pathname } = useCurrentLocation();
  return (
    <div className="border-r border-[#EEEEEE] text-normal h-screen w-1/5 fixed">
      <div className="px-4 pt-8">
        {SidebarLinks.map((sidebar) => (
          <a href={sidebar.url}>
            <div
              className={`flex py-2 hover:bg-[#F4FFF1] px-4 border cursor-pointer w-56 hover:border rounded-lg trans my-4 hover:text-quaternary items-center ${
                pathname === sidebar.url
                  ? "bg-[#F4FFF1] border border-quaternary text-quaternary"
                  : "border-lightGrey"
              }`}
              key={sidebar.title}
            >
              {pathname === sidebar.url ? sidebar.activeIcon : sidebar.icon}
              <p className="ml-4 font-gilroyMd">{sidebar.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="h-px bg-[#EEEEEE] my-4" />
      <div className="px-4">
        {Creation.map((create) => (
          <div
            className="flex py-2 hover:bg-[#F4FFF1] px-4 border border-lightGrey cursor-pointer w-56 hover:border hover:border-quaternary rounded-lg trans my-4 hover:text-quaternary items-center"
            key={create.title}
          >
            <div className="border-grey rounded border p-1">{create.icon}</div>
            <p className="ml-4 font-gilroyMd">{create.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;