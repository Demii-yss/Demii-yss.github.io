async function firstLoad(){
    let TRUE = "TRUE";
    let FALSE = "FALSE";
    Cards = '編號,名稱,花色,點數,種類,攻擊,回血,屬性,延時,裝備,馬,距離,位置$1,黑殺,梅花,2,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$2,黑殺,梅花,3,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$3,黑殺,梅花,4,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$4,黑殺,梅花,5,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$5,黑殺,梅花,6,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$6,黑殺,梅花,7,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$7,黑殺,梅花,8,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$8,黑殺,梅花,8,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$9,黑殺,梅花,9,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$10,黑殺,梅花,9,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$11,黑殺,梅花,10,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$12,黑殺,梅花,10,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$13,黑殺,梅花,11,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$14,黑殺,梅花,11,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$15,黑殺,黑桃,7,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$16,黑殺,黑桃,8,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$17,黑殺,黑桃,8,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$18,黑殺,黑桃,9,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$19,黑殺,黑桃,9,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$20,黑殺,黑桃,10,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$21,黑殺,黑桃,10,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$22,紅殺,愛心,10,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$23,紅殺,愛心,10,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$24,紅殺,愛心,11,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$25,紅殺,方塊,6,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$26,紅殺,方塊,7,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$27,紅殺,方塊,8,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$28,紅殺,方塊,9,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$29,紅殺,方塊,10,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$30,紅殺,方塊,13,基本,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$31,雷殺,梅花,5,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$32,雷殺,梅花,6,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$33,雷殺,梅花,7,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$34,雷殺,梅花,8,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$35,雷殺,黑桃,4,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$36,雷殺,黑桃,5,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$37,雷殺,黑桃,6,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$38,雷殺,黑桃,7,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$39,雷殺,黑桃,8,基本,TRUE,FALSE,雷,FALSE,FALSE,0,0,牌堆$40,火殺,愛心,4,基本,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$41,火殺,愛心,7,基本,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$42,火殺,愛心,10,基本,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$43,火殺,方塊,4,基本,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$44,火殺,方塊,5,基本,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$45,閃,愛心,2,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$46,閃,愛心,2,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$47,閃,愛心,8,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$48,閃,愛心,9,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$49,閃,愛心,11,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$50,閃,愛心,12,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$51,閃,愛心,13,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$52,閃,方塊,2,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$53,閃,方塊,2,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$54,閃,方塊,3,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$55,閃,方塊,4,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$56,閃,方塊,5,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$57,閃,方塊,6,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$58,閃,方塊,6,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$59,閃,方塊,7,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$60,閃,方塊,7,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$61,閃,方塊,8,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$62,閃,方塊,8,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$63,閃,方塊,9,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$64,閃,方塊,10,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$65,閃,方塊,10,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$66,閃,方塊,11,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$67,閃,方塊,11,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$68,閃,方塊,11,基本,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$69,酒,梅花,3,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$70,酒,梅花,9,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$71,酒,黑桃,3,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$72,酒,黑桃,9,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$73,酒,方塊,9,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$74,桃,愛心,3,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$75,桃,愛心,4,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$76,桃,愛心,5,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$77,桃,愛心,6,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$78,桃,愛心,6,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$79,桃,愛心,7,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$80,桃,愛心,8,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$81,桃,愛心,9,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$82,桃,愛心,12,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$83,桃,方塊,2,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$84,桃,方塊,3,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$85,桃,方塊,12,基本,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$101,桃園結義,愛心,1,錦囊,FALSE,TRUE,無,FALSE,FALSE,0,0,牌堆$102,萬箭齊發,愛心,1,錦囊,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$103,決鬥,梅花,1,錦囊,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$104,決鬥,黑桃,1,錦囊,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$105,決鬥,方塊,1,錦囊,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$106,五穀豐登,愛心,3,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$107,五穀豐登,愛心,4,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$108,順手牽羊,黑桃,3,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$109,順手牽羊,黑桃,4,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$110,順手牽羊,黑桃,11,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$111,順手牽羊,方塊,3,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$112,順手牽羊,方塊,4,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$113,過河拆橋,愛心,12,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$114,過河拆橋,梅花,3,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$115,過河拆橋,梅花,4,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$116,過河拆橋,黑桃,3,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$117,過河拆橋,黑桃,4,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$118,過河拆橋,黑桃,12,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$119,樂不思蜀,愛心,6,錦囊,FALSE,FALSE,無,TRUE,FALSE,0,0,牌堆$120,樂不思蜀,梅花,6,錦囊,FALSE,FALSE,無,TRUE,FALSE,0,0,牌堆$121,樂不思蜀,黑桃,6,錦囊,FALSE,FALSE,無,TRUE,FALSE,0,0,牌堆$122,南蠻入侵,梅花,7,錦囊,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$123,南蠻入侵,梅花,13,錦囊,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$124,南蠻入侵,黑桃,7,錦囊,TRUE,FALSE,無,FALSE,FALSE,0,0,牌堆$125,無中生有,愛心,7,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$126,無中生有,愛心,8,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$127,無中生有,愛心,9,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$128,無中生有,愛心,11,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$129,借刀殺人,梅花,12,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$130,借刀殺人,梅花,13,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$131,火攻,愛心,2,錦囊,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$132,火攻,愛心,3,錦囊,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$133,火攻,方塊,12,錦囊,TRUE,FALSE,火,FALSE,FALSE,0,0,牌堆$134,兵糧寸斷,梅花,4,錦囊,FALSE,FALSE,無,TRUE,FALSE,0,0,牌堆$135,兵糧寸斷,黑桃,10,錦囊,FALSE,FALSE,無,TRUE,FALSE,0,0,牌堆$136,鐵鎖連環,梅花,10,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$137,鐵鎖連環,梅花,11,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$138,鐵鎖連環,梅花,12,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$139,鐵鎖連環,梅花,13,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$140,鐵鎖連環,黑桃,11,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$141,鐵鎖連環,黑桃,12,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$142,閃電,黑桃,1,錦囊,TRUE,FALSE,雷,TRUE,FALSE,0,0,牌堆$143,閃電,愛心,12,錦囊,TRUE,FALSE,雷,TRUE,FALSE,0,0,牌堆$144,無懈可擊,愛心,1,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$145,無懈可擊,愛心,13,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$146,無懈可擊,梅花,12,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$147,無懈可擊,梅花,13,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$148,無懈可擊,黑桃,11,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$149,無懈可擊,黑桃,13,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$150,無懈可擊,方塊,12,錦囊,FALSE,FALSE,無,FALSE,FALSE,0,0,牌堆$201,諸葛連弩,方塊,1,裝備,FALSE,FALSE,無,FALSE,武器,0,1,牌堆$202,諸葛連弩,梅花,1,裝備,FALSE,FALSE,無,FALSE,武器,0,1,牌堆$203,雌雄劍,黑桃,2,裝備,FALSE,FALSE,無,FALSE,武器,0,2,牌堆$204,青釭劍,黑桃,6,裝備,FALSE,FALSE,無,FALSE,武器,0,2,牌堆$205,貫石斧,方塊,5,裝備,FALSE,FALSE,無,FALSE,武器,0,3,牌堆$206,青龍刀,黑桃,5,裝備,FALSE,FALSE,無,FALSE,武器,0,3,牌堆$207,丈八蛇矛,黑桃,12,裝備,FALSE,FALSE,無,FALSE,武器,0,3,牌堆$208,方天畫戟,方塊,12,裝備,FALSE,FALSE,無,FALSE,武器,0,4,牌堆$209,麒麟弓,愛心,5,裝備,FALSE,FALSE,無,FALSE,武器,0,5,牌堆$210,寒冰劍,黑桃,2,裝備,FALSE,FALSE,無,FALSE,武器,0,2,牌堆$211,古錠刀,黑桃,1,裝備,FALSE,FALSE,無,FALSE,武器,0,2,牌堆$212,朱雀羽扇,方塊,1,裝備,FALSE,FALSE,火,FALSE,武器,0,4,牌堆$221,八卦陣,黑桃,2,裝備,FALSE,FALSE,無,FALSE,防具,0,0,牌堆$222,八卦陣,梅花,2,裝備,FALSE,FALSE,無,FALSE,防具,0,0,牌堆$223,仁王盾,梅花,2,裝備,FALSE,FALSE,無,FALSE,防具,0,0,牌堆$224,白銀獅子,梅花,1,裝備,FALSE,TRUE,無,FALSE,防具,0,0,牌堆$225,藤甲,梅花,2,裝備,FALSE,FALSE,無,FALSE,防具,0,0,牌堆$226,藤甲,黑桃,2,裝備,FALSE,FALSE,無,FALSE,防具,0,0,牌堆$231,加一馬,梅花,5,裝備,FALSE,FALSE,無,FALSE,坐騎,1,0,牌堆$232,加一馬,黑桃,5,裝備,FALSE,FALSE,無,FALSE,坐騎,1,0,牌堆$233,加一馬,愛心,13,裝備,FALSE,FALSE,無,FALSE,坐騎,1,0,牌堆$234,加一馬,方塊,13,裝備,FALSE,FALSE,無,FALSE,坐騎,1,0,牌堆$235,減一馬,方塊,13,裝備,FALSE,FALSE,無,FALSE,坐騎,-1,0,牌堆$236,減一馬,黑桃,13,裝備,FALSE,FALSE,無,FALSE,坐騎,-1,0,牌堆$237,減一馬,愛心,5,裝備,FALSE,FALSE,無,FALSE,坐騎,-1,0,牌堆';
    return Cards;
}

function CSV2ObjArr(text){
    splittedArr = text.split("$");
    objProp = splittedArr.shift();
    objProp = objProp.split(",");

    ObjArr = [];

    splittedArr.forEach(function(row, idx) {
        let i = idx;
        tmpRow = row.split(",");
        
        var tmpObj = new Object;
        tmpRow.forEach(function (elmt, idx){
            let j = idx;
            tmpProp = objProp[j];
            
            tmpObj[tmpProp] = tmpRow[j];
        })            
        ObjArr.push(tmpObj);
    });
    return ObjArr;
}

function loadId () {
    allBoxOfNumOfCards = Array.from(document.getElementsByClassName("box#Cards"));
    idOfNumOfCards = [];
    allBoxOfNumOfCards.forEach(function(elmt, idx) {
        idOfNumOfCards[idx] = elmt.id;
    });

    allBoxOfIdOfCards = Array.from(document.getElementsByClassName("boxOfCards"));
    idOfBoxOfCards = [];
    allBoxOfIdOfCards.forEach(function(elmt, idx) {
        idOfBoxOfCards[idx] = elmt.id;
    });    

}

function renderCards (Cards) {
    idOfBoxOfCards.forEach(function (item){
        document.getElementById(item).innerHTML = "";
    });
    Cards.forEach(function (item){

        TMP_BREAK = false;

        cardInfo = [];
        nowNumOfBox = -1;
        isEquip = false;
        
        switch (item['種類']) {
            case '基本':                
                switch (item['名稱']) {
                    case '黑殺':
                        nowNumOfBox = 0;
                        break;
                    case '紅殺': 
                        nowNumOfBox = 1;                      
                        break;                    
                    case '雷殺':
                        nowNumOfBox = 2;                      
                        break;                        
                    case '火殺':
                        nowNumOfBox = 3;                      
                        break;                    
                    case '閃':
                        nowNumOfBox = 4;                       
                        break;                    
                    case '酒':
                        nowNumOfBox = 5;                      
                        break;                    
                    case '桃':
                        nowNumOfBox = 6;                      
                        break;                
                    default:
                        //console.log('未知基本牌');
                        break;
                }
                break;

            case '錦囊':
                switch (item['名稱']) {
                    case '無懈可擊':
                        nowNumOfBox = 7;
                        break;
                    case '南蠻入侵':
                        nowNumOfBox = 8;                      
                        break;                    
                    case '兵糧寸斷':
                        nowNumOfBox = 9;                      
                        break;                        
                    case '萬箭齊發':
                        nowNumOfBox = 10;                      
                        break;                    
                    case '樂不思蜀':
                        nowNumOfBox = 11;                       
                        break;                    
                    case '五穀豐登':
                        nowNumOfBox = 12;                      
                        break;              
                    case '閃電':
                        nowNumOfBox = 13;                      
                        break; 
                    case '桃園結義':
                        nowNumOfBox = 14;
                        break;
                    case '過河拆橋':
                        nowNumOfBox = 15;                      
                        break;                    
                    case '決鬥':
                        nowNumOfBox = 16;                      
                        break;                        
                    case '順手牽羊':
                        nowNumOfBox = 17;                      
                        break;                    
                    case '火攻':
                        nowNumOfBox = 18;                       
                        break;                    
                    case '無中生有':
                        nowNumOfBox = 19;                      
                        break;              
                    case '鐵鎖連環':
                        nowNumOfBox = 20;                      
                        break;               
                    case '借刀殺人':
                        nowNumOfBox = 21;                      
                        break;                   
                    default:
                        //console.log('未知錦囊牌');
                        break;
                }
                break;

            case '裝備':
                isEquip = true;
                cardInfo.Name = item['名稱'];
                switch (item['裝備']) {
                    case '武器':
                        nowNumOfBox = 22;                         
                    break;
                    case '防具':
                        nowNumOfBox = 23; 
                    break;
                    case '坐騎':
                        nowNumOfBox = 24; 
                    break;
                
                    default:
                        break;
                }
            break;

            default:
                //console.log('未知種類');
                TMP_BREAK = true;
                break;
        }

        switch (item['花色']) {
            case '梅花':
                cardInfo.suit = '♣';
                cardInfo.color = 'BlackCards';
                break;
            case '黑桃':
                cardInfo.suit = '♠';
                cardInfo.color = 'BlackCards';
                break;    
            case '方塊':
                cardInfo.suit = '♦';
                cardInfo.color = 'RedCards';
                break;
            case '愛心':
                cardInfo.suit = '♥';
                cardInfo.color = 'RedCards';
                break;         
            default:
                //console.log('未知花色');
                break;
        }

        if (item['點數'] <= 10 && item['點數'] > 1) {
            cardInfo.Num = item['點數'].toString();
        } else {
            switch (item['點數']) {
                case '1':
                    cardInfo.Num = "A";
                    break;
                case '11':
                    cardInfo.Num = 'J';
                    break;
                case '12':
                    cardInfo.Num = 'Q';
                    break;
                case '13':
                    cardInfo.Num = 'K';
                    break;           
                default:
                    //console.log('未知點數');
                    break;
            }
            
        }

        switch (item['位置']) {
            case '牌堆':
                cardInfo.Pos = 0;
                cardInfo.boxClass = 'CardBtnTrue';
                break;
            case '棄牌':
                cardInfo.Pos = '1';
                cardInfo.boxClass = 'CardBtnFalse';
                break;
            case '手牌':
                cardInfo.Pos = 2;
                cardInfo.boxClass = 'CardBtnFalse';
                break;        
            default:
                //console.log('未知位置');
                break;
        }


        targetHTML = document.getElementById(idOfBoxOfCards[nowNumOfBox]);
        txtHTML = targetHTML.innerHTML;
        if (isEquip) {
            txtHTML = txtHTML + `
                <button type = "button" class="${cardInfo.boxClass} ${cardInfo.color} wait4addOnClick" id="cardNum${item['編號']}">
                    ${cardInfo.Name}&thinsp;${cardInfo.suit}${cardInfo.Num}
                </button>
            `;

            
        }else{
            txtHTML = txtHTML + `
                <button type = "button" class="${cardInfo.boxClass} ${cardInfo.color} wait4addOnClick" id="cardNum${item['編號']}">
                    ${cardInfo.suit}${cardInfo.Num}
                </button>
            `;

        }
        targetHTML.innerHTML = txtHTML;

    });    
    addOnClick();
    updateCount();
}

function updateCount () {
    var numCard = [];

    // 牌名
    numCard[0]  = findObject(findObject(nowCards,"名稱","黑殺",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[1]  = findObject(findObject(nowCards,"名稱","紅殺",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[2]  = findObject(findObject(nowCards,"名稱","雷殺",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[3]  = findObject(findObject(nowCards,"名稱","火殺",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[4]  = findObject(findObject(nowCards,"名稱","閃",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[5]  = findObject(findObject(nowCards,"名稱","酒",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[6]  = findObject(findObject(nowCards,"名稱","桃",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[7]  = findObject(findObject(nowCards,"名稱","無懈可擊",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[8]  = findObject(findObject(nowCards,"名稱","南蠻入侵",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[9]  = findObject(findObject(nowCards,"名稱","兵糧寸斷",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[10] = findObject(findObject(nowCards,"名稱","萬箭齊發",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[11] = findObject(findObject(nowCards,"名稱","樂不思蜀",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[12] = findObject(findObject(nowCards,"名稱","五穀豐登",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[13] = findObject(findObject(nowCards,"名稱","閃電",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[14] = findObject(findObject(nowCards,"名稱","桃園結義",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[15] = findObject(findObject(nowCards,"名稱","過河拆橋",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[16] = findObject(findObject(nowCards,"名稱","決鬥",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[17] = findObject(findObject(nowCards,"名稱","順手牽羊",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[18] = findObject(findObject(nowCards,"名稱","火攻",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[19] = findObject(findObject(nowCards,"名稱","無中生有",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[20] = findObject(findObject(nowCards,"名稱","鐵鎖連環",'multiple').val,"位置","牌堆",'multiple').val.length;
    numCard[21] = findObject(findObject(nowCards,"名稱","借刀殺人",'multiple').val,"位置","牌堆",'multiple').val.length;
    
    // 裝備
    numEquip = findObject(findObject(nowCards,"種類","裝備",'multiple').val,"位置","牌堆",'multiple').val.length;

    // 有屬性傷害
    numElectric = findObject(findObject(nowCards,"屬性","雷",'multiple').val,"位置","牌堆",'multiple').val.length;
    numFire = findObject(findObject(nowCards,"屬性","火",'multiple').val,"位置","牌堆",'multiple').val.length;
    numAttrAtk = numElectric + numFire;
    document.getElementById('TotalAttrAtk').innerText = numAttrAtk;

    // 計算各牌數量&牌堆總數
    var totalNumOfCards = numEquip;
    numCard.forEach(function (elmt, idx){
        document.getElementById(idOfNumOfCards[idx]).innerHTML = numCard[idx] + '張';

        totalNumOfCards = totalNumOfCards + elmt;
    })
    document.getElementById('TotalCardNum').innerText = totalNumOfCards;
}

function addOnClick () {
    allBtnOfCards = Array.from(document.getElementsByClassName("wait4addOnClick"));
    idOfBtnOfCards = [];
    allBtnOfCards.forEach(function(elmt, idx) {
        idOfBtnOfCards[idx] = elmt.id;
    });

    cardBtn = [];    

    idOfBtnOfCards.forEach(function (id, idx) {
        Btn = document.getElementById(id).addEventListener("click", function(event) {
            btnClicked(this.id);
        });;
    })
}

function btnClicked (id) {
    cardNo = id.replace('cardNum','');
    objUpdating = findObject(nowCards,"編號",cardNo,'single');
    console.log(objUpdating);

    switch (nowCards[objUpdating.idx]["位置"]) {
        case "牌堆":
            nowCards[objUpdating.idx]["位置"] = "棄牌";
            break;
        case "棄牌":
            nowCards[objUpdating.idx]["位置"] = "牌堆";  
            break;
    
        default:
            break;
    }
    renderCards(nowCards);
}

function findObject(arr, prop, val, method) {     
    let result = [];
    switch (method) {
        case 'single':       
            isFound = false;
            arr.forEach(function (e, i){
                if (e[prop] == val){
                    result.idx = i;
                    result.val = e;
                    isFound = true;
                }
            })
            if (isFound){
                return result;
            }else{
                result.idx = 0;
                result.val = [];
                return result;
            }
            break;
    
        case 'multiple':   
            isFound = false;
            let resultIdx = [];
            let resultVal = [];
            arr.forEach(function (e, i){
                if (e[prop] == val){
                    resultIdx.push(i);
                    resultVal.push(e);
                    result.idx = resultIdx;
                    result.val = resultVal;
                    isFound = true;
                }
            })
            if (isFound){
                return result;
            }else{
                result.idx = 0;
                result.val = [];
                return result;
            }
            break;
            
        default:
            break;
    }


}

async function main () {   
    allCards = await firstLoad(); 
    allCards = CSV2ObjArr(allCards);

    loadId();

    nowCards = allCards;
    renderCards(nowCards);
}
main();