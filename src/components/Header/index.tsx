import { HeaderContainer, InputContainer, TypographyContainer } from './styles';
import SearchIcon from '../../assets/images/search.svg';

export default function Header({ setSearchTerm }: HeaderProps) {
  return (
    <HeaderContainer>
      <TypographyContainer>
        <span>O QUE VOCÊ </span>
        <span>ESTÁ PROCURANDO?</span>
      </TypographyContainer>

      <InputContainer>
        <input
          type="text"
          placeholder="BUSQUE AQUI"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img src={SearchIcon} alt="Search icon" />
      </InputContainer>
    </HeaderContainer>
  );
}

type HeaderProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
