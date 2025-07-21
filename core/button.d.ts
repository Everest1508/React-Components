import { ButtonProps } from '../types';

export declare const createButtonProps: (props: ButtonProps) => {
    id?: string;
    'data-testid'?: string;
    className: string;
    disabled: boolean;
    onClick: (() => void) | undefined;
    'aria-disabled': boolean;
    'aria-busy': boolean;
    loading: boolean;
    children: import('react').ReactNode;
};
//# sourceMappingURL=button.d.ts.map