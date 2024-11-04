class RestaurantFood {
  title: string
  description: string
  image: string
  id: number

  constructor(id: number, description: string, title: string, image: string) {
    this.id = id
    this.title = title
    this.image = image
    this.description = description
  }
}

export default RestaurantFood
