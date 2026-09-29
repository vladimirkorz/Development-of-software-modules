import velosiped from '../assets/velosiped.jpg';
import gori from '../assets/gori.jpg';
import svetofor from '../assets/svetofor.jpg';

export default function ImageGallery() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <img
        src={gori}
        alt="Горы"
        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
      />
      <img
        src={svetofor}
        alt="Светофор"
        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
      />
      <img
        src={velosiped}
        alt="Велосипед"
        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
      />
    </div>
  );
}