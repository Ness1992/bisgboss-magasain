import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";

import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("4d4cfd0d-5c43-4c7e-9d8f-38b1bc71b326");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produits Vedettes" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;