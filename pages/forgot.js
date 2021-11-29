import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  useMediaQuery,
  Flex
} from "@chakra-ui/react";
import { useEffect } from "react";

const Login = () => {
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
          <Container maxW="container.sm" h={{md: "69vh", sm: "auto"}}>
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
                <Flex justifyContent="flex-end">
                  <Button mt={4} color="white" bg="orange" isLoading={isSubmitting} type="submit">
                      Lupa
                  </Button>
                </Flex>
            </form>
        </Container>
    </Container>
  );
}

export default Login