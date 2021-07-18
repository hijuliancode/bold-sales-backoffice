import { LayoutMain } from '@layouts/main'
import { HomeScreen } from '@modules/home/screens/HomeScreen'
import Head from 'next/head'

export default function Home() {
  return (
    <LayoutMain>
      <HomeScreen />
    </LayoutMain>
  )
}
