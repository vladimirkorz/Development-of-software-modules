export default function ProfileCard() {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '320px'
    }}>
      <h2>Анна Иванова</h2>
      <h3>Веб-разработчик</h3>
      <p>Люблю писать чистый код и изучать новые технологии</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
    </div>
  );
}