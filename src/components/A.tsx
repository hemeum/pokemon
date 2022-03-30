import React, { useState, useEffect } from 'react';
import axios from 'axios';
import poke from './../pokes.json';

const A = () => {
  const [firstGenerationAllPokemons, setFirstGenerationAllPokemons] =
    useState<any>([]);
  const [poke1, setPoke1] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon/?limit=151',
  );

  useEffect(() => {
    const pokes: any[] = [];

    axios.get(poke1).then((res) => {
      let getFirstGenerationAllPokemons = res.data.results;
      getFirstGenerationAllPokemons.forEach(async (data: any) => {
        let pokemonsConfig = {
          id: '1',
          name: '',
          types: [],
          generation: '1',
          src: '',
          firstText: '',
          secondText: '',
          stats: {
            hp: '',
            attack: '',
            defense: '',
            specialAttack: '',
            specialDefense: '',
            speed: '',
          },
        };
        const res = await axios.get(data.url).then(async (res) => {
          const getKrName: any = async () => {
            const response = await axios.get(res.data.species.url);
            let name = response.data.names[2].name;
            return name;
          };

          /*const getFirstText: any = async () => {
            const response = await axios.get(res.data.species.url);
            let firstText = response.data.flavor_text_entries[23].flavor_text;
            return firstText;
          };

          const getSecondText: any = async () => {
            const response = await axios.get(res.data.species.url);
            let secondText = response.data.flavor_text_entries[31].flavor_text;
            return secondText;
          };*/

          const getStats = () => {
            pokemonsConfig.stats = {
              hp: res.data.stats[0].base_stat,
              attack: res.data.stats[1].base_stat,
              defense: res.data.stats[2].base_stat,
              specialAttack: res.data.stats[3].base_stat,
              specialDefense: res.data.stats[4].base_stat,
              speed: res.data.stats[5].base_stat,
            };
          };

          const getText: any = async (num: number) => {
            const response = await axios.get(res.data.species.url);
            const textRgx = /[가-하]+/gm;
            const textList = response.data.flavor_text_entries.filter(
              (v: any, i: number) => textRgx.test(v.flavor_text),
            );
            return textList[num].flavor_text;
          };

          pokemonsConfig.name = await getKrName();
          pokemonsConfig.firstText = await getText(0);
          pokemonsConfig.secondText = await getText(1);
          pokemonsConfig.id = res.data.id;
          pokemonsConfig.types = res.data.types;
          pokemonsConfig.src = res.data.sprites.front_default;
          getStats();

          return pokemonsConfig;
        });

        pokes.push(res);
        setFirstGenerationAllPokemons([...pokes]);
      });
    });
  }, []);

  console.log(
    JSON.stringify(
      firstGenerationAllPokemons.sort((a: any, b: any) => a.id - b.id),
    ),
  );

  return <div className="App" />;
};

export default A;
