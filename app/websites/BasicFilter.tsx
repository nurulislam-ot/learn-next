'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { useRouter, usePathname } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { websiteSortBy } from '@/constant/sortby'
import { debounce } from '@/helper/debounce'
import useCreateQueryString from '@/hooks/useCreateQueryString'

const BasicFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const createQueryString = useCreateQueryString()

  return (
    <div className='mb-5 flex gap-3'>
      <Input
        type='text'
        placeholder='Search By Text'
        onChange={debounce(event => {
          router.push(
            pathname + '?' + createQueryString('searchText', event.target.value)
          )
        }, 500)}
      />
      <Select
        onValueChange={value => {
          router.push(pathname + '?' + createQueryString('orderBy', value))
        }}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          {websiteSortBy.map(sort => (
            <SelectItem className='px-3' key={sort.value} value={sort.value}>
              {sort.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default BasicFilter
