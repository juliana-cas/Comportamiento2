class DeviceState {
    constructor(device) {
      this.device = device;
    }
  
    pressHomeButton() {
      throw new Error('Operación no permitida en el estado actual');
    }
  
    pressPowerButton() {
      throw new Error('Operación no permitida en el estado actual');
    }
  }
  
  class OffState extends DeviceState {
    pressPowerButton() {
      console.log('Encendiendo...');
      this.device.setState(this.device.readyState);
    }
  }
  
  class LockedState extends DeviceState {
    pressHomeButton() {
      console.log('Desbloqueando...');
      this.device.setState(this.device.readyState);
    }
  
    pressPowerButton() {
      console.log('Apagando...');
      this.device.setState(this.device.offState);
    }
  }
  
  class ReadyState extends DeviceState {
    pressHomeButton() {
      console.log('Bloqueando...');
      this.device.setState(this.device.lockedState);
    }
  
    pressPowerButton() {
      console.log('Pasando al estado de apagado...');
      this.device.setState(this.device.offState);
    }
  }
  
  class DeviceContext {
    constructor() {
      this.offState = new OffState(this);
      this.lockedState = new LockedState(this);
      this.readyState = new ReadyState(this);
      this.currentState = this.offState; // Estado inicial
    }
  
    setState(newState) {
      this.currentState = newState;
    }
  
    getCurrentState() {
      return this.currentState;
    }
  }
  

  const myDevice = new DeviceContext();
  myDevice.getCurrentState().pressPowerButton();
  myDevice.getCurrentState().pressHomeButton(); 
  myDevice.getCurrentState().pressPowerButton();
  myDevice.getCurrentState().pressHomeButton(); 
  