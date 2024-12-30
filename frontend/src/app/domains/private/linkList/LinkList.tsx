import api from '../../shared/auth/utils/api';

interface LinkListProps {
  links: any[];
  setLinks: React.Dispatch<React.SetStateAction<any[]>>;
}

const LinkList: React.FC<LinkListProps> = ({ links, setLinks }) => {
  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/links/${id}`);
      setLinks((prev) => prev.filter((link) => link._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li
          key={link._id}
          className="flex justify-between items-center p-2 border rounded"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {link.url}
          </a>
          <button
            onClick={() => handleDelete(link._id)}
            className="bg-red-500 text-white p-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
