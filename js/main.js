function checkPW() {
    let pw = $('.pw').val();
    if (pw == fdsfds) {
        location.href = 'top.html';
        localStorage.setItem('pass', pw);
    } else {
        alert('パスワードが違います。');
        $('.pw').val('');
    }
}
const fdsfds = 'クリスマス';

let list_open = false;

$(window).on('load', function() {
    $('.menu_icon').hide();
    let _count = 0;
    participates_data.forEach(element => {
        $('.list_div').append(`
        <div class="list_item" onclick="changeList(` + _count + `)">
            <div class="profile_div">
                <img src="` + element['imageURL'] + `" class="profile_img">
            </div>
            <div>
                <p class="genre_text">
                ` + element['genre'] + `
                </p>
                <p class="name_text">
                ` + element['name'] + `
                </p>
            </div>
            <p class="right_num">
            ` + element['orderStr'] + `
            </p>
        </div>
        `);
        $('.vertical-slider__wrapper').append(
            `<div class="swiper-slide vertical-slider__slide">
            <div class="inner">
                <p class="number_text">
                    ` + element['orderStr'] + `
                </p>
                <p class=" genre_text">
                ` + element['genre'] + `　` + element['time'] + ` ~
                </p>
                <div class="profile_div">
                    <img src=" ` + element['imageURL'] + `" class="profile_img">
                </div>
                <p class="title_text"> ` + element['name'] + `</p>
                <p class="disc_text"> ` + element['disc'] + `</p>

            </div>
        </div>`);
       
        _count++;
    });
    $('.list_div').append('<div class="height2_div"></div>');


    // setHeight();
    // window.addEventListener("resize", setHeight);
    setSlider();

});
let current_index;
$(window).on('load, mousemove, touchstart, touchend', function() {
    current_index = verticalSlider.activeIndex
        // console.log(current_index);
    if (current_index == 0 && !list_open) {
        // $('.top_arrow').hide();
        $('.menu_icon').hide();
    } else {

        // $('.top_arrow').show();
        $('.menu_icon').show();
    }
});

/* 1. アドレスバー・ツールバーを除いた100vhの高さを取得 */
function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
let verticalSlider;

function setSlider() {
    verticalSlider = new Swiper(".vertical-slider", {
        direction: "vertical", // スライダーの向きを縦にする
        slidesPerView: 1, // 一度に1枚のスライドを表示
        speed: 600, // 600msでスライドを切り替える
        // autoplay: {
        //     delay: 5000,
        // },
        disableOnInteraction: true,
        mousewheel: true, // マウスホイールやスクロールを有効にする
        pagination: {
            el: ".vertical-slider__pagination", // ページネーション要素のクラスを指定
            type: "bullets", // ページネーションの形を指定
            clickable: true, // ページネーションをクリック可能にする
        },
    });



}


function changeList(num) {
    console.log(num + 1);
    list_open = !list_open;
    if (list_open) {
        $('.list_view').show();
        $('.menu_img').attr('src', 'img/close.svg');
    } else {
        $('.list_view').hide();
        if (num >= 0) {
            verticalSlider.slideTo(num + 1);
        }
        $('.menu_img').attr('src', 'img/list_icon.svg');
    }
}



const participates_data = [
  {
    "orderStr": "1",
    "name": "吹奏楽部",
    "imageURL": "img/profile/img1.jpg",
    "disc": "今日はクリスマスイブ。次期サンタの2人は慣れない仕事にヘトヘト。そんな中2人は面倒な人たちに絡まれて、、？",
    "type": "club",
    "genre": "吹奏楽部",
    "time": "12:30"
  },
  {
    "orderStr": "2",
    "name": "my-shy",
    "imageURL": "img/profile/img2.jpg",
    "disc": "こんにちは！my-shyです！ 聖昼にぴったりなクリスマスの名曲をみなさんにお届けします！",
    "type": "club",
    "genre": "バンド",
    "time": "13:12"
  },
  {
    "orderStr": "3",
    "name": "うしか、もしか",
    "imageURL": "img/profile/img3.jpg",
    "disc": "うしかもしかです。オリジナルTシャツの購入はこちらのHPからどうぞ。うしかもしかです。オリジナルTシャツの購入はこちらのHPからどうぞ。https://www.ushika_moshika.jp",
    "type": "club",
    "genre": "バンド",
    "time": "13:20"
  },
  {
    "orderStr": "4",
    "name": "Wanna Be a Babycar",
    "imageURL": "img/profile/img4.jpg",
    "disc": "Love&Peace!! しゃぶしゃぶ、ジンジャーエール、あごだし、餃子。4人の好きな食べ物です。どれが誰か考えてみてください。",
    "type": "club",
    "genre": "バンド",
    "time": "13:26"
  },
  {
    "orderStr": "5",
    "name": "Twilight Aria",
    "imageURL": "img/profile/img5.jpg",
    "disc": "こんにちは！Twilight Ariaです！中1の頃のクラスメイトで組んだバンドで、軽音部では珍しい4人構成でやってます。そんな私たちは今回チョーキューメイさんの「貴方の恋人になりたい」を演奏します。ぜひ聴いていってください〜！",
    "type": "club",
    "genre": "バンド",
    "time": "13:33"
  },
  {
    "orderStr": "6",
    "name": "洒落乙",
    "imageURL": "img/profile/img6.jpg",
    "disc": "プラトンは、音楽を「世界に魂を与え、精神に翼をあたえる。そして想像力に高揚を授け、あらゆるものに生命をさずける」ものだと主張した。",
    "type": "club",
    "genre": "バンド",
    "time": "13:37"
  },
  {
    "orderStr": "7",
    "name": "mellowRose",
    "imageURL": "img/profile/img7.jpg",
    "disc": "こんにちはmellowRoseです🌷︎初めての聖昼で緊張してますが、楽しんで演奏します。盛り上がって行きましょう！",
    "type": "club",
    "genre": "バンド",
    "time": "13:43"
  },
  {
    "orderStr": "8",
    "name": "デクノボウ",
    "imageURL": "img/profile/img8.jpg",
    "disc": "図体だけ育ちました。",
    "type": "club",
    "genre": "バンド",
    "time": "13:50"
  },
  {
    "orderStr": "9",
    "name": "錠剤",
    "imageURL": "img/profile/img9.jpg",
    "disc": "僕らはもともとひとつじゃない。違う尺度で、違う歩幅で。けど今だけは重なり合った舞台で。そのままどこかに行こう。",
    "type": "club",
    "genre": "バンド",
    "time": "13:57"
  },
  {
    "orderStr": "10",
    "name": "rain or shine",
    "imageURL": "img/profile/img10.jpg",
    "disc": "rain or shineは日本のロックバンド。2022年結成。井上創、大木遼介、新鞍一喜、藤縄岳士、柳凛太郎、横田大翔からなる6人組バンド。バンド名は雨天決行を意味する英語である。(Wikipediaより引用)",
    "type": "club",
    "genre": "バンド",
    "time": "14:04"
  },
  {
    "orderStr": "11",
    "name": "にゅじ",
    "imageURL": "img/profile/img11.jpg",
    "disc": "You are my chemical hype boy ",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:21"
  },
  {
    "orderStr": "12",
    "name": "青春全力応援坂",
    "imageURL": "img/profile/img12.jpg",
    "disc": "「僕は嫌だ」〜ダンス部25期〜",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:25"
  },
  {
    "orderStr": "13",
    "name": "Honeys",
    "imageURL": "img/profile/img13.jpg",
    "disc": "STAYCのTeddy Bearを踊ります！25期6人で踊ります！所々振り付けにクマが入っているので見つけて見てください！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:28"
  },
  {
    "orderStr": "14",
    "name": "SIXTEEN",
    "imageURL": "img/profile/img14.jpg",
    "disc": "セブチといえばこの曲！可愛く元気に頑張ります！！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:31"
  },
  {
    "orderStr": "15",
    "name": "All in us!",
    "imageURL": "img/profile/img15.jpg",
    "disc": "ITZYのWannabeを踊ります！私たちらしさと力強さを出せるように頑張ったので、応援していただけると嬉しいです！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:35"
  },
  {
    "orderStr": "16",
    "name": "宮益坂46",
    "imageURL": "img/profile/img16.jpg",
    "disc": "こんにちは！宮益坂46です。今回私たちは乃木坂46のおひとり様天国という楽曲を踊らさせていただきます。聖昼ということでクリスマスが近いですが、おひとり様の人もそうじゃない人も楽しんでいきましょう！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:38"
  },
  {
    "orderStr": "17",
    "name": "Minutes",
    "imageURL": "img/profile/img17.jpg",
    "disc": "Everybody let’s get crazy right now.",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:42"
  },
  {
    "orderStr": "18",
    "name": "初代☆OTSUMAMI",
    "imageURL": "img/profile/img18.jpg",
    "disc": "さきいかが好きな25期6人、初代OTSUMAMIです！Choo Choo TRAIN、R.Y.U.S.E.I.、U.S.A.の3曲メドレーを踊ります！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:46"
  },
  {
    "orderStr": "19",
    "name": "FREAKY MONSTERS",
    "imageURL": "img/profile/img19.jpg",
    "disc": "精一杯練習しました！ぜひ見ていってください！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:49"
  },
  {
    "orderStr": "20",
    "name": "チャロ",
    "imageURL": "img/profile/img20.jpg",
    "disc": "雰囲気を変えました。おそらくラスト出演です。",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "14:53"
  },
  {
    "orderStr": "21",
    "name": "流れ星1分前",
    "imageURL": "img/profile/img21.jpg",
    "disc": "初めまして。本日ご覧いただくのは、アイドルライブなどで観客がペンライトを振って応援する『ヲタ芸』です！私達の演技があなたの心を掴み、渋渋にこのグループやヲタ芸文化が継承されていくことを願っています。聖昼を美しく照らす光の舞を見逃すな！",
    "type": "volunteer",
    "genre": "ヲタ芸",
    "time": "14:58"
  },
  {
    "orderStr": "22",
    "name": "S小町",
    "imageURL": "img/profile/img22.jpg",
    "disc": "S小町です！！今回も、飛龍祭に続きアニメ『推しの子』劇中歌の「STAR☆T☆RAIN」をやります♡応援よろしくお願いします！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:02"
  },
  {
    "orderStr": "23",
    "name": "We Bloom",
    "imageURL": "img/profile/img23.jpg",
    "disc": "(G)I-DLEのQueencardを踊ります！たくさん盛り上げてくださると嬉しいです〜〜！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:04"
  },
  {
    "orderStr": "24",
    "name": "10人寄れば文殊の知恵",
    "imageURL": "img/profile/img24.jpg",
    "disc": "こんにちは！ダンス部26期の10人寄ればもんの知恵です！DittoとAntifrigileと自作の振りでSanta tell meの曲で踊ります！手拍子で盛り上げてください！！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:07"
  },
  {
    "orderStr": "25",
    "name": "(S)-IDLE",
    "imageURL": "img/profile/img25.jpg",
    "disc": "こんにちは。(S)-IDLEです！私たちにとっては最後の聖昼祭です！コールや手拍子で私たちと一緒に最高に盛り上がってくれたら嬉しいです！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:11"
  },
  {
    "orderStr": "26",
    "name": "STRAY 26th",
    "imageURL": "img/profile/img26.jpg",
    "disc": "Stray KidsのGod's menuを踊ります。26期の本気、ご覧あれ。",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:14"
  },
  {
    "orderStr": "27",
    "name": "TWICE27",
    "imageURL": "img/profile/img27.jpg",
    "disc": "TWICE27です！TWICEの定番曲、What is Love? と Yes or Yes を踊ります🙌🏻応援お願いします！！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:17"
  },
  {
    "orderStr": "28",
    "name": "ぱーぷるず",
    "imageURL": "img/profile/img28.jpg",
    "disc": "28期ダンス部のうち6人が集まって結成されたグループです！STAYCのbubbleを踊ります🫧‪名前呼び、声出しなどして頂けると嬉しいです！短い時間ですが楽しんでいってください！！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:21"
  },
  {
    "orderStr": "29",
    "name": "MFY",
    "imageURL": "img/profile/img29.jpg",
    "disc": "MFYです！ItzyさんのICYを踊ります！沢山盛り上げてください！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:24"
  },
  {
    "orderStr": "30",
    "name": "MARIMARI",
    "imageURL": "img/profile/img30.jpg",
    "disc": "MARIMARIは出演者4人の名前の頭文字をとりました。中1ですが、聖昼を盛り上げられるように精一杯頑張ります。声援や手拍子お願いします。",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:27"
  },
  {
    "orderStr": "31",
    "name": "Chocola",
    "imageURL": "img/profile/img31.jpg",
    "disc": "27期5人でIVEのIAMを踊ります！過半数がダンス未経験の中頑張って練習したので、温かい目で見守ってください！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:30"
  },
  {
    "orderStr": "32",
    "name": "ジャグリング部",
    "imageURL": "img/profile/img32.jpg",
    "disc": "こんにちは！ジャグリング部です。かわいい後輩が増えてパワーアップしたジャグ部からのプレゼント！楽しんでもらえると嬉しいです、メリークリスマス！！",
    "type": "club",
    "genre": "ジャグリング",
    "time": "15:34"
  },
  {
    "orderStr": "33",
    "name": "LEXEON",
    "imageURL": "img/profile/img33.jpg",
    "disc": "中学時間のトリを担当します！28期26期合同グループ・LEXEONです！ガールクラッシュメドレーを踊ります！是非手拍子や声出しで盛り上げてください！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:39"
  },
  {
    "orderStr": "34",
    "name": "有志ミュージカル",
    "imageURL": "img/profile/img34.jpg",
    "disc": "私達は飛龍祭にてミュージカルを行う団体です。発足時の中一も高校二年生、次は後輩が引き継ぐ番となりました。そんな私達の演し物は、This Is Me。各々が自身と向き合い、個性を以て一丸となる。本編の彼らの生き様は私達の目指す姿と重なります。",
    "type": "volunteer",
    "genre": "ミュージカル",
    "time": "15:42"
  },
  {
    "orderStr": "35",
    "name": "ワラフカドニハフクキタル",
    "imageURL": "img/profile/img35.jpg",
    "disc": "物知りおばさんです！クリスマスってイエス・キリストの誕生日だと思われていますが、短くなっていた日照時間が長くなってきたことをお祝いする、という意味もあったらしいですよ。人形焼少年「う〜！勉強になるねぇ〜！」(RN:超咀嚼メンチカツ皇太子)",
    "type": "volunteer",
    "genre": "コント",
    "time": "15:47"
  },
  {
    "orderStr": "36",
    "name": "ジャンボリーミッキー踊り隊！",
    "imageURL": "img/profile/img36.jpg",
    "disc": "初心者4人で楽しくジャンボリーミッキー踊ります！是非一緒に踊ってください！",
    "type": "volunteer",
    "genre": "ダンス",
    "time": "15:52"
  },
  {
    "orderStr": "37",
    "name": "4sGAS",
    "imageURL": "img/profile/img37.jpg",
    "disc": "緑の鞄に500万入れて白の紙で黄色の鞄言うて書きながら赤の鞄言いながら置いてくれたら俺黒の鞄言いながら取りに行くわ〜。4sGASです。クリスマスっぽいことします。",
    "type": "volunteer",
    "genre": "ビートボックス",
    "time": "15:57"
  },
  {
    "orderStr": "38",
    "name": "バトン部",
    "imageURL": "img/profile/img38.jpg",
    "disc": "こんにちは、バトン部です！今年もクリスマスの時期がやってきました！計4曲、かっこよくて可愛いバトンとダンスを最後まで楽しんでいってください♡プレゼントが貰えるかも、、！？",
    "type": "club",
    "genre": "バトン",
    "time": "15:59"
  }
];
