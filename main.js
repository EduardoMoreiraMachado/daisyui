'use strict'

function countdown() {
    let counter = 10
    setInterval(() => {
		if(counter>0){
			counter--
		}
        document.getElementsByClassName('counter_element').style.setProperty('--value', counter)
    }, 1000)
}

countdown()