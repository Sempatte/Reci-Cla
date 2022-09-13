module.exports = function () {
    var Data = {
      Recicladores: [
        {
          id:1,
          nombre: "Sebastian",
          apellido: "Gonzalez",
          email: "sebastiandelatorre@gmail.com",
          telefono: "123456789",
          dni: "72845242",
        },
        {
          id:2,
          nombre: "Diego",
          apellido: "Gonzalez",
          email: "diego@gmail.com",
          telefono: "123456789",
          dni: "12345678",
        },
        {
          id:3,
          nombre: "Giancarlo",
          apellido: "Gonzalez",
          email: "Giancarlo@gmail.com",
          telefono: "123456789",
          dni: "12345678",
        },
        {
          id:4,
          nombre: "Jhonatan",
          apellido: "Gonzalez",
          email: "Jhonatan@gmail.com",
          telefono: "123456789",
          dni: "12345678",
        },
        {
          id:5,
          nombre: "Brian",
          apellido: "Gonzalez",
          email: "Brian@gmail.com",
          telefono: "123456789",
          dni: "72524847",
        }
      ],
      Recolectores: [
        {
          id:1,
          nombre: "Esperanza",
          apellido: "Gutierrez",
          email: "esperanza_g@gmail.com",
          telefono: "985478254",
          dni: "70524847",
        }
      ],
      Historial: [
        {
          id:1,
          idReciclador: {
            id: 1
          },
          busquedas: [
            {
              busquedaID: 1,
              fecha: "2020-10-10",
              hora: "10:00",
              contenido: "Botellas de plastico",
            }
          ]
        }
      ],
      Tickets: [

      ],
      TipoDeProductos: [
        {
          id: 10,
          nombre: "Celular",
        },
        {
          id: 11,
          nombre: "Cupón de descuento",
        }
      ],
      Productos: [
        {
          id: 1,
          name: "Telefono Xiami 120gb 6Gb RAM",
          TipoProducto: {
            id: 10
          }
        },
        {
          id: 2,
          name: "S/15 de descuento en Rappi",
          TipoProducto: {
            id: 11
          }
        },
        {
          id: 3,
          name: "S/25 de descuento en PedidosYA",
          TipoProducto: {
            id: 11
          }
        }
      ]

    }

    return Data
  }
