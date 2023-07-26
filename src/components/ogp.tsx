import { Helmet } from "react-helmet";


const OGP = () => {

  return (
    <>
      <Helmet
        title="main page"
        meta={[
          {name: 'twitter:card', content: '山本彩曲名当てクイズ!!!'},
          {name: 'twitter:title', content: '山本彩曲名当てクイズ'},
          {name: 'twitter:description', content: '山本彩の曲名を当てるクイズアプリ'},
          // {name: 'twitter:image', content: 'https://github.com/o-ga09/nazonazo-gen/assets/54522966/7e462b28-f16c-42c8-a5e4-49dc0f73661c'},
          {property: 'og:title', content: '山本彩曲名当てクイズ' },
          {property: 'og:description', content: '山本彩の曲名を当てるクイズアプリ'},
          // {property: 'og:image', content: 'https://github.com/o-ga09/nazonazo-gen/assets/54522966/7e462b28-f16c-42c8-a5e4-49dc0f73661c'},
          {property: 'og:url', content: 'https://sy-quiz.t09-blog.com/'},
          {property: 'og:type', content: 'website'}

        ]} />
    </>
  );
};

export default OGP;