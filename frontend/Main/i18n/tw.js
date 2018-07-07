import React, { Fragment } from 'react';

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
    'about-us': {
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
        title: '嘖嘖，募資上線！',
        subTitle: '「復興茶藝，閃耀台灣」Dozo Tea 讓我們請你喝杯茶！',
        context: () => (
          <Fragment>
            一心二葉 / 純手採茶 / 自然農法 / 有機液肥
            <br />
            採摘 / 萎凋 / 揉捻 / 乾燥 / 精製
          </Fragment>
        ),
      },
      {
        title: '嘖嘖，募資上線！',
        subTitle: '「復興茶藝，閃耀台灣」Dozo Tea 讓我們請你喝杯茶！',
        context: () => (
          <Fragment>
            一心二葉 / 純手採茶 / 自然農法 / 有機液肥
            <br />
            採摘 / 萎凋 / 揉捻 / 乾燥 / 精製
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
};
