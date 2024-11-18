import { Menu } from "@headlessui/react";
import { Burger } from "../../assets/icon/burger";

export function MyDropdown() {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="bg-[#FEEE00] px-4 py-2 flex gap-2">
          <Burger />
          Каталог
        </Menu.Button>
        <Menu.Items className="absolute z-10 flex flex-col justify-center items-center w-[116px] mt-2 bg-white shadow-lg border border-gray-200">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`py-2 ${
                  active ? "bg-[#FEEE00]" : "bg-white"
                } hover:bg-[#FEEE00]`}
                href="/account-settings"
              >
                Account
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`py-2 ${
                  active ? "bg-[#FEEE00]" : "bg-white"
                } hover:bg-[#FEEE00]`}
                href="/document-settings"
              >
                Document
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
