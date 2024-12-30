'use client';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import api from '@/app/domains/shared/auth/utils/api';
import LinkForm from '../../linkForm/LinkForm';
import LinkList from '../../linkList/LinkList';

const DashboardView: React.FC = () => {
  const [links, setLinks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const { data } = await api.get('/links');
        setLinks(data.links);
      } catch {
        router.push('/login');
      }
    };
    fetchLinks();
  }, [router]);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Links</h2>
      <LinkForm setLinks={setLinks} />
      <LinkList links={links} setLinks={setLinks} />
    </div>
  );
};

export default DashboardView;
