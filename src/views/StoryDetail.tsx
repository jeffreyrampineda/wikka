import StoryComponent from '../components/story/StoryComponent';
import { Story } from '../types';

function StoryDetail({
  selectedStory,
  fetchStoryById,
}: {
  selectedStory: Story | undefined;
  fetchStoryById: (id: string) => void;
}) {
  return (
    <div className="container">
      <StoryComponent
        selectedStory={selectedStory}
        fetchStoryById={fetchStoryById}
      />
    </div>
  );
}

export default StoryDetail;
