let i=0 ;
let ytArr=[
    ["imagens/cinnamon.jpg","https://www.youtube.com/watch?v=DCYmJDO2_IE","Lana Del Rey -Cinnamon Girl (Lyrics audio)","https://media.cnn.com/api/v1/images/stellar/prod/141030105303-kiki-irpt.jpg?q=w_4272,h_2848,x_0,y_0,c_fill"],
    ["imagens/Everything-I-.webp","https://www.youtube.com/watch?v=EgBJmlPo8Xw","Billie Eilish-Everything i wanted(music video)","https://st.depositphotos.com/1359043/2279/i/600/depositphotos_22795844-stock-photo-blue-butterfly-isolated-on-white.jpg"],
    ["imagens/hills.jpg","https://www.youtube.com/watch?v=yzTuBuRdAyA","The Weeknd - The Hills (Official Video)","https://apod.nasa.gov/apod/image/2304/AlphaCamelopardis_s1024.png"],
    ["imagens/262f8b7d976e084cec735dc2f5259811.webp","https://www.youtube.com/watch?v=7hFkWsA-9eM","Lil Peep-Star Shopping  (Lyrics audio)","https://t.ctcdn.com.br/q2bMsEGubESbNvgPLKCONYRTY9k=/1024x0/smart/filters:format(webp)/i650691.png"],
    ["imagens/baco.jpg","https://www.youtube.com/watch?v=qeO5EBBCPm0","Baco Exu do Blues - Te Amo Disgraça (Faixa 09)","https://apod.nasa.gov/apod/image/2212/c2022E3_ZTF_Bartlett800.png"],
    ["imagens/bohemian-rhapsody.jpg","https://www.youtube.com/watch?v=fJ9rUzIMcZQ","Queen – Bohemian Rhapsody (Official Video Remastered)","https://img.fruugo.com/product/9/10/199457109_max.jpg"],
    ["imagens/rubel.jpg","https://www.youtube.com/watch?v=tMWpm_GOLaA","Rubel - Quando Bate Aquela Saudade [Clipe Oficial]","https://imagens-revista.vivadecora.com.br/uploads/2022/05/A-flor-de-cerejeira-significado-%C3%A9-amor-beleza-e-esperanca-Foto-iStock.jpg"],
    ["imagens/xxx.jpg","https://www.youtube.com/watch?v=GX8Hg6kWQYI","XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)","https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/6/1/c/a/d19e-c1b7-4399-b301-e9b45f3ff8ef"],
    ["https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg","https://www.youtube.com/watch?v=hTWKbfoikeg","Nirvana - Smells Like Teen Spirit (Official Music Video)","https://images8.alphacoders.com/522/522662.jpg"],
    ["https://akamai.sscdn.co/uploadfile/letras/albuns/3/b/3/0/589411501678994.jpg","https://www.youtube.com/watch?v=hV6ZfjV-ozc","Cigarettes After Sex - Apocalypse(Lyrics audio)","https://apod.nasa.gov/apod/image/2212/Makemakemoon100mile.jpg"],
    ["https://i.ytimg.com/vi/tqxRidAWER8/maxresdefault.jpg","https://www.youtube.com/watch?v=YVkUvmDQ3HY","Eminem - Without Me (Official Music Video)","https://media.pitchfork.com/photos/628f97401e8fdb0b416486e3/16:9/w_1680,h_945,c_limit/Eminem-2002.jpg"],
    ["https://i.ytimg.com/vi/za1IIm-yLbg/maxresdefault.jpg","https://www.youtube.com/watch?v=UQhHY7I7W2s","17. VEIGH - ***** (NUNCA SOZINHO) -Audio","https://p16.resso.me/img/tos-alisg-v-2102/4b97db90d914404fb57e4a6f00d842f1~c5_500x500.jpg"]
]


let len = ytArr.length;
let text = "";


for(; i<len; i++){
    text += `
    <div class="video">
        <a href="`+ ytArr[i][1] +`" target="_blank">

          <img src="`+ ytArr[i][0]+`" class="thumbnail">
          <div class="content">
              <img src="`+ytArr[i][3]+`" class="channel-icon">
              <div class="info">
                   <h4 class="title">`+ytArr[i][2]+` </h4>
                   <p class="channel-name">User.vih24</p>
               </div>
           </div>
         </a>
     </div>
     `
}

document.getElementById("ytVideo").innerHTML = text;
    
  