import * as React from 'react';

export default function Form() {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('submit')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='text' />
            <input type='submit' />
        </form>
    )
} 