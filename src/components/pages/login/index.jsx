import { useEffect } from "react";
import Link from "next/link"
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  Container,
  useMediaQuery
} from "@chakra-ui/react";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  const [isMobile] = useMediaQuery("(max-width: 768px)") 

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  useEffect(() => {
      const footer =  document.querySelector("footer");
      isMobile ? footer.style.display="none" : footer.style.display="block"
  }, [])

  return (
      <Container maxW="container.lg">
          <Container maxW="container.sm" h={{md: "69vh", sm: "auto"}} border="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        id="email"
                        placeholder="email"
                        type="email"
                        {...register("email", {
                            required: "This is required",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        id="password"
                        placeholder="password"
                        type="password"
                        {...register("password", {
                            required: "This is required",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <Box textAlign="end">
                    <Button mt={4} color="white" bg="orange" isLoading={isSubmitting} type="submit">
                        Login
                    </Button>
                </Box>
                <Flex justifyContent="space-between" mt="10px" fontWeight="700">
                    <Link href="/subscribe">
                        <a>Yuk subscribe!</a>
                    </Link>
                    <Link href="/register">
                        <a>Belum daftar?</a>
                    </Link>
                </Flex>
            </form>
        </Container>
    </Container>
  );
}

export default LoginPage