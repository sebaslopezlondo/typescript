/*
 *
 */

// Definiendo un enum como roles de una persona
enum ROLES {
  ADMIN = "ADMIN",
  SELLER = "SELLER",
  CUSTOMER = "CUSTOMER",
}

/*
 *
 */

type User = {
  username: string;
  password: string;
  role: ROLES;
};

const user: User = {
  username: "Sebastian",
  password: "123456",
  role: ROLES.ADMIN,
};

/*
 * Es una forma directa de cuales opciones tengo disponibles para asignar a una variable
 */
