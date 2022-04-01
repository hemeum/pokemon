import { useState, useEffect } from 'react';
import axios from 'axios';

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
        let pokemonsConfig: any = {
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

          const getKrName: any = async () => {
            const response = await axios.get(res.data.species.url);
            let name = response.data.names[2].name;
            return name;
          };

          const typesKorea = async () => {
            const typesUrl = res.data.types.map((v: any) => v.type.url);

            // const types = typesUrl.map(async (url: string) => {
            //   const res = await axios.get(url);
            //   return res.data;
            // });

            // console.log(types);

            const test = await Promise.all(
              typesUrl.map((url: string) => {
                return axios.get(url).then((v) => v.data.names[1].name);
              }),
            ).then((v) => {
              return v;
            });

            return test;
          };

          pokemonsConfig.name = await getKrName();
          pokemonsConfig.firstText = await getText(0);
          pokemonsConfig.secondText = await getText(1);
          pokemonsConfig.id = res.data.id;
          pokemonsConfig.types = await typesKorea();
          pokemonsConfig.src = res.data.sprites.front_default;
          getStats();

          return pokemonsConfig;
        });

        pokes.push(res);
        setFirstGenerationAllPokemons([...pokes]);
      });
    });
  }, []);

  // console.log(firstGenerationAllPokemons);

  // console.log(
  //   JSON.stringify(
  //     firstGenerationAllPokemons.sort((a: any, b: any) => a.id - b.id),
  //   ),
  // );

  return <div className="App" />;
};

export default A;
