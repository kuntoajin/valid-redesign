import { useForm } from 'react-hook-form'
import { Container, FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react"

const ChangePasswordPage = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = values => {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
          }, 3000)
        })
    }

    return (
        <Container maxW="container.sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.password}>
                    <FormLabel htmlFor='password'>Password Baru:</FormLabel>
                    <Input
                        id='password'
                        placeholder='Password Baru'
                        {...register('password', {
                            required: 'This is required',
                            minLength: { value: 8, message: 'Kombinasi huruf kapital, angka dan simbol!' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.confirm_password}>
                    <FormLabel htmlFor='confirm_password'>Konfirmasi Password:</FormLabel>
                    <Input
                        id='confirm_password'
                        placeholder='Konfirmasi Password'
                        {...register('confirm_password', {
                            required: 'This is required',
                            minLength: { value: 8, message: 'Kombinasi huruf kapital, angka dan simbol!' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.confirm_password && errors.confirm_password.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} bg="orange" color="white" isLoading={isSubmitting} type='submit'>
                    Ubah
                </Button>
            </form>
        </Container>
    )
}

export default ChangePasswordPage