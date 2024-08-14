import { API_HOST } from "../constants"
import { fetcher } from "../utils"
import useSWR from "swr"

export function useFeatureCard() {
   const url = `${API_HOST}/featureCard`;
   const { data, isLoading, isError } = useSWR(url, fetcher)
   return { featureCard: data, isLoading, isError: isError }
}