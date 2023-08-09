import { Box, Heading, Text } from '@chakra-ui/react'
import Header from '../components/Header'

function Policy() {

  return (
    <>
        <Header/>
        <Box
            w='100%'
            padding={16} 
        >
            <Heading as='h1' padding={4}>
                サイトポリシー
            </Heading>

            <Heading as='h2' padding={4}>適用範囲</Heading>
            <Text padding={4}>
                本プライバシーポリシー(以下「本ポリシー」といいます。)は、当社が利用者から個人情報を取得、利用及び管理するときに適用されます。
            </Text>
            <Heading as='h2' padding={4}>Cookieの利用およびアクセス分析について</Heading>
            <Text padding={4}>
                当社は、ウェブサイト及び本サービス(以下、これらを総称して「ウェブサイ
                ト等」といいます。)のアクセス及び利用状況の分析、広告配信並びにウェブサ
                イト等の利便性向上のために、ウェブサイト等にアクセスした利用者の情報通信
                端末に保存されるCookie等のファイル及びこれに類似する技術を取得することが
                あります。当社は、Cookie等と利用者の個人情報を関連付けることがあります。
                当社は、利用者の個人情報と関連付けたCookie等が利用者の個人情報であること
                に鑑み、当該Cookie等を本ポリシーの定めに従って管理いたします。また、当社
                は、Cookie等の情報を第三者が運営するデータ・マネジメント・プラットフォー
                ムに提供し、当該第三者からCookie等により収集されたウェブの閲覧履歴及びそ
                の分析結果を取得し、これらを利用者の個人データと結び付けた上で、広告配信
                等の目的で利用することがあります。
            </Text>
            <Heading as='h2' padding={4}>ご意見/ご要望について</Heading>
            <Text padding={4}>
                本サイトのバグや要望に関するご相談やお問い合わせについては、
                下記までご連絡ください。
                X(旧)Twitter:o_ga09
            </Text>
            <Heading as='h2' padding={4}>謝辞</Heading>
            <Text padding={4}>
                本サイトは、ファンによる非公式のサイトであり、山本彩様および運営様とは一切関係ございません。
                いつも素敵な歌声、歌詞を届けてくださりありがとうございます。
            </Text>
        </Box>

    </>
  )
}

export default Policy