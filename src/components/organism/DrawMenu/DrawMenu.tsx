import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuItemList } from "../../../config/MenuItemList";
import { MenuSingleItem } from "../MenuItem/MenuSingleItem";

const MENU_ICON = (props: any) => {
  return (
    <svg
      {...props}
      id="icon_menu"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <rect
        id="Rectangle_50"
        data-name="Rectangle 50"
        width="32"
        height="32"
        fill="#ff963c"
        opacity="0"
      />
      <line
        id="Line_4"
        data-name="Line 4"
        x2="26"
        transform="translate(3 8)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
      <line
        id="Line_5"
        data-name="Line 5"
        x2="26"
        transform="translate(3 16)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
      <line
        id="Line_6"
        data-name="Line 6"
        x2="26"
        transform="translate(3 24)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
    </svg>
  );
};

export function DrawMenu() {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center py-2">
            <MENU_ICON className="w-[32px] h-[32px]" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-[280px] origin-top-right divide-y divide-gray-400 bg-gray400 shadow-lg">
            {MenuItemList.map((item, index) => (
              <MenuSingleItem key={index} prop={item} />
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
