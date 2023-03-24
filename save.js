var img = document.getElementById('myimage');
let currentImgIdx = 1;
const images = [
    'https://cdn3.vectorstock.com/i/1000x1000/94/07/banner-for-trees-saving-campaign-vector-31599407.jpg',
    'https://qph.cf2.quoracdn.net/main-qimg-bd869220b1f67cab0c324b77ac59eeb7-pjlq',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkG7QR4E27GBAOTp7uJid8SIbukxCriA_9Q&usqp=CAU',
    'https://media.istockphoto.com/id/1061700868/photo/growing-investment-concept.jpg?s=612x612&w=0&k=20&c=WO3w1S_uiPqgJ2Zl5mfGMb3eg-wwfVkWmMnIc2Hsp1g=',
    'https://t3.ftcdn.net/jpg/05/57/11/04/240_F_557110435_8bvg92dslHkibU0A5vQRp471jLodNA2r.jpg'
];
function changeImage(){
    let inputVal = document.getElementById('inputId').value;
    if(currentImgIdx >= images.length){
        currentImgIdx = 0;
    }
    img.src = images[currentImgIdx];
    currentImgIdx++;
    document.getElementById('inputId').value=" ";
    document.getElementById('heading').innerHTML="<h3>" + inputVal + "</h3>";
}
