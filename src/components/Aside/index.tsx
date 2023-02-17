import React from 'react';
import {
  AsideContainer,
  AsideHeader,
  ButtonClose,
  AsideOverlay,
} from './styles';

import settingIcon from '../../assets/images/settings.svg';
import closeIcon from '../../assets/images/close.svg';

import CheckBoxContent from '../Checkbox';
import { Category } from '../../types';

export default function Aside({
  optionsFilter,
  setOptionsFilter,
  setIsOpen,
}: AsideProps) {
  const handleCloseAside = () => setIsOpen(false);
  const handleClearOptions = () => setOptionsFilter([]);

  return (
    <aside>
      <ButtonClose type="button" onClick={handleCloseAside}>
        <img src={closeIcon} alt="Close icon" />
      </ButtonClose>

      <AsideContainer>
        <AsideHeader>
          <span>
            <img src={settingIcon} alt="settingIcon" />
            Filtrar por:
          </span>
          <button type="button" onClick={handleClearOptions}>
            Limpar filtros
          </button>
        </AsideHeader>

        <CheckBoxContent
          optionsFilter={optionsFilter}
          setOptionsFilter={setOptionsFilter}
        />
      </AsideContainer>

      <AsideOverlay onClick={handleCloseAside} />
    </aside>
  );
}

type AsideProps = {
  optionsFilter: Category[];
  setOptionsFilter: React.Dispatch<React.SetStateAction<Array<Category>>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
