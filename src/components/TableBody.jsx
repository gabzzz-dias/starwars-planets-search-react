import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TableBody() {
  const { data, filters } = useContext(PlanetsContext);

  return (
    <tbody>
      {
        data
          .filter((planets) => (planets.name.toLowerCase()
            .includes(filters.filterByName.name)))
          .map((p, index) => (
            <tr key={ index }>
              {Object.values(p)
                .map((pn) => (
                // eslint-disable-next-line react/jsx-key
                  <td>{ pn }</td>
                ))}
            </tr>
          ))
      }
    </tbody>
  );
}

// Agradecimentos especiais à Mariana Mohr, que me ajudou a fazer o map desse requisito que eu fiquei travado por muuito tempo. Valeuuuu Mari!

export default TableBody;
