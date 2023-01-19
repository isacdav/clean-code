(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductBloc {
    loadProduct(id: number) {
      console.log('Product: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Saving...', product);
    }

    notifyClients() {
      console.log('Sending emails...');
    }

    onAddToCart(productId: number) {
      console.log('Adding to cart ', productId);
    }
  }

  const productBloc = new ProductBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  productBloc.onAddToCart(10);
})();
