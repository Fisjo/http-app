


/**
 * @returns {Promise<Object>} quote info
 */
const fetchQuote = async () => {
    
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();      //coge el body de la peticion HTTP

    console.log(data[0]);
    
    return data[0]; 
    
    

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';     

    const quote = await fetchQuote(); 

    
}