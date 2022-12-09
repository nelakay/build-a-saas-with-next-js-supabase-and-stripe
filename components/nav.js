import Link from "next/link";
import { useUser } from "../context/user";
import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Nav = () => {
  const { user } = useUser();

  return (
    <nav className="flex flex-col bg-celeste_color p-1 pt-4">
      {/*top nav*/}
      <div className="flex sm:flex-grow-0 pb-4 px-20">
    
        <Link href="/">
          <Image
            onClick={() => router.push("/")}
            src="/logow.png"
            width={140}
            height={30}
            className="cursor-pointer px-4 mb-2 object-contain"
            alt="celeste logo"
          />
        </Link>

      {/* Right side */}
      <div className="flex flex-grow justify-end space-x-4 items-end">
        {/* Account / Orders */}
        {!!user && (
          <Link href="/dashboard">
            <a className="ml-2 text-celeste_color-gray">Account</a>
          </Link>
        )}

        {/* Login/Logout */}
        <div className="ml-auto text-celeste_color-gray">
          <Link href={user ? "/logout" : "/login"}>
            <a>{user ? "Logout" : "Login"}</a>
          </Link>
        </div>

        {/* Cart */}
        <div
          onClick={() => router.push("/checkout")}
          className="relative link flex items-center"
        >
          <span className="absolute top-0 right-0 md:-right-1 h-4 w-4 gradient text-center rounded-full text-white font-bold">
            {/* {items.length} */}
          </span>
          <ShoppingCartIcon className="h-8 text-celeste_color-gray" />
          {/* <p className="hidden md:inline mt-2 text-celeste_color-gray">
              Basket
            </p> */}
        </div>
      </div>
      </div>

            {/* Bottom Navigation */}
      <div className="flex items-center justify-center space-x-16 p-2 pl-6 font-bold bg-celeste_color-light text-celeste_color-gray text-md w-full">
        <p className="link">Games</p>
        <p className="link">Keys</p>
        <p className="link">Missions</p>
        <p className="link">Community</p>
        <p className="link">Constellation Engine</p>
      </div>
    </nav>
  );
};

export default Nav;
