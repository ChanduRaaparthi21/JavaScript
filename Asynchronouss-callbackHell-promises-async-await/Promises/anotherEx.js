/* 1.list the items want to buy 
2.intlo nunchi bayatiki vellali
3.scooty start chesi shop ki vellali
4. shop lo manaki kavalsina items cart lo vesukovali
5.next billing vepinchali
6.lastly intiki raavali
7. end */

function listTheItems(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('list the items want to buy');
            resolve();
        }, 2000);
    });
}

function intloNunchiBayatikiVellali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('intlo nunchi bayatiki vellali');
            resolve();
        }, 2000);
    });
}

function scootyStartChesiShopKiVellali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('scooty start chesi shop ki vellali');
            resolve();
        }, 2000);
    });
}

function shopLoManakiKavalsinaItemsCartLoVesukovali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('shop lo manaki kavalsina items cart lo vesukovali');
            resolve();
        }, 2000);
    });
}

function nextBillingVepinchali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('nextBillingVepinchali');
            resolve();
        }, 2000);
    });
}

function lastlyIntikiRaavali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('intiki vachesam');
            resolve();
        }, 2000);
    });
}

function end(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('End');
            resolve();
        }, 2000);
    });
}

function Grocery(){
    listTheItems()
        .then(() => intloNunchiBayatikiVellali())
        .then(() => scootyStartChesiShopKiVellali())
        .then(() => shopLoManakiKavalsinaItemsCartLoVesukovali())
        .then(() => nextBillingVepinchali())
        .then(() => lastlyIntikiRaavali())
        .then(() => end())
        .catch((error) => {console.log('something is fishy', error);});
}

Grocery();
