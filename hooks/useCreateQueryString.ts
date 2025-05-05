import { useCallback } from "react"
import { useSearchParams, usePathname } from "next/navigation"

const useCreateQueryString = (withUrl: boolean = false) => {
  const path = usePathname()
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(`${searchParams}`)
      params.set(name, value)

      if (withUrl) return `${path}?${params.toString()}`
      return params.toString()
    },
    [path, searchParams, withUrl]
  )

  return createQueryString
}

export default useCreateQueryString
