import { Box } from '@chakra-ui/react'
import Header from '../header/index'

interface LayoutSignProps {
    children: JSX.Element
}

const LayoutSign: React.FunctionComponent<LayoutSignProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default LayoutSign
