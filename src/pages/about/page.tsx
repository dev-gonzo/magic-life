import { Stack, Typography, Link } from "@mui/material";

export const PageAbout = () => {
  return (
    <Stack height="100vh" bgcolor="#1F2A38" padding={2}>
      <Stack
        flexGrow={1}
        borderRadius={3}
        bgcolor="#34495E"
        justifyContent="space-between"
        padding={4}
        spacing={2}
      >
        <Typography variant="h4" color="white" gutterBottom>
          Magic Life Commander (Magic: The Gathering)
        </Typography>
        <Typography variant="body1" color="white" paragraph>
          Este projeto é um marcador de vida para partidas de Commander no Magic: The Gathering. Ele permite que os jogadores marquem suas vidas de maneira simples e eficiente.
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Funcionalidades
        </Typography>
        <Typography variant="body1" color="white" component="ul">
          <li>Adicionar e remover jogadores</li>
          <li>Alterar a quantidade de vidas de cada jogador</li>
          <li>Resets de vidas para todos os jogadores</li>
          <li>Lançar dados</li>
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Tecnologias Utilizadas
        </Typography>
        <Typography variant="body1" color="white" component="ul">
          <li>React</li>
          <li>Material UI</li>
          <li>TypeScript</li>
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Desenvolvedores
        </Typography>
        <Typography variant="body1" color="white">
          <Link href="https://github.com/dev-gonzo/" color="inherit" target="_blank" rel="noopener">
            Eduardo Di Lauro
          </Link>
        </Typography>
        <Typography variant="body1" color="white">
          <Link href="https://github.com/M1THOT" color="inherit" target="_blank" rel="noopener">
            Victor Christian Oliveira
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};
