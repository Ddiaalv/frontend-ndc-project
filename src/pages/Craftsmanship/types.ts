export type armorType = {
  id: number;
  nombre: string;
  ruta: string;
  tipo: string;
  rama: string;
  rango: string;
  nivel: number;
  rareza: number;
  defensa: number;
  ranura01: string;
  ranura02: string;
  ranura03: string;
  fuego: number;
  agua: number;
  rayo: number;
  hielo: number;
  draco: number;
  precio: number;
  habilidad1: string;
  habilidad2: string;
};
export type weaponType = {
  id: number,
  nombre: string,
  rama: string,
  rama_evo: number,
  ruta: string,
  rareza: number,
  evolucion: string,
  tipo: string,
  tipo_arma: string,
  precio: number,
  ataque: number,
  danio_elemento01?: number,
  elemento_01?: string,
  elemento01?: string,
  danio_elemento02?: number,
  elemento_02?: string,
  elemento02?: string,
  afilado?: string,
  afinidad?: number,
  defensa?: number,
  sello_ancianos?: string,
  ranura01: string,
  ranura02?: string,
  ranura03?: string,
  tipo_vial?: string,
  danio_vial?: number,
  elemento_vial?: string,
  numero_disparos?: number,
  tipo_disparo?: string,
  nota01?: string,
  nota02?: string,
  nota03?: string,
  modificaciones?: number,
  desvio?: string,
  tiro_especial?: string,
  bonus_kinsecto?: string,
  vial01?: string,
  vial02?: string,
  vial03?: string,
  vial04?: string,
  vial05?: string
};
export type itemsEquipedProps = {
  arma: weaponType | armorType;
  casco: armorType | weaponType;
  pechera: armorType | weaponType;
  pantalon: armorType | weaponType;
  guantes: armorType | weaponType;
  botas: armorType | weaponType;
};
export type itemsEquippedStatsProps = {
  ataque: number;
  defensa: number;
  fuego: number;
  agua: number;
  rayo: number;
  hielo: number;
  draco: number;
};
