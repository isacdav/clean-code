/*
 * Single resposability principle
 */

(() => {
  // Interfaces
  interface Product {
    id: number;
    name: string;
  }

  // Services
  class ProductService {
    getProduct(id: number) {
      console.log('Product: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Saving...', product);
    }
  }

  class NotificationService {
    sendEmail(emailList: string[], title: String, content: string) {
      console.log('Sending emails...');
    }
  }

  // Classes
  class ProductBloc {
    private productService: ProductService;
    private notificationService: NotificationService;

    constructor(
      productService: ProductService,
      notificationService: NotificationService
    ) {
      this.productService = productService;
      this.notificationService = notificationService;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.notificationService.sendEmail([], '', '');
    }
  }

  class CartBloc {
    onAddToCart(productId: number) {
      console.log('Adding to cart ', productId);
    }
  }

  // Implement
  const productService = new ProductService();
  const notificationService = new NotificationService();

  const productBloc = new ProductBloc(productService, notificationService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
