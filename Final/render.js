$(document).ready(render());
export function render(){
    let root = $('#root');
    root.empty();
    
    createPage();
    /*root.append(spotifyPlaylist());*/

    root.on('click', '.mainButton', randPage);
    root.on('click', '.homeButton', createPage)

}
function randPage() {
    let root = $('#root'); 

    root.empty(); 
    let link = randGenerator(); 
    root.append(`
    <section class="section has-text-right id="buttons">
    <div>
        
    <a href= ${link}> <button class="button is-info  is-large mainButton" > Press Me! </button></a>
    <button class="button is-info is-large homeButton" onclick="createPage()"> Home </button> 
    </div>
    </section> `); 
}

function randGenerator(){
    let i = Math.random();
    if(i < 0.15) {
        return 'DJ/djIndex.html'; 
    } else if(i < 0.3) {
        return 'ML/madlibs.html';
    } else if(i < 0.45) {
        return 'Movie/movie.html'
    } else if(i < 0.60) {
        return 'RW/randWord.html';
    } else if(i < 0.75) {
        return '2048/2048.html';
    } else if(i < 0.9) {
        return 'love/love.html';
    } else {
        return 'TTT/tictactoe.html';
    }
}
function homePage() {
    let root = $('#root'); 
    root.empty(); 
    root.append()
}


function createPage(){
    let root = $('#root'); 
    root.empty(); 
    let link = randGenerator(); 

    root.append(` <div> <a href= ${link}> <button class="button is-info  is-large mainButton"> Press Me! </button> </a> </div> `);
} // do some remodeling to move this into index.html site and link to other htmls w js attached 

// moves this back into index.html, each home button on each page linkes to index.html, each page js has its own rand page 