import { TopBar, Container, Title, Filters } from '@/components/shared';
import { FilterCheckbox } from '@/components/shared/filter-checkbox';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar className="mb-10" />

      <Container className="pb-14">
        <div className="flex gap-[80px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Items list  */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                categoryId={1}
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 2,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 3,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 4,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                ]}
              />
              <ProductsGroupList
                categoryId={2}
                title="Deserts"
                items={[
                  {
                    id: 1,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 2,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 3,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 4,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 5,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 6,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 7,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                  {
                    id: 8,
                    name: 'Pepperoni Fresh',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
                    price: 5.99,
                    items: [{ price: 4.99 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
