import TagI from './tag'
import TypeI from './type'

export type STATUS = 'NOT_APPROVE' | 'APPROVE'
export type PUBLISH_STATUS = 'DRAFT' | 'PUBLISHED'

interface WebsiteTemplateI {
  id: string
  name: string
  createdAt: string
  totalPage: number
  category: string
  tags: TagI[]
  types: TypeI[]
  inTrash: 0 | 1
  status: STATUS
  publishStatus: PUBLISH_STATUS
  defaultPageId: string
}

export default WebsiteTemplateI
