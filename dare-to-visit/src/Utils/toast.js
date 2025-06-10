
import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const showToast = ({
    title = 'Notification',
    description = '',
    status = 'info', // 'success' | 'error' | 'warning' | 'info'
    duration = 3000,
    isClosable = true,
    position = 'top',
}) => {
    toast({
        title,
        description,
        status,
        duration:4000,
        isClosable,
        position,
    });
};
