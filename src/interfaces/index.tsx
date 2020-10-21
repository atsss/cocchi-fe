export interface User {
  id: number
  name: string
  image: string
}

export interface Community {
  id: number
  name: string
  image: string
  members: string
  numOfFolders: number
}

export interface Channel {
  id: number
  name: string
  icon: string
  numOfPlaces: number
}

export interface Place {
  id: number
  name: string
  image: string
  visit: string
}
