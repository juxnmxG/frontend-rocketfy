export class Product {
  _id?: string;
  name!: string;
  description!: string;
  sku!: string;
  image!: string;
  tags!: [string];
  price!: number;
  stock!: number;
  create_at?: Date;

  constructor(
    name: string,
    description: string,
    sku: string,
    image: string,
    tags: [string],
    price: number,
    stock: number
  ) {
    this.name = name;
    this.description = description;
    this.sku = sku;
    this.image = image;
    this.tags = tags;
    this.price = price;
    this.stock = stock;
  }
}
