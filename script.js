//creating an object with 3 nested arrays
const collectiveWisdom = {
   signInfo: ['star', 'moon', 'comet', 'sun'],
   fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
   advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

//store the wisdom in an array
let personalWisdom = []

//creating a function to generate random number from 0 --> num -1
function generateRandomNumber(num){
   return Math.floor(Math.random() * num)
}

//iterate over the object
for (let property in collectiveWisdom){
    let optionIndex = generateRandomNumber(collectiveWisdom[property].length)

    //use the object's properties to customize the message being added to personalWisdom
    switch(property){
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[property][optionIndex]}".`)
            break
        case 'fortuneOutput':
            personalWisdom.push(`You are having: "${collectiveWisdom[property][optionIndex]}"`)
            break
        case 'advice':
            personalWisdom.push(`You should: "${collectiveWisdom[property][optionIndex]}"`)
            break
        default:
            personalWisdom.push(`Thre is not enough info.`)            
    }
}

function formatWisdom(wisdom){
   const formatted = personalWisdom.join('\n')
   console.log(formatted)
}

formatWisdom(personalWisdom);