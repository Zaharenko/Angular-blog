export interface Post {
  title: string,
  author: string,
  text: string,
  date: Date,
  category: string,
  banner: string,
  id?: string
}

export interface FbCreateResponse{
  name: string
}
