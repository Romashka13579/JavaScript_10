var add_btn = document.querySelector(".add-more");
var statistic_block = document.querySelector(".statistic-block");
var statistic = document.querySelector(".statistic");
var blocks_txt = document.querySelectorAll(".blocktxt");
var procents = document.querySelectorAll(".procent");
var k = 1;
var block_txtfordelete;

function ClickAdd(){
    k++
    var clone_block = blocks_txt[0].cloneNode(true);
    statistic_block.prepend(clone_block);
    blocks_txt = document.querySelectorAll(".blocktxt");

    var clone_procent = procents[0].cloneNode(true);
    statistic.prepend(clone_procent);
    procents = document.querySelectorAll(".procent");
    statistic.style.gridTemplateColumns = "repeat("+k+", 1fr)"

    EachBlockTxt()
}

function ClickDelete(){
    if(idfordelete != -1 && idfordelete != 1){
        document.getElementById(idfordelete).remove();
        document.getElementById(idfordelete).remove();
    }
}

function EachBlockTxt(){
    blocks_txt.forEach(blocktxt => {
        blocktxt.addEventListener('click', () => {
            // statistic_block.indexOf(blocktxt);
            // block_txtfordelete = statistic_block.indexOf(blocktxt);
            console.log(blocks_txt.indexOf(blocktxt));
        });
    });
}