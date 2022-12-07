import { Box } from '@chakra-ui/react'
import HeaderBottom from '../header/BottomHead'
import Header from '../header/index'

interface LayoutProps {
    children: JSX.Element
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <Box>
                <Header />
                <HeaderBottom />
                {children}
            </Box>
        </>
    )
}

export default Layout
