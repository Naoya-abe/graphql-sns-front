import { NextPage } from 'next';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { BsCheckLg } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const SignUp: NextPage = () => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm();
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
        <form>
          <FormControl isInvalid={true} mb={5}>
            <FormLabel
              htmlFor="email"
              fontSize="2xl"
              color="blackAlpha.800"
              fontWeight="bold"
            >
              Email
            </FormLabel>
            <Input
              id="email"
              placeholder="please enter your email"
              type="email"
              w="400px"
            />
            <FormErrorMessage fontWeight="bold">
              サンプルエラーメッセージ
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={true} mb={8}>
            <FormLabel
              htmlFor="password"
              fontSize="2xl"
              color="blackAlpha.800"
              fontWeight="bold"
            >
              password
            </FormLabel>
            <Input
              id="password"
              placeholder="please enter your password"
              type="password"
              w="400px"
            />
            <FormErrorMessage fontWeight="bold">
              サンプルエラーメッセージ
            </FormErrorMessage>
          </FormControl>
          <Button
            bgColor="blue.400"
            color="white"
            type="submit"
            isLoading={false}
            w="400px"
          >
            <Text>Submit</Text>
          </Button>
        </form>
      </Center>
    </Flex>
  );
};

export default SignUp;
