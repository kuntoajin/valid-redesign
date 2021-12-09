import { Box } from "@chakra-ui/react"
import { useRadio } from "@chakra-ui/radio"
import { memo } from "react"

const FilterButton = memo((props) =>  {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'orange',
            color: 'white',
            borderColor: 'orange',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
})

export default FilterButton