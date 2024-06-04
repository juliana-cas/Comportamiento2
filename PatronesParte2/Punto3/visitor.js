class Cliente {
    constructor(nombre, fechaNacimiento, direccion) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.direccion = direccion;
    }
  
    accept(visitor) {
      visitor.visit(this);
    }
  }
  

  class ClientePremium extends Cliente {
//propiedades de cliente premium
  }
  
  class ClienteRegular extends Cliente {
//propiedades de cliente regular
  }

  
  class Visitor {
    visit(cliente) {
      if (cliente instanceof ClientePremium) {
        console.log(`Enviando mensaje premium a ${cliente.nombre}`);
      } else if (cliente instanceof ClienteRegular) {
        console.log(`Enviando mensaje regular a ${cliente.nombre}`);
      }
    }
  }
  

  const clientePremium = new ClientePremium('Juliana Martinez', '2000-03-15', 'Condominio el Carmelo');
  const clienteRegular = new ClienteRegular('Juan Agudelo', '1995-10-20', 'Barrio Zuldemayda');
  
  const visitor = new Visitor();
  
  clientePremium.accept(visitor);
  clienteRegular.accept(visitor);
  