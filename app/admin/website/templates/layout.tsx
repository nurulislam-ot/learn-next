import { PlusSignIcon } from 'hello-world-icons'
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious
// } from '@/components/ui/pagination'

import Categories from './categories'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

interface PropsI {
  children: React.ReactNode
}

export default async function WebsiteTemplateLayout({ children }: PropsI) {
  return (
    <section>
      <div className='flex justify-between items-center border-b px-5 py-3'>
        <div>
          <h1 className='text-2xl font-medium'>Website Template</h1>
          <p className='text-sm'>All of your website templates will be here.</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusSignIcon strokeWidth={2} size={20} />
              &nbsp;&nbsp;New Template
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='font-medium'>
                Create New Website Template
              </DialogTitle>
              <DialogDescription className='pt-3'>
                <form>
                  <div className='flex flex-col w-full gap-1.5 mb-3'>
                    <Label htmlFor='template'>Template Name</Label>
                    <Input
                      type='text'
                      id='template'
                      placeholder='eg: Landing Page'
                    />
                  </div>

                  <Button type='submit'>Create</Button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-[240px_1fr]'>
        <div className='border-r'>
          <Categories />
        </div>
        <div className='p-5'>
          <Input placeholder='Search Website Name' className='mb-5' />
          {children}
          {/* {searchParams.currentPage} 
          <Pagination className='mt-3'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='?currentPage=1'>1</PaginationLink>
                <PaginationLink href='?currentPage=2'>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          */}
        </div>
      </div>
    </section>
  )
}
