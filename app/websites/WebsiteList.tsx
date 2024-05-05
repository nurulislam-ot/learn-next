import React from 'react'
import { format, parseJSON } from 'date-fns'
import { WebsiteI } from '@/interface/website'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  StarIcon,
  TrashIcon,
  PencilIcon,
  EyeIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/solid'

interface Props {
  websites: WebsiteI[]
}

const WebsiteList = ({ websites }: Props) => {
  return (
    <Table className='w-full mb-5'>
      <TableHeader>
        <TableRow className='bg-gray-200 text-gray-700'>
          <TableHead className='inline-flex items-center gap-2 py-3 font-medium pl-5'>
            <Checkbox className='rounded-full text-blue-500' />
            <p>Websites</p>
          </TableHead>
          <TableHead className='text-right py-3 font-medium pr-5'>
            <p>Actions</p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {websites.map(website => (
          <TableRow
            key={website.id}
            className='border-b group hover:bg-blue-50 transition'
          >
            <TableCell className='flex items-center gap-5 py-3 pl-5'>
              <Checkbox className='rounded-full text-blue-500' />
              <button>
                <StarIcon className='w-6 h-6 fill-yellow-500' />
              </button>
              <div>
                <p className='text-gray-800'>{website.name}</p>
                <p className='text-xs text-gray-500'>
                  {website.totalPage} Pages | Created On:
                  {format(parseJSON(website.createdAt), 'dd MMM, yyyy')}
                </p>
              </div>
            </TableCell>
            <TableCell className='py-3 text-right pr-5'>
              <div className='hidden gap-2 group-hover:inline-flex transition'>
                <button className='w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white'>
                  <PencilIcon className='w-4 h-4' />
                </button>
                <button className='w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white'>
                  <EyeIcon className='w-4 h-4' />
                </button>
                <button className='w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white'>
                  <TrashIcon className='w-4 h-4' />
                </button>
                <button className='w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center text-white'>
                  <EllipsisVerticalIcon className='w-5 h-5' />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default WebsiteList
