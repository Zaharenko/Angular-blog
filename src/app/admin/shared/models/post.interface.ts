export interface Post {
  title: string,
  author: string,
  authorIcon: string,
  text: string,
  date: Date,
  category: string,
  banner: string,
  id?: string
}

export interface FbCreateResponse{
  name: string
}

export interface Email{
  id?: string,
  email: string,
  time: Date
}
