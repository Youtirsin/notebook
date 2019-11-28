$(()=>{
    showCards();
});
function showCards(){
    for(var i in menu){
        var $card='<div class="card mycard text-center shadow">'+
            '<div class="card-header">'+menu[i].name+'</div>'+
            '<div class="card-body">'+
                '<a href="'+menu[i].path+'" class="btn btn-primary">View</a>'+
            '</div>'+
        '</div>';
        $("#content").append($card);
    }
};
function randNum(start,end){
    return parseInt(Math.random()*(end-start)+start);
};
