import { memo } from "react";
import Link from 'next/link'
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, } from "@chakra-ui/react";

const MenuDrawer = memo(() => {
    return (
        <Menu isLazy>
            <MenuButton bg="dark">
                <HamburgerIcon color="white" w={9} h={9} />
            </MenuButton>
            <MenuList bg="dark" color="white">
                <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                    <Link href="/nasional">
                        <a>Nasional</a>
                    </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                    <Link href="/ekonomi">
                        <a>Ekonomi</a>
                    </Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>
                    <Link href="/kultura">
                        <a>Kultura</a>
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
})

export default MenuDrawer