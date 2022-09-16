module.exports = function () {
    var Data = {
      'recyclers': [
        {
          'id':1,
          'nombre': "Sebastian",
          'apellido': "Gonzalez",
          'email': "sebastiandelatorre@gmail.com",
          'telefono': "123456789",
          'dni': "72845242",
        },
        {
          'id':2,
          'nombre': "Diego",
          'apellido': "Gonzalez",
          'email': "diego@gmail.com",
          'telefono': "123456789",
          'dni': "12345678",
        },
        {
          'id':3,
          'nombre': "Giancarlo",
          'apellido': "Gonzalez",
          'email': "Giancarlo@gmail.com",
          'telefono': "123456789",
          'dni': "12345678",
        },
        {
          'id':4,
          'nombre': "Jhonatan",
          'apellido': "Gonzalez",
          'email': "Jhonatan@gmail.com",
          'telefono': "123456789",
          'dni': "12345678",
        },
        {
          'id':5,
          'nombre': "Brian",
          'apellido': "Gonzalez",
          'email': "Brian@gmail.com",
          'telefono': "123456789",
          'dni': "72524847",
        }
      ],
      'collectors': [
        {
          'id':1,
          'nombre': "Esperanza",
          'apellido': "Gutierrez",
          'email': "esperanza_g@gmail.com",
          'telefono': "985478254",
          'dni': "70524847",
        }
      ],
      'Scores': [
        {
          "recyclerId": 1,
          'pedidosRealizados': 15,
          'pedidosEntregados': 10,
          'pedidosCancelados': 5,
          'nEstrellas': 4.5
        },
        {
          "recyclerId": 2,
          'pedidosRealizados': 0,
          'pedidosEntregados': 0,
          'pedidosCancelados': 0,
          'nEstrellas': 0
        },
        {
          "recyclerId": 3,
          'pedidosRealizados': 0,
          'pedidosEntregados': 0,
          'pedidosCancelados': 0,
          'nEstrellas': 0
        },
        {
          "recyclerId": 4,
          'pedidosRealizados': 0,
          'pedidosEntregados': 0,
          'pedidosCancelados': 0,
          'nEstrellas': 0
        },
        {
          "recyclerId": 5,
          'pedidosRealizados': 0,
          'pedidosEntregados': 0,
          'pedidosCancelados': 0,
          'nEstrellas': 0
        },
      ],
      'history': [
        {
          "recyclerId": 1,
          'busquedas': [
            {
              'busquedaID': 1,
              'fecha': "2022-10-09",
              'hora': "10:00",
              'contenido': "Botellas de plastico",
            },
            {
              'busquedaID': 2,
              'fecha': "2022-10-10",
              'hora': "11:00",
              'contenido': "Botellas de vidrio",
            }
          ]
        }
      ],
      'Tickets': [
        {
          'ticketID': 1,
          'fecha': "2022-07-09",
          'hora': "10:00",
          'issueContent': "Mi historial no se actualizada con mis pedidos anteriores",
          'estado': "Abierto",
          "recyclerId": 1,
        },
        {
          'ticketID': 2,
          'fecha': "2022-08-09",
          'hora': "11:00",
          'issueContent': "Errores en la funcionalidad de la app",
          'estado': "Cerrado",
          "recyclerId": 3,
        }
      ],
      'Types': [
        {
          'id': 1,
          'nameType': "Celular",
          'description': "asdsadasdasd",
        },
        {
          'id': 2,
          'nameType': "Cupón de descuento",
          'description': "asdsadasdas",
        }
      ],
      'Rewards': [
        { 
            'id': 1,              
            'StartDate': "2022-07-09",
            'EndDate': "2022-07-09",
            'NameReward': "Telefono Xiami 120gb 6Gb RAM",
            'Description': "Telefono Xiami 120gb 6Gb RAM",
            'Code': "123456789",
            'TypeId': 1,
          
        },
        { 
            'id': 2,              
            'StartDate': "2022-07-09",
            'EndDate': "2022-07-09",
            'NameReward': "Cupon de descuento 10% en supermercado",
            'Description': "10% de dscto",
            'Code': "nb320",
            'TypeId': 2,
          
        },
        { 
            'id': 3,              
            'StartDate': "2022-07-09",
            'EndDate': "2022-07-09",
            'NameReward': "Cupon de descuento 25% en Rappi",
            'Description': "25% de dscto",
            'Code': "87b21",
            'TypeId': 2,
          
        }
      ]
    }

    return Data
  }
