import { SalesContextType } from "@core/types";
import { createContext, useContext } from "react";

const salesContextDefaultValues: SalesContextType = {
  getSales: [],
  getSalesBy: () => [],
  setSale: () => [],
}

export const SalesContext = createContext<SalesContextType>(salesContextDefaultValues)

export const useSales = () => {
  return useContext(SalesContext)
}
