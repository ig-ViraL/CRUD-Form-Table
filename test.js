const _events = {};
this.on = function (name, cb) {
  if (!_events[name]) {
    _events[name] = [cb];
  } else {
    _events[name].push(cb);
  }
  if(name === 'submit'){
    this.container.onsubmit =(e)=>{
      e.preventDefault();
      _events[name].forEach((value) => value());
    }
  } else if (name === 'reset'){
      this.container.onreset =()=>{
        _events[name].forEach((value) => value());
    }
  } else if (name === 'change'){
      this.container.onchange =(e)=>{
        e.preventDefault();
        _events[name].forEach((value) => value());
    }
  }
}

const events = {
  "submit":[],
  "reset":[]
}

this.on = (event,func) => {

  if(events[event]){
    events[event].push(func)
  }
  else{
      events[event] = []
      events[event].push(func)
    }
}
