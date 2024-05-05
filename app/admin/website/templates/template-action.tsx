'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import {
  ViewIcon,
  Delete02Icon,
  CursorTextIcon,
  PropertyEditIcon,
  Copy01Icon,
  Upload05Icon,
  MoreVerticalCircle01Icon
} from 'hello-world-icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import useCreateQueryString from '@/hooks/useCreateQueryString'

interface PropsI {
  websiteId: string
}

const TemplateAction = ({ websiteId }: PropsI) => {
  const router = useRouter()
  const createQueryString = useCreateQueryString(true)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        onMouseDown={event => event.stopPropagation()}
        onMouseUp={event => event.stopPropagation()}
        onClick={event => {
          router.push(createQueryString('actionId', websiteId))
        }}
        className='w-8 h-8 rounded-full border grid place-items-center outline-none focus:outline-none'
      >
        <MoreVerticalCircle01Icon variant='solid' size={18} color='gray' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='grid grid-cols-1 gap-x-2'>
        <DropdownMenuItem>
          <ViewIcon variant='duotone' size={20} />
          &nbsp; Preview
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CursorTextIcon size={20} />
          &nbsp; Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PropertyEditIcon variant='duotone' size={20} />
          &nbsp; Edit Website
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy01Icon variant='duotone' size={20} />
          &nbsp; Clone
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Delete02Icon variant='duotone' size={20} />
          &nbsp; Delete
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Upload05Icon variant='duotone' size={20} />
          &nbsp; Publish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TemplateAction
