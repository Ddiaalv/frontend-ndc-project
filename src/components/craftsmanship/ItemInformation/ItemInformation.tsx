import * as React from 'react';
import './ItemInformation.scss';

interface ItemInformationProps {
  itemInfo: any;
}

export const ItemInformation: React.FC<ItemInformationProps> = ({ itemInfo }) => {
  const ranuras = [];

  if (itemInfo.ranura01 !== undefined) {
    ranuras.push(itemInfo.ranura01);
    if (itemInfo.ranura02 !== undefined) {
      ranuras.push(itemInfo.ranura02);
      if (itemInfo.ranura03 !== undefined) {
        ranuras.push(itemInfo.ranura03);
      }
    }
  }

  return (
    <div className="ItemInformation">
      <p>Rareza: {itemInfo.rareza}</p>
      <p>Nombre: {itemInfo.nombre}</p>
      <p>Ataque: {itemInfo.ataque}</p>
      <p>Afinidad: {itemInfo.afinidad}</p>
      <p>
        Elemento:
        {itemInfo.elemento01}
        {itemInfo.danio_elemento01}
      </p>
      {/* Mostrar si tiene valor*/}
      <p>
        Ranura:
        {itemInfo.ranura01}
        {itemInfo.ranura02}
        {itemInfo.ranura03}
      </p>
      <p>{itemInfo.sello_ancianos}</p>
    </div>
  );
};

ItemInformation.displayName = 'ItemInformation';
