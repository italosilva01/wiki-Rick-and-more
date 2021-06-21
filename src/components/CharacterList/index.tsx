import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';

import { api } from 'service/api';
import { Character } from 'model/character';
import { MediaCard } from '../MediaCard';
import { Container } from './style';

export const CharacterList = () => {
  const [firstTenCharacters, setFirstTenCharacters] = useState<Character[]>([]);

  const getFirstTenCharacters = async () => {
    const response = await api.get('character/1,2,3,4,5,6,');
    setFirstTenCharacters(response.data);
  };

  useEffect(() => {
    getFirstTenCharacters();
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2} style={{ margin: 'auto' }}>
          {firstTenCharacters.map((character: Character) => (
            <Grid key={character.id} item>
              <MediaCard
                image={character.image}
                type={character.type}
                gender={character.gender}
                name={character.name}
                status={character.status}
                species={character.species}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
