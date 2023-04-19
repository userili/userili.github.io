import { useState } from "react";

export function useBoolean() {
    const [state, setState] = useState<boolean>(false);

    function setValue(value: boolean) {
        setState(value)
    }

    return [state, setValue];
}