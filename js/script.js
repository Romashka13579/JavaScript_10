var add_btn = document.querySelector(".add-more");
var statistic_block = document.querySelector(".statistic-block");
var statistic = document.querySelector(".statistic");
var blocks_txt = document.querySelectorAll(".block-txt");
var procents = document.querySelectorAll(".procent");
var k = 1;

function ClickAdd(){
    k++
    var clone_block = blocks_txt[0].cloneNode(true);
    clone_block.id = ""+k+""
    statistic_block.prepend(clone_block);
    blocks_txt = document.querySelectorAll(".block-txt");

    var clone_procent = procents[0].cloneNode(true);
    statistic.prepend(clone_procent);
    procents = document.querySelectorAll(".procent");
    statistic.style.gridTemplateColumns = "repeat("+k+", 1fr)"
    var procentvalue = procents[0].value;
    console.log(procentvalue);
}

function ClickDelete(){

}

function ItsID(id){
    console.log(id);
}