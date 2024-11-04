class Food {
  title: string
  infos: string[]
  description: string
  nota: string
  image: string
  id: number

  constructor(
    id: number,
    description: string,
    title: string,
    nota: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.nota = nota
    this.description = description
    this.infos = infos
  }
}

export default Food
