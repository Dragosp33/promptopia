import PromptCard from './PromptCard';
import PromptDropdown from './PromptDropdown';

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
  promptType,
  onSelectChange,
}) => {
  return (
    <section className='w-full'>
      <div className='flex flex-row'>
        <div>
          <h1 className='head_text text-left'>
            <span className='blue_gradient'>{name} Profile </span>
          </h1>
          <p className='desc text-left'> {desc}</p>
        </div>
        <PromptDropdown option={promptType} onSelectChange={onSelectChange} />
      </div>
      <div className='mt-10 prompt_layout'>
        {data
          .filter((prompt) => prompt.type === promptType)
          .map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
      </div>
    </section>
  );
};

export default Profile;
