const inquirer = require('inquirer');
const colors = require('colors');

const types = ['airpods', 'sony XM3']

const questions = [
  {type: 'input', name: 'name', message: 'what is your name?🧐'},
  {type: 'list', name: 'pods', message: 'which one do you prefer?🤪', choices: types}
]

async function main(){
  let step1 = await confirm({
    message: 'Can you answer the following questions honestly?🧐',
    default: true
  })
  if(!step1.promise){
    console.log("mind your choice!!!💩")
    main()
    return
  }
  let step2 = await list({
    message: 'which one do you prefer?🧐',
    choices: ['APPLE AIRPODS', 'SONY XM3'],
    default: 'APPLE AIRPODS'
  })

  if(step2.list === 'APPLE AIRPODS'){
    console.log("you already have one, please give MY SONY XM3 to ME!!!😊")
    counting("🌈🌈🌈")
  }else{
    console.log("SHAME ON YOU. please give MY SONY XM3 back to ME!!!😤")
    counting("🌚🌚🌚")
  }
}

module.exports = main

function confirm(options){
  return inquirer.prompt([{
    type: 'confirm',
    name: 'promise',
    message: options.message,
    default: options.default || false
  }])
}

function list(options){
  return inquirer.prompt([{
    type: 'list',
    name: 'list',
    message: options.message,
    choices: options.choices || [],
    default: options.default
  }])
}

function counting (message){
  let i = 5
  console.log(i)
  i--
  let timer = setInterval(function(){
    console.log(i);
    if(i ===0){
      console.log(message)
      clearInterval(timer)
    }
    i--
  }, 1000)
}