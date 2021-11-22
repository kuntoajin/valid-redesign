import { memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, } from "@chakra-ui/react";

const MenuDrawer = memo(() => {
    return (
        <Menu isLazy>
            <MenuButton bg="dark">
                <HamburgerIcon color="white" w={9} h={9} />
            </MenuButton>
            <MenuList bg="dark" color="white">
                <MenuItem _hover={{ bg: "unset" }} _focus={{ bg: "unset" }}>Download</MenuItem>
                <MenuItem _hover={{ bg: "unset" }}>Create a Copy</MenuItem>
                <MenuItem _hover={{ bg: "unset" }}>Mark as Draft</MenuItem>
                <MenuItem _hover={{ bg: "unset" }}>Delete</MenuItem>
                <MenuItem _hover={{ bg: "unset" }}>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
})

export default MenuDrawer