import { useForm } from "react-hook-form";
import {
    Container,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Select,
    Textarea,
    Flex,
    Center
  } from '@chakra-ui/react'

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()

    const onSubmit = (values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
          }, 3000)
        })
      }

    return(
        <Container maxW="container.lg" h={{md: "69vh", sm: "auto"}}>
            <Flex justifyContent="center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.name} w={[300, 400, 500]}>
                        <FormLabel htmlFor='name'>Nama Anda:</FormLabel>
                        <Input
                            id='name'
                            placeholder='Nama Anda'
                            {...register('name', {
                                required: 'Nama harus diisi',
                            })}
                        />
                        <FormErrorMessage>
                        {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.noTelp} w={[300, 400, 500]}>
                        <FormLabel htmlFor='noTelp'>No. Telepon:</FormLabel>
                        <Input
                            id='noTelp'
                            placeholder='08123456789'
                            {...register('noTelp', {
                                required: 'No Telp harus diisi',
                            })}
                        />
                        <FormErrorMessage>
                        {errors.noTelp && errors.noTelp.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.gender} w={[300, 400, 500]}>
                        <FormLabel htmlFor='gender'>Jenis Kelamin:</FormLabel>
                        <Select 
                            placeholder='Pilih jenis kelamin' 
                            id="gender"
                            {...register('gender', {
                                required: "Pilih jenis kelamin"
                            })}
                        >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <FormErrorMessage>
                            {errors.gender && errors.gender.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.password} w={[300, 400, 500]}>
                        <FormLabel htmlFor='password'>Password:</FormLabel>
                        <Input
                            id='password'
                            placeholder='password'
                            {...register('password', {
                                required: 'Password harus diisi',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.password && errors.password.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.confirmPassword} w={[300, 400, 500]}>
                        <FormLabel htmlFor='confirmPassword'>Konfirmasi Password:</FormLabel>
                        <Input
                            id='confirmPassword'
                            placeholder='Konfirmasi password'
                            {...register('confirmPassword', {
                                required: 'Konfirmasi password Anda',
                            })}
                        />
                        <FormErrorMessage>
                        {errors.confirmPassword && errors.confirmPassword.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.address} w={[300, 400, 500]}>
                        <FormLabel htmlFor='address'>Alamat:</FormLabel>
                        <Textarea
                            id='address'
                            placeholder='Alamat Anda'
                            {...register('address', {
                                required: 'Masukkan alamat Anda',
                            })}
                        />
                        <FormErrorMessage>
                        {errors.address && errors.address.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                        Submit
                    </Button>
                </form>
            </Flex>
        </Container>
    )
}

export default RegisterPage