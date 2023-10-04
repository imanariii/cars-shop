import {Highlight} from "@chakra-ui/react";
import React, {FC} from "react";


interface IProps {
    title: string
}

const CategoryName:FC<IProps> = ({title}) => {
    return (
        <Highlight
            query={title}
            styles={{ px: '4', py: '1', rounded: 'full', bg: 'orange.400' }}
        >
            {title}
        </Highlight>
    )
}

export default CategoryName