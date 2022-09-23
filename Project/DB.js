module.exports = function () {
  var Data = {
    users: [
      {
        id: 1,
        nombre: "Sebastian",
        apellido: "Gonzalez",
        email: "sebastiandelatorre@gmail.com",
        telefono: "992737884",
        dni: "72845242",
      },
      {
        id: 2,
        nombre: "Diego",
        apellido: "Gonzalez",
        email: "diego@gmail.com",
        telefono: "992737884",
        dni: "12345678",
      },
      {
        id: 3,
        nombre: "Giancarlo",
        apellido: "Gonzalez",
        email: "Giancarlo@gmail.com",
        telefono: "941868604",
        dni: "12345678",
      },
      {
        id: 4,
        nombre: "Jhonatan",
        apellido: "Gonzalez",
        email: "Jhonatan@gmail.com",
        telefono: "941868604",
        dni: "12345678",
      },
      {
        id: 5,
        nombre: "Brian",
        apellido: "Gonzalez",
        email: "Brian@gmail.com",
        telefono: "941868604",
        dni: "72524847",
      },
    ],
    Scores: [
      {
        userId: 1,
        pedidosRealizados: 15,
        pedidosEntregados: 10,
        pedidosCancelados: 5,
        nEstrellas: 4.5,
      },
      {
        userId: 2,
        pedidosRealizados: 20,
        pedidosEntregados: 20,
        pedidosCancelados: 0,
        nEstrellas: 5,
      },
      {
        userId: 3,
        pedidosRealizados: 50,
        pedidosEntregados: 48,
        pedidosCancelados: 0,
        nEstrellas: 4.98,
      },
      {
        userId: 4,
        pedidosRealizados: 0,
        pedidosEntregados: 0,
        pedidosCancelados: 0,
        nEstrellas: 0,
      },
      {
        userId: 5,
        pedidosRealizados: 0,
        pedidosEntregados: 0,
        pedidosCancelados: 0,
        nEstrellas: 0,
      },
    ],
    history: [
      {
        userId: 1,
        busquedas: [
          {
            busquedaID: 1,
            fecha: "2022-10-09",
            hora: "10:00",
            contenido: "Botellas de plastico",
          },
          {
            busquedaID: 2,
            fecha: "2022-10-10",
            hora: "11:00",
            contenido: "Botellas de vidrio",
          },
        ],
      },
    ],
    Tickets: [
      {
        idTicket: 1,
        DescriptionReclamo:
          "Mi historial no se actualizada con mis pedidos anteriores",
        userId: 1,
        fecha: "2022-07-09",
      },
      {
        idTicket: 2,
        DescriptionReclamo:
          "Mis recompensas se eliminaron antes de ser reclamadas",
        userId: 2,
        fecha: "2022-07-09",
      },
    ],
    Types: [
      {
        id: 1,
        Name: "Celular",
        Description: "Dispositivo movil",
      },
      {
        id: 2,
        Name: "Cupón de descuento",
        Description: "Vale de descuento",
      },
    ],
    Rewards: [
      {
        id: 1,
        StartDate: "2022-07-09",
        EndDate: "2022-07-09",
        NameReward: "Telefono Xiami 120gb 6Gb RAM",
        Description: "Telefono Xiami 120gb 6Gb RAM",
        Code: "JU2KC9088",
        TypeId: 1,
      },
      {
        id: 2,
        StartDate: "2022-07-09",
        EndDate: "2022-07-09",
        NameReward: "Cupon de descuento 10% en supermercado",
        Description: "10% de dscto",
        Code: "nb320",
        TypeId: 2,
      },
      {
        id: 3,
        StartDate: "2022-07-09",
        EndDate: "2022-07-09",
        NameReward: "Cupon de descuento 25% en Rappi",
        Description: "25% de dscto",
        Code: "87b21",
        TypeId: 2,
      },
    ],
    Reward_Users: [
      {
        id: 1,
        userId: 1,
        RewardId: 1,
        Claimed: false,
      },
      {
        id: 2,
        userId: 2,
        RewardId: 3,
        Claimed: true,
      },
      {
        id: 3,
        userId: 3,
        RewardId: 2,
        Claimed: true,
      },
    ],
    Ubications: [
      {
        id: 1,
        Distrito: "Miraflores",
        Direccion: "Av. Angamos 123",
      },
    ],
  };

  return Data;
};
