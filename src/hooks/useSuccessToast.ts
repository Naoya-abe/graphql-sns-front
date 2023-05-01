import { useToast } from '@chakra-ui/react';

const useSuccessToast = () => {
  const toast = useToast();
  return (message: string | JSX.Element) => {
    toast({
      title: 'Success',
      description: message,
      status: 'success',
      duration: 10000,
      isClosable: true,
      position: 'top',
    });
  };
};

export default useSuccessToast;
