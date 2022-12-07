import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Header from '../components/header'
import Layout from '../components/layout'
import SearchHeader from '../components/SearchHeader'
import HeaderBottom from '../components/header/BottomHead'


export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>Booking.com | Trang chính thức | Khách sạn, chuyến bay, xe thuê & chỗ nghỉ tốt nhất</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <SearchHeader /> 
      </>
    </Layout>
  )
}
