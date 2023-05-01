import { useToast } from '@chakra-ui/react';

const useErrorToast = () => {
  const toast = useToast();
  return (message: string | JSX.Element) => {
    toast({
      title: 'Error',
      description: message,
      status: 'error',
      duration: 10000,
      isClosable: true,
      position: 'top',
    });
  };
};

export default useErrorToast;
