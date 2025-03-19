"use client";
import { PGECard } from '@pge-fe-monorepo/pge-design-system/src/lib';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface CardItem {
  title: string;
  value: string;
  img: string;
  // Optional route for the card action (if provided, clicking the card navigates to this route)
  route: string;
  // Category information for the dot and label in the footer
  category: string;
}

interface CardsGridProps {
  cards: CardItem[];
}

const CardsGrid: React.FC<CardsGridProps> = ({ cards }) => {
  const router = useRouter();

  const handleAction = (page: string) => {
    router.push(page);
  };

  const getDotColor = (category: string) => {
    switch (category) {
      case 'ELECTRIC':
        return 'red';
      case 'GAS':
        return 'yellow';
      case 'CUSTOMER':
        return 'blue';
      default:
        return 'gray';
    }
  }

  return (
    <div className="cards-3 pt-4">
      {cards.map((card, index) => (
        <PGECard
          key={index}
          title={card.title}
          value={card.value}
          img={card.img}
          classes="h-52 bg-[#E8F6FF] w-[400px]"
          action={card.route ? () => handleAction(card.route!) : undefined}
          footer={
            <span className="flex justify-between px-4 mt-[-15px]">
              <Link href={card.route}>View Details</Link>
              <span>
                <span className={`${getDotColor(card.category)} dot`}></span>
                <span className="text-center text-gray-500 pl-1">{card.category}</span>
              </span>
            </span>
          }
        />
      ))}
    </div>
  );
};

export default CardsGrid;