import { InputProps } from '../types';

export declare const createInputProps: (props: InputProps) => {
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    required?: boolean;
    id?: string;
    'data-testid'?: string;
    type: "number" | "text" | "email" | "password";
    className: string;
    disabled: boolean;
    onChange: (e: Event) => void;
};
//# sourceMappingURL=input.d.ts.map