import React from "react";


type PersonProps = {
    name: string
}

export const Person: React.FC<PersonProps> = ({
    name
}) => {
    return (
        <div role="contentinfo">
            {name}
        </div>
    )
}