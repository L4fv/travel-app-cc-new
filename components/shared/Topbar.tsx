import Icon from "@mdi/react";
import Link from "next/link";
import { mdiFacebook, mdiWhatsapp } from "@mdi/js";
import { config } from "../../config";

export const Topbar = () => {
  return (
    <div className="sticky top-0 inset-x-0 bg-white shadow z-20">
      <nav className="px-4 sm:px-8 py-2 sm: max-w-6xl mx-auto flex items-center space-x-6">
        <Link href="/">
          <a className="mr-auto">
            <img
              className="h-12"
              src={config.assetImg(config.images.logo)}
              alt="Logo"
            />
          </a>
        </Link>
        <div className="flex items-center space-x-4 md:space-x-6 tracking-wider">
          <a
            href={`https://fb.com/${config.fbUsername}`}
            target="_blank"
            className="flex items-center space-x-1"
          >
            <Icon path={mdiFacebook} size={1} color="#4267B2" />
            <span className="text-sm hidden sm:block">
              /{config.fbUsername}
            </span>
          </a>
          <a
            href={`https://wa.me/${config.contactPhone}?text=Buen+día,+`}
            target="_blank"
            className="flex items-center space-x-1"
          >
            <Icon path={mdiWhatsapp} size={1} color="#4fce5d" />
            <span className="text-sm hidden sm:block">
              +{config.contactPhone}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};
