import React, { useState } from "react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <nav
      className={`w-full bg-[rgb(255,255,255,0.05)] lg:bg-transparent px-5 py-6 sm:py-5 lg:py-5 lg:px-10 flex items-center justify-between`}
    >
      <div>
        <img src="/navlogo.png" alt="logo" className="w-[120px]" />
      </div>
      <div className="xl:flex hidden text-[15px]">
        <Link
          to="/"
          className="flex justify-center items-center select-none rounded-md hover:bg-[rgb(255,255,255,.2)] p-2"
        >
          Product
          <FiChevronDown />
        </Link>
        <Link
          to="/users"
          className="rounded-md hover:bg-[rgb(255,255,255,.2)] select-none p-2"
        >
          Users
        </Link>
        <Link
          to="/"
          className="rounded-md hover:bg-[rgb(255,255,255,.2)] select-none p-2"
        >
          Enterprise
        </Link>
        <Link
          to="/"
          className="flex justify-center items-center rounded-md hover:bg-[rgb(255,255,255,.2)] select-none p-2"
        >
          Explore
          <FiChevronDown />
        </Link>
        <Link
          to="/"
          className="rounded-md hover:bg-[rgb(255,255,255,.2)] select-none p-2"
        >
          Marketplace
        </Link>
        <Link
          to="/"
          className="flex justify-center items-center rounded-md hover:bg-[rgb(255,255,255,.2)] select-none p-2"
        >
          Pricing
          <FiChevronDown />
        </Link>
      </div>
      <div className="xl:flex hidden gap-3 items-center">
        <div className="bg-[#272F43] rounded-md pl-3 pr-2 py-[2px] border-[#515868] border flex justify-between items-center">
          <input
            type="text"
            className="bg-[#272F43] rounded-md placeholder:text-[#C0C3C9] text-sm focus:outline-none"
            placeholder="Search DOML"
          />
          <span className="rounded-md border-[#515868] border my-[2px] text-sm px-[6px]">
            /
          </span>
        </div>
        <div className="rounded-md hidden 2xl:block hover:bg-[rgb(255,255,255,.2)] select-none p-2">
          Sign in
        </div>
        <div className="text-[15px] px-3 py-1 border border-white rounded-md">
          Sign up
        </div>
      </div>
      <div className="text-white cursor-pointer xl:hidden">
        <FiMenu size="30" onClick={openDrawer} />
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="bg-black text-white"
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <div>
            <img src="/navlogo.png" alt="logo" className="w-[120px]" />
          </div>
          <IconButton variant="text" color="white" onClick={closeDrawer}>
            <MdOutlineClose size="30" />
          </IconButton>
        </div>
        <List>
          <ListItem className="text-white hover:bg-black hover:text-white">
            <div className="bg-[#272F43] rounded-md px-2 py-1 border-[#515868] border flex justify-between items-center">
              <input
                type="text"
                className="bg-[#272F43] rounded-md placeholder:text-[#C0C3C9] focus:outline-none"
                placeholder="Search DOML"
              />
              <span className="rounded-md border-[#515868] border py-1 px-2">
                /
              </span>
            </div>
          </ListItem>
          <ListItem className="text-white hover:bg-[rgb(255,255,255,.2)] hover:text-white">
            Sign in
          </ListItem>
          <ListItem className="text-white hover:bg-[rgb(255,255,255,.2)] hover:text-white">
            Product
            <ListItemSuffix>
              <FiChevronDown size="20" className="rounded-full text-white" />
            </ListItemSuffix>
          </ListItem>
          <Link to="/users">
            <ListItem className="text-white hover:bg-[rgb(255,255,255,.2)] hover:text-white">
              Users
            </ListItem>
          </Link>
          <ListItem className="text-white hover:bg-[rgb(255,255,255,.2)] hover:text-white">
            Enterprise
          </ListItem>
          <ListItem className="text-white hover:bg-[rgb(255,255,255,.2)] hover:text-white">
            Explore
            <ListItemSuffix>
              <FiChevronDown size="20" className="rounded-full text-white" />
            </ListItemSuffix>
          </ListItem>
          <ListItem className="text-white hover:bg-[rgb(255,255,255,.2)] hover:text-white">
            Marketplace
          </ListItem>
          <ListItem className="text-white hover:bg-[rgb(255,255,255,.2)] hover:text-white">
            Pricing
            <ListItemSuffix>
              <FiChevronDown size="20" className="rounded-full text-white" />
            </ListItemSuffix>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;
