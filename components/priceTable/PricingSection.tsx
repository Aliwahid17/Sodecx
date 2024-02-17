import PricingTable from "./PricingTable"
import { PricingTableTypes } from "./types"

type PropsTypes = {
  title: string
  description: string
  table: PricingTableTypes[]
  showMonth?: boolean
}

const PricingSection = ({ title, description, table, showMonth }: PropsTypes) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="text-center flex gap-4 flex-col">
        <h2 className="font-semibold text-5xl animation animate" >
          {title}
        </h2>
        <span className="animation animate">{description}</span>
      </div>
      <PricingTable pricing={table} showMonth={showMonth} />
    </div>
  )
}

export default PricingSection