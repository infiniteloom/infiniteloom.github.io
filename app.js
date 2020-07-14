// $(document).ready(function() {
// 	$("body").on('click', '.top', function() {
// 		$("nav.menu").toggleClass("menu_show");
// 	});
// });




const url = `https://spreadsheets.google.com/feeds/list/1cPPgvKuA_8-PHICX1skEGzDlnZQLqOFcqlOzKEIEoSg/od6/public/values?alt=json`

fetch(url) 
    .then(response => response.json())
    .then(data => {
        // console.log(data.feed.entry);
        const projects = data.feed.entry.map(entry => {
            return{
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            };
        });
        app(projects)
    });



const app = (data) => {
    // console.log(('app is running'))
    // console.log(data)

    const createProjectElement = (project) => {
        const $div = $('<div>');
        $div.css('background-image', `url(${project.image})`);
        // $div.append($('<img>').attr('src', project.image));
        let $div2 = $('<div>');
        $div.append($('<a>').attr('href', project.url).text(`${project.title} - ${project.description}`));
        // $div.append($('<p>').text(project.description));

        return $div
    }

        data.forEach(project => {
            const $projectDiv = createProjectElement(project)
            $('#projects-code').append($projectDiv);
        })
}



// global variables for burger hide /show actions
const $burger = $('.burger');
const $links = $('.item_menu'); 
let show = false;

// function to handle the click event for burger menu hide/show
const showMenu =(event) =>{
    if(show){
        $links.each(function(index){
            $(this).css('display', 'none');
        });
        show = false;
    }else{
        $links.each(function(index){
            $(this).css('display', 'block');
        });
        show = true;
    }
}

$burger.on('click', showMenu);
$links.on('click', showMenu);