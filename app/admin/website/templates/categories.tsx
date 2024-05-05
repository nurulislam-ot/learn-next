import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import ResponseInterface from '@/interface/response'

interface CategoryI {
  id: string
  name: string
}

async function fetchCategories() {
  const response = await fetch(
    `https://dev-api.convertupleads.com/api/v1/admin/website/type/list`,
    {
      headers: {
        authorization: 'Bearer 5W67ZI3Q80O1RC50YK8I'
      }
    }
  )

  const data: ResponseInterface<CategoryI[]> = await response.json()

  if (!data.success) throw Error(data.message)

  return data
}

const Categories = async () => {
  const data = await fetchCategories()

  return (
    <div className='p-2'>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-b-0'>
          <AccordionTrigger className='font-normal px-2 hover:no-underline bg-slate-100 py-2 rounded-lg [&[data-state=open]]:rounded-bl-none [&[data-state=open]]:rounded-br-none'>
            Categories
          </AccordionTrigger>
          <AccordionContent className='border border-t-0 p-1 rounded-bl-lg rounded-br-lg'>
            <ul>
              {data.data.map(category => (
                <li
                  key={category.id}
                  className='py-2 hover:bg-gray-100 px-2 rounded-lg'
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Categories
