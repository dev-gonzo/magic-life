import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import { stylePaper } from './styles';
import { useNavigate } from 'react-router-dom';

/**
 * O componente Menu é responsável por renderizar um menu de navegação com opções para
 * diferentes seções do aplicativo.
 *
 * O Menu utiliza os componentes `Paper`, `MenuList`, `MenuItem`, `ListItemIcon`,
 * `ListItemText` e `Divider` da biblioteca Material UI para renderizar o menu e suas
 * opções.
 *
 */

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <Paper sx={stylePaper}>
      <MenuList>
        <MenuItem onClick={() => navigate('/doc')}>
          <ListItemIcon>
            <ArticleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Documentação</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate('/team')}>
          <ListItemIcon>
            <PeopleAltIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Equipe</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate('/contact-us')}>
          <ListItemIcon>
            <WorkspacesIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Reuniões</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => navigate('/about')}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sobre o MITH</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
