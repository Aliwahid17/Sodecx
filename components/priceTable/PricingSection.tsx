import PricingTable from "./PricingTable"
import { PricingTableTypes } from "./types"

type PropsTypes = {
  title: string
  description: string
  table: PricingTableTypes[]
}

const PricingSection = ({ title, description, table }: PropsTypes) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="text-center flex gap-4 flex-col">
        <h2 className="font-semibold text-5xl" >
          {title}
        </h2>
        <span>{description}</span>
      </div>
      <PricingTable pricing={table} />
    </div>
  )
}

export default PricingSection