import React from 'react';
import { Button } from "@chakra-ui/react";

type ISecondary = {
    title: string,
    disabled?: boolean
}

export default function Secondary(props: ISecondary) {
    const { title, disabled } = props;
    return (
        <Button
            variant={'solid'}
            color={disabled ? '#A6ADBA' : '#001B52'}
            backgroundColor={'#E5E7EB'}
            _hover={{ backgroundColor: '#CCD0D8' }}
            _active={{ backgroundColor: '#66728A' }}
            _disabled={{ backgroundColor: '#CCD0D8' }}
            isDisabled={disabled}
        >
            {title}
        </Button>
    )
}