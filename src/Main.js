const tmi = require('tmi.js');
const fs = require('fs');
// Define configuration options

  const opts = authentication();
  const client = new tmi.client(opts);

  // Register our event handlers (defined below)
  client.on('message', onMessageHandler);
  client.on('connected', onConnectedHandler);
  
  // Connect to Twitch:
  client.connect();

// Create a client with our options

  var targetID = {
    v: "",
    get prop() {
        return this.v;
    },
    set prop(newValue) {
        this.v = newValue;
    }
};

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot
  
    // Remove whitespace from chat message
    const commandName = msg.trim();
  
    // If the command is known, let's execute it
    if(commandName === '!welcome'){
      try {
        // read contents of the file
        const data = fs.readFileSync('Welcome.txt', 'UTF-8');
        const lines = data.split(/\r?\n/);
        // print all lines
        lines.forEach((line) => {
        client.say(target, line);
            //console.log(line);
        });
        console.log(`* Executed ${commandName} command`);
      } catch (err) {
          console.error(err);
      }
    } else if(commandName === '!banlist'){
      targetID.prop = target;
      data=readFile();
      banElements(data);
      console.log(`* Executed ${commandName} command`);
    }else{
      console.log(`* Unknown command ${commandName}`);
    }
  }
  
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
  // Called every time the bot connects to Twitch chat
  function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }

  //Command !banList
  async function banElements(data){
      targetTemp = targetID.prop;
      let countGlobalElements = 0;
      let assigNewPosition = 0;
      let tempIndex = 0;
      let limitPosition = 0;
      while (countGlobalElements <= data.length) {
        try {
          if(assigNewPosition != data.length){
            limitPosition+=30;
          }else{
            limitPosition =  data.length;
            //console.log("Finish ",limitPosition);
          }
          for (let index = assigNewPosition; index < limitPosition; index++) {
            const element = data[index];
            //console.log(index+":",element);
            client.say(targetTemp, element);
            countGlobalElements++;
            tempIndex = index;
          }
          assigNewPosition = tempIndex+1;
          await sleep(5000);
        } catch (err) {
            console.error(err);
        }
      }
      client.say(targetTemp, "Finished");
      //console.log("Finished");
  }

// The time to wait after executing a statement section
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function readFile(){
  const data = fs.readFileSync('List.txt', 'utf-8');
  const dataSplit = data.split(/\r?\n/);
  return dataSplit;
}

  // Twitch Authentication
  function authentication(){
    credentials=readPath();
    
    const opts = {
      identity: {
        username: credentials[0],
        password: credentials[1]
      },
      channels: [
        credentials[2]
      ]
    };
    return opts;
  }

  // Reading .env File
  function readPath(){
      const data = fs.readFileSync('.env', 'utf-8');
      const dataSplit = data.split(/\r?\n/);
      //console.log(dataSplit.length);
      const dataWordClean = [];
      for (let index = 0; index < dataSplit.length; index++) {
        var word=dataSplit[index];
        var fullWord = "";
        var startFlag = new Boolean(false);
        for (let letter = 0; letter < word.length; letter++) {
          if(word.charAt(letter) === "="){
            startFlag = true;
          }
          if(startFlag===true){
            fullWord = fullWord+word.charAt(letter+1);
          }
        }
        startFlag = false;
        dataWordClean[index] = fullWord;
      }
      return dataWordClean;
  }