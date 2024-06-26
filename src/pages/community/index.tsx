/* eslint-disable react/jsx-pascal-case */
'use client';
import PositionModal from '@/components/community/career/modal/PositionModal';
import Layout from '@/components/layout/Layout';
import MainContainer from '@/components/shared/MainContainer';
import SEO from '@/components/shared/SEO';
import { useCareerTalk } from '@/store/careerTalk.store';
import dynamic from 'next/dynamic';
import React from 'react';

const Communityindex = dynamic(() => import('@/components/community/Communityindex'), {
  ssr: false
});

const CommunityPage = () => {
  const { modalOpen } = useCareerTalk();
  if (modalOpen) {
    return <PositionModal />;
  }
  return (
    <>
      <SEO title="Offispace | 커뮤니티" />
      <MainContainer>
        <Layout>
          <Communityindex />
        </Layout>
      </MainContainer>
    </>
  );
};

export default CommunityPage;
