// $(document).ready(function() {
// 	$("body").on('click', '.top', function() {
// 		$("nav.menu").toggleClass("menu_show");
// 	});
// });




const url = `https://spreadsheets.google.com/feeds/list/1cPPgvKuA_8-PHICX1skEGzDlnZQLqOFcqlOzKEIEoSg/od6/public/values?alt=json`

fetch(url) 
    .then(response => response.json())
    .then(data => {
        console.log(data.feed.entry);
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
    console.log(('app is running'))
    console.log(data)

    const createProjectElement = (project) => {
        const $div = $('<div>');
        $div.append($('<img>').attr('src', project.image));
        $div.append($('<a>').attr('href', project.url).text(project.title));
        $div.append($('<p>').text(project.description));


        return $div
    }

        data.forEach(project => {
            const $projectDiv = createProjectElement(project)
            $('#projects-code').append($projectDiv);
        })





}


