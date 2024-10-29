import "./chatList.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const ChatList = () => {
  const { theme } = useContext(ThemeContext);
  const hoverBg =
    theme === "light" ? "hover:bg-slate-200" : "hover:bg-neutral-800";
  const scrollbarClass =
    theme === "dark" ? "scrollbar-dark" : "scrollbar-light";

  return (
    <div className="chatList flex flex-col p-5 h-5/6">
      <span className="title font-semibold text-xs mb-2.5">DASHBOARD</span>
      <Link to="/dashboard" className="font-normal text-sm mb-2.5">
        Create a new Chat
      </Link>
      <Link to="/" className="font-normal text-sm mb-2.5">
        Explore Lama AI
      </Link>
      <Link to="/" className="font-normal text-sm mb-2.5">
        Contact
      </Link>
      <hr className="border-none h-0.5 bg-slate-50 opacity-10 rounded-sm mb-5" />

      <span className="title font-semibold text-xs mb-2.5">RECENT CHATS</span>
      <div
        className={`list flex flex-col overflow-y-auto flex-grow h-full ${scrollbarClass}`}
      >
        {Array.from({ length: 20 }).map((_, idx) => (
          <Link key={idx} to="/" className={`p-2.5 rounded-xl ${hoverBg}`}>
            Chat Title {idx + 1}
          </Link>
        ))}
      </div>
      <hr className="border-none h-0.5 bg-slate-50 opacity-10 rounded-sm mt-5 mb-5" />

      <div className="upgrade -mb-16 mt-auto flex items-center gap-2 text-xs ">
        <img src="/panda.svg" alt="" className="w-6 h-6 mb-8" />
        <div className="texts flex flex-col gap-1">
          <span className="font-semibold">Upgrade to PANDA AI Pro</span>
          <span className="text-slate-500">
            Get unlimited access to all features
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;