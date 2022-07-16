import { config } from "../../config";
import Icon from "@mdi/react";
import Link from "next/link";
import { mdiFacebook, mdiWhatsapp, mdiInstagram } from "@mdi/js";
export const Footer = () => {
  return (
    <>
      <div className="p-10 bg-gray-800 text-gray-100 mt-auto">
        <div className="max-w-6xl mx-auto">
          <p className="text-center">&copy; {config.name}</p>
        </div>
        <div className="max-w-6xl mx-auto py-2">
          <a
            href={`https://fb.com/${config.fbUsername}`}
            target="_blank"
            className="flex items-center space-x-1 py-2"
          >
            <Icon path={mdiFacebook} size={1} color="#4267B2" />
            <span className="text-sm ">/{config.fbUsername}</span>
          </a>
          {config.InsUsername && (
            <a
              href={`https://www.instagram.com/${config.InsUsername}`}
              target="_blank"
              className="flex items-center space-x-1 py-2"
            >
              <Icon path={mdiInstagram} size={1} color="#D300C5" />
              <span className="text-sm ">/{config.fbUsername}</span>
            </a>
          )}{" "}
        </div>
      </div>
      <div className="py-1 bg-black text-gray-400 text-xs text-center">
        Powered by{" "}
        <a href="https://innout.pe" target="_blank" className="underline">
          innout.pe
        </a>
      </div>
    </>
  );
};
