#!/usr/bin/env node
var fs = require('fs');

var input = fs.readFileSync('input_2', 'utf8');
var memory = input.split(',');

let instruction = {
    1: (x,y) => x + y,
    2: (x,y) => x * y,
}

while (memory[0] != 19690720) {
    let ip = 0;
    memory = input.split(',');
    
    let range = 99;
    var noun = Math.floor(Math.random() * range)
    var verb = Math.floor(Math.random() * range)
    memory[1] = noun;
    memory[2] = verb;
    while (memory[ip] != 99) {
        let opcode = memory[ip++];
        let addr1 = memory[ip++];
        let addr2 = memory[ip++];
        let retaddr = memory[ip++];

        let param1 = (+memory[addr1] !== +memory[addr1]) ? memory[addr1] : +memory[addr1]
        let param2 = (+memory[addr2] !== +memory[addr2]) ? memory[addr2] : +memory[addr2]

        memory[retaddr] = instruction[opcode](param1, param2)
    }
}

console.log("Noun: " + noun + " Verb: " + verb)
