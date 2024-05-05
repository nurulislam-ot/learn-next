import { format, parseJSON } from 'date-fns'
import { LicenseDraftIcon, UnavailableIcon } from 'hello-world-icons'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

import WebsiteTemplateI from '@/interface/website.template'

import { generateQueryString } from '@/helper/generateQueryString'
import ResponseInterface, { WithPagination } from '@/interface/response'
import Pagination from '@/components/pagination'
import TemplateAction from './template-action'

interface Props {
  searchParams: {
    currentPage: string
    limit: string
    orderBy?: string
    searchText?: string
  }
}

async function fetchWebsiteTemplates(searchParams: Props['searchParams']) {
  const response = await fetch(
    `https://dev-api.convertupleads.com/api/v1/admin/website/list?${generateQueryString(
      {
        ...searchParams,
        currentPage: searchParams.currentPage ?? 1,
        limit: searchParams.limit ?? 10
      }
    )}`,
    {
      headers: {
        authorization: 'Bearer 5W67ZI3Q80O1RC50YK8I'
      }
    }
  )

  const data: ResponseInterface<WithPagination<WebsiteTemplateI>> =
    await response.json()

  if (!data.success) throw Error(data.message)

  return data
}

const Page = async ({ searchParams }: Props) => {
  const data = await fetchWebsiteTemplates(searchParams)

  return (
    <div>
      <Table className='border'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-1/2 flex items-center gap-2'>
              <Checkbox className='rounded-full' />
              Template Name
            </TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Publish Status</TableHead>
            <TableHead>Approve Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.content.map(template => (
            <TableRow key={template.id}>
              <TableCell>
                <div className='flex items-center gap-2 h-full'>
                  <Checkbox id={template.id} className='rounded-full' />
                  <Label
                    className='font-normal leading-5'
                    htmlFor={template.id}
                  >
                    {template.name}
                  </Label>
                </div>
              </TableCell>
              <TableCell>
                {format(parseJSON(template.createdAt), 'dd MMM, yyyy')}
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    template.publishStatus === 'DRAFT' ? 'warning' : 'success'
                  }
                  className='font-normal capitalize py-1 px-2'
                >
                  <LicenseDraftIcon size={16} className='mr-1' />
                  {template.publishStatus === 'DRAFT' ? 'Draft' : 'Published'}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    template.status == 'APPROVE' ? 'success' : 'destructive'
                  }
                  className='font-normal capitalize py-1 px-2'
                >
                  <UnavailableIcon size={16} className='mr-1' />
                  {template.status === 'APPROVE' ? 'Approve' : 'Declined'}
                </Badge>
              </TableCell>
              <TableCell>
                <TemplateAction websiteId={template.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        totalDataCount={data.data.count}
        totalPage={data.data.totalPages ?? 0}
      />
    </div>
  )
}

export default Page
