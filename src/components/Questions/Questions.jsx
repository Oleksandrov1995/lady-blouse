import './Questions.css';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { questionsData } from 'data/questionsData';

export const Questions = () => {
    const [openItems, setOpenItems] = React.useState({});

    const handleClick = (index) => {
        setOpenItems((prevOpenItems) => ({
          ...prevOpenItems,
          [index]: !prevOpenItems[index],
        }));
      };

  return (
    <section id="questions" className='questions'>
    <h2 className='question-title'>Найчастіші запитання</h2>
    <List
      sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {questionsData.map((item, index) => (
        <React.Fragment key={index}>
          <ListItemButton onClick={() => handleClick(index)}>
            <ListItemText primary={item.title} primaryTypographyProps={{ style: { fontWeight: 'bold' } }} />
            {openItems[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
          <ListItemText
    primary={<p>{item.text}</p>}
    primaryTypographyProps={{ style: { textAlign: 'left', paddingLeft: '10px' } }}
  />
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  </section>
  );
};
