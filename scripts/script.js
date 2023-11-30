document.addEventListener('DOMContentLoaded', function() {
    documentLoad(); 
    copyButton(); 
    modeButton(); 
});

function load(card) {
    card.classList.contains('Card_TitleA')
    ? 
    card.classList.remove('Card_TitleA')
    :
    card.classList.add('Card_TitleA')
}

function documentLoad() {
    var card_1 = document.getElementById('Card_Title_1_id');
    var card_2 = document.getElementById('Card_Title_2_id');
    var card_3 = document.getElementById('Card_Title_3_id');
    var card_4 = document.getElementById('Card_Title_4_id');
    
    var bot_1 = document.getElementById('buttonCard_1_id');
    var bot_2 = document.getElementById('buttonCard_2_id');
    var bot_3 = document.getElementById('buttonCard_3_id');
    var bot_4 = document.getElementById('buttonCard_4_id');

    bot_1.addEventListener('click', bot1);
    bot_2.addEventListener('click', bot2);
    bot_3.addEventListener('click', bot3);
    bot_4.addEventListener('click', bot4);

    function bot1() {load(card_1)}
    function bot2() {load(card_2)}
    function bot3() {load(card_3)}
    function bot4() {load(card_4)}
}

function copyButton() {
    var Button = document.getElementById('copyButton')
    Button.addEventListener('click', copyLink)
    function copyLink() {
        const inputButton = document.getElementById('linkToCopy');
        const selection = window.getSelection();
        const range = document.createRange();

        range.selectNodeContents(inputButton);
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        selection.removeAllRanges();
        
        const successButton = document.getElementById('successButton');
        successButton.style.display = 'block';
        setTimeout(function() {
            successButton.style.display = 'none';
        }, 2000);
    }
}

function modeButton() {
    var img_1 = document.getElementById('projectImgId')
    var img_2 = document.getElementById('projectImgId_2')
    var img_3 = document.getElementById('projectImgId_3')

    var iframe_1 = document.getElementById('iframeBoxId')
    var iframe_2 = document.getElementById('iframeBoxId_2')
    var iframe_3 = document.getElementById('iframeBoxId_3')

    var button_1 = document.getElementById('buttonIframe')
    var button_2 = document.getElementById('buttonIframe_2')
    var button_3 = document.getElementById('buttonIframe_3')

    button_1.addEventListener('click', display_1)
    button_2.addEventListener('click', display_2)
    button_3.addEventListener('click', display_3)

    function display_1() {displayFunction(img_1, iframe_1, button_1)}
    function display_2() {displayFunction(img_2, iframe_2, button_2)}
    function display_3() {displayFunction(img_3, iframe_3, button_3)}
}

function displayFunction(img, iframe, button){
    img.classList.contains('projectImg')    
    ? 
    (img.classList.add('projectImgF'), 
    img.classList.remove('projectImg'),
    iframe.classList.add('iframeBoxClassA'), 
    button.innerHTML = 'Modo Imagem')   
    : 
    (iframe.classList.add('iframeBoxClass'), 
    iframe.classList.remove('iframeBoxClassA'),
    img.classList.add('projectImg'), 
    img.classList.remove('projectImgF'), 
    button.innerHTML = 'Modo Site') 
}