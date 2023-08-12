import { Box, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import '../style.css';

function Release() {
  const title = 'SYQ';
  return (
    <Flex 
      direction='column' 
      minH='100vh' 
      bgGradient='linear(to-r, yellow.100, pink.300)'
      p={1}
    >

      <Box
        className='header'
        display='flex'
        justifyContent='center'
        fontSize={64}
        fontWeight='bold'
        p={1}
      >
        {title}
      </Box>

      <Box
        w='100%'
        display='flex'
        justifyContent='center'
      >
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th fontWeight='bold'>更新日</Th>
                <Th fontWeight='bold' w='500px'>更新内容</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>8/12</Td>
                <Td>機能追加：PWA対応</Td>
              </Tr>
              <Tr>
                <Td>8/12</Td>
                <Td>不具合修正：AndroidからTwitterシェアができない </Td>
              </Tr>
              <Tr>
                <Td>8/12</Td>
                <Td>不具合修正：連続正解モードで同じ問題が出題される</Td>
              </Tr>
              <Tr>
                <Td>8/11</Td>
                <Td>正式版リリース</Td>
              </Tr>
              <Tr>
                <Td>7/25</Td>
                <Td>β版リリース</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>        
      </Box>
    </Flex>
  )
}

export default Release