import { useState } from 'react';
import api from '../../shared/auth/utils/api';

interface LinkFormProps {
  setLinks: React.Dispatch<React.SetStateAction<any[]>>;
}

const LinkForm: React.FC<LinkFormProps> = ({ setLinks }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/links', { url });
      setLinks((prev) => [...prev, data]);
      setUrl('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4 mb-4">
      <input
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Add Link
      </button>
    </form>
  );
};

export default LinkForm;
