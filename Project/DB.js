module.exports = function () {
    var Data = {
      Recicladores: [
        {
          id:1,
          nombre: "Sebastian",
          apellido: "Gonzalez",
          email: "sebastiandelatorre@gmail.com",
          telefono: "123456789",
          dni: "12345678",
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
          dni: "12345678",
        }
      ],
      Recolectores: [

      ],
      Tickets: [

      ],
      TipoDeProductos: [
        {
          id: 10,
          nombre: "Celular",
        }
      ],
      Productos: [
        {
          id: 1,
          name: "Telefono Xiami 120gb 6Gb RAM",
          TipoProducto: {
            id: 10
          }
        }
      ]
    
    }
  
    return Data
  }