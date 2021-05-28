var number_mvs = 0;
var count = 0;
function start_game(){
    count++;
    var tab_position = new Array();
    while(tab_position.length < 9){
        var numero = Math.round(Math.random() * 100);
        if((numero == 11) || (numero == 12) || (numero == 13) || (numero == 21) || (numero == 22) || (numero == 23) || (numero == 31) || (numero == 32) || (numero == 33)){
            if(!tab_position.includes(numero)){
                tab_position[tab_position.length] = numero;
            }
        }
    }
    document.getElementById('p11').textContent = tab_position[0];
    document.getElementById('p11').style.background = 'url('+tab_position[0]+'.png)';
    
    document.getElementById('p12').textContent = tab_position[1];
    document.getElementById('p12').style.background = 'url('+tab_position[1]+'.png)';

    document.getElementById('p13').textContent = tab_position[2];
    document.getElementById('p13').style.background = 'url('+tab_position[2]+'.png)';

    document.getElementById('p21').textContent = tab_position[3];
    document.getElementById('p21').style.background = 'url('+tab_position[3]+'.png)';

    document.getElementById('p22').textContent = tab_position[4];
    document.getElementById('p22').style.background = 'url('+tab_position[4]+'.png)';

    document.getElementById('p23').textContent = tab_position[5];
    document.getElementById('p23').style.background = 'url('+tab_position[5]+'.png)';

    document.getElementById('p31').textContent = tab_position[6];
    document.getElementById('p31').style.background = 'url('+tab_position[6]+'.png)';

    document.getElementById('p32').textContent = tab_position[7];
    document.getElementById('p32').style.background = 'url('+tab_position[7]+'.png)';

    document.getElementById('p33').textContent = tab_position[8];
    document.getElementById('p33').style.background = 'url('+tab_position[8]+'.png)';

    document.getElementById('move').textContent = "Move: 0";
    number_mvs = 0;
    document.getElementById('launch').textContent = 'Restart Game'
}

function reset_image(){
    document.getElementById('p11').style.visibility = 'visible';
    document.getElementById('p12').style.visibility = 'visible';
    document.getElementById('p13').style.visibility = 'visible';
    document.getElementById('p21').style.visibility = 'visible';
    document.getElementById('p22').style.visibility = 'visible';
    document.getElementById('p23').style.visibility = 'visible';
    document.getElementById('p31').style.visibility = 'visible';
    document.getElementById('p32').style.visibility = 'visible';
    document.getElementById('p33').style.visibility = 'visible';

    document.getElementById('launch').textContent = 'Start Game';
    number_mvs = 0;
    document.getElementById('move').textContent = 'Move: 0';
}

function back_to_normal(){
    setTimeout(reset_image,3000);
}

function check_win(){
    var cell1 = document.getElementById('p11').textContent;
    var cell2 = document.getElementById('p12').textContent;
    var cell3 = document.getElementById('p13').textContent;
    var cell4 = document.getElementById('p21').textContent;
    var cell5 = document.getElementById('p22').textContent;
    var cell6 = document.getElementById('p23').textContent;
    var cell7 = document.getElementById('p31').textContent;
    var cell8 = document.getElementById('p32').textContent;
    var cell9 = document.getElementById('p33').textContent;
    if((cell1 == '11') && (cell2 == '12') && (cell3 == '13') && 
    (cell4 == '21') && (cell5 == '22') && (cell6 == '23') && 
    (cell7 == '31') && (cell8 == '32') && (cell9 == '33')){
        return true;
    }else{
        return false;
    }
}


function switching(cell) {
    if(count > 0){
    if(document.getElementById(cell).text != '33'){
        switch (cell){
            case 'p11':
                if(document.getElementById('p12').textContent == '33'){
                    var temp_val = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = temp_val;

                    document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                    document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p21').textContent == '33'){
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = temp_val;

                    document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p12':
                if(document.getElementById('p11').textContent == '33'){
                    var temp_val = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = temp_val;

                    document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p13').textContent == '33'){
                    var temp_val = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = temp_val;

                    document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p22').textContent == '33'){
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = temp_val;

                    document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p13':
                if(document.getElementById('p12').textContent == '33'){
                    var temp_val = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = temp_val;

                    document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                    document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p23').textContent == '33'){
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = temp_val;

                    document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p21':
                if(document.getElementById('p11').textContent == '33'){
                    var temp_val = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p22').textContent == '33'){
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p31').textContent == '33'){
                    var temp_val = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p22':
                if(document.getElementById('p12').textContent == '33'){
                    var temp_val = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p21').textContent == '33'){
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p23').textContent == '33'){
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p32').textContent == '33'){
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p23':
                if(document.getElementById('p13').textContent == '33'){
                    var temp_val = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p22').textContent == '33'){
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p33').textContent == '33'){
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p31':
                if(document.getElementById('p21').textContent == '33'){
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = temp_val;

                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p32').textContent == '33'){
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = temp_val;

                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p32':
                if(document.getElementById('p31').textContent == '33'){
                    var temp_val = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p22').textContent == '33'){
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p33').textContent == '33'){
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
            break;
            case 'p33':
                if(document.getElementById('p32').textContent == '33'){
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(document.getElementById('p23').textContent == '33'){
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    number_mvs++;
                    document.getElementById('move').textContent = "Move: "+number_mvs;
                }
                if(check_win()){
                    setTimeout(function(){
                        document.getElementById('p11').style.visibility = 'hidden';
                        document.getElementById('p12').style.visibility = 'hidden';
                        document.getElementById('p13').style.visibility = 'hidden';
                        document.getElementById('p21').style.visibility = 'hidden';
                        document.getElementById('p22').style.visibility = 'hidden';
                        document.getElementById('p23').style.visibility = 'hidden';
                        document.getElementById('p31').style.visibility = 'hidden';
                        document.getElementById('p32').style.visibility = 'hidden';
                        document.getElementById('p33').style.visibility = 'hidden';
                        document.getElementById('tab-grid').style.background = 'url("yes.gif")';

                        setTimeout(back_to_normal , 2000);
                    },500)
                }
            break;
        }
    }
}}