const inputText = document.getElementById('inputText');
const listOfMatches = document.getElementById('list-of-matches');



//using arrow function that is triggered on event 'input' inside inputText - input element in HTML
inputText.addEventListener('input', ()=> findStates(inputText.value));


// function to parse through states.json and filter as per input
const findStates = async searchText => {
    
    // fetch returns a promise and hence needs to be used in an async function with an await call
    //.json also returns a promise and needs to be used with await
    const fetched= await fetch('../data/states.json');
    const allStates = await fetched.json();
    //console.log(allStates);

    //using regular expression to find match of states with the input text
    const expression = new RegExp(`^${searchText}`, 'gi');

    //using filter - higher order array method like map - takes a function - loops through the array(here json array) and returns elements based on condition put in function
    let matches = allStates.filter(function(state){
        return state.name.match(expression) || state.abbr.match(expression);
    });
    
    //makes matches as null when text in input field is cleared out
    if(searchText.length === 0){
        matches = [];
        listOfMatches.innerHTML = "";
    }

    //console.log(matches);
    displayList(matches);
     
}

// function to display output on HTML

const displayList = matches => {
    if(matches.length > 0){
        
        //map is a higher order array function. returns an array from an array
        //here returns an array of HTML as a div for each matched element

        const HTMLtext = matches.map(function(match){
            const html = `<div class="card card-body mb-4">
                <h4>
                    ${match.name} (${match.abbr}) <span class="text-primary"> ${match.capital} </span>
                </h4>
                <small>
                    LAT: ${match.lat} / LONG: ${match.long}
                </small>
            </div>`;

            return html;
        });
        //console.log(HTMLtext);

        //join to make a single string of HTML fromn the array of HTML.

        HTMLmatchlist = HTMLtext.join('');
        //console.log(HTMLmatchlist);

        //putthing HTML in list-of-matches
        listOfMatches.innerHTML = HTMLmatchlist;

    }

   
}


//using array function for map!
/*
const displayList = matches => {
    if(matches.length > 0){
        const HTMLtext = matches.map(
            match=>`<div class="card card-body mb-4">
                <h4>
                    ${match.name} (${match.abbr}) <span class="text-primary"> ${match.capital} </span>
                </h4>
                <small>
                    LAT: ${match.lat} / LONG: ${match.long}
                </small>
                </div>`
        ).join('');

       // console.log(HTMLtext);

        listOfMatches.innerHTML = HTMLtext;
    }

}
*/