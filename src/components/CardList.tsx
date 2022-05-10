import { Box, Flex, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [ imgUrl, setImgUrl ] = useState('')
  const [ isModalOpen, setIsModalOpen] = useState(false)

  function handleViewImage(url: string) {  
    setImgUrl(url)
    setIsModalOpen(true)
  }
  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {cards?.map(card => (
          <Card key={card.id} data={card} viewImage={() => handleViewImage(card.url)} />
          ))}        
      </SimpleGrid>

      <ModalViewImage
        imgUrl={imgUrl}
        isOpen={isModalOpen}
        onClose={handleCloseModal} 
      />

    </>
  );
}
