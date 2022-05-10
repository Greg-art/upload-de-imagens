import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  theme,
  ModalHeader,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return(
    <Modal onClose={onClose} isOpen={isOpen} >
      <ModalOverlay opacity={0.8} />
      <ModalContent
        bgColor="pGray.800"
        mx='auto'
        w='auto'
        h='auto'
        maxW={['900px']}
        maxH={['600px']}
      >
        <ModalBody 
          p='0'
        >
          <Image
            src={imgUrl} 
            minH='250px'
            minW='450px'
            objectFit='cover'
            maxW={['900px']}
            maxH={['600px']}
          />
        </ModalBody>
        <ModalFooter justifyContent='left' h='2rem' py='20px' bgColor='pGray.800' borderBottomRadius='5px'>
          <Link
            href={imgUrl}
            isExternal
            fontSize='1rem'
            mr='auto'
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
