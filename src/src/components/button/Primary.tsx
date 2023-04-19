import React from 'react';
import { Button } from "@chakra-ui/react";

type IPrmiary = {
    title: string,
    disabled?: boolean
}

export default function Primary(props: IPrmiary) {


    const { title, disabled } = props;
    return (
        <Button
            variant={'solid'}
            color={disabled ? '#CCD0D8' : '#fff'}
            backgroundColor={'#66728A'}
            _hover={{ backgroundColor: '#334363' }}
            _active={{ backgroundColor: '#00143C' }}
            _disabled={{ backgroundColor: '#A6ADBA' }}
            isDisabled={disabled}
        >
            {title}
        </Button>
    )
}