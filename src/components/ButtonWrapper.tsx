import React from "react";


type ButtonWrapperProps = {
    title: string;
    onClick: () => void;
    disabled: boolean;
}

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
    title,
    onClick,
    disabled
}) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}