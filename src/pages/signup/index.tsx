import { NextPage } from 'next';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useToast,
} from '@chakra-ui/react';
import { BsCheckLg } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'urql';
import { SignupFormData, signupFormValidateSchema } from '@/types/signup';
import { CreateUserDocument } from '@/graphql/generated/graphql';

const SignUp: NextPage = () => {
  const toast = useToast();
  const [createUserResult, createUser] = useMutation(CreateUserDocument);
  console.log(createUserResult);

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupFormValidateSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    const variables = { email: data.email, password: data.password };
    const result = await createUser(variables);
    console.log(result);
    if (result.error) {
      toast({
        title: 'Error',
        description: 'ユーザーの新規登録に失敗しました。',
        status: 'error',
        duration: 10000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    toast({
      title: 'Success',
      description: (
        <Box>
          <Text>ユーザーの新規作成が完了しました。</Text>
          <Link as={NextLink} href="/signin" textDecoration="underline">
            ログイン画面
          </Link>
          にお進みください。
        </Box>
      ),
      status: 'success',
      duration: 10000,
      isClosable: true,
      position: 'top',
    });
    reset();
  };

  return (
    <Flex>
      <Center w="50vw" h="100vh" bgColor="blue.400" flexDirection="column">
        <Flex flexDirection="column">
          <Text fontSize="6xl" as="b" color="white" mb={6}>
            HiveMind
          </Text>
          <Text fontSize="4xl" as="b" color="white" mb={4}>
            Tech Stack
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={BsCheckLg} color="white" fontSize="xl" />
              <Text fontSize="xl" color="white" as="b">
                TypeScript
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckLg} color="white" fontSize="xl" />
              <Text fontSize="xl" color="white" as="b">
                Next.js
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckLg} color="white" fontSize="xl" />
              <Text fontSize="xl" color="white" as="b">
                NestJS
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckLg} color="white" fontSize="xl" />
              <Text fontSize="xl" color="white" as="b">
                GraphQL
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckLg} color="white" fontSize="xl" />
              <Text fontSize="xl" color="white" as="b">
                Prisma
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckLg} color="white" fontSize="xl" />
              <Text fontSize="xl" color="white" as="b">
                Docker
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={BsCheckLg} color="white" fontSize="xl" />
              <Text fontSize="xl" color="white" as="b">
                MySQL
              </Text>
            </ListItem>
          </List>
        </Flex>
      </Center>
      <Center w="50vw" h="100vh" flexDirection="column">
        <Text fontSize="6xl" as="b" color="blackAlpha.800" mb={10}>
          Sign Up
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.email} mb={5}>
            <FormLabel htmlFor="email">
              <Text fontSize="2xl" color="blackAlpha.800" as="b">
                Email
              </Text>
            </FormLabel>
            <Input
              id="email"
              placeholder="please enter your email"
              type="email"
              w="400px"
              {...register('email')}
            />
            <FormErrorMessage fontWeight="bold">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password} mb={8}>
            <FormLabel htmlFor="password">
              <Text fontSize="2xl" color="blackAlpha.800" as="b">
                Password
              </Text>
            </FormLabel>
            <Input
              id="password"
              placeholder="please enter your password"
              type="password"
              w="400px"
              {...register('password')}
            />
            <FormErrorMessage fontWeight="bold">
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            bgColor="blue.400"
            color="white"
            type="submit"
            isLoading={isSubmitting}
            w="400px"
          >
            <Text>Submit</Text>
          </Button>
        </form>
        <Link as={NextLink} href="/signin" mt={10}>
          <Text color="blue.600" fontSize="xl" as="b">
            Go to Sign In
          </Text>
        </Link>
      </Center>
    </Flex>
  );
};

export default SignUp;
