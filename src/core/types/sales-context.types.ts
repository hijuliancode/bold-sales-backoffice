import { ISale } from "@core/models";
import { FilterTypes } from "./filter.types";

export type SalesContextType = {
  getSales: ISale[];
  getSalesBy: (filter_by: FilterTypes) => ISale[];
  setSale?: (new_sale: ISale) => ISale[];
}
