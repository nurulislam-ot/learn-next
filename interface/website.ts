export interface WebsiteI {
  id: number
  name: string
  status: string
  inTrash: number
  isArchived: number
  isFavorite: number
  createdAt: string
  totalPage: number
  folder?: Folder[]
}

interface Folder {
  name: string
  color: string
  folderId: number
}
