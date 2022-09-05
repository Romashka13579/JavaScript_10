var add_btn = document.querySelector(".add-more");
var statistic_block = document.querySelector(".statistic-block");
var blocks_txt = document.querySelectorAll(".block-txt")

function Click(){
    var clone_block = blocks_txt[0].cloneNode(true);
    statistic_block.prepend(clone_block);
    blocks_txt = document.querySelectorAll(".block-txt");
}