
import {
  FormWrapper,
  Form,
  Text,
  StyledSelect,
  Option,
  Input,
  Textarea,
  SubmitButton,
} from './Form.styled';

const AddForm = ({
  title,
  setTitle,
  day,
  setDay,
  addOrUpdateTask,
  editingTaskId,
  description,
  setDescription,
}) => {

  return (
    <FormWrapper>
      <Form onSubmit={addOrUpdateTask}>
        <Text>Choose day</Text>
        <StyledSelect value={day} onChange={e => setDay(e.target.value)}>
          <Option value="monday">Monday</Option>
          <Option value="tuesday">Tuesday</Option>
          <Option value="wednesday">Wednesday</Option>
          <Option value="thursday">Thursday</Option>
          <Option value="friday">Friday</Option>
          <Option value="saturday">Saturday</Option>
          <Option value="sunday">Sunday</Option>
        </StyledSelect>
        <Text>Title</Text>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <Text>Description</Text>
        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <SubmitButton type="submit">
          {editingTaskId ? 'Update' : 'Submit'}
        </SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default AddForm;