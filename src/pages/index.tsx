import { Box, HStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import { CampaignCard } from 'src/components/organisms/CampaignCard';

const Home: NextPage = () => (
  <Box width="100%">
    <p>とりあえずのキャンペーン部分</p>
    <HStack m={10}>
      {Array.from({ length: 5 }, (v, k) => k).map((k) => (
        <NextLink href="/campaign" passHref>
          <a href="/campaign">
            <CampaignCard key={k} />
          </a>
        </NextLink>
      ))}
    </HStack>
  </Box>
);

export default Home;
