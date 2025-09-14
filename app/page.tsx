import { TopBar, Container, Title, Filters } from '@/components/shared';
import { FilterCheckbox } from '@/components/shared/filter-checkbox';
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Items list  */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <FilterCheckbox text="Can cook" value={'1'} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
