import { Title, Btn } from './Feedback.styled';
import { Box } from 'components/Box';

export const Feedback = ({ title, options, onClick }) => {
  return (
    <>
      <Title>{title}</Title>
      <Box display="inline-flex" justifyContent="center">
        {options.map((option, idx) => (
          <Btn key={idx} onClick={_ => onClick(option)}>
            {option}
          </Btn>
        ))}
      </Box>
    </>
  );
};
