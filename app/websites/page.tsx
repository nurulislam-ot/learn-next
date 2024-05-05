import React from 'react'
import BasicFilter from './BasicFilter'
import WebsiteList from './WebsiteList'
import { WebsiteI } from '@/interface/website'
import Pagination from '@/components/pagination'
import { generateQueryString } from '@/helper/generateQueryString'
import ResponseInterface, { WithPagination } from '@/interface/response'

interface Props {
  searchParams: {
    currentPage: string
    limit: string
    orderBy?: string
    searchText?: string
  }
}

const WebsitesPage = async ({ searchParams }: Props) => {
  const response = await fetch(
    `https://dev-api.convertupleads.com/api/v1/website/list?${generateQueryString(
      {
        ...searchParams,
        currentPage: searchParams.currentPage ?? 1,
        limit: searchParams.limit ?? 10
      }
    )}`,
    {
      headers: {
        authorization: 'Bearer 66JWLMS29CZ92I5P4ZQF'
      }
    }
  )
  const data: ResponseInterface<WithPagination<WebsiteI>> =
    await response.json()

  if (!data.success) throw Error(data.message)

  return (
    <div className='container mx-auto py-5 text-gray-700'>
      <BasicFilter />
      <WebsiteList websites={data.data.content} />
      <Pagination
        totalDataCount={data.data.count}
        totalPage={data.data.totalPages ?? 1}
      />
    </div>
  )
}

export default WebsitesPage
