
import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const showToast = ({
    title = 'Notification',
    description = '',
    status = 'info', // 'success' | 'error' | 'warning' | 'info'
    duration = 3000,
    isClosable = true,
    position = '',
}) => {
    toast({
        title,
        description,
        status,
        duration,
        isClosable,
        position,
    });
};
