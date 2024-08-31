/**
 * Acceder al tipado por índice
 * En el siguiente ejemplo puedes ver el tipado de un objeto
 * Seguido de una función el cual tiene un tipado dinámico
 * Si por alguna razón cambia el tipado de number a string, en la función cambiara automaticamente
 */

interface IPrueba {
  id: number;
  //id: string;
  title: string;
}

function probandoTipadoIndice(id: IPrueba['id']): void {
  console.log(typeof id);
}

probandoTipadoIndice(1);
