import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
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
    useToast
  } from '@chakra-ui/react'
import axios from "axios";

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()
    const router = useRouter()
    const toast = useToast()
    const url = process.env.NEXT_PUBLIC_URL

    const onSubmit = async (values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
              try {
                  const dataFetch = async () => {
                      const response = await axios.post(`${url}/api/portal/register`, values, {headers: {"Access-Control-Allow-Origin": "*"}})
                      console.log(response.data.success)
                  } 
                dataFetch()
              } catch (error) {
                  console.log(error)
              }
              resolve()
            }, 3000)
        })
      }

    return(
        <Container maxW="container.lg" h={{md: "69vh", sm: "auto"}}>
            <Flex justifyContent="center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.fullname} w={[300, 400, 500]}>
                        <FormLabel htmlFor='fullname'>Nama Anda:</FormLabel>
                        <Input
                            id='fullname'
                            placeholder='Nama Anda'
                            {...register('fullname', {
                                required: 'Nama harus diisi',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.fullname && errors.fullname.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.email} w={[300, 400, 500]}>
                        <FormLabel htmlFor='email'>Email Anda:</FormLabel>
                        <Input
                            id='email'
                            type="email"
                            placeholder='Nama Anda'
                            {...register('email', {
                                required: 'Nama harus diisi',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.email && errors.email.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.noTelp} w={[300, 400, 500]}>
                        <FormLabel htmlFor='no_hp'>No. Telepon:</FormLabel>
                        <Input
                            id='no_hp'
                            placeholder='08123456789'
                            {...register('no_hp', {
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
                            <option value='1'>Laki-laki</option>
                            <option value='2'>Perempuan</option>
                        </Select>
                        <FormErrorMessage>
                            {errors.gender && errors.gender.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.password} w={[300, 400, 500]}>
                        <FormLabel htmlFor='password'>Password:</FormLabel>
                        <Input
                            id='password'
                            type="password"
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
                            id='password_confirmation'
                            type="password"
                            placeholder='Konfirmasi password'
                            {...register('password_confirmation', {
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