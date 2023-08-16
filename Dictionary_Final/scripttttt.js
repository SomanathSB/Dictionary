const dictionary=(word)=>{
    var word = searchip.value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
        headers: { 'X-Api-Key': 'MuXLMYaZ0qgJi0c+n5GzSQ==OQQ2OuqNuEU4QWGF'},
        contentType: 'application/json',
        success: function(result) {
            wordhead.innerHTML=result.word;
            defination.innerHTML="Meaning: "+result.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.");
            console.log(result);
            
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchip.value);
})

$(document).ready(function(){
    $("#searchbtn").click(function(){
        $("#wordhead").css("color","#445069");
    });
});