'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import useCreateQueryString from '@/hooks/useCreateQueryString'

interface Props {
  totalDataCount: number
  totalPage: number
}

const Pagination = ({ totalPage, totalDataCount }: Props) => {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const createQueryString = useCreateQueryString()
  const currentPage = params.get('currentPage') ?? '1'
  const limit = params.get('limit') ?? '10'

  return (
    <div className='flex gap-4 justify-center'>
      <p>Rows per page:</p>
      <select
        value={limit}
        className='bg-white'
        onChange={event => {
          router.push(
            pathname + '?' + createQueryString('limit', event.target.value)
          )
        }}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <p>
        {currentPage}–{totalDataCount} of {totalPage}
      </p>
      <div>
        <button
          onClick={() => {
            const prevPage = +currentPage - 1
            router.push(
              pathname +
                '?' +
                createQueryString('currentPage', prevPage.toString())
            )
          }}
        >
          <ChevronLeftIcon className='w-5 h-5' />
        </button>
        <button
          onClick={() => {
            const nextPage = +currentPage + 1
            router.push(
              pathname +
                '?' +
                createQueryString('currentPage', nextPage.toString())
            )
          }}
        >
          <ChevronRightIcon className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}

export default Pagination
