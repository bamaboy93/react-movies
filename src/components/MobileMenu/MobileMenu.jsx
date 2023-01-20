import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import {
  ButtonOpen,
  ButtonClose,
  MenuContainer,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuList,
} from "./MobileMenu.styled";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ButtonOpen onClick={() => setShowMenu(!showMenu)}>
        <HiMenu size={35} />
      </ButtonOpen>
      {showMenu && (
        <MenuContainer>
          <ButtonClose onClick={() => setShowMenu(!showMenu)}>
            <IoClose size={35} />
          </ButtonClose>
          <MobileMenuList>
            <MobileMenuItem>
              <MobileMenuLink>Home</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>Popular</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>Top Rated</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>Upcoming</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>Favourites</MobileMenuLink>
            </MobileMenuItem>
          </MobileMenuList>
        </MenuContainer>
      )}
    </>
  );
}
