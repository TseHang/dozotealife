import React, { Fragment } from 'react';
import { HandWriting } from '~/components/Paragraph/Paragraph';

export default {
  nav: {
    story: {
      label: '故事',
      text: '一杯溫暖的茶，一段有溫度的時光',
    },
    promise: {
      label: '承諾',
      text: '最用心的滋味，最健康的保證',
    },
    product: {
      label: '找茶趣',
      text: '玩轉茶藝，改變你的想像',
    },
    'know-how': {
      label: '茶百科',
      text: '茶的千百萬姿態 / 日月潭紅茶',
    },
    about: {
      label: '關於我們',
      text: '一群毛頭小子的品茶記錄',
    },
  },
  slides: [
    {
      title: '一杯有溫度的茶，一段有溫的的時光',
      text: '寧靜 / 親切 / 無價的相聚時光',
    },
    {
      title: '極致，日月潭紅玉紅茶',
      text: () => (
        <Fragment>
          顏色鮮豔如琥珀般明亮，配上淡淡薄荷與肉桂香
          <br />
          六星級的最高享受，世界頂級的「台灣香」
        </Fragment>
      ),
    },
    {
      title: '堅持傳統技藝，復興台灣茶藝',
      text: () => (
        <Fragment>
          一心二葉 / 純手採茶 / 自然農法 / 有機液肥
          <br />
          採摘 / 萎凋 / 揉捻 / 乾燥 / 精製
        </Fragment>
      ),
    },
    {
      title: '安心栽種，承諾自然',
      text: '百分之百原葉茶葉，不參雜任何魚目混珠，這是我們一罐堅持的底線，與信守的承諾',
    },
  ],
  news: {
    title: '最新消息',
    configs: [
      {
        title: '嘖嘖 x 募資上線',
        subTitle: '復興茶藝，閃耀台灣',
        context: () => (
          <Fragment>
            Dozo 終於在嘖嘖上線了（撒花） <br />
            讓我們一起請你喝杯茶吧！
          </Fragment>
        ),
      },
      {
        title: '元粹禮盒 x 一心茶罐',
        subTitle: '玩轉你的茶品味',
        context: () => (
          <Fragment>
            打造你的生活新品味
            <br />
            一泡就是一罐，一次全心全意地喝茶
            <br />
            一心茶罐，你的生活重心！
          </Fragment>
        ),
      },
    ],
  },
  spirit: {
    title: '品牌精神',
    spirits: {
      title: '一杯有溫度的茶，一段有溫度的時光',
      content: () => (
        <Fragment>
          我們相信，每一杯好茶，都是一種交流 <br />
          你喝著，我喝著，話匣子打開，心的距離也拉近了<br />

          請您用力享受這份心與心之間的滋味，體會每一刻現實中的汗水與理想<br />
          珍重眼前的一切，盡情的與人分享<br />
          或許會心一笑，或許酣然大笑<br />
          那是「幸福」的滋味！<br />
        </Fragment>
      ),
    },
    sections: [
      {
        title: '安心',
        content: '100% 台灣茶葉，不混茶',
      },
      {
        title: '健康',
        content: '自然農法，有機液肥',
      },
      {
        title: '自在',
        content: '茶生活，生活茶',
      },
    ],
  },
  motto: '“ 我們承諾，打造每一杯好茶，創造每一天的好心情！ ”',
  sections: {
    sections: [
      {
        title: 'Dozo 故事',
        text: '我們是一群愛喝茶的年輕人，因茶而愛上生活，這就是我們的茶道。',
      },
      {
        title: 'Dozo 承諾',
        text: '我們承諾，使用細心與愛心灌溉與照顧每一片茶葉，給您最健康與自然的安心保證。',
      },
      {
        title: '找茶趣',
        text: '這是我們推出的產品，每一道都有它獨特的韻味存在，歡迎一同品嚐。',
      },
      {
        title: '茶百科',
        text: '你知道紅茶與綠茶的差別嗎？你聽過黑茶與白茶嗎？你知道你所喝的茶產地嗎？讓我們告訴您。',
      },
    ],
  },
  story: {
    slideTitle: '「一杯有溫度的茶，一段有溫度的時光」',
    title: '故事',
    spirits: () => (
      <Fragment>
        <p>
          這杯茶<br />
          傾訴你我的日常<br />
          分享生活，打開了彼此的無數交流
        </p>
        <p>
          這杯茶<br />
          傾訴你我的日常<br />
          分享生活，打開了彼此的無數交流
        </p>
        <p>
          這杯茶<br />
          傾訴你我的日常<br />
          分享生活，打開了彼此的無數交流
        </p>
      </Fragment>
    ),
    motto: '“一杯有溫度的茶，一段有溫度的時光”',
    content: () => (
      <Fragment>
        <p>
          <b>現代生活的緊湊，會讓我們想去釋放生活中的壓力。</b><br />
          面對工作、面對家人、面對曾經懷有夢想卻還在紅塵中打滾的自己，其實我們都在浮動的人群裡面尋找著自己在生活中的重量。
        </p>
        <p>
          <b>茶的味道，早就深藏我們記憶底層。</b><br />
          每當我們坐下來，因為手中的東西而寧靜、放鬆，談吐間變得自然，把煩惱拋豬，我們享受這一段感受到溫度的時光。
        </p>
        <p>
          <b>我們喜歡喝茶。</b><br />
          希望能夠藉由這樣子的一個交流方式，幫助人們專注於眼前，體悟生活中的處處溫情。這是我們愛茶的原因，也是決定開始獻身下去的初衷。
        </p>
        <p>
          <b>「現代科技如果冰冷，那就讓我們來創造一段有溫度的時間」</b>
        </p>
      </Fragment>
    ),
    subContent: () => (
      <Fragment>
        <p>
          喝一口茶，吐一口心情。<br />
          我們相信，喝茶，是一段創造連結，放鬆身心的過程。 我們單純希望,結合傳統的記憶，把茶文化回歸「日常」， 你喝著，我喝著，然後話匣子打開。心的距離也拉近了。
        </p>
      </Fragment>
    ),
  },
  about: {
    slideTitle: '「一期一會，以茶會友」',
    title: '關於我們',
    mainTitle: '專賣 18 號紅玉紅茶',
    mainDescription: '現在市面上其實很多茶葉，舉凡：三峽碧螺春、台茶18號、21號、日本的抹茶綠茶...各式各樣，這麼多的選擇往往讓消費者不知道該從何下手，我們會選擇賣日月潭18號紅玉紅茶有兩個原因',
    mainContent: () => (
      <Fragment>
        <p>
          <b>1. 屬於台灣特有的味道</b><br />
          南投土地已經飽受檳榔樹的侵略，每逢大雨一來，颱風季節一到，土石流造成的損害不計其數，我們是南投
          出生的小孩，我們不願意再看到自己親愛的家鄉 一點一滴的流走，因此決定把這片土地昔日最風光的產物回歸，
          希望大家告訴大家，這塊土地特有味道的生存空間，正在逐步消失，這是屬於我們台灣特有的味道。
        </p>
        <p>
          <b>2. 我們相信，把茶再次融入日常，很有溫度</b><br />
          其實在台灣，賣茶葉很難，大環境政策下，很多很多主打 18號紅玉的大廠、大茶園，逐漸商業、大量生產機械化。
          以前的好味道，現在已經較難找尋，更甚者出現混茶、假茶、基因茶、化學茶...等。我們的老一輩常說，人類是個
          記憶性的動物 ，當我們習慣喝那些已經不好的茶業，喝到真正原味的好茶反而會覺得它苦澀難耐.....
          因此，我們想要喚醒大家對茶葉的記憶，它不僅僅是茶葉，是飲品，更融入了我們的生活，是我們對這塊土地的回憶，
          就像你聽早期台灣偶像劇的歌，當您喝了我們的茶，會有一種會喝越香，越喝越有味道的感覺。
        </p>
      </Fragment>
    ),
    teamTitle: '團隊',
    teamContent: () => (
      <Fragment>
        <p>
          我們是一群愛喝茶的年輕人。年輕的有點不像一般常喝茶者給人的第一印象。我們活繃亂跳，
          但一講到茶、與生活結合、成為日常之後，眼中的狂熱一覽無遺，因為這就是我們的生活，
          也是我們致力於推廣的事情。
        </p>
        <p>
          我們希望，在這個科技急速發展的時代，能夠藉由這樣子的一個交流方式，幫助人們專注
          於眼前，體悟生活中的處處溫情。這是我們愛茶的原因，也是決定開始獻身下去的初衷 -
          「現代的科技冰冷，那就讓我們來創造一段有溫度的時間」。
        </p>
        <HandWriting>
          Founder, Tse Hang &amp; Ru Pan!
        </HandWriting>
      </Fragment>
    ),
    address: '地址：新北市三重區重新路四段65號15樓',
    mail: '信箱：tw18ruby@gmail.com',
  },
};
