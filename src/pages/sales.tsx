import { Header } from '@components/index'
import { LayoutSecondary } from '@layouts/secondary'
import { SalesScreen } from '@modules/sales/screens/SalesScreen'

export default function SalesPage() {
  return (
    <LayoutSecondary>
      <Header />
      <SalesScreen/>
    </LayoutSecondary>
  )
}
