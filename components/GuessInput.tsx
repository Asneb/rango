import foods from '@data/foods';
import GuessResponse from '@data/types/GuessResponse';
import GuessResult from '@data/types/GuessResult';
import axios from 'axios';
import { useMemo, FC, useState } from 'react';

const GuessInput: FC = () => {
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [win, setWin] = useState(false);
  const suggestions = useMemo(() => {
    if (!selectedFood) return [];

    return foods
      .filter((food) => food.name.includes(selectedFood))
      .sort(
        (a, b) => a.name.indexOf(selectedFood) - b.name.indexOf(selectedFood)
      );
  }, [selectedFood]);

  const guessFood = async (guess: string) => {
    const { data: res } = await axios.post<GuessResponse>('/api/guess', {
      guess,
    });

    if (!res.success) return;

    const guessResult = res.data;
    setGuesses((prev) => [...prev, guessResult]);
    setSelectedFood('');

    if (guessResult.result === 'jackpot') {
      setWin(true);
    }
  };

  return (
    <>
      <p>Tentativas: {guesses.length}</p>
      <ul>
        {suggestions
          .slice()
          .reverse()
          .map((sug) => (
            <li key={sug.name}>
              <button onClick={() => guessFood(sug.name)}>
                {sug.name.slice(0, sug.name.indexOf(selectedFood))}
                <strong>
                  {sug.name.slice(
                    sug.name.indexOf(selectedFood),
                    sug.name.indexOf(selectedFood) + selectedFood.length
                  )}
                </strong>
                {sug.name.slice(
                  sug.name.indexOf(selectedFood) + selectedFood.length
                )}
              </button>
            </li>
          ))}
      </ul>
      <input
        placeholder='Insira uma comida'
        onChange={(e) => setSelectedFood(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && guessFood(suggestions[0].name)}
        value={selectedFood}
        disabled={win}
      />
      {win && <p>Você venceu! 🎉</p>}
      <ul>
        {guesses
          .slice()
          .reverse()
          .map((guess) => (
            <li key={guess.guess}>
              {guess.guess}:
              <ul>
                {guess.ingredients.map((ing) => (
                  <li key={ing.name}>
                    {ing.correct ? '✔️' : '❌'} {ing.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};

export default GuessInput;
