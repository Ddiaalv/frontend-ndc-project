import * as React from 'react';
import './EquipmentStats.scss';
import { ItemsEquippedStatsProps } from '../../../pages/Craftsmanship/types';

interface EquipmentStatsProps {
  itemsEquippedStats: ItemsEquippedStatsProps;
}

export const EquipmentStats: React.FC<EquipmentStatsProps> = ({ itemsEquippedStats }) => (
  <div className="EquipmentStats">
    {itemsEquippedStats.ataque !== 0 ? <p>Ataque: {itemsEquippedStats.ataque}</p> : ''}
    {itemsEquippedStats.danio_elemento !== 0 ? (
      <p>
        {itemsEquippedStats.elemento} {itemsEquippedStats.danio_elemento}
      </p>
    ) : (
      ''
    )}
    {itemsEquippedStats.sello_ancianos !== '' ? (
      <p>Sello anciano: {itemsEquippedStats.sello_ancianos}</p>
    ) : (
      ''
    )}
    {itemsEquippedStats.ataque !== 0 ? (
      <p>Afinidad: {itemsEquippedStats.afinidad}</p>
    ) : (
      ''
    )}
    {itemsEquippedStats.defensa !== 0 ? <p>Defensa: {itemsEquippedStats.defensa}</p> : ''}
    {itemsEquippedStats.fuego !== 0 ? <p>Fuego: {itemsEquippedStats.fuego}</p> : ''}
    {itemsEquippedStats.agua !== 0 ? <p>Agua: {itemsEquippedStats.agua}</p> : ''}
    {itemsEquippedStats.rayo !== 0 ? <p>Rayo: {itemsEquippedStats.rayo}</p> : ''}
    {itemsEquippedStats.hielo !== 0 ? <p>Hielo: {itemsEquippedStats.hielo}</p> : ''}
    {itemsEquippedStats.draco !== 0 ? <p>Draco: {itemsEquippedStats.draco}</p> : ''}
    {itemsEquippedStats.precio !== 0 ? <p>Precio: {itemsEquippedStats.precio}</p> : ''}

    {itemsEquippedStats.ranuras.lvl1 !== 0 ||
    itemsEquippedStats.ranuras.lvl2 !== 0 ||
    itemsEquippedStats.ranuras.lvl3 !== 0 ? (
      <p>
        Ranuras:{' '}
        {itemsEquippedStats.ranuras.lvl1 !== 0 ? (
          <>lvl1x{itemsEquippedStats.ranuras.lvl1}</>
        ) : (
          ''
        )}
        {itemsEquippedStats.ranuras.lvl2 !== 0 ? (
          <>lvl2x{itemsEquippedStats.ranuras.lvl2}</>
        ) : (
          ''
        )}
        {itemsEquippedStats.ranuras.lvl3 !== 0 ? (
          <>lvl3x{itemsEquippedStats.ranuras.lvl3}</>
        ) : (
          ''
        )}
      </p>
    ) : (
      ''
    )}
    {itemsEquippedStats.tipo_item.toLowerCase() === 'lanza pistola' ? (
      <>
        <p>NUMERO DISPAROS: {itemsEquippedStats.numero_disparos}</p>
        <p>TIPO DISPARO: {itemsEquippedStats.tipo_disparo}</p>
      </>
    ) : (
      ''
    )}
    {itemsEquippedStats.tipo_item.toLowerCase() === 'hacha espada' ? (
      <>
        <p>TIPO VIAL: {itemsEquippedStats.tipo_vial}</p>
        <p>
          {itemsEquippedStats.elemento_vial} IMG ELEMENTO VIAL:
          {itemsEquippedStats.danio_vial}
        </p>
      </>
    ) : (
      ''
    )}
    {itemsEquippedStats.tipo_item.toLowerCase() === 'arco' ? (
      <>
        VIALES:
        <p>{itemsEquippedStats.viales.vial01}</p>
        <p>{itemsEquippedStats.viales.vial02}</p>
        <p>{itemsEquippedStats.viales.vial03}</p>
        <p>{itemsEquippedStats.viales.vial04}</p>
        <p>{itemsEquippedStats.viales.vial05}</p>
      </>
    ) : (
      ''
    )}
    {itemsEquippedStats.tipo_item.toLowerCase() === 'ballesta pesada' ||
    itemsEquippedStats.tipo_item.toLowerCase() === 'ballesta ligera' ? (
      <>
        <p> Modificaciones: {itemsEquippedStats.modificaciones}</p>
        <p>Desvio: {itemsEquippedStats.desvio}</p>
        <p>Tiro especial: {itemsEquippedStats.tiro_especial}</p>
      </>
    ) : (
      ''
    )}
    {itemsEquippedStats.tipo_item.toLowerCase() === 'glaive insecto' ? (
      <p>Bonus kinsecto: {itemsEquippedStats.bonus_kinsecto}</p>
    ) : (
      ''
    )}
    {itemsEquippedStats.tipo_item.toLowerCase() === 'cornamusa' ? (
      <>
        <h3>Notas:</h3>
        <p>{itemsEquippedStats.notas.nota01}</p>
        <p>{itemsEquippedStats.notas.nota02}</p>
        <p>{itemsEquippedStats.notas.nota03}</p>{' '}
      </>
    ) : (
      ''
    )}
  </div>
);

EquipmentStats.displayName = 'EquipmentStats';
