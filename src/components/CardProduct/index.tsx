import { CardContainer } from './styles';

export default function CardProduct({
  imageUrl,
  alt,
  productName,
}: CardProductProps) {
  return (
    <CardContainer>
      <img src={imageUrl} alt={alt} loading="lazy" />
      <p>{productName}</p>
    </CardContainer>
  );
}

type CardProductProps = {
  productName: string;
  imageUrl: string;
  alt: string;
};
