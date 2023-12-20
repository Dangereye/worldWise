// React router
import { useNavigate } from 'react-router-dom';

// Components
import Button from './Button';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type='back'
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}
