import Greeting from './components/Greeting';
import TaskList from './components/TaskList';
import ActionButton from './components/ActionButton';
import ProfileCard from './components/ProfileCard';
import ImageGallery from './components/ImageGallery';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Greeting />
      <hr />
      <TaskList />
      <hr />
      <ActionButton />
      <hr />
      <ProfileCard />
      <hr />
      <ImageGallery />
    </div>
  );
}