import { ProductRepository } from '../repository/productsRepository';
import { Product } from '../models/productsModels';

export class ProductService {
  public static async getProducts(): Promise<Product[]> {
    return ProductRepository.findAll();
  }

  public static async getProductById(id: number): Promise<Product | null> {
    return ProductRepository.findById(id);
  }

  public static async createProduct(newItem: Product): Promise<Product> {
    return ProductRepository.createProduct(newItem);
  }

  public static async updateProduct(id: number, updatedItem: Product): Promise<Product | null> {
    return ProductRepository.updateProduct(id, updatedItem);
  }

  public static async deleteProduct(id: number): Promise<boolean> {
    return ProductRepository.deleteProduct(id);
  }
}
